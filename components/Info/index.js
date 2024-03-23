import Image from "next/image";
import React from "react";

export default function Info() {
  return (
    <div>
      <div className="relative my-8">
        <Image alt="info" width={1466} height={300} src={"/Info.png"} />
      </div>
    </div>
  );
}
