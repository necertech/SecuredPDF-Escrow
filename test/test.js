var json = artifacts.require("Escrow");
const abi = json['abi'];
const bytecode = json['bytecode'];

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  Escrowreg = await new web3.eth.Contract(abi)
      .deploy(accounts[0],accounts[1])
    .send({ from: accounts[0], gas: '4000000' });
})
contract('Escrow', ([]) => {

//   Test for deploy of contract

  it('deploys a contract', async () => {
    const addressOfsc = await Escrowreg.options.address;
    assert.ok(addressOfsc, 'Test Failed!!!!');
  })

    
    
  //Test for New pdf Registration

  it('pdf detail added', async () => {
    admin = accounts[1];
    try {
      await Escrowreg.methods.createPdf(1,"Gorilla",1,"oxoo").send({ from: admin, gas: 4000000 });

      Registraction_details2 = await Escrowreg.methods.getDoc(1).call({ from: admin });

      assert.equal(Registraction_details2[0], 1, "test failed!!!!");
      assert.equal(Registraction_details2[1], "Gorilla", "test failed!!!!");
      assert.equal(Registraction_details2[2], 1, "test failed!!!!");
     


    } catch (err) {
      assert(err);
      console.log(err);
    }
  })

  it('Confirmpayment', async () => {
    seller = accounts[1];
    try {
    
        await Escrowreg.methods.confirmPayment().send({ from:  accounts[1], gas: 4000000 });
        await Escrowreg.methods.confirmDelivery().send({ from:  accounts[1], gas: 4000000 });
    

    } catch (err) {
      assert(err);
      console.log(err);
    }
  })

  // return

  it('return payment', async () => {
    admin = accounts[1];
    try {
      await Escrowreg.methods.ReturnPayment().send({ from: admin, gas: 4000000 });



      
    } catch (err) {
      assert(err);
      console.log(err);
    }
  })

})
