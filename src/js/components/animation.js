import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animation() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.ScrollTrigger;

  let mediaAnimaton = gsap.matchMedia();

  mediaAnimaton.add("(min-width: 1025px)", () => {
    gsap.to(".progress-bar", {
      width: "100%",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    const tlHeader = gsap.timeline({});

    tlHeader
      .from(".header", {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        delay: 1.2,
        duration: 1.2,
      })
      .from(
        ".header__logo",
        { opacity: 0.8, scale: 3, duration: 1.2, ease: "back.out(1.1)" },
        "<"
      );

    const tlPromo = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo",
        start: "top center",
      },
    });

    tlPromo.from(".promo__info", {
      x: 100,
      autoAlpha: 0,
      // duration: 1,
    });

    tlPromo.from(".promo__img", {
      x: -100,
      autoAlpha: 0,
      // duration: 1,
    });

    const tlTradition = gsap.timeline({
      scrollTrigger: {
        trigger: ".tradition__wrap",
        start: "top 0",
        markers: true,
        // pin: true,
        scrub: true,
      },
    });

    tlTradition.from(".tradition__right", {
      width: 0,
      height: "100%",
    });
  });
}

animation();
