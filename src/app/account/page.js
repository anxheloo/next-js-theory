import { redirect } from "next/navigation";
import React from "react";

const Account = () => {
  // assume profile info is null
  const userProfileInfo = null;

  if (userProfileInfo === null) redirect("/profile");

  return <div>This is Account page</div>;
};

export default Account;
