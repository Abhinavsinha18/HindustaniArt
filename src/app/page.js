import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/component/Navbar/Navbar";
import Banner from "@/component/Banner/Banner";
import Benifits from "@/component/Benifits/Benifits";

export default function Home() {
  return (
    <main >
    <Navbar/>
    <Banner/>
    <Benifits/>
    </main>
  );
}
