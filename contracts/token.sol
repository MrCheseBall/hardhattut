// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.5.0 <0.9.0;
contract Token {
    string public name="Tardhat Token";
    string public symbol="hht";
    uint public tokenSupply=10000;
    address public owner;

    mapping (address => uint) balances;
    constructor() {
        balances[msg.sender]=tokenSupply;
        owner=msg.sender;
    }
    function transfer(address to,uint amount) external {
        require(balances[msg.sender]>=amount,"not enough tokens");
        balances[msg.sender]-=amount;
        balances[to]+=amount;
    }
    function balanceOf(address account)external view returns(uint){
        return balances[account];
    }
}