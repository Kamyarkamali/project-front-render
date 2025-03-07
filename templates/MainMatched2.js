"use client";
import MainMatchedsContemts from "./MainMatchedsContemts";

function MainMatched2({ newsData }) {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex justify-end w-full mx-auto">
        <div className="h-fit">
          <MainMatchedsContemts newsData={newsData} />
        </div>
      </div>
    </div>
  );
}

export default MainMatched2;
