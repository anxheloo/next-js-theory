"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = () => {
    router.push("/products");
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>Welcome to Next JS Course 2024</h1>
      <Link href="/products">Go to Product page</Link>
      <Link href="/products/1">Go to Product page 1 </Link>
      <Link href="/account">Go to Account page</Link>
      <Link href="/account/membership">Go to Membership page</Link>

      <button onClick={navigate} className=" text-left">
        Navigate using useRouter
      </button>
    </main>
  );
}
