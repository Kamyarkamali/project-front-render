"use client";
import { matched } from "@/data/localData";
import HeaderMatch from "@/module/HeaderMatch";
import MainMatched from "@/templates/MainMatched";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { match } = useParams();

  const newsData = matched[match - 1];

  console.log(newsData);

  // if (!selectedMatch) {
  //   return <div className="text-center mt-10">🔍 موردی پیدا نشد!</div>;
  // }
  return (
    <div>
      <HeaderMatch />
      <div className="flex justify-center">
        <MainMatched />
      </div>
    </div>
  );
}

export default page;
