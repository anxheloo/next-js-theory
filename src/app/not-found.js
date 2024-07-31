import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div>
      <h1>This page does not exist</h1>
      <Link href="/">Go back to home page</Link>
    </div>
  );
};

export default Notfound;
