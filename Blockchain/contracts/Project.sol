// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Projects {
    // Use Ownable
    address public owner; // Admin of all projects

    struct Project {
        uint256 projectID; // Unique identifier of project
        string name; // Name of project
        address projectOwner; // Owner of project
        uint256 targetBlock; // End of funding
        uint256 minTotalFunding; // Minimum total funding needed to start project
        uint256 maxTotalFunding; // Maximum total funding 
        uint256 totalFunded; // Total funding for this project
        ERC20 rewardToken; // Funders receive this token 
    }

    Project[] public projects;
    mapping(uint256 => Project) private projectByID;
    mapping(address => uint256) private projectOwners;
    mapping(address => mapping(uint256 => uint256)) private funders; // Person x funds projectID y, z amount

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyProjectOwner(uint256 _projectID) {
        require(msg.sender == projectByID[_projectID].projectOwner, "Not the project owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createProject(uint256 _projectID, string memory _name, uint256 _targetBlock, uint256 _minTotalFunding, uint256 _maxTotalFunding, address _rewardToken) external {
        // Initializes new project using function caller as owner and 0 funding
        projects.push(Project(_projectID, _name, msg.sender, _targetBlock, _minTotalFunding, _maxTotalFunding, 0, ERC20(_rewardToken)));
    }

    function fundProject(uint256 _projectID) public payable {
        Project storage project = projectByID[_projectID];
        require(msg.value < project.maxTotalFunding, "Amount exceeds maximum funding");
        project.totalFunded += msg.value;
        funders[msg.sender][_projectID] += msg.value;
        // Mint ERC20 in ratio and send to msg.sender
    }

    function updateFundingEnd(uint256 _projectID, uint256 _targetBlock) external onlyProjectOwner(_projectID) {
        require(_targetBlock > block.number, "Target block is in the past");
        Project storage project = projectByID[_projectID];
        project.targetBlock = _targetBlock;
    }

    function endFunding(uint256 _projectID) external onlyProjectOwner(_projectID) {
        require(projectByID[_projectID].targetBlock >= block.number, "Funding not ended yet");
        projectByID[_projectID].totalFunded = 0;
        // Send total funding amount to the project owner
    }

    function getFunderAmount(address funder, uint256 _projectID) external view onlyProjectOwner(_projectID) returns (uint256) {
        require(funders[funder][_projectID] > 0, "Funder not found");
        return funders[funder][_projectID];
    }

    function getOwnFundingAmount(uint256 _projectID) external view returns (uint256) {
        require(funders[msg.sender][_projectID] > 0, "No funds found");
        return funders[msg.sender][_projectID];
    }
}