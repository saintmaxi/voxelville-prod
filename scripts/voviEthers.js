// a saintmaxi joint
/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const voxelVilleAddress = "0xAbaC63BbED54ef75a3653EFdA2967EaE2A370c2e";
// const voxelVilleAbi = () => {
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"AddToAllowList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"BaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"batchCount","type":"uint256"}],"name":"BatchCount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"batchSize","type":"uint256"}],"name":"BatchSize","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"mintable","type":"bool"}],"name":"Mintable","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"preSaleMintable","type":"bool"}],"name":"PreSaleMintable","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"RemoveFromAllowList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"remaining","type":"uint256"}],"name":"TotalSupplyRemaining","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_MINT_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_MINT_PER_TX_PRESALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"preSaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSaleMintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeAddressFromAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"setAddressesToAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_URI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_batchCount","type":"uint256"}],"name":"setBatchCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_batchSize","type":"uint256"}],"name":"setBatchSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_mintable","type":"bool"}],"name":"setMintable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_preSaleMintable","type":"bool"}],"name":"setPreSaleMintable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const voxelVilleAvatarsAddress = "0x7e3d57Daa6152023E52E5E418e4BD9EE2D51F4ec";
// const voxelVilleAvatarsAbi = () => { 
//     return `[{"inputs":[{"internalType":"address","name":"_adminSignerAddress","type":"address"},{"internalType":"address","name":"_voxelVilleContractAddress","type":"address"},{"internalType":"address","name":"_retiredContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"BaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum VoxelVilleAvatars.SalePhase","name":"salePhase","type":"uint8"}],"name":"CurrentPhase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"TotalSupplyRemaining","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoxelVilleAvatars.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint8","name":"allocated","type":"uint8"},{"internalType":"uint8","name":"count","type":"uint8"}],"name":"airdropMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"airdroppedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentPhase","outputs":[{"internalType":"enum VoxelVilleAvatars.SalePhase","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoxelVilleAvatars.Coupon","name":"coupon","type":"tuple"},{"internalType":"enum VoxelVilleAvatars.CouponType","name":"couponType","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numberMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_URI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum VoxelVilleAvatars.SalePhase","name":"salePhase","type":"uint8"}],"name":"setSalePhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"transferLegacyNFTs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const voviAddress = "0xE4Cacb665B31F3d328c3ABA9A14552416540A572";
// const voviAbi = () => {
//     return `[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"_voxelVilleContract","type":"address"},{"internalType":"address","name":"_voxelVilleAvatarsContract","type":"address"},{"internalType":"address","name":"_voviWalletsContract","type":"address"},{"internalType":"address","name":"_adminSigner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"lastTxDate","type":"uint256"},{"internalType":"uint256","name":"listed","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint256","name":"avatar","type":"uint256"},{"internalType":"uint256","name":"avatarTxDate","type":"uint256"},{"internalType":"uint256","name":"listedAvatar","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"avatarCoupon","type":"tuple"}],"indexed":false,"internalType":"struct VoviToken.StakeRequest[]","name":"requests","type":"tuple[]"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"lastTxDate","type":"uint256"},{"internalType":"uint256","name":"listed","type":"uint256"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"}],"internalType":"struct VoviToken.Reward","name":"multReward","type":"tuple"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint256","name":"avatarTxDate","type":"uint256"},{"internalType":"uint256","name":"listedAvatar","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"avatarCoupon","type":"tuple"}],"indexed":false,"internalType":"struct VoviToken.ClaimRequest[]","name":"requests","type":"tuple[]"},{"indexed":false,"internalType":"uint256[]","name":"avatars","type":"uint256[]"}],"name":"Unstaked","type":"event"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"},{"internalType":"uint256","name":"baseReward","type":"uint256"}],"name":"addStakingRange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"}],"internalType":"struct VoviToken.Reward","name":"reward","type":"tuple"}],"name":"calculateStakingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"lastTxDate","type":"uint256"},{"internalType":"uint256","name":"listed","type":"uint256"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"}],"internalType":"struct VoviToken.Reward","name":"multReward","type":"tuple"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint256","name":"avatarTxDate","type":"uint256"},{"internalType":"uint256","name":"listedAvatar","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"avatarCoupon","type":"tuple"}],"internalType":"struct VoviToken.ClaimRequest[]","name":"requests","type":"tuple[]"}],"name":"claimStakingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalizeRewardsEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBaseReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getStakedAvatarFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastClaimedBlockForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"baseReward","type":"uint256"}],"name":"modifyBaseReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsEnd","type":"uint256"}],"name":"setEndingBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"lastTxDate","type":"uint256"},{"internalType":"uint256","name":"listed","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint256","name":"avatar","type":"uint256"},{"internalType":"uint256","name":"avatarTxDate","type":"uint256"},{"internalType":"uint256","name":"listedAvatar","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"avatarCoupon","type":"tuple"}],"internalType":"struct VoviToken.StakeRequest[]","name":"requests","type":"tuple[]"}],"name":"stakePlots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"}],"name":"stakedPlotsOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"},{"internalType":"uint256","name":"avatar","type":"uint256"}],"name":"unstakeAvatar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"lastTxDate","type":"uint256"},{"internalType":"uint256","name":"listed","type":"uint256"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"}],"internalType":"struct VoviToken.Reward","name":"multReward","type":"tuple"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint256","name":"avatarTxDate","type":"uint256"},{"internalType":"uint256","name":"listedAvatar","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoviToken.Coupon","name":"avatarCoupon","type":"tuple"}],"internalType":"struct VoviToken.ClaimRequest[]","name":"requests","type":"tuple[]"}],"name":"unstakePlots","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// }

