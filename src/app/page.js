import Image from "next/image";
// import styles from "./page.module.css";
import Navbar from "@/component/Navbar/Navbar";
import Banner from "@/component/Banner/Banner";
import Featured from "@/component/featureds/Featured";
import Benifits from "@/component/Benifits/Benifits";
import Footer from "@/component/footer/Footer";

export default function Home() {
  return (
    <main >
    <Navbar/>
    <Banner/>
    <Featured/>
    <Benifits/>
    <Footer/>
    </main>
  );
}
