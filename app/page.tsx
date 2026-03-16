"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoBackground from   "@/components/Main1/videoBg";
import Header from            "@/components/Main1/header";
import Intro from             "@/components/Main1/intro";
import Swiper from            "@/components/Main2/swiper";
import Main3 from             "@/components/Main3/main3";
import ModelsInfo from        "@/components/Main4/modelsInfo";
import Events from            "@/components/Main5/events";
import Footer from            "@/components/Main6/footer";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useGSAP(()=>{
    let snappers = gsap.utils.toArray(".main");
  gsap.to(snappers, {
  ease: "none",
  duration:0.5,
  scrollTrigger: {
    // trigger: ".container",
    pin: true,
    scrub: 1,
    snap: {
    snapTo: 1 / (snappers.length - 1),
    directional: false,
    inertia: false,
    },
    end: () => "+=" + document.querySelector(".webSite").offsetHight
  }
});
  },[])
  return (
    <div className="webSite">

      <div className="main main1 websiteStart">
        <VideoBackground />
        <Header />
        <Intro />
      </div>

      <div className="separator"></div>

      <div className="main main2" id="main2">
      <Swiper />
      </div>

      <div className="separator"></div>

      <div className="main main3">
        <Main3 />
      </div>

      <div className="separator"></div>

      <div className="main main4" id="main4">
        <ModelsInfo />
      </div>

      <div className=" main5">
      <Events />
      </div>

      <div className="separator"></div>

      <div className="main main6">
      <Footer />
      </div>

    </div>
  );
}
