import Image from "next/image";
import React from "react";

function ContetntBlogs({ data }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <Image src={data.image} alt={data.title} width={900} height={900} />
      </div>

      <div>2</div>

      <div>3</div>
    </div>
  );
}

export default ContetntBlogs;
