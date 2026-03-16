"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const Intro = () => {
  useGSAP(() => {
    let tlIntro = gsap.timeline();
    tlIntro
      .from(".introTx1", { opacity: 0, y: -100, duration: 1 })
      .from(".introTx2", { opacity: 0, x: -1000, duration: 1.5 }, "-=1");
    // .from(".introBtn",{opacity:0, scale:0, duration:1.5 },"-=1.5")
    document.querySelector(".discoverBtn").addEventListener("click",()=>{
      gsap.to(window,{
        scrollTo:".main2"
      })
    })
  }, []);
  return (
    <>
      <div className="
      max-sm:!shadow-[0]
      intro py-[240px] px-[130px] text-white h-[100vh] flex flex-col justify-end max-sm:px-[40px] ">
        <div className="
        introTx mb-[-100px] flex flex-col gap-[40px] font-bold  max-sm:gap-[20px] max-sm:mb-[0]">
          <div className="
          max-sm:text-[1.2rem]
          introTx1 text-[1.8rem]">
            INSPIRING FUTURE SINCE 1963
          </div>
          <div className="
          max-sm:text-[1.6rem]
          max-sm:scale-y-100
          introTx2 text-[3.5rem] scale-y-200  mb-[20px]">
            DRIVEN BY DREAMS
          </div>
          <div className="discoverBtn button3 flex w-[200px] h-[60px] items-center justify-center  pointer ">
            DISCOVER MORE <img src="images/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;
