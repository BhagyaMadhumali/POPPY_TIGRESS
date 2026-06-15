import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MarqueeBar from "../../components/MarqueeBar/MarqueeBar";
import Tool from "./Tool";

export default function Home() {
  const [showTool, setShowTool] = useState(false);

  if (showTool) {
    return <Tool onBack={() => setShowTool(false)} />;
  }

  return (
    <>
      <section
        id="home"
        className="relative h-[760px] w-full overflow-hidden bg-white sm:h-[900px] lg:h-[1080px]"
      >
        {/* LEFT BACKGROUND */}
        <img
          src="/bg-left.png"
          alt=""
          className="absolute z-0 hidden object-cover opacity-100 lg:left-[-10px] lg:top-[200px] lg:block lg:h-[880px] lg:w-[444px]"
        />

        {/* RIGHT BACKGROUND - EXACT MIRROR OF LEFT BACKGROUND */}
        <img
          src="/bg-left.png"
          alt=""
          className="absolute z-0 hidden scale-x-[-1] object-cover opacity-100 lg:right-[-10px] lg:top-[200px] lg:block lg:h-[880px] lg:w-[444px]"
        />

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Poppy Tigress Logo"
          className="absolute left-1/2 top-[28px] z-30 h-[78px] w-[78px] -translate-x-1/2 rounded-full object-cover sm:h-[105px] sm:w-[105px] lg:left-[212px] lg:top-[126px] lg:h-[191px] lg:w-[191px] lg:translate-x-0 lg:rounded-[124.5px]"
        />

        {/* LEARN BUTTON */}
        <button className="absolute left-[7%] top-[132px] z-30 flex h-[56px] w-[62%] max-w-[260px] items-center justify-center gap-[10px] rounded-[18px] bg-[#F15B50] px-3 py-3 text-center font-['Jaini'] text-[18px] font-normal leading-none text-white shadow-[6px_7px_0px_0px_#000000] transition duration-300 ease-out sm:left-[10%] sm:top-[160px] sm:h-[68px] sm:max-w-[360px] sm:text-[24px] lg:left-[1222px] lg:top-[126px] lg:h-[106px] lg:w-[503px] lg:max-w-none lg:rounded-[20px] lg:px-[15px] lg:py-[20px] lg:text-[48px] lg:leading-[48px]">
          Learn About tigress
        </button>

        {/* SIDEBAR */}
        <Sidebar />

        {/* TITLE */}
        <h1 className="absolute left-1/2 top-[225px] z-30 w-[95%] -translate-x-1/2 text-center font-['Jaini'] text-[36px] font-normal leading-[40px] tracking-normal text-black sm:top-[270px] sm:text-[56px] sm:leading-[60px] md:text-[72px] md:leading-[76px] lg:left-[396px] lg:top-[314px] lg:h-[90px] lg:w-[1128px] lg:translate-x-0 lg:whitespace-nowrap lg:text-right lg:text-[128px] lg:leading-[73px]">
          WELCOME POPPY <br className="lg:hidden" />
          <span className="text-[#F15B50]">TIGRESS</span>
        </h1>

        {/* TEMPLE */}
        <img
          src="/temple.png"
          alt="Temple Background"
          className="absolute left-1/2 top-[335px] z-10 w-[150vw] max-w-none -translate-x-1/2 object-contain opacity-100 sm:top-[380px] sm:w-[135vw] md:w-[105vw] lg:left-[372px] lg:top-[259px] lg:h-[821px] lg:w-[1131px] lg:translate-x-0"
        />

        {/* TIGER */}
        <img
          src="/tiger.png"
          alt="Tiger"
          className="absolute bottom-[80px] left-1/2 z-20 w-[82vw] max-w-[330px] -translate-x-1/2 object-contain opacity-100 sm:bottom-[95px] sm:max-w-[480px] md:max-w-[560px] lg:left-[598px] lg:top-[356px] lg:h-[724px] lg:w-[724px] lg:max-w-none lg:translate-x-0"
        />

        {/* INPUT BOX */}
        <div className="absolute bottom-[88px] left-1/2 z-40 flex h-[56px] w-[92%] max-w-[760px] -translate-x-1/2 items-center justify-between gap-[10px] rounded-[16px] border-[3px] border-black bg-white px-3 py-2 sm:bottom-[118px] sm:h-[68px] sm:px-5 lg:left-[447px] lg:top-[755px] lg:h-[92px] lg:w-[1108px] lg:max-w-none lg:translate-x-0 lg:rounded-[20px] lg:p-[20px]">
          <input
            type="text"
            placeholder="Type here or Click Tiger to Speak"
            className="h-full min-w-0 flex-1 bg-transparent font-['Times_New_Roman',serif] text-[14px] font-normal leading-[25px] text-black outline-none placeholder:text-[#7D7B7B] sm:text-[18px] lg:h-[52px] lg:text-[32px]"
          />

          <button
            type="button"
            className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#969696] px-[3px] py-[1px] transition duration-300 ease-out sm:h-[46px] sm:w-[46px] lg:h-[52px] lg:w-[52px] lg:rounded-[30px]"
          >
            <svg
              width="24"
              height="30"
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[24px] w-[20px] lg:h-[30px] lg:w-[24px]"
            >
              <path
                d="M12 19C15.3137 19 18 16.3137 18 13V6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6V13C6 16.3137 8.68629 19 12 19Z"
                fill="black"
              />
              <path
                d="M22 12C21.4477 12 21 12.4477 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 12.4477 2.55228 12 2 12C1.44772 12 1 12.4477 1 13C1 18.7345 5.3938 23.4447 11 23.9499V28H7C6.44772 28 6 28.4477 6 29C6 29.5523 6.44772 30 7 30H17C17.5523 30 18 29.5523 18 29C18 28.4477 17.5523 28 17 28H13V23.9499C18.6062 23.4447 23 18.7345 23 13C23 12.4477 22.5523 12 22 12Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        {/* BUY NOW + TOOLS */}
        <div className="absolute bottom-[18px] left-1/2 z-40 flex w-[92%] max-w-[760px] -translate-x-1/2 flex-row gap-4 sm:bottom-[30px] sm:gap-6 lg:left-[447px] lg:top-[887px] lg:h-[106px] lg:w-[1108px] lg:max-w-none lg:translate-x-0 lg:gap-[102px]">
          <button className="flex h-[50px] flex-1 items-center justify-center gap-[10px] rounded-[16px] bg-[#F15B50] px-[15px] py-[20px] font-['Jaini'] text-[18px] font-normal leading-[48px] text-white shadow-[6px_7px_0px_0px_#000000] transition duration-300 ease-out sm:h-[60px] sm:text-[24px] lg:h-[106px] lg:w-[503px] lg:flex-none lg:rounded-[20px] lg:text-[48px]">
            BUY NOW
          </button>

          <button
            onClick={() => setShowTool(true)}
            className="flex h-[50px] flex-1 items-center justify-center gap-[10px] rounded-[16px] bg-[#F15B50] px-[15px] py-[20px] text-center font-['Jaini'] text-[18px] font-normal leading-[48px] text-white shadow-[6px_7px_0px_0px_#000000] transition duration-300 ease-out sm:h-[60px] sm:text-[24px] lg:h-[106px] lg:w-[503px] lg:flex-none lg:rounded-[20px] lg:text-[48px]"
          >
            Tools
          </button>
        </div>
      </section>

      <MarqueeBar />

      <section
        id="about"
        className="relative h-[520px] w-full overflow-hidden bg-black sm:h-[650px] lg:h-[745px]"
      >
        <img
          src="/warrior-bg.png"
          alt="Warrior Background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.89]"
        />

        <img
          src="/warrior-tiger.png"
          alt="Warrior Tiger"
          className="absolute bottom-0 left-1/2 z-10 w-[92vw] max-w-[420px] -translate-x-1/2 object-contain sm:max-w-[560px] lg:top-[96px] lg:h-[647px] lg:w-[647px] lg:max-w-none"
        />
      </section>
    </>
  );
}