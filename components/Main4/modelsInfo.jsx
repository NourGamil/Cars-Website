"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from 'react';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";
gsap.registerPlugin(ScrollToPlugin);
const ModelInfo = ()=>{
    useGSAP(
    ()=>{
        let modelsTl = gsap.timeline();
        modelsTl.timeScale(2)
        let modelsTxTl = gsap.timeline();
        modelsTxTl.timeScale(2)
        let modelsTRTl = gsap.timeline();
        let model1btn   = document.getElementById("model1btn");
        let model2btn   = document.getElementById("model2btn");
        let model3btn   = document.getElementById("model3btn");
        let mITx1       = document.querySelector(".mITx1");
        let mITx2       = document.querySelector(".mITx2");
        let mITx3       = document.querySelector(".mITx3");
        let mITitle     = document.querySelector(".mITitle");
        let modelsMainButtons1      = document.querySelector(".modelsMainButtons1");
        let modelsMainButtons1var      = 0;
        let modelsMainButtons2      = document.querySelector(".modelsMainButtons2");

        model1btn.addEventListener("click",()=>{
            if (mITitle.innerText !== "SUV CAR"){
                            model1btn.classList.add("selectedModel");
            model2btn.classList.remove("selectedModel");
            model3btn.classList.remove("selectedModel");
            modelsTl.to(".modelInfoImg",{x:1000,y:-100,duration:1})
            .set(".modelInfoImg",{attr:{src: "urus0.png"}})
            .to(".modelInfoImg",{x:0,y:0,duration:1});
            modelsTxTl.to(".mITxChanger",{y:-100,opacity:0,duration:1})
            .to(".mITxChanger",{y:100,duration:0.1});
            modelsTxTl.set(".mITxChanger",{
                  onComplete: () => {
                    mITx1.classList.remove("hidden");
                    mITx2.classList.add("hidden");
                    mITx3.classList.add("hidden");
                }
            })
            .to(".mITxChanger",{y:0,opacity:1,duration:1});
            modelsTRTl.to(".mITitle",{x:-100,opacity:0,duration:0.5})
            .set(".mITitle",{onComplete:()=>{mITitle.innerText="SUV CAR"}})
            .to(".mITitle",{x:0,opacity:1,duration:0.5})
            modelsMainButtons1.classList.remove("button2");
            modelsMainButtons1.classList.remove("button0");
            modelsMainButtons1.classList.add("button3");
            modelsMainButtons2.classList.remove("button2");
            modelsMainButtons2.classList.remove("button0");
            modelsMainButtons2.classList.add("button3");
            }
            modelsMainButtons1var = 0;
        })
        model2btn.addEventListener("click",()=>{
            if (mITitle.innerText !== "SPORTS CAR"){
            model1btn.classList.remove("selectedModel");
            model2btn.classList.add("selectedModel");
            model3btn.classList.remove("selectedModel");
            modelsTl.to(".modelInfoImg",{x:1000,y:-100,duration:1})
            .set(".modelInfoImg",{attr:{src: "rev0.png"}})
            .to(".modelInfoImg",{x:0,y:0,duration:1});
            modelsTxTl.to(".mITxChanger",{y:-100,opacity:0,duration:1})
            .to(".mITxChanger",{y:100,duration:0.1});
            modelsTxTl.set(".mITxChanger",{
                  onComplete: () => {
                    mITx1.classList.add("hidden");
                    mITx2.classList.remove("hidden");
                    mITx3.classList.add("hidden");
                }
            })
            .to(".mITxChanger",{y:0,opacity:1,duration:1});
            modelsTRTl.to(".mITitle",{x:-100,opacity:0,duration:0.5})
            .set(".mITitle",{onComplete:()=>{mITitle.innerText="SPORTS CAR"}})
            .to(".mITitle",{x:0,opacity:1,duration:0.5})
            .set(".mITitle",{rotateY:0});
            modelsMainButtons1.classList.remove("button2");
            modelsMainButtons1.classList.add("button0");
            modelsMainButtons1.classList.remove("button3");
            modelsMainButtons2.classList.remove("button2");
            modelsMainButtons2.classList.add("button0");
            modelsMainButtons2.classList.remove("button3");
            }
            modelsMainButtons1var = 1;
        })
        model3btn.addEventListener("click",()=>{
            if (mITitle.innerText !== "SEDAN CAR"){
            model1btn.classList.remove("selectedModel");
            model2btn.classList.remove("selectedModel");
            model3btn.classList.add("selectedModel");
            modelsTl.to(".modelInfoImg",{x:1000,y:-100,duration:1})
            .set(".modelInfoImg",{attr:{src: "bmw0.png"}})
            .to(".modelInfoImg",{x:0,y:0,duration:1});
            modelsTxTl.to(".mITxChanger",{y:-100,opacity:0,duration:1})
            .to(".mITxChanger",{y:100,duration:0.1});
            modelsTxTl.set(".mITxChanger",{
                  onComplete: () => {
                    mITx1.classList.add("hidden");
                    mITx2.classList.add("hidden");
                    mITx3.classList.remove("hidden");
                }
            })
            .to(".mITxChanger",{y:0,opacity:1,duration:1});
            modelsTRTl.to(".mITitle",{x:-100,opacity:0,duration:0.5})
            .set(".mITitle",{onComplete:()=>{mITitle.innerText="SEDAN CAR"}})
            .to(".mITitle",{x:0,opacity:1,duration:0.5})
            .set(".mITitle",{rotateY:0});
            modelsMainButtons1.classList.add("button2");
            modelsMainButtons1.classList.remove("button0");
            modelsMainButtons1.classList.remove("button3");
            modelsMainButtons2.classList.add("button2");
            modelsMainButtons2.classList.remove("button0");
            modelsMainButtons2.classList.remove("button3");
            }
            modelsMainButtons1var = 2;
        })

    // -----------------------------------start animation---------------------------------------
    gsap.fromTo(".fromRightModelsInfo",{x:1000,opacity:0},{
        x:0,
        opacity:1,
        duration:0.5,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".main4",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.fromTo(".fromLeftModelsInfo",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.5,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".main4",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.fromTo(".fromLeftModelsInfo2",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.5,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".main4",
        toggleActions: "play pause resume reset",
      },
      })
          gsap.fromTo(".fromLeftModelsInfo3",{x:-500,opacity:0},{
        x:0,
        opacity:1,
        duration:0.5,
        stagger:0.2,
      scrollTrigger: {
        trigger: ".main4",
        toggleActions: "play pause resume reset",
      },
      })
    gsap.from(".modelInfoImg",{x:1000,y:-100,duration:0.5,
        scrollTrigger: {
        trigger: ".main4",
        toggleActions: "play pause resume reset",
      }})
    },[])




    
    return(
        <div className="
        max-sm:pt-[80px]
        w-[100vw] h-[100vh] flex flex-col items-center pt-[110px] gap-[10px] ">
        <div className="
        max-sm:h-[60px]
        w-[60vw] h-[100px] flex justify-center gap-10">
            <div id="model1btn" className="max-sm:!text-[1.4rem] fromRightModelsInfo modelSelector selectedModel">SUV</div>
            <div id="model2btn" className="max-sm:!text-[1.4rem] fromRightModelsInfo modelSelector">SUPERCAR</div>
            <div id="model3btn" className="max-sm:!text-[1.4rem] fromRightModelsInfo modelSelector">SEDAN</div>
        </div>

        <div className="
        max-lg:pl-[0]
        max-lg:flex-col-reverse
        max-lg:h-[calc(100vh-180px)]
        w-[100vw] h-[66vh]  flex pl-[9vw] gap-[20px]">

            <div className="
            max-sm:gap-[10px]
            max-lg:w-[100vw]
            max-lg:px-[40px]
            modelInfoTx w-[30%] h-[100%] flex flex-col gap-[40px] pt-[10px]">
                <div className="
                max-sm:text-[1.3rem]
                max-sm:h-[80px]
                mITx flex flex-col justify-center text-[1.6rem] font-bold h-[140px]">

                    <ul className="
                    mITxChanger mITx1 list-disc flex flex-col">
                    <li className="fromLeftModelsInfo ">Performance in every direction.</li>
                    <li className="fromLeftModelsInfo ">Comfort. Control. Character.</li>
                    <li className="fromLeftModelsInfo ">Where power feels effortless.</li>
                    </ul>
                    
                    <ul className="
                    mITxChanger mITx2 list-disc flex flex-col hidden">
                    <li className="fromLeftModelsInfo2">Feel the road.</li>
                    <li className="fromLeftModelsInfo2">Own the moment.</li>
                    </ul>

                    <ul className="
                    mITxChanger mITx3 list-disc flex flex-col hidden">
                    <li className="fromLeftModelsInfo3">Comfort, naturally.</li>
                    <li className="fromLeftModelsInfo3">Made for smooth moments.</li>
                    <li className="fromLeftModelsInfo3">Effortless elegance.</li>
                    </ul>

                    </div>
                <div className="
                max-sm:mt-[30px]
                max-sm:text-[2.6rem]
                flex flex-col text-[3rem] font-bold scale-y-160">
                    <div className="fromLeftModelsInfo mITitle">SUV CAR</div>
                </div>
                <div className="
                max-sm:gap-[20px]
                max-sm:mt-[30px]
                max-lg:justify-center
                max-lg:gap-[100px]
                max-lg:mt-[100px]
                fromLeftModelsInfo mIBtns flex justify-between text-[1.2rem] gap-[20px]">
                    <Link href="/Models">
                    <div className="
                    max-sm:w-[130px]
                    modelsMainButtons1 button3 w-[190px] h-[60px]">See your car</div></Link>
                    <div className="
                    max-sm:w-[130px]
                    modelsMainButtons2 button3 w-[190px] h-[60px]">Order now</div>
                </div>
            </div>
            <div className="
            max-lg:w-[100vw]
            w-[70%]">
                <img className="
                max-lg:w-[100vw]
                max-lg:p-[20px]
                modelInfoImg w-[60vw]" src="/urus0.png" alt="" />
            </div>

        </div>
        </div>
    )
}

export default ModelInfo;