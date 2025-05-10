import { SuiObjectResponse } from "@mysten/sui/client";
import { FC } from "react";

type SuiObjectProps = {
  objRes: SuiObjectResponse;
};

export const SuiObject: FC<SuiObjectProps> = ({ objRes }) => {
  const owner = objRes.data?.owner;

  return (
    <div
      key={objRes.data?.objectId}
      className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <p className="text-gray-700 dark:text-gray-300">
        <strong>ID:</strong> {objRes.data?.objectId}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Type:</strong> {objRes.data?.type}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Owner: </strong>{" "}
        {typeof owner === "object" && owner !== null && "AddressOwner" in owner
          ? owner.AddressOwner
          : "Unknown owner"}
      </p>
    </div>
  );
};
