"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/matched") {
      router.push("/matched/1");
    }
  }, [pathname, router]);

  return <div></div>;
}

export default Page;
