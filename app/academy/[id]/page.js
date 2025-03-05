"use client";
import Academydaynamic from "@/pages/Academydaynamic";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const params = useParams();
  const [id, setId] = useState(null);
  console.log(params);

  useEffect(() => {
    if (params?.id) {
      setId(params.id);
    }
  }, [params]);

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Academydaynamic />
    </div>
  );
}

export default page;
