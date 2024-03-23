import Image from "next/image";
import React, { useState } from "react";
import Rating from "../Rating";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function ProductWeek() {
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 4;

  const product = [
    {
      id: 1,
      image: "sepatu1.png",
      category: "SEPATU PRIA, OLAHRAGA",
      name: "Playoon - Kelimutu Run Model A",
      productRating: 4,
      price: "Rp. 387.000,-",
      disc: "Rp. 187.000,-",
    },
    {
      id: 2,
      image: "sepatu2.png",
      category: "SEPATU WANITA, OLAHRAGA",
      name: "Playoon - Kelimutu Run Model A",
      productRating: 5,
      price: "Rp. 387.000,-",
      disc: "Rp. 187.000,-",
    },
    {
      id: 3,
      image: "sepatu3.png",
      category: "SEPATU PRIA, OLAHRAGA",
      name: "Playoon - Kelimutu Run Model A",
      productRating: 2,
      price: "Rp. 387.000,-",
      disc: "Rp. 187.000,-",
    },
    {
      id: 4,
      image: "sepatu4.png",
      category: "SEPATU PRIA, OLAHRAGA",
      name: "Playoon - Kelimutu Run Model A",
      productRating: 3,
      price: "Rp. 387.000,-",
      disc: "Rp. 187.000,-",
    },
    {
      id: 5,
      image: "sepatu1.png",
      category: "SEPATU PRIA, OLAHRAGA",
      name: "Playoon - Kelimutu Run Model A",
      productRating: 3,
      price: "Rp. 387.000,-",
      disc: "Rp. 187.000,-",
    },
    {
      id: 6,
      image: "sepatu1.png",
      category: "SEPATU PRIA, OLAHRAGA",
      name: "Playoon - Kelimutu Run Model A",
      productRating: 3,
      price: "Rp. 387.000,-",
      disc: "Rp. 187.000,-",
    },
  ];

  const totalProducts = product.length;

  const handleClickNext = () => {
    const newIndex = startIndex + productsPerPage;
    if (newIndex < totalProducts) {
      setStartIndex(newIndex);
    }
  };

  const handleClickPrev = () => {
    const newIndex = startIndex - productsPerPage;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  const visibleProducts = product.slice(
    startIndex,
    startIndex + productsPerPage
  );
  return (
    <div className="  relative top-[99.96px] md:px-[133px] flex min-h-fit justify-center md:justify-between mb-28 ">
      <div className=" h-[506.5px]  flex flex-col justify-between w-[100%] ">
        <div className="h-[40px] flex md:flex-row flex-col justify-between items-center ">
          <div className="">
            <p className=" font-bold text-[28px] leading-[34.13px]">
              Pilihan Minggu Ini
            </p>
          </div>
          <div className="w-[201px] h-[40px] rounded-[50px] border border-primer hover:bg-primer cursor:pointer hover:text-white flex justify-center items-center">
            <p>Produk Lainnya</p>
          </div>
        </div>

        <div className="relative h-[436.5px] grid grid-cols-12   xl:gap-14   md:w-[1,100px] overflow-y-auto ">
          {visibleProducts.map((item) => (
            <div
              key={item.id}
              className=" col-span-12 sm:col-span-6    xl:col-span-3 relative  mb-2 h-[436.5px] flex flex-col items-center xl:items-start"
            >
              <div className="w-[252.5px] h-[252.5px] border-[0.3px] border-[#898989]">
                <Image
                  alt="produk"
                  src={`/${item.image}`}
                  width={400}
                  height={400}
                />
              </div>
              <div className="h-[125px]  relative top-[20px]">
                <div className="">
                  <p className=" font-bold text-[12px]  text-tersierText">
                    {item.category}
                  </p>
                </div>
                <div className="">
                  <p className="font-bold text-[16px] leading-[24px]">
                    {item.name}
                  </p>
                </div>
                <div className=" mt-1">
                  <Rating rating={item.productRating} />
                </div>
                <div className="flex mt-1">
                  <div className="">
                    <p className="font-nornal text-[14px] text-tersierText leading-[17.07px] line-through">
                      {item.price}
                    </p>
                  </div>
                  <div className=" ml-2">
                    <p className="font-bold text-[16px] leading-[19.5px] text-primer">
                      {item.disc}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute bottom-0">
                <button className="bg-primer text-white w-[149px] h-[29px] rounded-full flex justify-center items-center">
                  <p className="font-bold text-[14px] leading-[17.07px] ">
                    ADD TO CART
                  </p>
                </button>
              </div>
            </div>
          ))}

          <div className=" hidden xl:flex absolute shadow-sm hover:shadow-md top-[110px]  md:left-[-25px] bg-white h-[48px] w-[48px] flex justify-center items-center rounded-full ">
            <MdKeyboardArrowLeft
              onClick={handleClickPrev}
              style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
            />
          </div>
          <div className="hidden xl:flex absolute shadow-sm  hover:shadow-md top-[110px] md:right-[-25px] bg-white h-[48px] w-[48px] flex justify-center items-center rounded-full ">
            <MdKeyboardArrowRight
              onClick={handleClickNext}
              style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
