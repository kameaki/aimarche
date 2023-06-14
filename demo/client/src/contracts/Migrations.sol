pragma solidity ^0.6;

contract Migrations {
    address public owner;
    // uintは符号なし
    uint public last_completed_migration;

    // msg.senderがownerの時に関数を実行させる
    modifier restricted() {
        if (msg.sender == owner) _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(last_completed_migration);
    }
}
