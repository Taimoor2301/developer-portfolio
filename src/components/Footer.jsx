import git from "../assets/Social Icons/Github.svg";
import linkdin from "../assets/Social Icons/link.svg";
import twitter from "../assets/Social Icons/Twitter.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";

function Footer({ tl }) {
  const main = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.from(".item", {
        scrollTrigger: {
          trigger: ".item",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
        x: -100,
        opacity: 0,
        stagger: 0.4,
      });
    }, [main]);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div ref={main}>
        <main className="lg:px-32 px-3 bg-gray-950 flex lg:gap-32 py-20">
          <div className="flex flex-1 flex-col gap-4 items-start">
            <h1 className="text-white text-4xl font-semibold item">
              Interested in Working with me?
            </h1>
            <p className="text-gray-300 item">
              I'm active on all social media platforms listed below,but you can
              also send an email and i will get ack to you within 24-48 hours
            </p>
            <button className="item px-8 py-3 text-lg font-bold bg-yellow-300 hover:bg-yellow-400 self-center lg:self-start my-4">
              <a href="mailto:taimoorali4214@gmail.com">Get in touch</a>
            </button>
          </div>
          <div className="lg:flex-1"></div>
        </main>

        <footer className="flex w-full justify-between bg-slate-800 lg:px-32 py-5 md:py-10 px-3">
          <span className="text-white lg:text-3xl text-xl  font-bold">
            Johnathan <span className="font-normal">Specter</span>
          </span>
          <span className="flex gap-4 md:gap-8 items-center ">
            <img src={twitter} alt="" />
            <img src={linkdin} alt="" />
            <img src={git} alt="" />
          </span>
        </footer>
      </div>
    </>
  );
}

export default Footer;
