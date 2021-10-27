import { ethers } from "hardhat";

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const mynft = await MyNFT.deploy();

  await mynft.deployed();

  console.log("MyNFT deployed to:", mynft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
