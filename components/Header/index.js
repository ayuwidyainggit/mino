import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { GiBundleGrenade } from "react-icons/gi";
import { FaBloggerB } from "react-icons/fa";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { GiHerbsBundle } from "react-icons/gi";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  return (
    <div className="fixed top-0 z-50 bg-primer w-[100%] px-[20px] sm:px-[70px] md:px-[133px] pb-2 ">
      <div className=" h-[86px]   grid grid-cols-12 ">
        <div className="relative    col-span-2 flex items-center ">
          <IoSearch
            style={{ width: "22.73px", height: "22.74px", color: "#3FC1C9" }}
          />
        </div>
        <div className="relative   col-span-8 flex items-center  justify-center">
          <p className="font-sans font-bold text-[#ffffff] text-[52px] leading-[63.39px] tracking-[-0.4px]">
            mino.
          </p>
        </div>
        <div className="relative   col-span-2 flex  items-center  justify-end   ">
          <div className="w-[64px]  flex justify-center">
            <MdShoppingCart
              style={{ width: "26.68px", height: "26.67px", color: "#3FC1C9" }}
            />
          </div>
          <div className="w-[64px]  flex justify-center ml-2">
            <IoPersonCircle
              style={{ width: "26.67px", height: "26.67px", color: "#3FC1C9" }}
            />
          </div>
        </div>
      </div>
      <div className=" hidden md:flex justify-center h-[40px] w-[100%] px-0 md:px-[20px] sm:px-[70px] md:px-[133px]   ">
        <div className="w-[100%] md:w-[755px]  grid grid-cols-12  justify-center ">
          <div className="col-span-2  flex items-center  justify-center cursor-pointer">
            <p className="font-bold text-white text-[14px] leading-[17.07px]">
              BERANDA
            </p>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("belanja")}
            onMouseLeave={handleMouseLeave}
            className=" col-span-2  flex items-center justify-around   cursor-pointer "
          >
            <div className=" w-[69px] h-[17px]">
              <p className="font-bold text-white text-[14px] leading-[17.07px] ">
                BELANJA
              </p>
            </div>
            <div className="w-[24px] h-[24px] ">
              <MdKeyboardArrowDown
                style={{
                  width: "22.73px",
                  height: "22.74px",
                  color: "#3FC1C9",
                  borderRadius: "9999px",
                }}
              />
            </div>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("bundle1")}
            onMouseLeave={handleMouseLeave}
            className="col-span-2  flex items-center justify-around   cursor-pointer"
          >
            <div className=" w-[74px] h-[17px]">
              <p className="font-bold text-white text-[14px] leading-[17.07px] ">
                BUNDEL 1
              </p>
            </div>
            <div className="w-[24px] h-[24px] ">
              <MdKeyboardArrowDown
                style={{
                  width: "22.73px",
                  height: "22.74px",
                  color: "#3FC1C9",
                  borderRadius: "9999px",
                }}
              />
            </div>
          </div>

          <div className="col-span-2  flex items-center justify-around   cursor-pointer">
            <div
              className=" w-[77px] h-[17px]"
              onMouseEnter={() => handleMouseEnter("bundle2")}
            >
              <p className="font-bold text-white text-[14px] leading-[17.07px] ">
                BUNDEL 2
              </p>
            </div>
            <div className="w-[24px] h-[24px] ">
              <MdKeyboardArrowDown
                style={{
                  width: "22.73px",
                  height: "22.74px",
                  color: "#3FC1C9",
                  borderRadius: "9999px",
                }}
              />
            </div>
          </div>

          <div className="col-span-2  flex items-center justify-around   cursor-pointer">
            <div className=" w-[58px] h-[17px]">
              <p className="font-bold text-white text-[14px] leading-[17.07px] ">
                PROMO
              </p>
            </div>
          </div>

          <div className=" col-span-2  flex items-center justify-around cursor-pointer ">
            <div className=" w-[42px] h-[17px]">
              <p className="font-bold text-white text-[14px] leading-[17.07px] ">
                BLOG
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:hidden relative flex bg-tersierLatar rounded-md items-start px-3 py-2  gap-10 overflow-x-auto">
        <div class="flex flex-col items-center w-[100px] ">
          <GiShoppingBag class="w-10 h-10" />
          <p class="font-thin text-xs text-center">Belanja</p>
        </div>
        <div class="flex flex-col items-center w-[100px]">
          <GiBundleGrenade class="w-10 h-10" />
          <p class="font-thin text-xs text-center ">Bundle 1</p>
        </div>
        <div class="flex flex-col items-center w-[100px]">
          <GiHerbsBundle class="w-10 h-10" />
          <p class="font-thin text-xs text-center">Bundle 2</p>
        </div>
        <div class="flex flex-col items-center w-[100px]">
          <TbShoppingBagDiscount class="w-10 h-10" />
          <p class="font-thin text-xs text-center">Promo</p>
        </div>
        <div class="flex flex-col items-center w-[100px]">
          <FaBloggerB class="w-10 h-10" />
          <p class="font-thin text-xs text-center">Blog</p>
        </div>
      </div>

      {/* belanja */}
      <div
        className={` z-50 absolute left-0 px-[133px] w-[100%] h-[459px] bg-white ${
          activeMenu === "belanja" ? "" : "hidden"
        }`}
      >
        <div className="relative top-[20px] w-[89px] h-[22px] ">
          <p className="font-bold text-[18px] leading-[21.94px] text-primer ">
            BELANJA
          </p>
        </div>
        <div className="relative   top-[40px] border-b-[0.3px] border-primer w-[1100px]"></div>
        <div className=" relative flex justify-between   relative flex   top-[65px] w-[1100px]">
          <div className=" flex flex-col justify-between    relative w-[300px] h-[332px]  ">
            <div className="flex justify-between group  ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Semua Merek
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                X-Voyager
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Balancia
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Cadilac
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Playoon
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Machia
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Everest
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Marathon
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-between    relative w-[300px] h-[332px]  ">
            <div className="flex justify-between group  ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Semua Merek
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                X-Voyager
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Balancia
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Cadilac
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Playoon
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Machia
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Everest
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Marathon
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-between  border border-[0.3px]-tersierText  relative w-[300px] h-[332px]  "></div>
        </div>
      </div>
      {/* end belanja */}

      {/* bundle 1  */}
      <div
        className={`  z-50 absolute  left-0  w-[100%] h-[459px] bg-white ${
          activeMenu === "bundle1" ? "" : "hidden"
        }`}
      >
        <div className="relative left-[133px] top-[20px] w-[89px] h-[22px] ">
          <p className="font-bold text-[18px] leading-[21.94px] text-primer ">
            BUNDLE 1
          </p>
        </div>
        <div className="relative  left-[133px] top-[40px] border-b-[0.3px] border-primer w-[1100px]"></div>
        <div className=" relative flex justify-between left-[133px]   relative flex   top-[65px] w-[1100px]">
          <div className=" flex flex-col justify-between    relative w-[300px] h-[332px]  ">
            <div className="flex justify-between group  ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Semua Merek
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                X-Voyager
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Balancia
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Cadilac
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Playoon
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Machia
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Everest
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Marathon
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-between    relative w-[300px] h-[332px]  ">
            <div className="flex justify-between group  ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Semua Merek
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                X-Voyager
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Balancia
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Cadilac
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Playoon
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Machia
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Everest
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>

            <div className="flex justify-between group ">
              <p className="font-normal leading-[24px] text-[16px] text-primer group-hover:font-bold">
                Marathon
              </p>
              <div className=" hidden group-hover:block">
                <MdKeyboardArrowRight
                  style={{ width: "24px", height: "24px", color: "#3FC1C9" }}
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-between  border border-[0.3px]-tersierText  relative w-[300px] h-[332px]  "></div>
        </div>
      </div>
      {/* end bundle 1 */}
    </div>
  );
}
