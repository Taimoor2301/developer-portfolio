import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Welcome({ tl }) {
  const welcome = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.from(".text", { y: "100%", stagger: 0.3 })
        .to(".text", { y: "-100", stagger: 0.3, delay: 2 })
        .to(welcome.current, {
          height: 0,
        });
    }, [welcome]);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={welcome}
      className="h-screen border-b-2 border-gray-300 w-full overflow-hidden flex justify-center items-center text-xl bg-gray-950 text-gray-400 absolute z-[100]"
    >
      <div className="overflow-hidden flex gap-2">
        <div className="text">Welcome</div>
        <div className="text">To</div>
        <div className="text">My</div>
        <div className="text">Page..</div>
      </div>
    </div>
  );
}

export default Welcome;
