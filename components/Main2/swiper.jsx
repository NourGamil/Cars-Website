"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Swiper = () => {
  useGSAP(() => {
    let blogs1BtnLeft = document.querySelector(".blogs1BtnLeft");
    let blogs1BtnRight = document.querySelector(".blogs1BtnRight");
    let tlBlogs1 = gsap.timeline();
    let blogVar = 1;
    // -----------------------------------start animation---------------------------------------
    gsap.fromTo(".blog1Img",{x:1000,opacity:0},{
        x:0,
        opacity:1,
        duration:1,
      scrollTrigger: {
        trigger: ".main2",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.fromTo(".blog1Tx",{x:-1000,opacity:0},{
        x:0,
        opacity:1,
        duration:1,
      scrollTrigger: {
        trigger: ".main2",
        toggleActions: "play pause resume reset",
      },
      })
    // -----------------------------------btns hover---------------------------------------
    {
      blogs1BtnLeft.addEventListener("mouseover", () => {
        gsap.to(".blogs1BtnLeftBorder", { strokeDashoffset: 0, duration: 0.5 });
      });
      blogs1BtnLeft.addEventListener("mouseleave", () => {
        gsap.to(".blogs1BtnLeftBorder", {
          strokeDashoffset: 310,
          duration: 0.5,
        });
      });
      blogs1BtnRight.addEventListener("mouseover", () => {
        gsap.to(".blogs1BtnRightBorder", {
          strokeDashoffset: 0,
          duration: 0.5,
        });
      });
      blogs1BtnRight.addEventListener("mouseleave", () => {
        gsap.to(".blogs1BtnRightBorder", {
          strokeDashoffset: 310,
          duration: 0.5,
        });
      });
    }
    // -----------------------------------btns click---------------------------------------
    blogs1BtnRight.addEventListener("click", () => {
      if(blogVar == 3){
        blogVar = 0
      }
      blogVar += 1;
      console.log(blogVar)
      switch (blogVar) {
        case 2:
          tlBlogs1
            .set(".blog3Tx", { opacity: 1 })
            .set(".blog3Img", { opacity: 1 })
            .to(".blog1Tx", { opacity: 0, duration: 1 })
            .to(".blog1Img", { opacity: 0, duration: 1 }, "-=1")
            .to(".blog1Con", { display: "none" }, "-=1")
            .to(".blog2Con", { display: "flex" })
            .from(".blog2Img", { y: -800, duration: 1 })
            .from(".blog2Tx", { y: 800, duration: 1 }, "-=1")
            .set(".blog1Tx", { opacity: 1 })
            .set(".blog1Img", { opacity: 1 })
          break;
        case 3:
          tlBlogs1
            .set(".blog1Tx", { opacity: 1 })
            .set(".blog1Img", { opacity: 1 })
            .to(".blog2Tx", { opacity: 0, duration: 1 })
            .to(".blog2Img", { opacity: 0, duration: 1 }, "-=1")
            .to(".blog2Con", { display: "none" }, "-=1")
            .to(".blog3Con", { display: "flex" })
            .from(".blog3Img", { y: 800, duration: 1 })
            .from(".blog3Tx", { y: -800, duration: 1 }, "-=1")
            .set(".blog2Tx", { opacity: 1 })
            .set(".blog2Img", { opacity: 1 });
          blogVar = 0;
          break;
        case 1:
          tlBlogs1
            .set(".blog2Tx", { opacity: 1 })
            .set(".blog2Img", { opacity: 1 })
            .to(".blog3Tx", { opacity: 0, duration: 1 })
            .to(".blog3Img", { opacity: 0, duration: 1 }, "-=1")
            .to(".blog3Con", { display: "none" }, "-=1")
            .to(".blog1Con", { display: "flex" })
            .from(".blog1Img", { x: 1000, duration: 1 })
            .from(".blog1Tx", { x: -1000, duration: 1 }, "-=1")
            .set(".blog3Tx", { opacity: 1 })
            .set(".blog3Img", { opacity: 1 });
          break;
      }
    });

      blogs1BtnLeft.addEventListener("click", () => {
          if(blogVar == 0){
            blogVar = 3
          }
          if(blogVar == 1){
            blogVar = 4
          };
          blogVar -= 1
        console.log(blogVar)
      switch (blogVar) {
              case 1:
          tlBlogs1
            .set(".blog3Tx", { opacity: 1 })
            .set(".blog3Img", { opacity: 1 })
            .to(".blog2Tx", { opacity: 0, duration: 1 })
            .to(".blog2Img", { opacity: 0, duration: 1 }, "-=1")
            .to(".blog2Con", { display: "none" }, "-=1")
            .to(".blog1Con", { display: "flex" })
            .from(".blog1Img", { x: 1000, duration: 1 })
            .from(".blog1Tx", { x: -1000, duration: 1 }, "-=1")
            .set(".blog2Tx", { opacity: 1 })
            .set(".blog2Img", { opacity: 1 })
          break;
        case 2:
              tlBlogs1
            .set(".blog1Tx", { opacity: 1 })
            .set(".blog1Img", { opacity: 1 })
            .to(".blog3Tx", { opacity: 0, duration: 1 })
            .to(".blog3Img", { opacity: 0, duration: 1 }, "-=1")
            .to(".blog3Con", { display: "none" }, "-=1")
            .to(".blog2Con", { display: "flex" })
            .from(".blog2Img", { y: -400, duration: 1 })
            .from(".blog2Tx", { y: 400, duration: 1 }, "-=1")
            .set(".blog3Tx", { opacity: 1 })
            .set(".blog3Img", { opacity: 1 });
          break;
        case 3:
          tlBlogs1
            .set(".blog2Tx", { opacity: 1 })
            .set(".blog2Img", { opacity: 1 })
            .to(".blog1Tx", { opacity: 0, duration: 1 })
            .to(".blog1Img", { opacity: 0, duration: 1 }, "-=1")
            .to(".blog1Con", { display: "none" }, "-=1")
            .to(".blog3Con", { display: "flex" })
            .from(".blog3Img", { y: 400, duration: 1 })
            .from(".blog3Tx", { y: -400, duration: 1 }, "-=1")
            .set(".blog1Tx", { opacity: 1 })
            .set(".blog1Img", { opacity: 1 });
          break;
      }
    });

  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh] relative overflow-hidden">
        <div className="
        max-sm:top-[80%]
        absolute w-[100px] h-[100px]  top-[50%] left-[20px] -translate-y-[50%]  z-10">
          <svg
            className="blogs1BtnLeft w-[100px] h-[100px] z-10 pointer"
            viewBox="0 0 120 120"
          >
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cf4b00" />
              <stop offset="100%" stopColor="#f7bf10" />
            </linearGradient>
            <path
              d="M 70 20 L 105.355 34.645 L 120 70 L 105.355 105.355 L 70 120 L 34.645 105.355 L 20 70 L 34.645 34.645 Z"
              className="blogs1BtnBorder blogs1BtnLeftBorder"
              transform="matrix(0.92388, -0.382683, 0.382683, 0.92388, -4.671824, -4.671842)"
              strokeLinejoin="round"
            ></path>
            <path
              d="M 65.59 53.52 Q 69.2 46 73.11 53.52 L 86.09 78.48 Q 90 86 82.48 86 L 57.52 86 Q 50 86 53.61 78.48 Z"
              className="blogs1BtnArrow blogs1BtnLeftArrow"
              transform="matrix(0, -1, 1, 0, -6.813293, -3.563452)"
            ></path>
          </svg>
        </div>
        <div className="
        max-sm:top-[80%]
        absolute w-[100px] h-[100px]  top-[50%] right-[20px] -translate-y-[50%] z-10">
          <svg
            className="blogs1BtnRight w-[100px] h-[100px]  pointer"
            viewBox="0 0 120 120"
          >
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cf4b00" />
              <stop offset="100%" stopColor="#f7bf10" />
            </linearGradient>
            <path
              d="M 70 20 L 105.355 34.645 L 120 70 L 105.355 105.355 L 70 120 L 34.645 105.355 L 20 70 L 34.645 34.645 Z"
              className="blogs1BtnBorder blogs1BtnRightBorder"
              transform="matrix(0.92388, -0.382683, 0.382683, 0.92388, -4.671824, -4.671842)"
              strokeLinejoin="round"
            ></path>
            <path
              d="M 65.59 53.52 Q 69.2 46 73.11 53.52 L 86.09 78.48 Q 90 86 82.48 86 L 57.52 86 Q 50 86 53.61 78.48 Z"
              className="blogs1BtnArrow blogs1BtnRightArrow"
              transform="matrix(0, -1, 1, 0, -6.813293, -3.563452)"
            ></path>
          </svg>
        </div>

        <div className="
        max-sm:w-[100vw]
        max-sm:relative
        blog1Con flex w-[82vw] h-[100vh] justify-between m-[auto]">
          <div className="
          max-sm:w-[100vw]
          max-sm:absolute
          max-sm:top-0
          max-sm:left-0
          max-sm:z-9
          blog1Tx w-[40vw] h-[100vh]">
            <ul className="
            max-sm:w-[100vw]
            max-sm:px-[40px]
            max-sm:pt-[80px]
            max-sm:justify-start
            max-sm:text-[#ffffff]
            max-sm:bg-[#00000044]
            w-[40vw] h-[100vh] flex flex-col justify-center gap-[30px]">
              <li className="
              max-sm:text-[2rem]
              text-[3rem] fontSpechial">
                We don’t just put cars on the road — we conquer it.
              </li>
              <li className="
              max-sm:text-[1.2rem]
              text-[1.6rem] fontSpechial flex flex-col items-center">
                Every detail is built for power and control. Our cars don’t
                blend in — they own the road, turning every drive into a
                statement.
              </li>
              <li className="
              max-sm:text-[1.4rem]
              text-[2rem] fontSpechial">
                Where others drive, we lead.
              </li>
            </ul>
          </div>
          <div className="
          max-sm:w-[100vw]
          max-sm:absolute
          max-sm:top-0
          max-sm:left-0
          blog1Img blogsImg w-[40vw] h-[100vh] bg-[url('images/blogs1.png')]"></div>
        </div>

        <div className="
        max-sm:relative
        max-sm:w-[100vw]
        blog2Con flex flex-col w-[82vw] h-[100vh] justify-between m-[auto] hidden">
          <div className="
          max-sm:h-[100vh]
          max-sm:w-[100vw]
          max-sm:absolute
          max-sm:top-0
          max-sm:left-0
          blog2Img blogsImg  w-[100%] h-[50vh] bg-[url('images/blogs3.png')]"></div>
          <div className="
          max-sm:h-[100vh]
          max-sm:w-[100vw]
          max-sm:absolute
          max-sm:z-9
          max-sm:text-[#ffffff]
          max-sm:bg-[#00000044]
          blog2Tx w-[100%] h-[50vh] ">
            <ul className="
            max-sm:px-[40px]
            max-sm:pt-[80px]
            max-sm:h-[100vh]
            max-sm:justify-start
            w-[100%] h-[50vh] flex flex-col justify-center gap-[30px]">
              <li className="
              max-sm:text-[2rem]
              text-[3rem] fontSpechial">
                Victory, in its boldest form.
              </li>
              <li className="
              max-sm:text-[1.2rem]
              text-[1.6rem] fontSpechial flex flex-col items-center">
                Under the lights, surrounded by energy and applause, this car
                doesn’t just stand on stage — it owns it.
              </li>
              <li className="
              max-sm:text-[1.4rem]
              text-[2rem] fontSpechial">
                Tonight, we didn’t just show up — we took the win
              </li>
            </ul>
          </div>
        </div>


        <div className="
        max-sm:relative
        max-sm:w-[100vw]
        blog3Con flex flex-col w-[82vw] h-[100vh] justify-between m-[auto] hidden">
          <div className="
          max-sm:h-[100vh]
          max-sm:w-[100vw]
          max-sm:absolute
          max-sm:z-9
          max-sm:text-[#ffffff]
          max-sm:bg-[#00000044]
          blog3Tx w-[100%] h-[50vh]">
            <ul className="
            max-sm:px-[40px]
            max-sm:pt-[80px]
            max-sm:h-[100vh]
            max-sm:justify-start
            w-[100%] h-[50vh] flex flex-col justify-center gap-[30px] pt-[40px]">
              <li className="
              max-sm:text-[2rem]
              text-[3rem] fontSpechial">
                A record written in silence.
              </li>
              <li className="
              max-sm:text-[1.4rem]
              text-[1.6rem] fontSpechial flex flex-col items-center">
                It rests after conquering the asphalt—pure speed, sharp lines,
                and zero compromise. No crowd needed. The record says
                everything.
              </li>
            </ul>
          </div>
          <div className="
          max-sm:h-[100vh]
          max-sm:w-[100vw]
          max-sm:absolute
          max-sm:top-0
          max-sm:left-0
          blog3Img blogsImg  w-[100%] h-[50vh] bg-[url('images/blogs2.png')]"></div>
        </div>
      </div>
    </>
  );
};
export default Swiper;
