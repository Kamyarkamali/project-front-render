"use client";
import { steps } from "@/data/localData";
import ShareBtn from "@/module/ShareBtn";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

function Academydaynamic() {
  const params = useParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    if (params?.id) {
      setId(params.id);
    }
  }, [params]);

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="fixed top-[4rem] left-0 w-[100px] h-screen bg-gray-100 p-4">
        Socials
      </div>

      <div className="w-full flex flex-col max-w-[800px] px-8 mt-[4rem]">
        <div className="h-[1500px]"></div>
      </div>

      <div className="fixed top-[4rem] right-0 w-[200px] h-screen  p-4">
        <ShareBtn />
      </div>
    </div>
  );
}

export default Academydaynamic;
