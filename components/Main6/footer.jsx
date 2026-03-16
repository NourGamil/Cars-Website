"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Footer = () => {
  useGSAP(() => {
    let showYuyuTl = gsap.timeline({
      repeat:-1,
      yoyo:true
    });
    showYuyuTl.to(".showYuyu",{x:100,duration:1})

    // -----------------------------------start animation---------------------------------------
    gsap.fromTo(".fromRightFooter",{x:1000,opacity:0},{
        x:0,
        opacity:1,
        duration:0.5,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".footerCon",
        toggleActions: "play pause resume reset",
      },
      })
          gsap.fromTo(".fromLeftFooter",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.5,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".footerCon",
        toggleActions: "play pause resume reset",
      },
      })
  }, []);
  return (
    <>
      <div className="footerCon w-[100vw] h-[100vh] flex flex-col items-center pt-[100px]">
        <div className="
        max-sm:pl-0
        max-sm:flex-col
        flex w-[82vw] h-[60vh] pl-[60px] pt-[40px]">
          <div className="
          max-sm:w-100
          max-sm:text-[3rem]
          max-sm:leading-12
          fromLeftFooter leading-16 text-[5rem] uppercase font-bold w-[24vw] flex flex-col ">
            <div className="">The</div>
            <div className="showYuyu">Show</div>
            <div className="">Must</div>
            <div className="">Go On</div>
          </div>
          <div className="
          max-sm:p-0
          max-sm:pt-10
          max-sm:gap-[50px]
          flex pl-[200px] pt-[100px] gap-[100px]">
            <ul className="text-[1.2rem] flex flex-col gap-[14px]">
              <li className="fromRightFooter">
              <Link href={"/ "} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main1"})},200)}}>
              Home
              </Link>
              </li>

              <li className="fromRightFooter">
             <Link href={"/ "} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main2"})},200)}}>
              About
              </Link>
              </li>
              <li className="fromRightFooter">
              <Link href={"/"} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main4"})},200)}}>
              Models
              </Link>
              </li>
              <li className="fromRightFooter">
              <Link href={"/Models"} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main4"})},200)}}>
              Explore Models
              </Link>
              </li>
            </ul>
            <ul className="text-[1.2rem] flex flex-col gap-[14px]">
              <li className="fromRightFooter">
              <Link href={"/"} onClick={()=>{setTimeout(()=>{gsap.to(window,{scrollTo:".main5"})},200)}}>
              Events
              </Link>
              </li>
              <li className="fromRightFooter contactUsFooter pointer">
              Contact Us
              </li>
            </ul>
          </div>
        </div>

        <div className="
        max-sm:w-100
        flex w-[82vw] h-[18vh] justify-between">
          <ul className="flex items-center w-[20vw] pl-[60px]">
            <li className="fromLeftFooter">
              <a href="https://www.instagram.com" target="_blank">
                <svg
                  className="w-[40px] h-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    className="hover:fill-[#833AB4]"
                    fill="var(--tx2)"
                    d="M10 4H7.55a3.29 3.29 0 0 0-3.46 3.54v4.92a3.28 3.28 0 0 0 3.46 3.46h4.9a3.29 3.29 0 0 0 3.46-3.46V7.54a3.28 3.28 0 0 0-3.46-3.46C11.82 4.05 11.62 4 10 4zm0 1h2.44a2.27 2.27 0 0 1 2.48 2.48V12.37a2.28 2.28 0 0 1-2.48 2.49H7.56a2.28 2.28 0 0 1-2.48-2.49V7.48a2.27 2.27 0 0 1 2.48-2.41C8.2 5 8.39 5 10 5zm-3 5a3 3 0 1 1 3 3 3 3 0 0 1-3-3zm3 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm2.48-5.22a.74.74 0 0 1 .74-.78.75.75 0 0 1 .75.74.76.76 0 0 1-.75.75.75.75 0 0 1-.74-.72z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="fromLeftFooter">
              <a href="https://twitter.com" target="_blank">
                <svg
                  className="w-[40px] h-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                  className="hover:fill-[#000]"
                    fill="var(--tx2)"
                    d="M17.19 5.64a6 6 0 0 1-1.7.46 2.9 2.9 0 0 0 1.3-1.6 6 6 0 0 1-1.87.7 3 3 0 0 0-2.16-.91 2.9 2.9 0 0 0-2.87 3.54 8.46 8.46 0 0 1-6.08-3 2.85 2.85 0 0 0 .92 3.85 3.14 3.14 0 0 1-1.34-.36 2.91 2.91 0 0 0 2.37 2.86 3.16 3.16 0 0 1-1.34.05 3 3 0 0 0 2.76 2 6 6 0 0 1-4.37 1.19 8.5 8.5 0 0 0 4.52 1.3 8.22 8.22 0 0 0 8.38-8.57 6 6 0 0 0 1.48-1.51z"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="fromLeftFooter">
              <a href="https://www.facebook.com" target="_blank">
                <svg
                  className="w-[40px] h-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    className="hover:fill-[#1877F2]"
                    fill="var(--tx2)"
                    d="M8.51 7.68H7V10h1.51v7H11v-7h1.8l.2-2.32h-2v-1c0-.55.1-.77.55-.77H13V3.05h-1.91c-1.79 0-2.58.95-2.58 2.67z"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="fromLeftFooter">
              <a href="https://www.youtube.com" target="_blank">
                <svg
                  className="w-[40px] h-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    className="hover:fill-[#FF0000]"
                    fill="var(--tx2)"
                    d="M5.17 4.28c2.28-.16 7.37-.16 9.66 0C17.3 4.45 17.59 6 17.61 10s-.31 5.55-2.78 5.72c-2.29.16-7.37.16-9.66 0C2.7 15.55 2.41 14 2.39 10s.31-5.55 2.78-5.72zM8 7.72v5.07l5-2.54z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="fromLeftFooter">
              <a href="https://www.linkedin.com" target="_blank">
                <svg
                  className="w-[40px] h-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    className="hover:fill-[#0077B5]"
                    fill="var(--tx2)"
                    d="M6.48 4h7A2.52 2.52 0 0 1 16 6.47v7.06a2.52 2.52 0 0 1-2.52 2.52h-7A2.52 2.52 0 0 1 4 13.53V6.47A2.52 2.52 0 0 1 6.48 4zm0 9.58H8V8H6.48zm.75-6.18a.89.89 0 1 1 .88-.89.89.89 0 0 1-.88.84zm5.28 6.18H14v-3.46a1.91 1.91 0 0 0-3.5-1.25V8H9v5.55h1.5V10.7c0-1.57 2-1.69 2 0z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="flex w-[20vw] items-center fromRightFooter">
            <a href="/ ">
              <img className="w-[40px] h-[40px]" src="images/swDark.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="flex w-[82vw] h-[4vh] border-b-1 border-[var(--tx2)]"></div>

        <div className="flex w-[82vw] h-[18vh] justify-center items-center">
          Copyright © 2026 Nour
        </div>
      </div>
    </>
  );
};

export default Footer;
