"use client";
import React from "react";
import Image from "next/image";
import Nature from "../../../public/images/nature.png";
import "@/component/featureds/Featured.css";
import Link from "next/link";

const Featured = () => {
  return (
    <div>
      <div className="benDiv">
        <div>
          <h2>Category</h2>
        </div>
        <div>
          <span>
            Poltics, Cricket, Other
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

export default Featured;
