import Image from "next/image";
import React from "react";

export default function Bank() {
  return (
    <div>
      <div className=" flex justify-center mt-14 mb-10 px-8 lg:px-0">
        <Image alt="bank" src={"/bank.png"} width={465.23} height={70} />
      </div>
    </div>
  );
}