// const etherscanBase = `https://etherscan.io/tx/`;
// const openseaAPIBase = "https://api.opensea.io/api/v1/assets";
// const voviAPIBase = "https://vv-coupons-front-api-uqnd7.ondigitalocean.app";
// const correctChain = 1;
// const voxelVilleImageURI = "https://ipfs.io/ipfs/QmexjQs2VCMxyNSNNxdeRwgBzu8UiA6pox1yW55hfCxAML/";
// const voxelVilleAvatarsImageURI = "https://ipfs.io/ipfs/QmewrTBK83aM7Exm3TPZegRYsJJHDyLJcKfXj8xKQT3txB/";
// const voviImgURL = "images/coin.png";
// const REQUEST_SLEEP = 1000;
// const collectorsOnly = true;

/*********************************************************************************/
/********************************DEV CONFIG********************************/
/*********************************************************************************/

const voxelVilleAddress = "0xB32990483d47E034D6c311F422Afd3EEcc0b5fc6";
const voxelVilleAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"AddToAllowList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"BaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"batchCount","type":"uint256"}],"name":"BatchCount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"batchSize","type":"uint256"}],"name":"BatchSize","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"mintable","type":"bool"}],"name":"Mintable","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"preSaleMintable","type":"bool"}],"name":"PreSaleMintable","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"RemoveFromAllowList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"remaining","type":"uint256"}],"name":"TotalSupplyRemaining","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_MINT_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_MINT_PER_TX_PRESALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"preSaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSaleMintable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeAddressFromAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"setAddressesToAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_URI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_batchCount","type":"uint256"}],"name":"setBatchCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_batchSize","type":"uint256"}],"name":"setBatchSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_mintable","type":"bool"}],"name":"setMintable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_preSaleMintable","type":"bool"}],"name":"setPreSaleMintable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const voxelVilleAvatarsAddress = "0x72296a88095c979091cf01260125F7A00aE311E4";
const voxelVilleAvatarsAbi = () => {
    return `[{"inputs":[{"internalType":"address","name":"_adminSignerAddress","type":"address"},{"internalType":"address","name":"_voxelVilleContractAddress","type":"address"},{"internalType":"address","name":"_retiredContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"BaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum VoxelVilleAvatars.SalePhase","name":"salePhase","type":"uint8"}],"name":"CurrentPhase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"TotalSupplyRemaining","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoxelVilleAvatars.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint8","name":"allocated","type":"uint8"},{"internalType":"uint8","name":"count","type":"uint8"}],"name":"airdropMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"airdroppedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentPhase","outputs":[{"internalType":"enum VoxelVilleAvatars.SalePhase","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct VoxelVilleAvatars.Coupon","name":"coupon","type":"tuple"},{"internalType":"enum VoxelVilleAvatars.CouponType","name":"couponType","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numberMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_URI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum VoxelVilleAvatars.SalePhase","name":"salePhase","type":"uint8"}],"name":"setSalePhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"transferLegacyNFTs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const voviAddress = "0x0C13D67798Cd0234265a7d1BF33b1528c35C4e10";
const voviAbi = () => {
    return `[{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"enum IDiamondCut.FacetCutAction","name":"action","type":"uint8"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"indexed":false,"internalType":"struct IDiamondCut.FacetCut[]","name":"_diamondCut","type":"tuple[]"},{"indexed":false,"internalType":"address","name":"_init","type":"address"},{"indexed":false,"internalType":"bytes","name":"_calldata","type":"bytes"}],"name":"DiamondCut","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"enum IDiamondCut.FacetCutAction","name":"action","type":"uint8"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"internalType":"struct IDiamondCut.FacetCut[]","name":"_diamondCut","type":"tuple[]"},{"internalType":"address","name":"_init","type":"address"},{"internalType":"bytes","name":"_calldata","type":"bytes"}],"name":"diamondCut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_functionSelector","type":"bytes4"}],"name":"facetAddress","outputs":[{"internalType":"address","name":"facetAddress_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"facetAddresses","outputs":[{"internalType":"address[]","name":"facetAddresses_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_facet","type":"address"}],"name":"facetFunctionSelectors","outputs":[{"internalType":"bytes4[]","name":"facetFunctionSelectors_","type":"bytes4[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"facets","outputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"internalType":"struct IDiamondLoupe.Facet[]","name":"facets_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"owner_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_of","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"decreaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"increaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getStakedAvatarFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"lastTxDate","type":"uint256"},{"internalType":"uint256","name":"listed","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint256","name":"avatar","type":"uint256"},{"internalType":"uint256","name":"avatarTxDate","type":"uint256"},{"internalType":"uint256","name":"listedAvatar","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"avatarCoupon","type":"tuple"}],"internalType":"struct LibVoviStorage.StakeRequest[]","name":"requests","type":"tuple[]"}],"name":"stakePlots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"}],"name":"stakedPlotsOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"},{"internalType":"uint256","name":"avatar","type":"uint256"}],"name":"unstakeAvatar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"coupon","type":"tuple"}],"internalType":"struct LibVoviStorage.Reward","name":"reward","type":"tuple"}],"name":"calculateStakingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"lastTxDate","type":"uint256"},{"internalType":"uint256","name":"listed","type":"uint256"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"coupon","type":"tuple"}],"internalType":"struct LibVoviStorage.Reward","name":"multReward","type":"tuple"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint256","name":"avatarTxDate","type":"uint256"},{"internalType":"uint256","name":"listedAvatar","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"avatarCoupon","type":"tuple"}],"internalType":"struct LibVoviStorage.ClaimRequest[]","name":"requests","type":"tuple[]"}],"name":"claimStakingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voxelVilleContract","type":"address"},{"internalType":"address","name":"_voxelVilleAvatarsContract","type":"address"},{"internalType":"address","name":"_voviWalletsContract","type":"address"},{"internalType":"address","name":"_adminSigner","type":"address"}],"name":"initialise","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"signer","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct IVoviWallets.Link[]","name":"links","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"lastTxDate","type":"uint256"},{"internalType":"uint256","name":"listed","type":"uint256"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"coupon","type":"tuple"}],"internalType":"struct LibVoviStorage.Reward","name":"multReward","type":"tuple"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"coupon","type":"tuple"},{"internalType":"uint256","name":"avatarTxDate","type":"uint256"},{"internalType":"uint256","name":"listedAvatar","type":"uint256"},{"components":[{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"}],"internalType":"struct LibVoviStorage.Coupon","name":"avatarCoupon","type":"tuple"}],"internalType":"struct LibVoviStorage.ClaimRequest[]","name":"requests","type":"tuple[]"}],"name":"unstakePlots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"},{"internalType":"uint256","name":"baseReward","type":"uint256"}],"name":"addStakingRange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalizeRewardsEnd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBaseReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"baseReward","type":"uint256"}],"name":"modifyBaseReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"isPaused","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsEnd","type":"uint256"}],"name":"setEndingBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
}

