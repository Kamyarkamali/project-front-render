import React from "react";

function ShowTitle({ filter }) {
  return (
    <div>
      {filter.map((item) => (
        <ul className="flex flex-col gap-4 text-sm">
          <li>{item.titlescroll1}</li>
          <li>{item.titlescroll2}</li>
          <li>{item.titlescroll3}</li>
          <li>{item.titlescroll4}</li>
          <li>{item.titlescroll4}</li>
        </ul>
      ))}
    </div>
  );
}

export default ShowTitle;
