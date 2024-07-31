"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Cart = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log("this is  pathname: ", pathname);
  console.log("this is  searchParams: ", searchParams.get("q"));

  return <div>This is cart component</div>;
};

export default Cart;
