export default function AboutUs() {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden bg-black md:min-h-screen">
      {/* Background */}
      {/* Background */}
<img
  src="/about-bg.png"
  alt="About background"
  className="absolute left-0 top-[-80px] h-[calc(100%+180px)] w-full object-cover object-[58%_center] md:top-0 md:h-full md:object-center"
/>

      {/* Content */}
      <div className="relative z-20 flex min-h-[820px] w-full flex-col items-center px-4 pt-10 md:min-h-screen lg:block">
        {/* Title */}
        <h2 className="text-center font-['Jaini'] text-[40px] leading-none text-white sm:text-[58px] md:text-[70px] lg:absolute lg:left-[7%] lg:top-[14%] lg:w-[38%] lg:text-[86px]">
          ABOUT US
        </h2>

        {/* Text box */}
        <div className="mt-4 flex w-full max-w-[360px] items-center justify-center rounded-[20px] bg-white/60 px-3 py-4 backdrop-blur-[1px] sm:max-w-[520px] md:max-w-[620px] lg:absolute lg:left-[7%] lg:top-[33%] lg:h-[540px] lg:w-[38%] lg:max-w-[765px] lg:px-8 lg:py-8">
          <p className="text-center font-['Jaini'] text-[16px] leading-[18px] text-black sm:text-[28px] sm:leading-[32px] md:text-[34px] md:leading-[38px] lg:text-[38px] lg:leading-[42px]">
            PoppyTigress blends strength and elegance, inspired by the fearless
            tigress and vibrant poppies. It symbolizes power, energy, and growth,
            bringing bold innovation to the digital world. Whether you're a crypto
            enthusiast or a newcomer, join a community driven by ambition,
            creativity, and unstoppable progress!
          </p>
        </div>

        {/* Tiger */}
        <img
          src="/about-tiger.png"
          alt="About tiger"
          className="mt-8 w-[82vw] max-w-[420px] rotate-[0.23deg] object-contain sm:max-w-[500px] md:max-w-[560px] lg:absolute lg:bottom-[7%] lg:right-[22%] lg:mt-0 lg:w-[32vw] lg:max-w-[615px]"
        />
      </div>
    </section>
  );
}