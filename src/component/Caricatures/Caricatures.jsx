import SideMenu from "@/hocs/Sidemenu/Sidemenu";
import Banner from "@/hocs/SubdomainBanner/Banner";
import React from "react";
import Footer from "../footer/Footer";
import Categorys from "./comp/Categorys";
import boximg from "../../../public/images/nature.png"
import "./Caricatures.css"
import Link from "next/link";

const Caricatures = () => {
  const data =[
    {
      img:boximg,
      title:"Cricket Caricature",
      discription:"kksldkmelkrfoirj jrejrnfjekrfji jrnfkwnejfnwj hrekfkjjenflwmflkwf rjnfnfkwlfneklnf jwnjlfnlwknfeknllekwn wjefknwkejfnkwjenfuweuir wjfkwnkfnwkfnW",
      link : "/cricketcaricature"
    },
    {
      img:boximg,
      title:"Political Caricature",
      discription:"difmakkwe emf mker wke,w,elr krk,foweoojwuhygwe wheuhewrh whehuey773gr bhfjjkshr hvsdfygrygeu hjbsfhbrh hwbdhewbh",
      link : "/footballcaricature"
    },
  
  ]
  return (
    <div>
      <Banner headline={"Caricatures"} />
      
      <div className="breadcrumb">
  <Link href={"/"}>Home </Link>
  
  <span> / Caricatures</span>
  </div>
      <div className="sportsdisplay">
        <div>
        <SideMenu  />
        </div>
        <div>
        <Categorys data={data}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Caricatures;
