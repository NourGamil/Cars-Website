"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default function Events() {
  useGSAP(() => {
    // -----------------------------------start animation---------------------------------------
    gsap.fromTo(".fromRightEvent1",{x:1000,opacity:0},{
        x:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".event1",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.fromTo(".fromLeftEvent1",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".event1",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.fromTo(".fromRightEvent2",{x:1000,opacity:0},{
        x:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".event2",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.fromTo(".fromLeftEvent2",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".event2",
        toggleActions: "play pause resume reset",
      },
      })
          gsap.fromTo(".fromRightEvent3",{x:1000,opacity:0},{
        x:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".event3",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.fromTo(".fromLeftEvent3",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".event3",
        toggleActions: "play pause resume reset",
      },
      })
          gsap.fromTo(".fromRightEvent4",{x:1000,opacity:0},{
        x:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".event4",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.fromTo(".fromLeftEvent4",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.8,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".event4",
        toggleActions: "play pause resume reset",
      },
      })
      
  }, []);

  return (
    <>
    <div className="eventsContainer">

      <div className="separator flex">
        <div className=" w-[82vw] h-[100px] m-[auto]">
        <div className=" text-[3rem] font-bold">EVENTS</div>
        </div>
      </div>

      <div className="main event1 relative">
        <div className="
        max-lg:w-[100vw]
        flex w-[82vw] m-[auto] overflow-hidden">
          <div className="
          max-lg:w-[100vw]
          max-lg:absolute
          max-lg:top-0
          max-lg:left-0
          max-lg:z-10
          max-lg:text-[white]
          max-lg:bg-[#00000044]
          max-lg:pt-[80px]
          max-lg:px-[40px]
          max-lg:justify-center
          fromLeftEvent1 evAbout flex flex-col w-[40vw] h-[100vh] bg-white gap-[20px] p-[20px] pt-[120px]">
            <div className="
            max-lg:w-[90%]
            max-sm:text-[2.2rem]
            evTitle text-[3rem] fontSpechial w-[60%]">We sets 2025 delivery record with 10,747 cars.</div>
            <div className="evDate text-[1.2rem]">- 20 January 2026</div>
            <div className="evSign bg-gray-200 w-[80px] flex justify-center items-center transition-[0.3] rounded-md pointer text-[01.2rem] hover:bg-gray-400 hover:text-black">Event</div>
            <div className="evTx text-[1.4rem] scale-y-110">This year marked a major milestone for us, as we successfully delivered more cars than ever before. The strong demand and trust from our customers drove record-breaking sales across all markets</div>
          </div>
          <div className="
          max-lg:w-[100vw]
          fromRightEvent1 evImg w-[40vw] h-[100vh]">
            <img className="
            max-lg:w-[100vw]
            max-lg:h-[100vh]
            w-[100%] " src="images/event1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="main event2 relative">
        <div className="
        max-lg:w-[100vw]
        flex w-[82vw] m-[auto] overflow-hidden">
          <div className="
                    max-lg:w-[100vw]
                    fromLeftEvent2 evImg w-[40vw] h-[100vh]">
            <img className="
                        max-lg:w-[100vw]
            max-lg:h-[100vh]
            w-[100%] " src="images/event2.png" alt="" />
          </div>
          <div className="
          max-lg:w-[100vw]
          max-lg:absolute
          max-lg:top-0
          max-lg:left-0
          max-lg:z-10
          max-lg:text-[white]
          max-lg:bg-[#00000044]
          max-lg:pt-[80px]
          max-lg:px-[40px]
          max-lg:justify-center
          fromRightEvent2 evAbout flex flex-col w-[40vw] h-[100vh] bg-white gap-[20px] p-[20px] pt-[120px]">
            <div className="
            max-lg:w-[90%]
            max-sm:text-[2.2rem]
            evTitle text-[3rem] fontSpechial w-[70%] ">Built to endure, our car set a new benchmark in durability this year.</div>
            <div className="evDate text-[1.2rem]">- 21 January 2026</div>
            <div className="evSign bg-gray-200 w-[80px] flex justify-center items-center transition-[0.3] rounded-md pointer text-[01.2rem] hover:bg-gray-400 hover:text-black">Record</div>
            <div className="evTx text-[1.4rem] scale-y-110">Tested for over 1,000,000 km across extreme road and off-road conditions to ensure long-term reliability.</div>
          </div>

        </div>
      </div>

      <div className="separator"></div>

      <div className="main event3 relative">
        <div className="
                max-lg:w-[100vw]
        flex w-[82vw] m-[auto] overflow-hidden">
          <div className="
                    max-lg:w-[100vw]
          max-lg:absolute
          max-lg:top-0
          max-lg:left-0
          max-lg:z-10
          max-lg:text-[white]
          max-lg:bg-[#00000044]
          max-lg:pt-[80px]
          max-lg:px-[40px]
          max-lg:justify-center
          fromLeftEvent3 evAbout flex flex-col w-[40vw] h-[100vh] bg-white gap-[20px] p-[20px] pt-[120px]">
            <div className="
                        max-lg:w-[90%]
            max-sm:text-[2.2rem]
            evTitle text-[3rem] fontSpechial w-[60%]">A record written in speed — our fastest car ever.</div>
            <div className="evDate text-[1.2rem]">- 22 January 2026</div>
            <div className="evSign bg-gray-200 w-[80px] flex justify-center items-center transition-[0.3] rounded-md pointer text-[01.2rem] hover:bg-gray-400 hover:text-black">Record</div>
            <div className="evTx text-[1.4rem] scale-y-110">This year, our car set a new record in speed (350km), redefining what performance truly means.</div>
          </div>
          <div className="
                    max-lg:w-[100vw]
          fromRightEvent3 evImg w-[40vw] h-[100vh] ">
            <img className="
            max-lg:w-[100vw]
            max-lg:h-[100vh]
            w-[100%] " src="images/event3.png" alt="" />
          </div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="main event4 relative">
        <div className="
        max-lg:w-[100vw]
        flex w-[82vw] m-[auto] overflow-hidden">
          <div className="
          max-lg:w-[100vw]
          fromLeftEvent4 evImg w-[40vw] h-[100vh] ">
            <img className="
                                    max-lg:w-[100vw]
            max-lg:h-[100vh]
            w-[100%] " src="images/event4.png" alt="" />
          </div>
          <div className="
                    max-lg:w-[100vw]
          max-lg:absolute
          max-lg:top-0
          max-lg:left-0
          max-lg:z-10
          max-lg:text-[white]
          max-lg:bg-[#00000044]
          max-lg:pt-[80px]
          max-lg:px-[40px]
          max-lg:justify-center
          fromRightEvent4 evAbout flex flex-col w-[40vw] h-[100vh] bg-white gap-[20px] p-[20px] pt-[120px]">
            <div className="
                        max-lg:w-[90%]
            max-sm:text-[2.2rem]
            evTitle text-[3rem] fontSpechial w-[70%] ">We are still exploring new color possibilities.</div>
            <div className="evDate text-[1.2rem]">- 24 January 2026</div>
            <div className="evSign bg-gray-200 w-[80px] flex justify-center items-center transition-[0.3] rounded-md pointer text-[01.2rem] hover:bg-gray-400 hover:text-black">Ideas</div>
            <div className="evTx text-[1.4rem] scale-y-110">We are exploring the possibility of adding bold new colors, including green, yellow, and orange, to our vehicles.</div>
          </div>

        </div>
      </div>

    </div>
    </>
  );
}
