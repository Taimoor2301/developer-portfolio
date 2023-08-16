import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function GraySec() {
  const section = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().from(".item", {
        scrollTrigger: {
          trigger: ".item",
          start: "top 70%",
          end: "top 50%",
          scrub: 1,
        },
        x: -100,
        opacity: 0,
        stagger: 0.4,
      });
    }, [section]);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="flex bg-slate-800 lg:px-32 px-3 py-16 flex-col lg:flex-row lg:gap-32 text-gray-300"
      ref={section}
    >
      <div className="flex flex-col gap-4 justify-between">
        <h1 className="text-white text-4xl font-semibold item">
          A co-founder at one of the world's largest communities.
        </h1>
        <p className="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel iste
          voluptate dolor unde aperiam consectetur id repellendus cupiditate
          incidunt, excepturi saepe exercitationem distinctio, quis ratione,
          nulla accusantium? Perspiciatis eum ratione dignissimos unde explicabo
          possimus vero!
        </p>
        <p className="item">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          debitis distinctio ipsa vitae maiores, dolorum expedita. Sed ratione,
          atque pariatur repudiandae quae nisi ducimus at aperiam fuga deleniti
          ea sunt minus adipisci et, perspiciatis officiis.
        </p>
      </div>

      <div className="flex flex-col gap-7">
        <p className="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel iste
          voluptate dolor unde aperiam consectetur id.
        </p>
        <p className="item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p className="item">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          debitis distinctio ipsa vitae maiores, dolorum expedita. Sed ratione,
          atque pariatur repudiandae quae nisi ducimus at aperiam fuga deleniti
          ea sunt minus adipisci et, perspiciatis officiis.
        </p>
        <p className="item">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          debitis distinctio ipsa vitae maiores, dolorum expedita. Sed ratione,
          atque pariatur repudiandae quae nisi ducimus.
        </p>
      </div>
    </section>
  );
}

export default GraySec;
