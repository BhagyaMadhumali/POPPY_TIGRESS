export default function MarqueeBar() {
  const items = Array(10).fill("#POPPYTIGRESS");

  return (
    <div className="relative h-[69px] w-full overflow-hidden bg-[#5B3232] lg:h-[125px]">
      {/* MOVING MARQUEE TRACK */}
      <div className="absolute left-[8px] top-[16px] flex h-[37px] w-[1959px] animate-marquee items-center gap-[9px] opacity-100 lg:left-0 lg:top-[16px] lg:h-[93px] lg:w-[4221px] lg:gap-6">
        {[...items, ...items].map((text, index) => (
          <div
            key={index}
            className="flex h-[37px] w-[263px] shrink-0 items-center gap-[9px] opacity-100 lg:h-[93px] lg:w-auto lg:gap-4"
          >
            {/* TIGER IMAGE */}
            <img
              src="/marquee-tiger.png"
              alt="Tiger"
              className="h-[37px] w-[37px] shrink-0 rounded-full object-cover opacity-100 lg:h-[93px] lg:w-[93px]"
            />

            {/* TEXT */}
            <span className="flex h-[26px] w-[217px] shrink-0 items-center font-['Jaini'] text-[40px] font-normal leading-[54px] tracking-normal lg:h-[41px] lg:w-[347px] lg:text-[64px] lg:leading-[54px]">
              <span className="text-white">#</span>
              <span className="text-[#F15B50]">
                {text.replace("#", "")}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}