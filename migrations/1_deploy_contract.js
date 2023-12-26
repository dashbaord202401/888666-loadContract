const DataCellarRegistry = artifacts.require("DataCellarRegistry");

module.exports = async function (deployer, network, accounts) {
  try {
    // Deploy the DataCellarRegistry contract
    await deployer.deploy(DataCellarRegistry, accounts[0]); // Passa l'indirizzo del proprietario

    // Get the deployed instance
    const dataCellarRegistryInstance = await DataCellarRegistry.deployed();

    console.log("DataCellarRegistry contract deployed at:", dataCellarRegistryInstance.address);
  } catch (error) {
    console.error("Error deploying the contract:", error);
  }
};
