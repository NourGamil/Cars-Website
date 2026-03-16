"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from  "@/components/Main1/header";
import Footer from   "@/components/Main6/footer";
gsap.registerPlugin(ScrollTrigger);
const Models = () => {
  useGSAP(() => 
  {
    // ------------------------------------------------car color switch--------------------------
    let urusImg = document.querySelector("#urusImg");
    let urusColor1 = document.querySelector(".urusColor1");
    let urusColor2 = document.querySelector(".urusColor2");
    let urusColor3 = document.querySelector(".urusColor3");
    urusColor1.addEventListener("click", () => {
      urusImg.src = "/urus1.png";
      gsap.to(".panel1", {
        backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
    urusColor2.addEventListener("click", () => {
      urusImg.src = "/urus2.png";
      gsap.to(".panel1", {
        backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });
    urusColor3.addEventListener("click", () => {
      urusImg.src = "/urus3.png";
      gsap.to(".panel1", {
        backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });
    urusColor1.addEventListener("mouseover", () => {
      urusImg.src = "/urus1.png";
      gsap.to(".panel1", {
        backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
    urusColor2.addEventListener("mouseover", () => {
      urusImg.src = "/urus2.png";
      gsap.to(".panel1", {
        backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });
    urusColor3.addEventListener("mouseover", () => {
      urusImg.src = "/urus3.png";
      gsap.to(".panel1", {
        backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });


    let revImg = document.querySelector("#revImg");
    let revColor1 = document.querySelector(".revColor1");
    let revColor2 = document.querySelector(".revColor2");
    let revColor3 = document.querySelector(".revColor3");
    revColor1.addEventListener("click", () => {
      revImg.src = "/rev1.png";
      gsap.to(".panel2", {
        backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
    revColor2.addEventListener("click", () => {
      revImg.src = "/rev2.png";
      gsap.to(".panel2", {
        backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });
    revColor3.addEventListener("click", () => {
      revImg.src = "/rev3.png";
      gsap.to(".panel2", {
        backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });
    revColor1.addEventListener("mouseover", () => {
      revImg.src = "/rev1.png";
      gsap.to(".panel2", {
        backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
    revColor2.addEventListener("mouseover", () => {
      revImg.src = "/rev2.png";
      gsap.to(".panel2", {
        backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });
    revColor3.addEventListener("mouseover", () => {
      revImg.src = "/rev3.png";
      gsap.to(".panel2", {
        backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });


    let bmwImg = document.querySelector("#bmwImg");
    let bmwColor1 = document.querySelector(".bmwColor1");
    let bmwColor2 = document.querySelector(".bmwColor2");
    let bmwColor3 = document.querySelector(".bmwColor3");
    bmwColor1.addEventListener("click", () => {
      bmwImg.src = "/bmw1.png";
      gsap.to(".panel3", {
        backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
    bmwColor2.addEventListener("click", () => {
      bmwImg.src = "/bmw2.png";
      gsap.to(".panel3", {
        backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });
    bmwColor3.addEventListener("click", () => {
      bmwImg.src = "/bmw3.png";
      gsap.to(".panel3", {
        backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });
    bmwColor1.addEventListener("mouseover", () => {
      bmwImg.src = "/bmw1.png";
      gsap.to(".panel3", {
        backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
    bmwColor2.addEventListener("mouseover", () => {
      bmwImg.src = "/bmw2.png";
      gsap.to(".panel3", {
        backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });
    bmwColor3.addEventListener("mouseover", () => {
      bmwImg.src = "/bmw3.png";
      gsap.to(".panel3", {
        backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });
    // ------------------------------------------------panels changer----------------------------
    
    
    let car1Btn3d = document.querySelector(".car1Btn3d");
    let car1AboutBtn = document.querySelector(".car1AboutBtn");
    let car1ColorsBtn = document.querySelector(".car1ColorsBtn");
    let urus3d = document.querySelector(".urus3d");
    let panelImgCon1 = document.querySelector(".panelImgCon1");
    let panelColors1 = document.querySelector(".panelColors1");
    let urusAboutInfo = document.querySelectorAll(".urusAboutInfo");

    car1Btn3d.addEventListener("click", () => {
      panelImgCon1.classList.add("hidden");
      car1Btn3d.classList.add("hidden");
      urus3d.classList.remove("hidden");
      car1AboutBtn.classList.remove("hidden");
      car1ColorsBtn.classList.remove("hidden");
      gsap.to(".panel1", {
        backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
    car1AboutBtn.addEventListener("click", () => {
      panelImgCon1.classList.remove("hidden");
      panelColors1.classList.add("hidden");
      car1Btn3d.classList.remove("hidden");

      urusImg.src = "/urus5.png";
      gsap.to('.panelImg1',{width:'100vw'})
      // for (const part of urusAboutInfo) {
      //   part.classList.remove("hidden");
      // }

      car1AboutBtn.classList.add("hidden");
      car1ColorsBtn.classList.remove("hidden");
      urus3d.classList.add("hidden");
      gsap.to(".panel1", {
        background:'rgb(221, 221, 222)'
        // backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
    car1ColorsBtn.addEventListener("click", () => {
      panelImgCon1.classList.remove("hidden");
      panelColors1.classList.remove("hidden");
      car1Btn3d.classList.remove("hidden");
      urusImg.src = "/urus1.png";

      gsap.to('.panelImg1',{width:'60vw'})

      // for (const part of urusAboutInfo) {
      //   part.classList.add("hidden");
      // }

      car1AboutBtn.classList.remove("hidden");
      car1ColorsBtn.classList.add("hidden");
      urus3d.classList.add("hidden");
      gsap.to(".panel1", {
        backgroundImage: "linear-gradient( 50deg, black, #ddddde,black)",
      });
    });
//     let panels = gsap.utils.toArray(".panel");
//     console.log(panels.length - 1);
//   gsap.to(panels, {
//   ease: "none",
//   duration:0.5,
//   scrollTrigger: {
//     pin: true,
//     scrub: 1,
//     snap: {
//     snapTo: 1 / (panels.length - 1),
//     // directional: false,
//     // inertia: false,
//     },
//     end: () => "+=" + document.querySelector(".modelsContainer").offsetHight
//   }
// });
    let panel = gsap.utils.toArray(".panel");
  gsap.to(panel, {
  ease: "none",
  duration:0.5,
  scrollTrigger: {
    // trigger: ".container",
    pin: true,
    scrub: 1,
    snap: {
    snapTo: 1 / (panel.length - 1),
    directional: false,
    inertia: false,
    },
  }
});

    let car2Btn3d = document.querySelector(".car2Btn3d");
    let car2AboutBtn = document.querySelector(".car2AboutBtn");
    let car2ColorsBtn = document.querySelector(".car2ColorsBtn");
    let rev3d = document.querySelector(".rev3d");
    let panelImgCon2 = document.querySelector(".panelImgCon2");
    let panelColors2 = document.querySelector(".panelColors2");
    let revAboutInfo = document.querySelectorAll(".revAboutInfo");

    car2Btn3d.addEventListener("click", () => {
      panelImgCon2.classList.add("hidden");
      car2Btn3d.classList.add("hidden");
      rev3d.classList.remove("hidden");
      car2AboutBtn.classList.remove("hidden");
      car2ColorsBtn.classList.remove("hidden");
      gsap.to(".panel2", {
        backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });
    car2AboutBtn.addEventListener("click", () => {
      panelImgCon2.classList.remove("hidden");
      panelColors2.classList.add("hidden");
      car2Btn3d.classList.remove("hidden");
      revImg.src = "/rev5.png";
      gsap.to('.panelImg2',{width:'100vw'})
      // for (const part of revAboutInfo) {
      //   part.classList.remove("hidden");
      //   // gsap.from(part,{opacity:0,duration:1.5})
      // }
      car2AboutBtn.classList.add("hidden");
      car2ColorsBtn.classList.remove("hidden");
      rev3d.classList.add("hidden");
      gsap.to(".panel2", {
        background:'rgb(221, 221, 222)'
        // backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });
    car2ColorsBtn.addEventListener("click", () => {
      panelImgCon2.classList.remove("hidden");
      panelColors2.classList.remove("hidden");
      car2Btn3d.classList.remove("hidden");
      revImg.src = "/rev2.png";
      gsap.to('.panelImg2',{width:'60vw'})
      // for (const part of revAboutInfo) {
      //   part.classList.add("hidden");
      // }
      car2AboutBtn.classList.remove("hidden");
      car2ColorsBtn.classList.add("hidden");
      rev3d.classList.add("hidden");
      gsap.to(".panel2", {
        backgroundImage: "linear-gradient( 50deg, black, #01226d,black)",
      });
    });


   let car3Btn3d = document.querySelector(".car3Btn3d");
    let car3AboutBtn = document.querySelector(".car3AboutBtn");
    let car3ColorsBtn = document.querySelector(".car3ColorsBtn");
    let bmw3d = document.querySelector(".bmw3d");
    let panelImgCon3 = document.querySelector(".panelImgCon3");
    let panelColors3 = document.querySelector(".panelColors3");
    let bmwAboutInfo = document.querySelectorAll(".bmwAboutInfo");

    car3Btn3d.addEventListener("click", () => {
      panelImgCon3.classList.add("hidden");
      car3Btn3d.classList.add("hidden");
      bmw3d.classList.remove("hidden");
      car3AboutBtn.classList.remove("hidden");
      car3ColorsBtn.classList.remove("hidden");
      gsap.to(".panel3", {
        backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });

    car3AboutBtn.addEventListener("click", () => {
      panelImgCon3.classList.remove("hidden");
      panelColors3.classList.add("hidden");
      car3Btn3d.classList.remove("hidden");
      bmwImg.src = "/bmw5.png";
      gsap.to('.panelImg3',{width:'100vw'})
      // for (const part of bmwAboutInfo) {
      //   part.classList.remove("hidden");
      //   // gsap.from(part,{opacity:0,duration:1.5})
      // }
      car3AboutBtn.classList.add("hidden");
      car3ColorsBtn.classList.remove("hidden");
      bmw3d.classList.add("hidden");
      gsap.to(".panel3", {
        background:'rgb(221, 221, 222)'
        // backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });
    car3ColorsBtn.addEventListener("click", () => {
      panelImgCon3.classList.remove("hidden");
      panelColors3.classList.remove("hidden");
      car3Btn3d.classList.remove("hidden");
      bmwImg.src = "/bmw3.png";
      gsap.to('.panelImg3',{width:'60vw'})
      // for (const part of bmwAboutInfo) {
      //   part.classList.add("hidden");
      // }
      car3AboutBtn.classList.remove("hidden");
      car3ColorsBtn.classList.add("hidden");
      bmw3d.classList.add("hidden");
      gsap.to(".panel3", {
        backgroundImage: "linear-gradient( 50deg, black, #a30000,black)",
      });
    });
    

  
  }, []);
  // ------------------------------------------------jsx-----------------------------------------
  return (
    <>
      <div className="modelsContainer websiteStart overflow-hidden">
        <Header />
        <div id="panel1" className="panelall panel1 panel flex flex-col items-center gap-[20px] justify-center relative bg-[black]">
          <iframe
            className="
            max-sm:h-[50vh]
            max-sm:w-[80vw]
            w-[60vw] h-[50vh] urus3d hidden"
            src="https://sketchfab.com/models/431aa1851b1a44a380b56059743805b0/embed"
          ></iframe>
          <div className="
          panelImgCon1  justify-center items-center ">
            <div className="
            max-sm:w-96
            max-sm:h-20
            w-[60vw]  h-[60px] ">
          <div className="
              max-sm:w-96
              panelColors1 w-[60vw] flex h-[60px] justify-center items-center gap-[20px] mb-[20px]">
                <div className="panelAllColor urusColor1 bg-[#ddddde] pointer"></div>
                <div className="panelAllColor urusColor2 bg-[#0c1731] pointer"></div>
                <div className="panelAllColor urusColor3 bg-[#a30000] pointer"></div>
              </div>
            </div>

            <div className="
            max-sm:m-[auto]
            max-sm:flex
            max-sm:flex-col-reverse
            max-sm:justify-between
            max-sm:gap-[20px]
            panelImg1 w-[60vw] relative ">
              <div className="
              ">


              {/* <div className="urusEng urusAboutInfo hidden">
                <div className="
                max-sm:static
                absolute top-6 -right-30 text-[color:var(--tx3)]">
                  <span className="font-bold">Engine:</span> 4.0-liter
                  Twin-Turbo V8 (Front-mounted)
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-18 right-20 rotate-160">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[100px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="urusTire urusAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -bottom-12 -right-34 text-[color:var(--tx3)]">
                  <span className="font-bold">Tires:</span> Front: 285/45 ZR21 | Rear: 315/40 ZR21
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute bottom-0 right-14 rotate-30">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[60px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="urusTrans urusAboutInfo hidden">
                <div className="
                max-sm:static
                
                absolute -top-10 right-30 text-[color:var(--tx3)]">
                  <span className="font-bold">Transmission:</span> 8-Speed
                  Automatic (ZF 8HP)
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-14 right-80 rotate-90">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[120px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="urusDimensions urusAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -top-4 left-[-17%] text-[color:var(--tx3)]">
                  <ul>
                    <li>
                      <span className="font-bold">Length:</span>5,123 mm.
                    </li>
                    <li>
                      <span className="font-bold">Width:</span>2,181 mm.
                    </li>
                    <li>
                      <span className="font-bold">Height:</span>1,638 mm.
                    </li>
                  </ul>
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-20 left-[-4%] rotate-[20deg]">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[320px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="urusSpeed urusAboutInfo hidden">
                <div className="
                max-sm:static
                
                absolute top-39.5 right-[-29%] text-[color:var(--tx3)]">
                  <span className="font-bold">Top Speed:</span> 189-193 mph
                  <div>(305-312 km/h)</div>
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-40 right-[-8%] rotate-0">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[100px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="urusBreaks urusAboutInfo hidden">
                <div className="
                max-sm:static
                absolute bottom-0 -left-60 text-[color:var(--tx3)]">
                  <span className="font-bold">Brakes:</span> Carbon Ceramic
                  (standard)
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute bottom-8 left-6 rotate-[-20deg]">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[150px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div> */}


              </div>

              <div className="eng"></div>
              <img id="urusImg" className="rounded-2xl " src="/urus1.png" alt="" />
            </div>
          </div>

          <div className="
          max-sm:w-85
          max-sm:gap-[20px]
          panelBtns flex items-center justify-center gap-[100px] w-[60vw] relative">
            <div className="

            car-btn btn3d car1Btn3d w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] ">
              3D MODEL
            </div>
            <div className="car-btn btn3d car1AboutBtn w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] ">
              ABOUT
            </div>
            <div className="car-btn btn3d car1ColorsBtn w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] hidden">
              COLORS
            </div>
          </div>
        </div>

        <div id="panel2" className="panelall panel2 panel flex flex-col items-center gap-[20px] justify-center relative bg-[black]">
          <iframe
            className="
            max-sm:h-[50vh]
            max-sm:w-[80vw]
            w-[60vw] h-[50vh] rev3d hidden"
            src="https://sketchfab.com/models/829251c53e0048479fbe8dc78918b3fd/embed"
          ></iframe>
          <div className="panelImgCon2  justify-center items-center gap-[40px]">
            <div className="
            max-sm:w-96
            max-sm:h-20
            w-[60vw]  h-[60px] ">
              <div className="
              max-sm:w-96
              panelColors2 w-[60vw] flex h-[60px] justify-center items-center gap-[20px] mb-[20px]">
                <div className="panelAllColor revColor1 bg-[#ddddde] pointer"></div>
                <div className="panelAllColor revColor2 bg-[#0c1731] pointer"></div>
                <div className="panelAllColor revColor3 bg-[#a30000] pointer"></div>
              </div>
            </div>
            <div className="
            max-sm:m-[auto]
            max-sm:flex
            max-sm:flex-col-reverse
            max-sm:justify-between
            max-sm:gap-[20px]
            panelImg2 w-[60vw] relative">
              <div className="">
              {/* <div className="revEng revAboutInfo hidden">
                <div className="
                max-sm:static
                absolute top-6 -right-30 text-[color:var(--tx3)]">
                  <span className="font-bold">Engine:</span> 6.5L V12 + 3 Electric Motors
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-18 right-6 rotate-160">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[100px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="revTire revAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -bottom-12 -right-45 text-[color:var(--tx3)]">
                  <span className="font-bold">Tires:</span> 265/35 R20 (front), 345/30 R21 (rear)
                  wheels
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute bottom-0 right-20 rotate-30">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[60px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="revTrans revAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -top-10 right-40 text-[color:var(--tx3)]">
                  <span className="font-bold">Transmission:</span> 8-speed dual-clutch
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-14 right-80 rotate-90">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[120px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="revDimensions revAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -top-4 left-[-17%] text-[color:var(--tx3)]">
                  <ul>
                    <li>
                      <span className="font-bold">Length:</span>4,947 mm.
                    </li>
                    <li>
                      <span className="font-bold">Width:</span>2,033 mm.
                    </li>
                    <li>
                      <span className="font-bold">Height:</span>1,160 mm.
                    </li>
                  </ul>
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-17 left-[-4%] rotate-[13deg]">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[470px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="revSpeed revAboutInfo hidden">
                <div className="
                max-sm:static
                absolute top-39.5 right-[-25%] text-[color:var(--tx3)]">
                  <span className="font-bold">Top Speed:</span> 217 mph
                  <div>(350 km/h)</div>
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-40 right-[-8%] rotate-0">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[100px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="revBreaks revAboutInfo hidden">
                <div className="
                max-sm:static
                absolute bottom-0 -left-62 text-[color:var(--tx3)]">
                  <span className="font-bold">Brakes:</span> Carbon Ceramic Brakes Plus
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute bottom-8 left-6 rotate-[-20deg]">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[150px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div> */}
</div>
              <div className="eng"></div>
              <img id="revImg" src="/rev2.png" alt="" />
            </div>
          </div>

          <div className="
          max-sm:w-85
          max-sm:gap-[20px]
          panelBtns flex items-center justify-center gap-[100px] w-[60vw] relative">
            <div className="car-btn btn3d car2Btn3d w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] ">
              3D MODEL
            </div>
            <div className="car-btn btn3d car2AboutBtn w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] ">
              ABOUT
            </div>
            <div className="car-btn btn3d car2ColorsBtn w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] hidden">
              COLORS
            </div>
          </div>
        </div>

        <div id="panel3" className="panelall panel3 panel flex flex-col items-center gap-[20px] justify-center relative bg-[black]">
          <iframe
            className="
            max-sm:h-[50vh]
            max-sm:w-[80vw]
            w-[60vw] h-[50vh] bmw3d hidden"
            src="https://sketchfab.com/models/bb30c32dc0624ca89bd865aed5214ca3/embed"
          ></iframe>
          <div className="panelImgCon3  justify-center items-center gap-[40px]">
            <div className="
            max-sm:w-96
            max-sm:h-20
            w-[60vw]  h-[60px] ">
              <div className="
              max-sm:w-96
              panelColors3 w-[60vw] flex h-[60px] justify-center items-center gap-[20px] mb-[20px]">
                <div className="panelAllColor bmwColor1 bg-[#ddddde] pointer"></div>
                <div className="panelAllColor bmwColor2 bg-[#0c1731] pointer"></div>
                <div className="panelAllColor bmwColor3 bg-[#a30000] pointer"></div>
              </div>
            </div>
            <div className="
            max-sm:m-[auto]
            max-sm:flex
            max-sm:flex-col-reverse
            max-sm:justify-between
            max-sm:gap-[20px]
            panelImg3 w-[60vw] relative">
              <div className="">
              {/* <div className="bmwEng bmwAboutInfo hidden">
                <div className="
                max-sm:static
                absolute top-6 -right-30 text-[color:var(--tx3)]">
                  <span className="font-bold">Engine:</span> TwinPower Turbo Inline 6-Cylinder
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-18 right-20 rotate-160">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[100px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="bmwTire bmwAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -bottom-12 -right-34 text-[color:var(--tx3)]">
                  <span className="font-bold">Tires:</span> 275/35R19 (Front) & 285/30R20 (Rear)
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute bottom-0 right-6 rotate-30">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[60px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="bmwTrans bmwAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -top-10 right-30 text-[color:var(--tx3)]">
                  <span className="font-bold">Transmission:</span> 8-speed M Steptronic Sport
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-14 right-80 rotate-90">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[120px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="bmwDimensions bmwAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -top-2 left-[-17%] text-[color:var(--tx3)]">
                  <ul>
                    <li>
                      <span className="font-bold">Length:</span>4,801 mm.
                    </li>
                    <li>
                      <span className="font-bold">Width:</span>1,903 mm.
                    </li>
                    <li>
                      <span className="font-bold">Height:</span>1,437 mm.
                    </li>
                  </ul>
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-20 left-[-4%] rotate-[20deg]">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[320px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="bmwSpeed bmwAboutInfo hidden">
                <div className="
                max-sm:static
                absolute top-39.5 right-[-25%] text-[color:var(--tx3)]">
                  <span className="font-bold">Top Speed:</span> 155 mph
                  <div>(250 km/h)</div>
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute top-40 right-[-8%] rotate-0">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[100px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div>

              <div className="bmwBreaks bmwAboutInfo hidden">
                <div className="
                max-sm:static
                absolute -bottom-6 -left-60 text-[color:var(--tx3)]">
                  <span className="font-bold">Brakes:</span> Disc brakes (front & rear), ABS, EBD, Traction Control
                </div>
                <div className="
                max-sm:hidden
                flex justify-center items-center absolute bottom-8 left-6 rotate-[-20deg]">
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                  <div className="circleDotLine w-[150px]"></div>
                  <div className="circleDot">
                    <div className="dot"></div>
                  </div>
                </div>
              </div> */}
</div>
              <div className="eng"></div>
              <img id="bmwImg" src="/bmw3.png" alt="" />
            </div>
          </div>

          <div className="
          max-sm:w-85
          max-sm:gap-[20px]
          panelBtns flex items-center justify-center gap-[100px] w-[60vw] relative">
            <div className="car-btn btn3d car3Btn3d w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] ">
              3D MODEL
            </div>
            <div className="car-btn btn3d car3AboutBtn w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] ">
              ABOUT
            </div>
            <div className="car-btn btn3d car3ColorsBtn w-[200px] h-[60px] font-bold pointer flex justify-center items-center rounded-[10px] hidden">
              COLORS
            </div>
          </div>
        </div>

      <div className="panel">
        <Footer />
      </div>

      </div>
    </>
  );
};
export default Models;
