import { gsap, Expo, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function home(main, tl) {
  const ctx = gsap.context(() => {
    tl.fromTo(
      ".heading",
      {
        x: 300,
        opacity: 0,
        duration: 1.3,
        ease: Expo.easeOut,
      },
      { x: 0, opacity: 1 }
    ).fromTo(
      ".item",
      {
        x: 200,
        opacity: 0,
        ease: Expo.easeOut,
        duration: 1,
        stagger: 0.3,
      },
      { x: 0, opacity: 1 }
    );
  }, [main]);
  return () => ctx.revert();
}
