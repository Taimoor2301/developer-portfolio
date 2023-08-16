import React, { useState, useRef, useEffect } from "react";
import menuicon from "../assets/Hamburger Menu.svg";
import { gsap, Expo, Power4 } from "gsap";

function Nav({ tl }) {
  let [visible, setVisible] = useState(false);

  let nav = useRef(null);
  // let tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // tl.current = gsap
      //   .timeline()
      tl.from(".logo", {
        y: "-200%",

        ease: Expo.easeOut,
      })
        .from(".items ul li", {
          y: 100,
          ease: Expo.easeOut,
          stagger: 0.2,
          opacity: 0,
        })
        .from("button", {
          y: 100,
          opacity: 0,
          ease: Expo.easeOut,
        });
    }, [nav]);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      className="lg:px-32 px-3 z-50 flex justify-between items-center w-full bg-gray-950 py-5 sticky top-0"
      ref={nav}
    >
      <div className="logo overflow-hidden">
        <span className="text-white md:text-3xl text-xl font-bold">
          Johnathan <span className="font-normal">Specter</span>
        </span>
      </div>

      <div
        className="flex items-center justify-between lg:w-[60%] w-0 items"
        style={{ width: visible && "80vw" }}
      >
        <ul className="flex flex-col lg:flex-row gap-16 text-gray-400">
          <li className=" hover:text-white">
            <a href="#">Articles</a>
          </li>
          <li className=" hover:text-white">
            <a href="#">Chats</a>
          </li>
          <li className=" hover:text-white">
            <a href="#">Awards</a>
          </li>
          <li className=" hover:text-white">
            <a href="#">About</a>
          </li>
        </ul>
        <button className="flex items-center justify-center h-12 w-40 text-lg font-bold bg-yellow-300 hover:bg-yellow-400">
          <a href="mailto:taimoorali4214@gmail.com">Get in touch</a>
        </button>
      </div>
      <img
        src={menuicon}
        className="menu"
        onClick={() => {
          setVisible(!visible);
        }}
      />
    </nav>
  );
}

export default Nav;
