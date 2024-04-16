const { expect } = require('chai');

import('chai').then(chai => {
    // Your code that uses chai
}).catch(error => {
    // Handle any errors that occur during the import
    console.error('Error importing chai:', error);
});



describe("token contract",function(){
    
    it("deployment should assign the total supply of tokens to the owner",async function(){
        const [owner] = await ethers.getSigners();
        console.log("signers object:",owner);
        const Token=await ethers.getContractFactory("Token");
    
        const hardhatToken = await Token.deploy();

        const ownerBalance= await hardhatToken.balanceOf(owner.address);
        console.log("Owner address",owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })
});