const etherscanBase = `https://goerli.etherscan.io/tx/`;
const openseaAPIBase = `https://testnets-api.opensea.io/api/v1/assets`;
const voviAPIBase = "https://vv-coupons-front-api-uqnd7.ondigitalocean.app";
const correctChain = 5;
const voxelVilleImageURI = "https://ipfs.io/ipfs/QmXvvnzWa24KGajmCiF3HCYaDTHCnJ1dbGBAc6PGRgCvcX/";
const voxelVilleAvatarsImageURI = "https://ipfs.io/ipfs/QmewrTBK83aM7Exm3TPZegRYsJJHDyLJcKfXj8xKQT3txB/";
const voviImgURL = "images/coin.png";
const REQUEST_SLEEP = 1000;
const collectorsOnly = false;

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to stake!');
    $("#available-assets-images").empty();
    $("#available-assets-images").append("<br><h3>No tokens available...</h3>");
}

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();
const voxelVille = new ethers.Contract(voxelVilleAddress, voxelVilleAbi(), signer);
const voxelVilleAvatars = new ethers.Contract(voxelVilleAvatarsAddress, voxelVilleAvatarsAbi(), signer);
const vovi = new ethers.Contract(voviAddress, voviAbi(), signer);

const connect = async () => {
    await provider.send("eth_requestAccounts", []);
};

const getAddress = async () => {
    return await signer.getAddress();
};

const formatEther = (balance_) => {
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_) => {
    return ethers.utils.parseEther(eth_)
};

const getChainId = async () => {
    return await signer.getChainId()
};

const importVoviToWallet = async () => {
    ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: {
                address: voviAddress,
                symbol: 'VOVI',
                decimals: 18,
                image: "https://github.com/saintmaxi/voxelville-market-dev/blob/main/images/coin.png?raw=true",
            },
        },
    });
}

// VOVI Functions

const getVoxelVilleEnum = async () => {
    let userAddress = await getAddress();
    let totalVoxelVille = await voxelVille.balanceOf(userAddress);
    return totalVoxelVille;
};

const getVoxelVilleAvatarsEnum = async () => {
    let userAddress = await getAddress();
    let totalVoxelVilleAvatars = await voxelVilleAvatars.balanceOf(userAddress);
    return totalVoxelVilleAvatars;
};

let plotIDtoURL = new Map();
let avatarIDtoURL = new Map([[0, "../images/hidden.png"]]);
let unstakedPlots = [];
let stakedPlots = [];
let unstakedAvatars = [];
let stakedAvatars = [];
let stakedPlotsToAvatars = new Map();
let proposedStakedPlotsToAvatars = new Map();

const getWalletLinks = async () => {
    let userAddress = await getAddress();
    let response = await fetch(`${voviAPIBase}/wallets?walletAddress=${userAddress}`).then(res => res.json());
    let links = [];
    if (response["wallets"]) {
        for (entry of response["wallets"]) {
            links.push([entry["walletAddress"], entry["signedMessage"]]);
        }
    }

    return links;
}

