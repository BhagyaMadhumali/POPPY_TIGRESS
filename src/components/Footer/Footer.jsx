export default function Footer() {
  const menuItems = [
    { name: "HOME", path: "#home" },
    { name: "ABOUT US", path: "#about" },
    { name: "ROADMAP", path: "#roadmap" },
    { name: "HOW TO BUY", path: "#how-to-buy" },
    { name: "TOKENOMICS", path: "#tokenomics" },
    { name: "FAQ", path: "#faq" },
  ];

  return (
    <footer className="w-full bg-white">
      {/* Footer section: main box + copyright bar */}
      <div className="flex w-full flex-col items-center gap-[36px] lg:gap-[13px]">
        {/* Main footer box */}
        <div className="h-[781px] w-[343px] rounded-[16px] bg-gradient-to-b from-[#BC0300] to-[#FD3100] p-[5px] opacity-100 lg:h-[328px] lg:w-full lg:max-w-[1717px] lg:rounded-[20px] lg:p-[12px]">
          <div className="relative h-full w-full overflow-hidden rounded-[11px] bg-white lg:rounded-[8px]">
            {/* Mobile layout */}
            <div className="relative h-full w-full lg:hidden">
              {/* Follow section */}
              <div className="absolute left-0 top-0 h-[197px] w-full border-b-[5px] border-[#D61E00] bg-white">
                <h2 className="absolute left-1/2 top-[25px] h-[31px] w-[174px] -translate-x-1/2 text-center font-['Jaini'] text-[48px] font-normal leading-[40px] text-black">
                  FOLLOW US
                </h2>

                <div className="absolute left-[27px] top-[101px] flex h-[50px] w-[279px] items-center gap-[26px]">
                  <button
                    type="button"
                    aria-label="facebook"
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-[36.5px] bg-black"
                  >
                    <img
                      src="/facebook.png"
                      alt=""
                      className="h-[18px] w-[18px] object-contain"
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="twitter"
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-[36.5px] bg-black"
                  >
                    <img
                      src="/twitter.png"
                      alt=""
                      className="h-[18px] w-[18px] object-contain"
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="telegram"
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-[36.5px] bg-black"
                  >
                    <img
                      src="/telegram.png"
                      alt=""
                      className="h-[24px] w-[24px] object-contain"
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="discord"
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-[36.5px] bg-black"
                  >
                    <img
                      src="/discord.png"
                      alt=""
                      className="h-[20px] w-[22px] object-contain"
                    />
                  </button>
                </div>
              </div>

              {/* Mobile menu buttons */}
              <div className="absolute left-[13px] top-[221px] flex h-[507px] w-[307px] flex-col gap-[33px]">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="flex h-[57px] w-[307px] items-center justify-center gap-[10px] rounded-[20px] bg-[#F15B50] px-[15px] py-[20px] text-center font-['Jaini'] text-[36px] font-normal leading-[34px] text-white shadow-[6px_7px_0px_0px_#000000]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop layout - kept as it is */}
            <div className="hidden lg:block">
              {/* Left follow section */}
              <div className="absolute left-0 top-0 h-[304px] w-[499px] bg-white">
                <h2 className="absolute left-1/2 top-[54px] -translate-x-1/2 whitespace-nowrap font-['Jaini'] text-[52px] font-normal leading-[52px] text-black">
                  FOLLOW US
                </h2>

                <div className="absolute left-[58px] top-[152px] flex h-[73px] w-[371px] items-center gap-[26px]">
                  <button
                    type="button"
                    aria-label="facebook"
                    className="flex h-[73px] w-[73px] items-center justify-center rounded-[36.5px] bg-black p-[24px]"
                  >
                    <img
                      src="/facebook.png"
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="twitter"
                    className="flex h-[73px] w-[73px] items-center justify-center rounded-[36.5px] bg-black p-[24px]"
                  >
                    <img
                      src="/twitter.png"
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="telegram"
                    className="flex h-[73px] w-[73px] items-center justify-center rounded-[36.5px] bg-black p-[22px]"
                  >
                    <img
                      src="/telegram.png"
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="discord"
                    className="flex h-[73px] w-[73px] items-center justify-center rounded-[36.5px] bg-black p-[22px]"
                  >
                    <img
                      src="/discord.png"
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="absolute left-[499px] top-0 h-[304px] w-[12px] bg-gradient-to-b from-[#BC0300] to-[#FD3100]" />

              {/* Right menu buttons */}
              <div className="absolute left-[529px] top-[34px] grid h-[237px] w-[1146px] grid-cols-3 gap-[21px]">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="flex h-[106px] w-[368px] items-center justify-center rounded-[20px] bg-[#F15B50] px-[15px] py-[20px] font-['Jaini'] text-[48px] font-normal leading-[48px] text-white shadow-[6px_7px_0px_0px_#000000]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex h-[37px] w-full items-center justify-center gap-[10px] bg-[#5B3232] px-[16px] py-[16px] lg:h-[40px] lg:py-[13px]">
          <p className="flex h-[17px] w-[264px] items-center justify-center text-center font-['Jaini'] text-[12px] font-normal leading-[100%] text-white lg:h-[16px] lg:w-[438px] lg:text-[20px] lg:leading-[16px]">
            © Copyright 2025 all right reserved by Poppytigress
          </p>
        </div>
      </div>
    </footer>
  );
}