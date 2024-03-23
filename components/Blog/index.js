import Image from "next/image";
import React from "react";

export default function Blog() {
  const data = [
    {
      id: 1,
      image: "/blog.png",
      category: "PROMO",
      title: " Sepatu Kotor? Untung Udah Ada Mino Clean dari Mino Store",
      created_at: "30 NOV 2020",
      created_by: "OLEH ADMIN",
      comment: "3",
      content:
        " Laiknya diri sendiri, sepatu juga butuh dirawat. Setidaknya setiap sebulan sekali, sepatu perlu dibersih- kan. Namun pembersihan tergantung jenis bahan se...",
    },
    {
      id: 2,
      image: "/blog_2.png",
      category: "PROMO",
      title: " Mino Shoe Store Siap Semarakkan Harbolnas 11.11!",
      created_at: "30 NOV 2020",
      created_by: "OLEH ADMIN",
      comment: "3",
      content:
        "Akan ada banyak sekali promo dari diskon ongkir, potongan harga, hingga cashback sehingga kamu bisa mendapat barang yang kamu suka.",
    },
    {
      id: 3,
      image: "/blog_3.png",
      category: "PROMO",
      title: " Sepatu Kotor? Untung Udah Ada Mino Clean dari Mino Store",
      created_at: "30 NOV 2020",
      created_by: "OLEH ADMIN",
      comment: "3",
      content:
        " Laiknya diri sendiri, sepatu juga butuh dirawat. Setidaknya setiap sebulan sekali, sepatu perlu dibersih- kan. Namun pembersihan tergantung jenis bahan se...",
    },
  ];
  return (
    <div className="relative flex justify-center   mt-10">
      <div className="relative grid grid-cols-12  w-[1180px]  gap-6 px-8 xl:px-0  ">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative col-span-12 xl:col-span-4  flex flex-col  h-[437px]"
          >
            <div className=" h-[200px] flex justify-center">
              <Image
                src={`${item.image}`}
                alt="blog"
                width={375}
                height={200}
              />
            </div>
            <div className=" relative h-[222px] ">
              <p className="font-bold text-[14px] leading-[17.07px] text-primer mt-2">
                {item.category}
              </p>
              <p className="font-bold text-[18px] leading-[21.94px] text-primer mt-2">
                {item.title}
              </p>
              <div className="flex items-center mt-2">
                <p className="font-normal text-[12px] leading-[16.34px]">
                  {item.created_at}
                </p>
                <div className="mx-2 w-1 h-1 rounded-full bg-red-500"></div>
                <p className="font-normal text-[12px] leading-[16.34px]">
                  {item.created_by}
                </p>
                <div className="mx-2 w-1 h-1 rounded-full bg-red-500"></div>
                <p className="font-normal text-[12px] leading-[16.34px]">
                  {item.comment} KOMENTAR
                </p>
              </div>

              <p className="font-normal text-[14px] leading-[22px] text-tersierAksen mt-2">
                {item.content}
              </p>
              <button className="  absolute bottom-0 bg-primer text-white rounded-full w-[218px] h-[29px]">
                BACA SELENGKAPNYA
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