const getAllPlotsOwned = async () => {
    let links = await getWalletLinks();
    let userAddress = await getAddress();
    let wallets = links.map(link => link[0]);
    if (!wallets.includes(userAddress)) {
        wallets.push(userAddress);
    }
    let chainID = await getChainId();
    let ownedPlotIDs = [];

    const options = {
        method: 'GET',
        headers: { Accept: 'application/json', 'X-API-KEY': (chainID == 5) ? "" : '04f8b0cf85de4a949c5d5ac8135aa9a0' }
    };

    let collectionsOwned = new Set();

    for (wallet of wallets) {
        // let wallet = link[0];
        let response = await fetch(`${openseaAPIBase}?owner=${wallet}&order_direction=desc&asset_contract_addresses=${voxelVilleAddress}&limit=50&include_orders=false`, options).then(res => res.json());
        while (response["assets"] == undefined) {
            await sleep(REQUEST_SLEEP)
            response = await fetch(`${openseaAPIBase}?owner=${wallet}&order_direction=desc&asset_contract_addresses=${voxelVilleAddress}&limit=50&include_orders=false`, options).then(res => res.json());
        }
        for (let asset of response["assets"]) {
            let id = Number(asset["token_id"])
            ownedPlotIDs.push(id);
            plotIDtoURL.set(id, asset["image_url"]);
            collectionsOwned.add(asset["traits"][0]["value"])
        }
    }

    if (collectorsOnly) {
        if (collectionsOwned.size === 9) {
            await displayStatusMessage("Welcome, verified collector! As thanks for holding all 9 Voxel Ville collections, please enjoy early access to our staking platform.")
        }
        else {
            await displayStatusMessage("Welcome, cherished holder! Staking is currently limited to those that hold all 9 Voxel Ville collections. Access for all holders will open soon!")
            $(".stake-action-button").addClass("disabled");
            $(".stake-action-button").attr("onclick", "");
        
        }
    }

    stakedPlots = (await vovi.stakedPlotsOf(links))
    stakedPlots = [...stakedPlots].sort((a, b) => a - b).map(Number);
    unstakedPlots = (ownedPlotIDs.filter(item => !stakedPlots.includes(item))).sort((a, b) => a - b);

    for (plot of stakedPlots) {
        let stakedAvatarID = await vovi.getStakedAvatarFor(plot);
        if (stakedAvatarID != 0) {
            stakedPlotsToAvatars.set(plot, stakedAvatarID);
            stakedAvatars.push(stakedAvatarID)
        }
    }

    if (stakedAvatars.length > 0) {
        stakedAvatars.sort((a, b) => a - b);
    }

    return [...ownedPlotIDs].sort((a, b) => a - b);
}

const getAllAvatarsOwned = async () => {
    let links = await getWalletLinks();
    let userAddress = await getAddress();
    let wallets = links.map(link => link[0]);
    if (!wallets.includes(userAddress)) {
        wallets.push(userAddress);
    }
    let chainID = await getChainId();
    let ownedAvatarIDs = [];

    const options = {
        method: 'GET',
        headers: { Accept: 'application/json', 'X-API-KEY': (chainID == 5) ? "" : '04f8b0cf85de4a949c5d5ac8135aa9a0' }
    };

    for (wallet of wallets) {
        let response = await fetch(`${openseaAPIBase}?owner=${wallet}&order_direction=desc&asset_contract_addresses=${voxelVilleAvatarsAddress}&limit=50&include_orders=false`, options).then(res => res.json());
        while (response["assets"] == undefined) {
            await sleep(REQUEST_SLEEP);
            response = await fetch(`${openseaAPIBase}?owner=${wallet}&order_direction=desc&asset_contract_addresses=${voxelVilleAvatarsAddress}&limit=50&include_orders=false`, options).then(res => res.json());
        }
        for (let asset of response["assets"]) {
            let id = Number(asset["token_id"])
            ownedAvatarIDs.push(id);
            avatarIDtoURL.set(id, asset["image_url"])
        }
    }

    unstakedAvatars = (ownedAvatarIDs.filter(item => !stakedAvatars.includes(item))).sort((a, b) => a - b);
    unstakedAvatars.map(av => proposedStakedPlotsToAvatars.set(av, 0));

    return [...ownedAvatarIDs].sort((a, b) => a - b);
}

const getVoviBalance = async () => {
    let userAddress = await getAddress();
    let voviBalance = await vovi.balanceOf(userAddress);
    $("#your-vovi").html(`${(Number(formatEther(voviBalance))).toFixed(2)}`);
};

const getRewardsForId = async (project, id, staked) => {
    let response = await fetch(`${voviAPIBase}/nfts/${project}/${id}`).then(res => res.json());
    if (!staked) {
        let tokens = Number(Number(formatEther(response["tokens"])).toFixed(2));
        return tokens;
    }
    else {
        let tokenID = response["tokenId"];
        let tokens = response["tokens"];
        let coupon = response["coupon"];
        let rewards = await vovi.calculateStakingRewards(id, [tokenID, tokens, [coupon["r"], coupon["s"], coupon["v"]]]);
        return Number(Number(formatEther(rewards)).toFixed(2));
    }
}

const getPendingVoviBalance = async () => {
    let pendingVovi = 0;
    for (plotID of stakedPlots) {
        let tokensEarned = await getRewardsForId("voxelVille", plotID, true);
        pendingVovi += tokensEarned;
    }
    $("#claimable-vovi").html(`${pendingVovi.toFixed(2)}`);
};

