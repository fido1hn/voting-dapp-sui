export const TESTNET_PACKAGE_ID =
  "0x078c6870104e651c27714bb2a3bab3a2508e2bb455f9bda4e000984c698e7bb3";

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
