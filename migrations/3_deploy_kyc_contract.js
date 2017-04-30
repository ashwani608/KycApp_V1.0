var KycCustomer = artifacts.require("./KycCustomer.sol");



module.exports = function(deployer) {
  deployer.deploy(KycCustomer);

};