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
      {/* MENU BUTTON - FIXED */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="fixed right-[30px] top-[173px] z-[9999] flex h-[64px] w-[64px] items-center justify-center rounded-[58px] bg-black px-[5px] py-[6px] transition duration-300 ease-out sm:right-[7%] sm:top-[160px] sm:h-[68px] sm:w-[68px] lg:left-[1745px] lg:right-auto lg:top-[141px] lg:h-[96px] lg:w-[96px] lg:rounded-[58px] lg:px-[5px] lg:py-[6px]"
      >
        <div className="flex flex-col items-center justify-center gap-[5px] lg:gap-[6px]">
          <span className="block h-[4px] w-[28px] rounded-full bg-[#F15B50] lg:h-[5px] lg:w-[37px]" />
          <span className="block h-[4px] w-[28px] rounded-full bg-[#F15B50] lg:h-[5px] lg:w-[37px]" />
          <span className="block h-[4px] w-[28px] rounded-full bg-[#F15B50] lg:h-[5px] lg:w-[37px]" />
        </div>
      </button>

      {/* SIDEBAR OVERLAY - FIXED */}
      {open && (
        <div className="fixed inset-0 z-[9998] bg-black/30">
          <div className="absolute left-[16px] top-[16px] h-[705px] w-[343px] rounded-[16px] bg-[#5B3232] p-[16px] opacity-100 transition duration-300 ease-out sm:left-auto sm:right-5 sm:top-5 sm:h-auto sm:min-h-[620px] sm:w-[88vw] sm:max-w-[500px] sm:rounded-[20px] sm:p-0 lg:right-[40px] lg:top-[96px] lg:h-[889px] lg:min-h-0 lg:w-[654px] lg:max-w-none">
            {/* CLOSE BUTTON */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-[16px] top-[16px] z-20 flex h-[39px] w-[39px] items-center justify-center transition duration-300 ease-out sm:right-[22px] sm:top-[24px] sm:h-[52px] sm:w-[52px] lg:left-[509px] lg:right-auto lg:top-[54px] lg:h-[92px] lg:w-[92px]"
            >
              <svg
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[34.125px] w-[34.125px] sm:h-[46px] sm:w-[46px] lg:h-[80.5px] lg:w-[80.5px]"
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
            <nav className="absolute left-[16px] top-[16px] flex h-[673px] w-[251px] flex-col gap-[35px] opacity-100 sm:left-[40px] sm:top-[110px] sm:h-auto sm:w-[70%] sm:gap-[18px] lg:left-[72px] lg:top-[47px] lg:w-[368px] lg:gap-[23px]">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="flex h-[81px] w-[251px] items-center justify-center gap-[10px] rounded-[20px] bg-[#F15B50] px-[15px] py-[20px] text-center font-['Jaini'] text-[48px] font-normal leading-[48px] text-white shadow-[6px_7px_0px_0px_#000000] transition duration-300 ease-out sm:h-[68px] sm:w-full sm:text-[28px] lg:h-[106px] lg:w-[368px] lg:rounded-[20px] lg:text-[48px] lg:leading-[48px]"
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