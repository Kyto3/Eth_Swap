const Token = artifacts.require('Token') 
const EthSwap = artifacts.require('EthSwap') 

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n){
  return web3.utils.toWei(n, 'ether')
}

 contract('EthSwap' , ([deployer, investor]) => {
 	let token, ethSwap

 	before(async() =>{
 		token = await Token.new()
 		ethSwap = await EthSwap.new(token.address)
 		// Transfer all tokens to EthSwap (1 million) 
   		await token.transfer(ethSwap.address, tokens('1000000'))
 })

describe('Token deployment', async () => {
		it('contract has a name', async () => {
			let token = await Token.new()
			const name  = await token.name()
			assert.equal(name, 'Renn Token')
			})
})


describe('EthSwap deployment', async () => {
		it('contract has a name', async () => {
			let ethSwap = await EthSwap.new()
			const name  = await ethSwap.name()
			assert.equal(name, 'EthSwap Ethereum Exchange')
		})

		it('contract has tokens', async() => {
			let balance = await token.balanceOf(ethSwap.address)
			assert.equal(balance.toString(), tokens('1000000'))
		})
	})

describe('buyTokens()', async () => {
	it('Allows user to instantly purchase tokens from ethSwap for a fixed price', async () => {
		await ethSwap.buyTokens({ from: investor, value: web3.utils.toWei('1', 'ether') })
	})

})




 })
