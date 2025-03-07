"use client";
import { matched } from "@/data/localData";
import HeaderMatch from "@/module/HeaderMatch";
import MainMatched2 from "@/templates/MainMatched2";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { match } = useParams();

  const newsData = matched[match - 1];

  // if (!selectedMatch) {
  //   return <div className="text-center mt-10">🔍 موردی پیدا نشد!</div>;
  // }
  return (
    <div>
      <HeaderMatch />
      <div className="flex justify-center">
        <MainMatched2 newsData={newsData} />
      </div>
    </div>
  );
}

export default page;
