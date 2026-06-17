import { useEffect } from "react";

export default function Tool({ onBack }) {
  useEffect(() => {
    const oldBodyOverflow = document.body.style.overflow;
    const oldHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldBodyOverflow;
      document.documentElement.style.overflow = oldHtmlOverflow;
    };
  }, []);

  return (
    <section className="fixed inset-0 z-[9999] h-screen w-screen overflow-hidden bg-black">
      {/* Background */}
      <img
        src="/tools-bg.png"
        alt="Tools background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Desktop tools layout */}
      <div className="relative hidden h-[1080px] w-[1920px] overflow-hidden lg:block">
        {/* 1 - Coingecko card */}
        <div className="absolute left-[77px] top-[100px] h-[705px] w-[784px]">
          <img
            src="/token-split-bg.png"
            alt=""
            className="absolute left-[190px] top-[365px] h-[705px] w-[784px] -translate-x-1/2 -translate-y-1/2 object-fill"
          />

          <img
            src="/coingecko.png"
            alt="Coingecko"
            className="absolute left-[69px] top-[182px] h-[190px] w-[192px] object-contain"
          />
        </div>

        {/* 2 - Gateio card */}
        <div className="absolute left-[227px] top-[282px] h-[705px] w-[784px]">
          <img
            src="/token-split-bg.png"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />

          <img
            src="/gateio.png"
            alt="Gateio"
            className="absolute left-[293px] top-[167px] h-[181px] w-[181px] object-contain"
          />
        </div>

        {/* 3 - Jupiter card */}
        <div className="absolute left-[589px] top-[112px] h-[705px] w-[784px]">
          <img
            src="/token-split-bg.png"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />

          <img
            src="/jupiter.png"
            alt="Jupiter"
            className="absolute left-[294px] top-[165px] h-[176px] w-[176px] object-contain"
          />

          <p className="absolute left-[321px] top-[359px] h-[22px] w-[131px] text-center font-['Times_New_Roman'] text-[48px] font-normal leading-[14.12px] text-white">
            Jupiter
          </p>
        </div>

        {/* 4 - Download card */}
        <div className="absolute left-[942px] top-[339px] h-[705px] w-[784px]">
          <img
            src="/token-split-bg.png"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />

          <img
            src="/download.png"
            alt="Download"
            className="absolute left-[243px] top-[183px] h-[136px] w-[279px] object-contain"
          />
        </div>

        {/* 5 - Dextools card */}
        <div className="absolute left-[1286px] top-[112px] h-[705px] w-[784px]">
          <img
            src="/token-split-bg.png"
            alt=""
            className="absolute inset-0 h-full w-full object-fill"
          />

          <img
            src="/dextools.png"
            alt="Dextools"
            className="absolute left-[275px] top-[119px] h-[215px] w-[215px] object-contain"
          />

          <p className="absolute left-[289px] top-[347px] h-[22px] w-[187px] text-center font-['Times_New_Roman'] text-[48px] font-normal leading-[14.12px] text-white">
            Dextools
          </p>
        </div>
      </div>

      {/* Mobile / tablet layout */}
      <div className="relative h-full w-full overflow-hidden px-4 py-6 lg:hidden">
        <div className="grid h-full grid-cols-1 place-items-center gap-4 sm:grid-cols-2">
          {[
            { icon: "/coingecko.png", label: "" },
            { icon: "/gateio.png", label: "" },
            { icon: "/jupiter.png", label: "Jupiter" },
            { icon: "/download.png", label: "" },
            { icon: "/dextools.png", label: "Dextools" },
          ].map((tool, index) => (
            <div
              key={index}
              className="relative h-[260px] w-[300px] sm:h-[300px] sm:w-[340px]"
            >
              <img
                src="/token-split-bg.png"
                alt=""
                className="absolute inset-0 h-full w-full object-fill"
              />

              <img
                src={tool.icon}
                alt={tool.label || "tool"}
                className="absolute left-1/2 top-[42%] h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 object-contain"
              />

              {tool.label && (
                <p className="absolute left-1/2 top-[58%] -translate-x-1/2 text-center font-['Times_New_Roman'] text-[28px] leading-none text-white">
                  {tool.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={onBack}
        aria-label="Back to previous position"
        className="absolute bottom-5 left-5 z-[99999] h-[56px] w-[56px] rounded-full bg-[#D9D9D9] opacity-100 transition duration-300 ease-out lg:bottom-[52px] lg:left-[133px] lg:h-[66px] lg:w-[66px] lg:rounded-[33px]"
      >
        <img
          src="/previous_icon.png"
          alt="Previous"
          className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 object-contain lg:h-[34px] lg:w-[34px]"
        />
      </button>
    </section>
  );
}