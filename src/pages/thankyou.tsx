import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function ThankyouPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="flex items-center justify-center pt-20 text-3xl font-semibold">
      Thank you for the support! Redirecting soon...
    </div>
  );
}
