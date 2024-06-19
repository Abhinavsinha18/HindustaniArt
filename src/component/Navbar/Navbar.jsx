"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavList";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Caricatures", href: "/caricatures" },
  // { text: "Caricature", href: "/png" },
  // { text: "Animation", href: "/greenscreen" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
      <header className="Navheader">
        <div className="logodiv">
          <Link href={"/"}>
            <h1 className="logo">HindustaniArt</h1>
            {/* <h1 className="logo">Abhinav SInha</h1> */}
          </Link>
        </div>
        <nav className={`nav`}>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>

          <div>
            <button className="login">Login</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
