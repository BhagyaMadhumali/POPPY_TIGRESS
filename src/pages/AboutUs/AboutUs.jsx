export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative h-[694px] w-full overflow-hidden bg-black lg:h-[902px]"
    >
      {/* BACKGROUND - MOBILE FULL ABOUT SIZE */}
      <img
        src="/about-bg.png"
        alt="About background"
        className="absolute left-0 top-0 h-[694px] w-full object-cover object-center opacity-100 lg:h-[902px] lg:w-full"
      />

      {/* ABOUT US TITLE */}
      <h2 className="absolute left-[105px] top-[55px] z-20 h-[31px] w-[165px] text-center font-['Jaini'] text-[48px] font-normal leading-[40px] tracking-normal text-white lg:left-[330px] lg:top-[134px] lg:h-[82px] lg:w-[411px] lg:text-[128px] lg:leading-[73px]">
        ABOUT US
      </h2>

      {/* TEXT BOX */}
      <div className="absolute left-[16px] top-[133px] z-20 flex h-[156px] w-[343px] items-center justify-center gap-[10px] rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.64)_50%,rgba(255,255,255,0.64)_50%)] p-[16px] lg:left-[139px] lg:top-[264px] lg:h-[557px] lg:w-[765px] lg:rounded-[20px] lg:bg-[linear-gradient(180deg,rgba(255,252,252,0.64)_50%,rgba(255,255,255,0.64)_50%)] lg:px-[46px] lg:py-[65px]">
        <p className="h-[124px] w-[311px] text-center font-['Jaini'] text-[20px] font-normal leading-[16px] tracking-normal text-black lg:h-[415px] lg:w-[673px] lg:text-[48px] lg:leading-[48px]">
          PoppyTigress blends strength and elegance, inspired by the fearless
          tigress and vibrant poppies. It symbolizes power, energy, and growth,
          bringing bold innovation to the digital world. Whether you're a crypto
          enthusiast or a newcomer, join a community driven by ambition,
          creativity, and unstoppable progress!
        </p>
      </div>

      {/* ABOUT TIGER */}
      <img
        src="/about-tiger.png"
        alt="About tiger"
        className="absolute left-[31.5px] top-[314px] z-20 h-[312px] w-[312px] object-contain opacity-100 lg:left-[886px] lg:top-[236.39px] lg:h-[614.7001149671547px] lg:w-[614.7001149671547px] lg:rotate-[-0.23deg]"
      />
    </section>
  );
}