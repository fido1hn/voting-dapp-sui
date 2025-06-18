export const TESTNET_PACKAGE_ID =
  "0xfb4d1b9c4b3487b84fdff137a752fff5dd1eb492b353789ce4205b2bd989165f";
export const DEVNET_PACKAGE_ID =
  "0xfb4d1b9c4b3487b84fdff137a752fff5dd1eb492b353789ce4205b2bd989165f";
export const MAINNET_PACKAGE_ID =
  "0xfb4d1b9c4b3487b84fdff137a752fff5dd1eb492b353789ce4205b2bd989165f";

export const TESTNET_ADMIN_CAP =
  "0xe5a5d33f53fd12d0b40aeed5f1ae3115436cbab461c0dd4f925c88e219617fa3";
export const DEVNET_ADMIN_CAP =
  "0xe5a5d33f53fd12d0b40aeed5f1ae3115436cbab461c0dd4f925c88e219617fa3";
export const MAINNET_ADMIN_CAP =
  "0xe5a5d33f53fd12d0b40aeed5f1ae3115436cbab461c0dd4f925c88e219617fa3";

export const TESTNET_DASHBOARD_ID =
  "0xff1cb49fe98e2c7976f3afb804cc263338cded00887742ab44b6c18ef9a0e7e0";
export const DEVNET_DASHBOARD_ID =
  "0xff1cb49fe98e2c7976f3afb804cc263338cded00887742ab44b6c18ef9a0e7e0";
export const MAINNET_DASHBOARD_ID =
  "0xff1cb49fe98e2c7976f3afb804cc263338cded00887742ab44b6c18ef9a0e7e0";

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
*/
