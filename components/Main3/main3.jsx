"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Main2 = ()=>{
  useGSAP(() => {
    // for(let ob of document.querySelectorAll(".fadeInC")){
        gsap.fromTo(".fadeInC",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.5,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".main3",
        toggleActions: "play pause resume reset",
      },
      })


      document.querySelector(".exploreBtn").addEventListener("click",()=>{
        gsap.to(window,{
          scrollTo:".main4",
        })

      })

    // }

  }, []);
    return(
      <div className="
      max-sm:items-end
      main3Shadow flex items-center relative w-[100vw] h-[100vh] overflow-hidden">
        <div className="
          max-sm:justify-end
          max-lg:justify-center
          max-lg:w-[100vw]
          max-lg:h-[100vh]
          max-lg:pt-[80px]
          max-lg:px-[40px]
          max-sm:bg-[#00000044]
        text-white p-[130px] flex flex-col gap-[30px] w-[50vw] ">
          <div className="
          max-sm:text-[2rem]
          text-[3rem] fontSpechial">
            <div className="fadeInC ">More Than a Car. </div>
            <div className="fadeInC ">It's Who You Are.</div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="fadeInC text-[1.6rem]">Curated cars for drivers who expect more.</div>
            <div className="fadeInC exploreBtn button3Add w-[200px] h-[60px]">Explore Collection</div>
            <div className="fadeInC text-[1.2rem] ">Luxury Cars • Performance • Confidence</div>
          </div>
        </div>

        <div className="
        max-sm:!bg-[75%]
        max-lg:!shadow-[0]
        max-lg:!bg-[80%]
        absolute -z-1 w-[100vw] h-[100vh] bg-[url('/images/allcars1.png')] rolerbb  "></div>
      </div>
    )
}

export default Main2;