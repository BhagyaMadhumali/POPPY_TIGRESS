export default function MarqueeBar() {
  const items = Array(10).fill("#POPPYTIGRESS");

  return (
    <div className="w-full overflow-hidden bg-[#5B3232]">
      <div className="flex h-[72px] w-max animate-marquee items-center gap-6 md:h-[95px] lg:h-[125px]">
        {[...items, ...items].map((text, index) => (
          <div key={index} className="flex shrink-0 items-center gap-4">
            <img
              src="/marquee-tiger.png"
              alt="Tiger"
              className="h-[54px] w-[54px] rounded-full object-cover md:h-[74px] md:w-[74px] lg:h-[93px] lg:w-[93px]"
            />
<span className="font-['Jaini'] text-[32px] leading-[34px] md:text-[48px] md:leading-[44px] lg:text-[64px] lg:leading-[54px]">
  <span className="text-white">#</span>
  <span className="text-[#F15B50]">POPPYTIGRESS</span>
</span>
          </div>
        ))}
      </div>
    </div>
  );
}