import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "ROADMAP", path: "#roadmap" },
    { name: "HOW TO BUY", path: "#how-to-buy" },
    { name: "TOKENOMICS", path: "#tokenomics" },
    { name: "FAQ", path: "#faq" },
  ];

  return (
    <>
      {/* MENU BUTTON */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="fixed right-[7%] top-[132px] z-50 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-black transition duration-300 ease-out sm:top-[160px] sm:h-[68px] sm:w-[68px] lg:left-[1745px] lg:top-[141px] lg:h-[96px] lg:w-[96px] lg:rounded-[58px] lg:px-[5px] lg:py-[6px]"
      >
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <span className="block h-[4px] w-[26px] rounded-full bg-[#F15B50] lg:h-[5px] lg:w-[37px]" />
          <span className="block h-[4px] w-[26px] rounded-full bg-[#F15B50] lg:h-[5px] lg:w-[37px]" />
          <span className="block h-[4px] w-[26px] rounded-full bg-[#F15B50] lg:h-[5px] lg:w-[37px]" />
        </div>
      </button>

      {/* SIDEBAR OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/30">
          <div className="absolute right-3 top-3 h-auto min-h-[620px] w-[88vw] max-w-[430px] rounded-[20px] bg-[#5B3232] opacity-100 transition duration-300 ease-out sm:right-5 sm:top-5 sm:max-w-[500px] lg:right-[40px] lg:top-[96px] lg:h-[889px] lg:w-[654px] lg:max-w-none">
            {/* CLOSE BUTTON */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-[22px] top-[24px] flex h-[52px] w-[52px] items-center justify-center transition duration-300 ease-out sm:h-[64px] sm:w-[64px] lg:left-[509px] lg:top-[54px] lg:h-[92px] lg:w-[92px]"
            >
              <svg
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[46px] w-[46px] sm:h-[58px] sm:w-[58px] lg:h-[80.5px] lg:w-[80.5px]"
              >
                <path
                  d="M8 8L73 73M73 8L8 73"
                  stroke="white"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* MENU ITEMS */}
            <nav className="absolute left-[28px] top-[96px] flex w-[70%] flex-col gap-[16px] sm:left-[40px] sm:top-[110px] sm:gap-[18px] lg:left-[72px] lg:top-[47px] lg:w-[368px] lg:gap-[23px]">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="flex h-[56px] w-full items-center justify-center gap-[10px] rounded-[16px] bg-[#F15B50] px-[15px] py-[20px] text-center font-['Jaini'] text-[22px] font-normal leading-none text-white shadow-[6px_7px_0px_0px_#000000] transition duration-300 ease-out sm:h-[68px] sm:text-[28px] lg:h-[106px] lg:w-[368px] lg:rounded-[20px] lg:text-[48px] lg:leading-[48px]"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}