const getClaimRequests = async (plotIDs) => {
    let chainID = await getChainId();

    const options = {
        method: 'GET',
        headers: { Accept: 'application/json', 'X-API-KEY': (chainID == 4) ? "" : '04f8b0cf85de4a949c5d5ac8135aa9a0' }
    };

    try {
        await displayStatusMessage(`Generating request<span class="one">.</span><span class="two">.</span><span class="three">.</span></span>`);
        let userAddress = await getAddress();
        let claimRequests = [];
        for (plotID of plotIDs) {
            let rewardResponse = await fetch(`${voviAPIBase}/nfts/voxelVille/${plotID}`).then(res => res.json());
            let tokenID = rewardResponse["tokenId"];
            let tokens = rewardResponse["tokens"];
            let coupon = rewardResponse["coupon"];
            let reward = [tokenID, tokens, coupon];

            let plotResponse = await fetch(`${voviAPIBase}/transactions/voxelVille?walletAddress=${userAddress}&tokenId=${plotID}`, options).then(res => res.json());
            while (jQuery.isEmptyObject(plotResponse)) {
                // console.log("retrying Plot API fetch");
                plotResponse = await fetch(`${voviAPIBase}/transactions/voxelVille?walletAddress=${userAddress}&tokenId=${plotID}`, options).then(res => res.json());
            }

            let stakedAvatarID = await vovi.getStakedAvatarFor(plotID);
            let avatarTxDate = 0;
            let listedAvatar = 0;
            let avatarCoupon = [ethers.utils.formatBytes32String(""), ethers.utils.formatBytes32String(""), 0];
            let avatarResponse = await fetch(`${voviAPIBase}/transactions/voxelVilleAvatars?walletAddress=${userAddress}&tokenId=${stakedAvatarID}`, options).then(res => res.json());
            if (stakedAvatarID) {
                while (jQuery.isEmptyObject(avatarResponse)) {
                    // console.log("retrying avatar API fetch");
                    avatarResponse = await fetch(`${voviAPIBase}/transactions/voxelVilleAvatars?walletAddress=${userAddress}&tokenId=${stakedAvatarID}`, options).then(res => res.json());
                }
                avatarID = avatarResponse["tokenId"];
                avatarTxDate = avatarResponse["lastTx"];
                listedAvatar = avatarResponse["listed"];
                avatarCoupon = avatarResponse["coupon"];
            }

            claimRequests.push([plotResponse["tokenId"], plotResponse["lastTx"], plotResponse["listed"], reward, plotResponse["coupon"],
                avatarTxDate, listedAvatar, avatarCoupon]);
        }

        $("#status-popup").remove();
        $("#block-screen-status").remove();

        return claimRequests;
    }
    catch (error) {
        $("#status-popup").remove();
        $("#block-screen-status").remove();
        await displayErrorMessage("An error occurred. See console and window alert for details...")
        window.alert(error);
        console.log(error);
    }
}

const claimByIds = async () => {
    if (selectedForUnstaking.size == 0) {
        displayErrorMessage("Select at least 1 plot to claim!")
    }
    else {
        let links = await getWalletLinks();
        const plotArray = Array.from(selectedForUnstaking);
        let claimRequests = await getClaimRequests(plotArray);
        await vovi.claimStakingRewards(links, claimRequests).then(async (tx_) => {
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        });
    }
};

const claimAll = async () => {
    if (stakedPlots.length == 0) {
        displayErrorMessage("There are no staked plots for you to claim!")
    }
    else {
        let links = await getWalletLinks();
        let claimRequests = await getClaimRequests(stakedPlots);
        await vovi.claimStakingRewards(links, claimRequests).then(async (tx_) => {
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        });
    }
};

// Staking functions


const getStakeRequests = async (plotIDs) => {

    let chainID = await getChainId();

    const options = {
        method: 'GET',
        headers: { Accept: 'application/json', 'X-API-KEY': (chainID == 4) ? "" : '04f8b0cf85de4a949c5d5ac8135aa9a0' }
    };

    try {
        await displayStatusMessage(`Generating request<span class="one">.</span><span class="two">.</span><span class="three">.</span></span>`);
        let userAddress = await getAddress();
        let stakeRequests = [];
        for (plotID of plotIDs) {
            let plotResponse = await fetch(`${voviAPIBase}/transactions/voxelVille?walletAddress=${userAddress}&tokenId=${plotID}`, options).then(res => res.json());
            while (jQuery.isEmptyObject(plotResponse)) {
                // console.log("retrying Plot API fetch");
                plotResponse = await fetch(`${voviAPIBase}/transactions/voxelVille?walletAddress=${userAddress}&tokenId=${plotID}`, options).then(res => res.json());
            }
            let avatarResponse = null;
            let avatarID = 0;
            let avatarTxDate = 0;
            let listedAvatar = 0;
            let avatarCoupon = [ethers.utils.formatBytes32String(""), ethers.utils.formatBytes32String(""), 0];
            let proposedAvatarToStake = proposedStakedPlotsToAvatars.get(plotID);
            if (proposedAvatarToStake) {
                while (jQuery.isEmptyObject(avatarResponse)) {
                    // console.log("retrying avatar API fetch");
                    avatarResponse = await fetch(`${voviAPIBase}/transactions/voxelVilleAvatars?walletAddress=${userAddress}&tokenId=${proposedAvatarToStake}`, options).then(res => res.json());
                }
                avatarID = avatarResponse["tokenId"];
                avatarTxDate = avatarResponse["lastTx"];
                listedAvatar = avatarResponse["listed"];
                avatarCoupon = avatarResponse["coupon"];
            }
            stakeRequests.push([plotResponse["tokenId"], plotResponse["lastTx"], plotResponse["listed"], plotResponse["coupon"],
                avatarID, avatarTxDate, listedAvatar, avatarCoupon]);
        }

        $("#status-popup").remove();
        $("#block-screen-status").remove();

        return stakeRequests;
    }
    catch (error) {
        $("#status-popup").remove();
        $("#block-screen-status").remove();
        await displayErrorMessage("An error occurred. See console and window alert for details...")
        window.alert(error);
        console.log(error);
    }
}

