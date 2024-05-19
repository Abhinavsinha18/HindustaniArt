"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Nature from "../../../public/images/nature.png";
import "@/component/Benifits/Benifit.css";
import Link from "next/link";

const Benifits = () => {
  return (
    <div>
      <div className="benDiv">
        <div>
          <h2>Extraordinary, in a nutshell</h2>
        </div>
        <div>
          <span>
            Find the most up-to-date vocabulary of images, videos, signs,
            symbols, and fonts
          </span>
        </div>
      </div>

      <div className="gridben">
        <div>
          <div>
            <Link href={"/"}>
              <Image src={Nature} alt="fd" />
            </Link>
          </div>
          <div>
            <h3>Nature</h3>
            <span>100 resources</span>
          </div>
        </div>
        <div>
          <div>
            <Link href={"/"}>
              <Image src={Nature} alt="fd" />
            </Link>
          </div>
          <div>
            <h3>Nature</h3>
            <span>100 resources</span>
          </div>
        </div>
        <div>
          <div>
            <Link href={"/"}>
              <Image src={Nature} alt="fd" />
            </Link>
          </div>
          <div>
            <h3>Nature</h3>
            <span>100 resources</span>
          </div>
        </div>
        <div>
          <div>
            <Link href={"/"}>
              <Image src={Nature} alt="fd" />
            </Link>
          </div>
          <div>
            <h3>Nature</h3>
            <span>100 resources</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
