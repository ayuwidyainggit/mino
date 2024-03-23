import Image from "next/image";
import React from "react";

export default function Category() {
  return (
    <div className="relative flex justify-center ">
      <div className="relative grid grid-cols-12  w-[1180px]  gap-6">
        <div className="relative col-span-12 xl:col-span-6  flex justify-center  ">
          <Image
            alt="kategori"
            src={"/kategori.png"}
            width={580}
            height={200}
          />
          <div className="">
            <p className="absolute bottom-2 left-8 font-bold text-white text-[24px] leading-[28.2px]">
              Sepatu Anak
            </p>
          </div>
        </div>
        <div className="relative col-span-12 xl:col-span-6  flex justify-center  ">
          <Image
            alt="kategori"
            src={"/kategori.png"}
            width={580}
            height={200}
          />
          <div className="">
            <p className="absolute bottom-2 left-8 font-bold text-white text-[24px] leading-[28.2px]">
              Sepatu Anak
            </p>
          </div>
        </div>
        <div className="relative col-span-12 xl:col-span-6  flex justify-center  ">
          <Image
            alt="kategori"
            src={"/kategori.png"}
            width={580}
            height={200}
          />
          <div className="">
            <p className="absolute bottom-2 left-8 font-bold text-white text-[24px] leading-[28.2px]">
              Sepatu Anak
            </p>
          </div>
        </div>
        <div className="relative  col-span-12 xl:col-span-6  flex justify-center  ">
          <Image
            alt="kategori"
            src={"/kategori.png"}
            width={580}
            height={200}
          />
          <div className="">
            <p className="absolute bottom-2 left-8 font-bold text-white text-[24px] leading-[28.2px]">
              Sepatu Anak
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
