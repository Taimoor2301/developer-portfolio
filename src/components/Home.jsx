import React, { useEffect, useRef } from "react";
import Walmart from "../assets/Logos/Walmart.svg";
import Visa from "../assets/Logos/Visa.svg";
import Verizon from "../assets/Logos/Verizon.svg";
import Tinder from "../assets/Logos/Tinder.svg";
import Samsung from "../assets/Logos/Samsung.svg";
import JPMorgan from "../assets/Logos/JP Morgan.svg";
import suspense from "../assets/Spense.png";
import yelp from "../assets/YelpCamp.png";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Home({ tl }) {
  let main = useRef(null);
  // let tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.from(".heading", {
        y: "100%",

        ease: Expo.easeOut,
      })
        .from(".item", {
          y: "100%",
          opacity: 0,
          ease: Expo.easeOut,
        })
        .from(".item img", {
          x: 200,
          opacity: 0,
          ease: Expo.easeOut,

          stagger: 0.2,
        })
        .from(".section", {
          y: 200,
          opacity: 0,
          stagger: 0.4,
          scrollTrigger: {
            trigger: ".section",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        })
        .set(".circle", { y: 50 })
        .fromTo(
          ".circle",
          { borderRadius: 0, scale: 0 },
          {
            borderRadius: ["50%"],
            scale: 5,
            rotate: 120,
            duration: 2,
            ease: Expo.easeInOut,
            x: 900,
          }
        )
        .to(".circle", {
          borderRadius: 0,
          rotate: 360,
          repeat: -1,
          yoyo: true,
          scale: 6,
          repeatDelay: 1.5,
        });
    }, [main]);
    return () => ctx.revert();
  }, []);

  return (
    <main className="lg:px-32 px-3 bg-gray-950 text-white py-20" ref={main}>
      <div className="h-10 w-10 rounded-[50%] bg-green-400 circle"></div>
      <div className="md:text-7xl text-4xl lg:max-w-[70%] md:max-w-[80%] overflow-hidden ">
        <div className="heading font-bold">
          Helping companies build better, scalable software.
        </div>
      </div>

      <div className="md:max-w-[60%] text-gray-400 py-5 md:font-semibold overflow-hidden">
        <div className="item">
          Award-winning we developer and author, with over 15+ yers of woring
          experiance with Fortune 500 companies like Apple, Gioogle, Facebook,
          and more.
        </div>
      </div>

      <div className="flex lg:justify-between justify-center w-full my-20 gap-8 md:my-32 flex-wrap item ">
        <img src={Walmart} />
        <img src={JPMorgan} />
        <img src={Visa} />
        <img src={Tinder} />
        <img src={Samsung} />
        <img src={Verizon} />
      </div>

      <section className="flex flex-col gap-16 lg:gap-32 lg:flex-row justify-between w-full">
        <div className="flex-1 flex flex-col gap-5 section">
          <img src={suspense} alt="" className="item" />
          <h1 className="text-5xl font-bold item">Spense.com</h1>
          <p className="text-gray-400 item">
            Rethinking the way writers get paid, an open-source patform
            desigened to help writers focus more on writing, and less on when
            and how they will get paid. Project in colaboration with
            Codewell.css
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 section">
          <img src={yelp} alt="" />
          <h1 className="text-5xl font-bold item">YelpCamp.com</h1>
          <p className="text-gray-400 item">
            Allowing backpack travellers to perfectly plan their trip through an
            open-source platform similar to TripAdvisor. With over 1m MAU,
            YelpCamp, has een the crowd's favourite in 2023.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
