"use client"; 

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router

type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong.</h1>
      <button onClick={() => reset()}>Try again</button>
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  );
}