const setProposedStakedAvatar = async (plot, avatar) => {
    if (avatar > 0) {
        if (!(Array.from(proposedStakedPlotsToAvatars.values())).includes(avatar)) {
            proposedStakedPlotsToAvatars.set(plot, avatar);
            $(`#avatar-plot-${plot}`).attr("src", avatarIDtoURL.get(avatar));
        }
        else {
            $(`#staking-avatar-${plot} .staking-avatar-selection`).val(0);
            await displayErrorMessage(`Error: Avatar #${avatar} already selected for staking!`);
        }
    }
}

const openStakingPrompt = async () => {
    if (!($("#stake-popup").length)) {
        if (selectedForStaking.size == 0) {
            displayErrorMessage("Select at least 1 plot to stake!")
        }
        else {
            let darkMode = checkDarkModeOn() ? "dark" : "";
            let selectionJSX = "";
            let avatarOptsJSX = "";
            for (avatar of unstakedAvatars) {
                avatarOptsJSX += `<option value="${avatar}">
                                        #${avatar}
                                    </option>`;
            }
            const plotArray = Array.from(selectedForStaking).sort((a, b) => a - b);
            for (plot of plotArray) {
                let rowJSX = `<div class="staking-row">
                                <div class="staking-plot">
                                    <img class="staking-plot-img" src="${plotIDtoURL.get(plot)}">
                                    <p>Plot #${plot}</p>
                                </div>
                                <img class="arrow" src="./images/double-arrow-${darkMode ? "white" : "black"}.png">
                                <div class="staking-avatar" id="staking-avatar-${plot}">
                                    <img class="staking-avatar-img" id="avatar-plot-${plot}" src="./images/hidden.png">
                                    <select class="staking-avatar-selection" onchange="setProposedStakedAvatar(${plot}, this.value)">
                                        <option value="0">
                                            None
                                        </option>
                                        ${avatarOptsJSX}
                                    </select>
                                </div>
                            </div>`;
                selectionJSX += rowJSX;
            }
            let fakeJSX = `<div id="stake-popup" class="${darkMode}">
                            <div id="inner-wrapper">
                                <svg id="close" onclick="$('#block-screen-stake').remove();$('#stake-popup').remove();proposedStakedPlotsToAvatars = new Map()" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                    <path fill="${darkMode ? "white" : "black"}"
                                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
                                </svg>
                                <h1>Select avatars to stake with plots.</h1>
                                <div id="staking-row-wrapper">
                                    ${selectionJSX}
                                </div>
                                <div id="button-wrapper">
                                    <button class="button" onclick="stakeByIds()">STAKE</button>
                                </div>
                            </div>
                    </div>`;
            $("body").append(fakeJSX);
            let height = $(document).height();
            $("body").append(`<div id='block-screen-stake' style="height:${height}px" onclick="$('#stake-popup').remove();$('#block-screen-stake').remove();proposedStakedPlotsToAvatars = new Map()"></div>`);
        }
    }

}

