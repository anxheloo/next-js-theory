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
    </main>
  );
}
