export const TESTNET_PACKAGE_ID =
  "0x9f6f429eb67baf3375fec2d7707804a630e601e13bead98d551f20f3025d7062";
export const DEVNET_PACKAGE_ID = "0x123";
export const MAINNET_PACKAGE_ID = "0x234";

export const TESTNET_ADMIN_CAP =
  "0x5f42c9965e0915f4704ca9e83728b5eb8f030677fb12f49623cf45f2c2c24078";
export const DEVNET_ADMIN_CAP = "0x123";
export const MAINNET_ADMIN_CAP = "0x234";

export const TESTNET_DASHBOARD_ID =
  "0xa174854a29101042c1ae1b16f92f7e6fbb50011ca35bac3519e69c0085a4f05e";
export const DEVNET_DASHBOARD_ID = "0x123";
export const MAINNET_DASHBOARD_ID = "0x234";

/*
sui client call \
  --package 0x078c6870104e651c27714bb2a3bab3a2508e2bb455f9bda4e000984c698e7bb3 \
  --module dashboard \
  --function create_proposal \
  --args "Presidential Proposal" "Who should be President?" "1749068449"

sui client ptb \
  --move-call 0x078c6870104e651c27714bb2a3bab3a2508e2bb455f9bda4e000984c698e7bb3::dashboard::create_proposal \
  '"Senatorial Proposal"' '"Who should be a Senator?"' 1749068449

sui client ptb \
  --move-call 0x078c6870104e651c27714bb2a3bab3a2508e2bb455f9bda4e000984c698e7bb3::dashboard::create_proposal \
  '"Governorial Proposal"' '"Who should be a Governer?"' 1749068449 \
  --move-call 0x078c6870104e651c27714bb2a3bab3a2508e2bb455f9bda4e000984c698e7bb3::dashboard::create_proposal \
  '"Ministerial Proposal"' '"Who should be a Minister?"' 1749068449 \
  --move-call 0x078c6870104e651c27714bb2a3bab3a2508e2bb455f9bda4e000984c698e7bb3::dashboard::create_proposal \
  '"Kingship Proposal"' '"Who should be a King?"' 1749068449

sui client ptb \
  --move-call 0x9f6f429eb67baf3375fec2d7707804a630e601e13bead98d551f20f3025d7062::proposal::create \
  @0x5f42c9965e0915f4704ca9e83728b5eb8f030677fb12f49623cf45f2c2c24078 \
  '"Senatorial Proposal 1"' '"Who should be a Benue Governor?"' 1813364938 \
  --assign proposal_id \
  --move-call 0x9f6f429eb67baf3375fec2d7707804a630e601e13bead98d551f20f3025d7062::dashboard::register_proposal \
  @0xa174854a29101042c1ae1b16f92f7e6fbb50011ca35bac3519e69c0085a4f05e \
  @0x5f42c9965e0915f4704ca9e83728b5eb8f030677fb12f49623cf45f2c2c24078 proposal_id \
  --move-call 0x9f6f429eb67baf3375fec2d7707804a630e601e13bead98d551f20f3025d7062::proposal::create \
  @0x5f42c9965e0915f4704ca9e83728b5eb8f030677fb12f49623cf45f2c2c24078 \
  '"Senatorial Proposal 2"' '"Who should be a Benue Local Government Chairman?"' 1813364938 \
  --assign proposal_id \
  --move-call 0x9f6f429eb67baf3375fec2d7707804a630e601e13bead98d551f20f3025d7062::dashboard::register_proposal \
  @0xa174854a29101042c1ae1b16f92f7e6fbb50011ca35bac3519e69c0085a4f05e \
  @0x5f42c9965e0915f4704ca9e83728b5eb8f030677fb12f49623cf45f2c2c24078 proposal_id 


*/