const stakeByIds = async () => {
    try {
        if (selectedForStaking.size == 0) {
            displayErrorMessage("Select at least 1 plot to stake!")
        }
        else {
            let links = await getWalletLinks();
            const plotArray = Array.from(selectedForStaking);
            let stakeRequests = await getStakeRequests(plotArray);
            // console.log(links)
            // console.log(stakeRequests)
            await vovi.stakePlots(links, stakeRequests).then(async (tx_) => {
                selectedForStaking = new Set();
                $("#selected-for-staking").text("None");
                $(".active").removeClass("active");
                $('#stake-popup').remove();
                $('#block-screen-stake').remove();
                proposedStakedPlotsToAvatars = new Map()
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("This property cannot be staked yet")) {
            await displayErrorMessage(`Error: This property cannot be staked yet!`)
        }
        else if ((error.message).includes("sender not owner")) {
            await displayErrorMessage(`Error: You do not own this plot!`)
        }
        else if ((error.message).includes("Cannot stake listed property")) {
            await displayErrorMessage(`Error: Cannot stake listed property!`)
        }
        else if ((error.message).includes("Last TX date for token could not be confirmed")) {
            await displayErrorMessage(`Error: Could not determine last transaction date for plot!`)
        }
        else if ((error.message).includes("sender doesn't own avatar")) {
            await displayErrorMessage(`Error: You do not own this avatar!`)
        }
        else if ((error.message).includes("Cannot stake listed avatar")) {
            await displayErrorMessage(`Error: Cannot stake listed avatar!`)
        }
        else if ((error.message).includes("Avatar is already staked")) {
            await displayErrorMessage(`Error: Avatar is already staked!`)
        }
        else if ((error.message).includes("Property already has an avatar staked")) {
            await displayErrorMessage(`Error: Property already has staked avatar!`)
        }
        else if ((error.message).includes("Cannot verify last Avatar TX date")) {
            await displayErrorMessage(`Error: Could not determine last transaction date for avatar!`)
        }
        else if ((error.message).includes("Wallet links do not include sender")) {
            await displayErrorMessage(`Error: Wallet links do not include sender!`)
        }
        else if ((error.message).includes("Cannot confirm wallet linking")) {
            await displayErrorMessage(`Error: Cannot confirm wallet linking!`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else if ((error.message).includes("User rejected the transaction")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...");
            window.alert(error);
            console.log(error);
        }
    }
};

const stakeAll = async () => {
    try {
        if (unstakedPlots.length == 0) {
            displayErrorMessage("No plots to stake!")
        }
        else {
            let links = await getWalletLinks();
            let stakeRequests = await getStakeRequests(unstakedPlots);
            await vovi.stakePlots(links, stakeRequests).then(async (tx_) => {
                selectedForStaking = new Set();
                $("#selected-for-staking").text("None");
                $(".active").removeClass("active");
                $('#stake-popup').remove();
                $('#block-screen-stake').remove();
                proposedStakedPlotsToAvatars = new Map()
                await waitForTransaction(tx_);
            });
        }
    }
    catch (error) {
        if ((error.message).includes("amount prohibited")) {
            await displayErrorMessage(`Error: Amount prohibited!`)
        }
        else if ((error.message).includes("Invalid reward coupon received")) {
            await displayErrorMessage(`Error: Invalid reward coupon!`)
        }
        else if ((error.message).includes("Rewards not in correct order")) {
            await displayErrorMessage(`Error: Rewards not in correct order!`)
        }
        else if ((error.message).includes("sender not owner")) {
            await displayErrorMessage(`Error: You do not own this plot!`)
        }
        else if ((error.message).includes("token not staked")) {
            await displayErrorMessage(`Error: Token not staked!`)
        }
        else if ((error.message).includes("Last TX date for token could not be confirmed")) {
            await displayErrorMessage(`Error: Could not determine last transaction date for plot!`)
        }
        else if ((error.message).includes("Could not verify avatar TX Dates")) {
            await displayErrorMessage(`Error: Could not determine last transaction date for avatar!`)
        }
        else if ((error.message).includes("Cannot confirm wallet linking")) {
            await displayErrorMessage(`Error: Cannot confirm wallet linking!`)
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else if ((error.message).includes("User rejected the transaction")) {
            console.log("Transaction rejected.");
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...");
            window.alert(error);
            console.log(error);
        }
    }
};

const unstakeByIds = async () => {
    if (selectedForUnstaking.size == 0) {
        displayErrorMessage("Select at least 1 plot to unstake!")
    }
    else {
        let links = await getWalletLinks();
        const plotArray = Array.from(selectedForUnstaking);
        let unstakeRequests = await getClaimRequests(plotArray);
        await vovi.unstakePlots(links, unstakeRequests).then(async (tx_) => {
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        });
    }
};

const unstakeAll = async () => {
    if (stakedPlots.length == 0) {
        displayErrorMessage("No plots to unstake!")
    }
    else {
        let links = await getWalletLinks();
        let unstakeRequests = await getClaimRequests(stakedPlots);
        await vovi.unstakePlots(links, unstakeRequests).then(async (tx_) => {
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("None");
            $(".active").removeClass("active");
            await waitForTransaction(tx_);
        });
    }
};

const getAssetImages = async () => {
    $("#available-assets-images").empty();
    $("#available-assets-images").append(`<br><h3>Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></h3>`);
    $("#staked-assets-images").empty();
    $("#staked-assets-images").append(`<br><h3>Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></h3>`);


    // unstaked plots
    if (unstakedPlots.length == 0) {
        $("#available-assets-images").empty();
        $("#available-assets-images").append("<br><h3>No plots available...</h3>");
    }
    else {
        let batchFakeJSX = "";
        for (let i = 0; i < unstakedPlots.length; i++) {
            let plotID = Number(unstakedPlots[i]);
            let active = "";
            if (selectedForStaking.has(plotID)) {
                active = "active";
            }

            // ~7200 blocks per day * per block rewards rate
            let earnRate = 7200 * (await getRewardsForId("voxelVille", plotID, false));

            batchFakeJSX += `<div id="asset-${plotID}" class="your-asset ${active}"><img src="${plotIDtoURL.get(plotID)}" onclick="selectForStaking(${plotID})"><p class="asset-id">Plot #${plotID}</p><p class="vovi-earned"><span id="vovi-earned-${plotID}">~ ${earnRate}</span><img src="${voviImgURL}" class="vovi-icon">/day</p></div>`

        };
        $("#available-assets-images").empty();
        $("#available-assets-images").append(batchFakeJSX);
    }

    // staked plots
    if (stakedPlots.length == 0) {
        $("#staked-assets-images").empty();
        $("#staked-assets-images").append("<br><h3>No plots available...</h3>");
    }
    else {
        let batchFakeJSX = "";
        let stakedAvatarID;
        for (let i = 0; i < stakedPlots.length; i++) {
            let plotID = stakedPlots[i];
            let active = "";
            if (selectedForUnstaking.has(Number(plotID))) {
                active = "active";
            }
            let voviEarned = await getRewardsForId("voxelVille", plotID, true);
            stakedAvatarID = await vovi.getStakedAvatarFor(plotID);
            batchFakeJSX += `<div id="asset-${plotID}" class="your-asset ${active}"><img src="${plotIDtoURL.get(plotID)}" onclick="selectForUnstaking(${plotID})"><p class="asset-id">Plot #${plotID}</p><p class="vovi-earned">Avatar: ${stakedAvatarID != 0 ? "#" + stakedAvatarID : "None"}</p><p class="vovi-earned"><span id="vovi-earned-${plotID}">${voviEarned}</span><img src="${voviImgURL}" class="vovi-icon"></p></div>`

        };
        $("#staked-assets-images").empty();
        $("#staked-assets-images").append(batchFakeJSX);
    }
}

const updateVoviEarned = async () => {
    for (let i = 0; i < stakedPlots.length; i++) {
        let plotID = Number(stakedPlots[i]);
        let voviEarnedByID = await getRewardsForId("voxelVille", plotID, true);
        $(`#vovi-earned-${plotID}`).html(`${voviEarnedByID}`);
    };
};

const updateClaimingInfo = async () => {
    if ((await getChainId()) === correctChain) {
        await getVoviBalance();
        await getAllAvatarsOwned();
        await getAllPlotsOwned();
        const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING <br>CLAIMING INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);
        if (stakedPlots.length == 0) {
            $("#claimable-vovi").text("0.0");
        }
        else {
            await getPendingVoviBalance();
        }
        $("#your-assets-num").html(unstakedPlots.length);
        $("#your-staked-assets-num").html(stakedPlots.length);
        await getAssetImages();
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    }
    else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-assets-images").empty();
        $("#available-assets-images").text("Error: Wrong Network");
        $("#your-vovi").html(`0.0`);
        $("#claimable-vovi").html(`0.0`);
        displayErrorMessage("Error: Wrong Network", false);
    }
};

//selection helpers

var selectedForStaking = new Set();
var selectedForUnstaking = new Set();

async function selectForStaking(id) {
    if (!selectedForStaking.has(id)) {
        selectedForStaking.add(id);
        $(`#asset-${id}`).addClass("active");
    }
    else {
        selectedForStaking.delete(id);
        $(`#asset-${id}`).removeClass("active");
    }
    if (selectedForStaking.size == 0) {
        $("#selected-for-staking").text("None");
    }
    else {
        let selectedForStakingArray = Array.from(selectedForStaking).sort((a, b) => a - b);
        let selectedString = `${selectedForStakingArray.join(' ')}`;
        $("#selected-for-staking").text(selectedString);
    }
}

async function selectForUnstaking(id) {
    if (!selectedForUnstaking.has(id)) {
        selectedForUnstaking.add(id);
        $(`#asset-${id}`).addClass("active");
    }
    else {
        selectedForUnstaking.delete(id);
        $(`#asset-${id}`).removeClass("active");
    }
    if (selectedForUnstaking.size == 0) {
        $("#selected-for-unstaking").text("None");
    }
    else {
        let selectedForUnstakingArray = Array.from(selectedForUnstaking).sort((a, b) => a - b);
        let selectedString = `${selectedForUnstakingArray.join(' ')}`;
        $("#selected-for-unstaking").text(selectedString);
    }
}


// General functions

provider.on("network", async (newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});

// Processing tx returns
const waitForTransaction = async (tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("VoviPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i = 0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("VoviPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("VoviPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateClaimingInfo();
    }
}

setInterval(async () => {
    await updateInfo();
    await updateVoviEarned();
    await getPendingVoviBalance();
}, 5000)


const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account-text").html(`${userAddress.substr(0, 7)}..`);
    $("#account").addClass("connected");
    $("#mobile-account-text").html(`${userAddress.substr(0, 12)}..`);
};

ethereum.on("accountsChanged", async (accounts_) => {
    await addLinksOption();
    await updateInfo();
    await updateClaimingInfo();
});

window.onload = async () => {
    await updateInfo();
    if (!localStorage.getItem("hasVisited")) {
        await displayStatusMessage(`Welcome to the $VOVI staking platform! 
                                    Since this looks like your first visit, 
                                    we recommend visiting the 
                                    <a class="link" href="./faq.html">FAQ</a> page. 
                                    Please reach out in the  <a class="link" href="https://discord.gg/voxelville">Discord</a> as well for any assistance. Enjoy!`);
        localStorage.setItem("hasVisited", "true");
    }
    await addLinksOption();
    if (pendingTransactions.size < 1) {
        await updateClaimingInfo();
    }
};

window.onunload = async () => {
    cachePendingTransactions();
}