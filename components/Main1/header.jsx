"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from 'react';
import Link from "next/link";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  useGSAP(() => {
// -----------------------------------------menu icon-----------------------------------
  let menubtn = document.getElementById("menuChanger");
  let num = 0;
  let tlMobileNav = gsap.timeline();
  let tlMobileNavAnime = gsap.timeline();
  const navClose = ()=>{
    tlMobileNav
    .to(".line1", {
      rotate: 0,
      transformOrigin: "0 0",
      duration: 0.5,
    })
    .to(
      ".line3",
      { rotate: 0, transformOrigin: "0 0", duration: 0.5 },
      "-=0.5",
    )
    .to(".line2", { display: "block" });
    gsap.to(".headerNav",{
      x:-1000,
      opacity:0,
      display:"hidden",
      duration:1
    });
    gsap.to(".header", {
    backgroundColor: "rgba(0, 0, 0, 0.40)",
    duration: 1,
    });
  num = 0;};

    function menuIcon() {
      tlMobileNav.timeScale(2);
      if (num == 0) {
        contactUsClose();
        tlMobileNav
          .to(".line2", { display: "none" })
          .to(".line1", {
            rotate: 45,
            transformOrigin: "7px 2px",
            duration: 0.5,
          })
          .to(
            ".line3",
            { rotate: -45, transformOrigin: "7px -2px", duration: 0.5 },
            "-=0.5",
          );
      tlMobileNavAnime.fromTo(".headerNav",{x:-1000},{
            x:0,
            display:"block",
            opacity:1,
            duration:1
          }).to(".header", {
      backgroundColor: "rgba(0, 0, 0, 0.90)",
      duration: 1,
      },"-=1")
      .fromTo(".fromLeftNav",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.5,
        stagger:0.2},"-=0.8")
        num = 1;
      } else {
        navClose()
      }
    }
    menubtn.addEventListener("click", menuIcon);
    

// -----------------------------------------nav choice btns -----------------------------------
    let navChoiceSvg1 = document.querySelector(".navChoiceSvgBtn1");
    let navChoiceSvg2 = document.querySelector(".navChoiceSvgBtn2");
    let navChoiceSvg3 = document.querySelector(".navChoiceSvgBtn3");
    let navChoiceSvg4 = document.querySelector(".navChoiceSvgBtn4");
    let navChoiceSvg5 = document.querySelector(".navChoiceSvgBtn5");
    let navChoiceSvg6 = document.querySelector(".navChoiceSvgBtn6");

    navChoiceSvg1.addEventListener("mouseover",()=>{
      gsap.to(".navChoiceSvg1",{
        strokeDashoffset:0,
        duration:0.5
      })
    });
    navChoiceSvg1.addEventListener("mouseleave",()=>{
      gsap.to(".navChoiceSvg1",{
        strokeDashoffset:300,
        duration:0.5
      })
    })
    navChoiceSvg1.addEventListener("click",()=>{
      gsap.to(window,{
        scrollTo:".main1"
      });
      navClose();
    })
    navChoiceSvg2.addEventListener("mouseover",()=>{
      gsap.to(".navChoiceSvg2",{
        strokeDashoffset:0,
        duration:0.5
      })
    });
    navChoiceSvg2.addEventListener("mouseleave",()=>{
      gsap.to(".navChoiceSvg2",{
        strokeDashoffset:300,
        duration:0.5
      })
    })
    navChoiceSvg2.addEventListener("click",()=>{
            gsap.to(window,{
        scrollTo:".main2"
      });
      navClose();
    })
    navChoiceSvg3.addEventListener("mouseover",()=>{
      gsap.to(".navChoiceSvg3",{
        strokeDashoffset:0,
        duration:0.5
      })
    });
    navChoiceSvg3.addEventListener("mouseleave",()=>{
      gsap.to(".navChoiceSvg3",{
        strokeDashoffset:300,
        duration:0.5
      })
    })
    navChoiceSvg3.addEventListener("click",()=>{
      gsap.to(window,{
        scrollTo:".main4"
      });
      navClose();
    })
    navChoiceSvg4.addEventListener("mouseover",()=>{
      gsap.to(".navChoiceSvg4",{
        strokeDashoffset:0,
        duration:0.5
      })
    });
    navChoiceSvg4.addEventListener("mouseleave",()=>{
      gsap.to(".navChoiceSvg4",{
        strokeDashoffset:300,
        duration:0.5
      })
    })

    navChoiceSvg5.addEventListener("mouseover",()=>{
      gsap.to(".navChoiceSvg5",{
        strokeDashoffset:0,
        duration:0.5
      })
    });
    navChoiceSvg5.addEventListener("mouseleave",()=>{
      gsap.to(".navChoiceSvg5",{
        strokeDashoffset:300,
        duration:0.5
      })
    })
    navChoiceSvg5.addEventListener("click",()=>{
      gsap.to(window,{
        scrollTo:".main5"
      });
      navClose();
    })
    navChoiceSvg6.addEventListener("mouseover",()=>{
      gsap.to(".navChoiceSvg6",{
        strokeDashoffset:0,
        duration:0.5
      })
    });
    navChoiceSvg6.addEventListener("mouseleave",()=>{
      gsap.to(".navChoiceSvg6",{
        strokeDashoffset:300,
        duration:0.5
      })
    })
    navChoiceSvg6.addEventListener("click",()=>{
      navClose();
      contactUsOpen();
    })
    // ------------------------------------contact Us----------------------------------------
    let contactUsBtn = document.querySelector(".contactUsBtn");
    let contactUsFooter = document.querySelector(".contactUsFooter");
    let contactXBtn = document.querySelector(".contactXBtn");
    let contactTl = gsap.timeline()
    const contactUsClose = ()=>{
            contactTl.to(".contactUs",{
        x:500,
        opacity:0,
        display:"hidden",
        duration:1,
      }).to(".contactUsBtn",{visibility:"visible"},"-=1")
      gsap.to(".header", {
      backgroundColor: "rgba(0, 0, 0, 0.40)",
      duration: 1,
      })
      gsap.to(".scrollToStart",{
        display:"flex"
      })
    }
    const contactUsOpen = ()=>{
            contactTl.fromTo(".contactUs",{opacity:0,x:500},{
        opacity:1,
        display:"block",
        x:0,
        duration:1,
      }).to(".contactUsBtn",{visibility:"hidden"},"-=1")
      .to(".header", {
      backgroundColor: "rgba(0, 0, 0, 0.90)",
      duration: 1,
      });
            gsap.to(".scrollToStart",{
        display:"none"
      })
    }
    contactUsBtn.addEventListener("click",()=>{
      navClose()
      contactUsOpen()
    })
    contactXBtn.addEventListener("click",()=>{
      contactUsClose()
    })
        contactUsFooter.addEventListener("click",()=>{
          navClose()
      contactUsOpen()
    })
    // ------------------------------------contact Us----------------------------------------
    document.querySelector(".scrollToStart").addEventListener("click",()=>{
      gsap.to(window,{
        scrollTo:".websiteStart"
      })
    })

}, []);
  return (
    <div className="header m-[auto]">
      <div className="navCon relative px-[20px] h-[70px] lg:px-[150px] lg:h-[100px]">
      {/* <div className="navCon relative max-sm:px-[20px] max-sm:h-[70px] px-[150px] h-[100px]"> */}
        <div className="
        max-sm:w-[100vw]
        max-sm:top-[70px]
        headerNav absolute w-[30vw] h-[100vh] top-[100px] left-[0px] hidden">
            <ul className="
            max-sm:w-[100vw]
            max-sm:pl-[50px]
            max-sm:h-[80vh]
            pl-[150px] pt-[40px] w-[30vw] h-[80vh] flex flex-col gap-[40px] text-[1.6rem] font-bold 
            ">
              <li className="fromLeftNav navChoiceSvgBtn1 relative pointer">

              <Link href={"/ "} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main1"})},500)}}>
              Home
              <svg className="w-[300px] h-[100px] absolute top-[-20] left-[-30] "  viewBox="100 0 100 100">
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cf4b00" />
              <stop offset="100%" stopColor="#f7bf10" />
              </linearGradient>
              <path className="navChoiceSvg navChoiceSvg1" d="M 30 70 L 167.89 69.273 L 200.862 44.546 L 280 44.546 L 247.626 30"></path>
              </svg>
              </Link>
              </li>

              <li className="fromLeftNav navChoiceSvgBtn2 relative pointer">
              <Link href={"/#"} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main2"})},500)}}>
              About
              <svg className="w-[300px] h-[100px] absolute top-[-20] left-[-30] "  viewBox="100 0 100 100">
              <path className="navChoiceSvg navChoiceSvg2" d="M 30 70 L 167.89 69.273 L 200.862 44.546 L 280 44.546 L 247.626 30"></path>
              </svg>
              </Link>
              </li>

              <li className="fromLeftNav navChoiceSvgBtn3 relative pointer">
              <Link href={"/"} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main4"})},500)}}>
              Models
              <svg className="w-[300px] h-[100px] absolute top-[-20] left-[-30] "  viewBox="100 0 100 100">
              <path className="navChoiceSvg navChoiceSvg3" d="M 30 70 L 167.89 69.273 L 200.862 44.546 L 280 44.546 L 247.626 30"></path>
              </svg>
              </Link>
              </li>

              <li className="fromLeftNav navChoiceSvgBtn4 relative pointer">
              <Link href={"/Models"}>Explore Models
              <svg className="w-[300px] h-[100px] absolute top-[-20] left-[-30] "  viewBox="100 -10 100 100">
              <path className="navChoiceSvg  navChoiceSvg4" d="M 30 70 L 167.89 69.273 L 200.862 44.546 L 280 44.546 L 247.626 30 "></path>
              </svg>
              </Link>
              </li>

              <li className="fromLeftNav navChoiceSvgBtn5 relative pointer">
              <Link href={"/"} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main5"})},500)}}>
              Events
              <svg className="w-[300px] h-[100px] absolute top-[-20] left-[-30] "  viewBox="100 0 100 100">
              <path className="navChoiceSvg navChoiceSvg5" d="M 30 70 L 167.89 69.273 L 200.862 44.546 L 280 44.546 L 247.626 30"></path>
              </svg>
              </Link>
              </li>

              <li className="fromLeftNav navChoiceSvgBtn6 relative pointer">Contact US
              <svg className="w-[300px] h-[100px] absolute top-[-20] left-[-30] "  viewBox="100 0 100 100">
              <path className="navChoiceSvg navChoiceSvg6" d="M 30 70 L 167.89 69.273 L 200.862 44.546 L 280 44.546 L 247.626 30"></path>
              </svg>
              </li>

            </ul>
        </div>
        <div className="
        max-sm:w-[100vw]
        contactUs absolute w-[30vw] h-[100vh] top-[0px] right-[0px] bg-[#000000e6] hidden">
          <div className="
          max-sm:w-[100vw]
          max-sm:h-[70px]
          max-sm:justify-end
          w-[30vw] h-[100px] flex items-center justify-between px-[30px]">
            <div className="
            max-sm:hidden
            text-[2rem] fontSpechial">ASK ME</div>
            <div className="contactXBtn button3 w-[50px] h-[50px]">
              <img src="/images/x2.svg" alt="" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="w-[100%] border-1 border-[gray]"></div>
          <div className="h-[64vh] flex flex-col p-[40px]">
            <div className="
              max-sm:w-[280px]
            systemMsg w-[350px] h-[auto] bg-gray-200 rounded-t-[40px] rounded-br-[40px] text-[var(--tx2)] p-[20] text-[1.1rem]">
              Welcome, I’m your Virtual Assistant. How can I assist you today? Feel Free to ask a question.
            </div>
          </div>

          <div className="w-[100%] border-1 border-[gray]"></div>
          <div className="
          max-sm:w-[100vw]
          w-[30vw] h-[calc(40vh-100px)] flex justify-between px-[30px] pt-[10px]">
            <div className="w-[70%] ">
              <textarea type="textarea" name="" id="" className="contactInput" placeholder="Type your Message" />
            </div>
            <div className="h-[140px] flex justify-center items-center">
            <div className="button3 w-[50px] h-[50px]">
              <img src="/images/send.svg" alt="" className="w-[20px] h-[20px]" />
            </div></div>
          </div>
        </div>




      <div
        id="menuChanger"
        className="menuCon flex items-center text-white text-[1.4rem] cursor-pointer gap-[10px]"
      >


        
        <div className="menuIcon w-[1.6rem]">
          <div className="line1 line"></div>
          <div className="line2 line"></div>
          <div className="line3 line"></div>
        </div>
        <p className="hidden lg:block">MENU</p>
      </div>
      <div className="logo lg:-ml-[50px]">
        <a href="/ ">
          <img className="w-[40px]" src="/images/swWhite.svg" alt="" />
        </a>
      </div>
      <div className="navAdds flex justify-end gap-[20px] w-[auto] max-sm:gap-[5px]">
        <div className="contactUsBtn pointer">
          <img className="w-[30px]" src="/images/message-reply.svg" alt="" />
        </div>
      </div>

      <div className="
      scrollToStart pointer fixed bottom-0 right-[10px] 
      border-[#181818] rounded-t-full border-b-[#18181800] border-2 w-[50px] h-[50px] flex 
      justify-center items-center bg-[lightgray] hover:bg-gray-600">
        <img className="w-[30px] h-[30px]" src="/images/arrowUp.svg" alt="" />
      </div>
      </div>
    </div>
  );
};
export default Header;
