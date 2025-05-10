import { SuiObjectResponse } from "@mysten/sui/client";
import { FC } from "react";

type SuiObjectProps = {
  objRes: SuiObjectResponse;
};

export const SuiObject: FC<SuiObjectProps> = ({ objRes }) => {
  const owner = objRes.data?.owner;
  const objType = objRes.data?.type;

  const isCoin = objType?.includes("0x2::coin::Coin");
  const balance = isCoin ? objRes.data?.content?.fields.balance : 0;

  return (
    <div
      key={objRes.data?.objectId}
      className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <p className="text-gray-700 dark:text-gray-300">
        <strong>ID:</strong> {objRes.data?.objectId}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Type:</strong> {objType}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Owner: </strong>{" "}
        {typeof owner === "object" && owner !== null && "AddressOwner" in owner
          ? owner.AddressOwner
          : "Unknown owner"}
      </p>
      {isCoin && (
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Balance:</strong> {balance}
        </p>
      )}
    </div>
  );
};
