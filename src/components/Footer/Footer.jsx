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
      <div className="mx-auto max-w-[1850px] px-4 py-10">
        <div className="overflow-hidden rounded-[12px] border-[6px] border-[#D61E00] bg-white">
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center border-[#D61E00] py-8 lg:w-[520px] lg:border-r-[6px]">
              <h2 className="mb-8 font-['Jaini'] text-[42px] text-black lg:text-[52px]">
                FOLLOW US
              </h2>

              <div className="flex gap-5">
                {["facebook", "twitter", "telegram", "discord"].map((icon) => (
                  <div
                    key={icon}
                    className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-black"
                  >
                    <img
                      src={`/${icon}.png`}
                      alt={icon}
                      className="h-[24px] w-[24px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="flex h-[86px] items-center justify-center rounded-[16px] bg-[#F15B50] font-['Jaini'] text-[34px] text-white shadow-[5px_5px_0px_#000]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[40px] items-center justify-center bg-[#5B3232]">
        <p className="font-['Jaini'] text-[18px] text-white">
          © Copyright 2025 all right reserved by Poppytigress
        </p>
      </div>
    </footer>
  );
}