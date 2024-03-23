import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className=" relative  md:px-[133px] flex justify-center md:justify-between ">
      <div className="relative top-[50px]  w-[100%] grid grid-cols-12  gap-0 md:gap-12 ">
        <div className="col-span-12 md:col-span-6 xl:col-span-3  flex justify-center">
          <div className="w-[250px] h-[277px] border-[0.3px] border-tersierText p-2">
            <div className="w-[100px] h-[100px] relative left-[75px] top-[30px] ">
              <Image
                alt="sepatu"
                width={300}
                height={300}
                src={"/Sepatu.png"}
              />
            </div>
            <div className="relative top-[60px] h-[24px]">
              <p className="text-center text-sekunderAksen font-bold text-[16px] leading-[24px]">
                Kualitas Terpercaya
              </p>
            </div>

            <div className="relative top-[59px]">
              <p className="text-center font-normal text-[12px] leading-[18px] text-tersierAksen">
                Produk kami di buat dari bahan berkualitas. Kami bekerjasama
                dengan mereka yang paling berpengalaman dalam industri.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12  md:col-span-6 xl:col-span-3  flex justify-center">
          <div className="w-[250px] h-[277px] border-[0.3px] border-tersierText p-2">
            <div className="w-[100px] h-[100px] relative left-[75px] top-[30px]">
              <Image
                alt="sepatu"
                width={300}
                height={300}
                src={"/Hadiah.png"}
              />
            </div>
            <div className="relative top-[60px] h-[24px]">
              <p className="text-center text-sekunderAksen font-bold text-[16px] leading-[24px]">
                Kirim sebagai Hadiah
              </p>
            </div>

            <div className="relative top-[59px]">
              <p className="text-center font-normal text-[12px] leading-[18px] text-tersierAksen">
                Ingin memberi bingkisan pada orang tersayang dengan kemasan
                serta pesan khusus? Sampaikan saja, kami yang siapkan.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12  md:col-span-6 xl:col-span-3  flex justify-center">
          <div className="w-[250px] h-[277px] border-[0.3px] border-tersierText p-2">
            <div className="w-[100px] h-[100px] relative left-[75px] top-[30px] ">
              <Image
                alt="sepatu"
                width={300}
                height={300}
                src={"/Vector.png"}
              />
            </div>
            <div className="relative top-[60px] h-[24px]">
              <p className="text-center text-sekunderAksen font-bold text-[16px] leading-[24px]">
                Pengembalian Mudah
              </p>
            </div>

            <div className="relative top-[59px]">
              <p className="text-center font-normal text-[12px] leading-[18px] text-tersierAksen">
                Tidak puas dengan pembelian Anda (kualitas buruk atau salah
                ukuran)? Kami siap untuk melakukan retur barang kapanpun.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-3  flex justify-center">
          <div className="w-[250px] h-[277px] border-[0.3px] border-tersierText p-2">
            <div className="w-[100px] h-[100px] relative left-[75px] top-[30px] ">
              <Image
                alt="sepatu"
                width={300}
                height={300}
                src={"/Layanan.png"}
              />
            </div>
            <div className="relative top-[60px] h-[24px]">
              <p className="text-center text-sekunderAksen font-bold text-[16px] leading-[24px]">
                Layanan Pelanggan
              </p>
            </div>

            <div className="relative top-[59px]">
              <p className="text-center font-normal text-[12px] leading-[18px] text-tersierAksen">
                Untuk semua informasi, kami selalu siap untuk melayani kebutuhan
                dan pertanyaan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
