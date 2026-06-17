import { useLayoutEffect, useRef, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MarqueeBar from "../../components/MarqueeBar/MarqueeBar";
import Tool from "./Tool";

export default function Home() {
  const [showTool, setShowTool] = useState(false);

  // Save exact previous scroll position
  const previousScrollY = useRef(0);

  // This checks whether we need to restore scroll after coming back
  const shouldRestoreScroll = useRef(false);

  const handleOpenTool = () => {
    // Save current position before opening Tool page
    previousScrollY.current = window.scrollY;

    // Open Tool page
    setShowTool(true);

    // Directly go to top of Tool page without smooth scrolling
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  const handleBackToHome = () => {
    // Tell React that after Home page comes back, restore old scroll position
    shouldRestoreScroll.current = true;

    // Show Home page again
    setShowTool(false);
  };

  useLayoutEffect(() => {
    if (!showTool && shouldRestoreScroll.current) {
      // Restore exact old position directly, no animation
      window.scrollTo(0, previousScrollY.current);

      // Reset restore status
      shouldRestoreScroll.current = false;
    }
  }, [showTool]);

  if (showTool) {
    return <Tool onBack={handleBackToHome} />;
  }

  return (
    <>
      {/* FIXED SIDEBAR - stays visible and menu list can open */}
      <div className="fixed left-0 top-0 z-[9999]">
        <Sidebar />
      </div>

      <section
        id="home"
        className="relative h-[782px] w-full overflow-hidden bg-white sm:h-[900px] lg:h-[1080px]"
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
          className="absolute left-[148px] top-[73px] z-30 h-[79px] w-[79px] rounded-full object-cover sm:left-1/2 sm:top-[28px] sm:h-[105px] sm:w-[105px] sm:-translate-x-1/2 lg:left-[212px] lg:top-[126px] lg:h-[191px] lg:w-[191px] lg:translate-x-0 lg:rounded-[124.5px]"
        />

        {/* LEARN BUTTON */}
        <button
          type="button"
          className="absolute left-[29px] top-[173px] z-30 flex h-[58px] w-[224px] items-center justify-center gap-[10px] rounded-[20px] bg-[#F15B50] px-[15px] py-[20px] text-center font-['Jaini'] text-[20px] font-normal leading-[16px] text-white shadow-[6px_7px_0px_0px_#000000] transition duration-300 ease-out sm:left-[10%] sm:top-[160px] sm:h-[68px] sm:w-[62%] sm:max-w-[360px] sm:text-[24px] lg:left-[1222px] lg:top-[126px] lg:h-[106px] lg:w-[503px] lg:max-w-none lg:rounded-[20px] lg:px-[15px] lg:py-[20px] lg:text-[48px] lg:leading-[48px]"
        >
          Learn About tigress
        </button>

        {/* TITLE */}
        <h1 className="absolute left-[16px] top-[272px] z-30 h-[71px] w-[343px] text-center font-['Jaini'] text-[48px] font-normal leading-[40px] tracking-normal text-black sm:left-1/2 sm:top-[270px] sm:w-[95%] sm:-translate-x-1/2 sm:text-[56px] sm:leading-[60px] md:text-[72px] md:leading-[76px] lg:left-[396px] lg:top-[314px] lg:h-[90px] lg:w-[1128px] lg:translate-x-0 lg:whitespace-nowrap lg:text-right lg:text-[128px] lg:leading-[73px]">
          WELCOME POPPY <br className="lg:hidden" />
          <span className="text-[#F15B50]">TIGRESS</span>
        </h1>

        {/* TEMPLE */}
        <img
          src="/temple.png"
          alt="Temple Background"
          className="absolute left-[-57px] top-[353px] z-10 h-[459px] w-[503px] max-w-none object-contain opacity-100 sm:left-1/2 sm:top-[380px] sm:h-auto sm:w-[135vw] sm:-translate-x-1/2 md:w-[105vw] lg:left-[372px] lg:top-[259px] lg:h-[821px] lg:w-[1131px] lg:translate-x-0"
        />

        {/* TIGER */}
        <img
          src="/tiger.png"
          alt="Tiger"
          className="absolute left-0 top-[428px] z-20 h-[375px] w-[375px] object-contain opacity-100 sm:left-1/2 sm:top-auto sm:bottom-[95px] sm:h-auto sm:w-[82vw] sm:max-w-[480px] sm:-translate-x-1/2 md:max-w-[560px] lg:left-[598px] lg:top-[356px] lg:h-[724px] lg:w-[724px] lg:max-w-none lg:translate-x-0"
        />

        {/* INPUT BOX */}
        <div className="absolute left-[15px] top-[635px] z-40 flex h-[60px] w-[345px] items-center justify-between gap-[10px] rounded-[16px] border-[2px] border-black bg-white p-[16px] sm:left-1/2 sm:top-auto sm:bottom-[118px] sm:h-[68px] sm:w-[92%] sm:max-w-[760px] sm:-translate-x-1/2 sm:border-[3px] sm:px-5 sm:py-2 lg:left-[447px] lg:top-[755px] lg:h-[92px] lg:w-[1108px] lg:max-w-none lg:translate-x-0 lg:rounded-[20px] lg:p-[20px]">
          <input
            type="text"
            placeholder="Type here or Click Tiger to Speak"
            className="h-[28px] min-w-0 flex-1 bg-transparent font-['Times_New_Roman',serif] text-[16px] font-normal leading-[25px] text-black outline-none placeholder:text-[#7D7B7B] sm:h-full sm:text-[18px] lg:h-[52px] lg:text-[32px]"
          />

          <button
            type="button"
            className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[19px] bg-[#969696] px-[3px] py-[1px] transition duration-300 ease-out sm:h-[46px] sm:w-[46px] lg:h-[52px] lg:w-[52px] lg:rounded-[30px]"
          >
            <svg
              width="24"
              height="30"
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[14px] w-[12px] sm:h-[24px] sm:w-[20px] lg:h-[30px] lg:w-[24px]"
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
        <div className="absolute left-[16px] top-[718px] z-40 flex h-[45px] w-[343px] flex-row gap-[19px] sm:left-1/2 sm:top-auto sm:bottom-[30px] sm:w-[92%] sm:max-w-[760px] sm:-translate-x-1/2 sm:gap-6 lg:left-[447px] lg:top-[887px] lg:h-[106px] lg:w-[1108px] lg:max-w-none lg:translate-x-0 lg:gap-[102px]">
          <button
            type="button"
            className="flex h-[45px] w-[162px] items-center justify-center gap-[10px] rounded-[20px] bg-[#F15B50] px-[15px] py-[20px] font-['Jaini'] text-[20px] font-normal leading-[16px] text-white shadow-[6px_7px_0px_0px_#000000] transition duration-300 ease-out sm:h-[60px] sm:flex-1 sm:text-[24px] lg:h-[106px] lg:w-[503px] lg:flex-none lg:rounded-[20px] lg:text-[48px] lg:leading-[48px]"
          >
            BUY NOW
          </button>

          <button
            type="button"
            onClick={handleOpenTool}
            className="flex h-[45px] w-[162px] items-center justify-center gap-[10px] rounded-[20px] bg-[#F15B50] px-[15px] py-[20px] text-center font-['Jaini'] text-[20px] font-normal leading-[16px] text-white shadow-[6px_7px_0px_0px_#000000] transition duration-300 ease-out sm:h-[60px] sm:flex-1 sm:text-[24px] lg:h-[106px] lg:w-[503px] lg:flex-none lg:rounded-[20px] lg:text-[48px] lg:leading-[48px]"
          >
            Tools
          </button>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <MarqueeBar />

      {/* WARRIOR SECTION BELOW MARQUEE */}
      <section
        id="warrior"
        className="relative -mt-[8px] h-[316px] w-full overflow-hidden bg-black sm:mt-0 sm:h-[650px] lg:h-[745px]"
      >
        <img
          src="/warrior-bg.png"
          alt="Warrior Background"
          className="absolute left-0 top-0 h-[316px] w-full object-cover object-center opacity-[0.89] sm:h-full sm:w-full lg:left-[-10px] lg:top-0 lg:h-[745px] lg:w-[1930px] lg:max-w-none"
        />

        <img
          src="/warrior-tiger.png"
          alt="Warrior Tiger"
          className="absolute left-[71px] top-[83px] z-10 h-[233px] w-[233px] object-contain sm:bottom-0 sm:left-1/2 sm:top-auto sm:w-[92vw] sm:max-w-[560px] sm:-translate-x-1/2 lg:left-[637px] lg:top-[96px] lg:h-[647px] lg:w-[647px] lg:max-w-none lg:translate-x-0"
        />
      </section>
    </>
  );
}