import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Layout from "@/layout";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import ProductWeek from "@/components/ProductWeek";
import Category from "@/components/Category/Index";
import Info from "@/components/Info";
import Blog from "@/components/Blog";
import Bank from "@/components/Bank";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout metaTitle="home ">
      <div className="relative mt-[180px] lg:mt-[133px]">
        <Carousel />
        <About />
        <ProductWeek />
        <Category />
        <Info />
        <Blog />
        <Bank />
        <Footer />
      </div>
    </Layout>
  );
}
