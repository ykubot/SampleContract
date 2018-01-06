const SampleContract = artifacts.require("SampleContract");

module.exports = (deployer) => {
  // deployment steps
  deployer.deploy(SampleContract);
};
