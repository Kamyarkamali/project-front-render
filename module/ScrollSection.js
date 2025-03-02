import React from "react";

function ScrollSection() {
  return (
    <>
      <div className="flex pt-9 pb-9 gap-10 sm:gap-[5rem] md:gap-[10rem] lg:gap-[14rem] overflow-x-auto scroll-smooth snap-x">
        {[
          { title: "1. The Fundamentals", profit: "€191.50", color: "#0F514E" },
          {
            title: "2. Risk-Free & Multiples",
            profit: "€137.50",
            color: "#A8C8C6",
          },
          {
            title: "3. Price Boost & Money Back",
            profit: "€73.50",
            color: "#A8C8C6",
          },
          { title: "4. Casino Offers", profit: "€22.38", color: "#A8C8C6" },
          {
            title: "5. Profit Boosts & Bet Builders",
            profit: "€83.00",
            color: "#A8C8C6",
          },
          {
            title: "6. Final Welcome Offers",
            profit: "€191.50",
            color: "#A8C8C6",
          },
          { title: "7. Reload Offers", profit: "€191.50", color: "#A8C8C6" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 min-w-[250px] sm:min-w-[300px] lg:min-w-[400px] snap-start"
          >
            <p
              className="text-lg sm:text-xl font-bold text-center"
              style={{ color: item.color }}
            >
              {item.title}
            </p>
            <span className="text-[13px]" style={{ color: item.color }}>
              Approx {item.profit} profit
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 border-b-[0.3px] border-[#C1C1C1] pb-6 text-[#0F514E] text-sm sm:text-base">
        <p>
          <span className="font-bold">1</span> new strategy
        </p>
        <p>
          <span className="font-bold">9</span> offers
        </p>
        <p>
          approx. <span className="font-bold">£191.50</span> profit
        </p>
      </div>
    </>
  );
}

export default ScrollSection;
