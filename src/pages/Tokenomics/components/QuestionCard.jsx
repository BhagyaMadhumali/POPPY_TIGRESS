export default function QuestionCard({
  title,
  mirror = false,
  className = "",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`${className} relative h-[219px] w-[343px] cursor-pointer opacity-100 sm:absolute sm:h-[330px] sm:w-[560px] lg:h-[457px] lg:w-[780px]`}
    >
      <div className="relative h-full w-full">
        {/* SCROLL IMAGE */}
        <img
          src="/roadmap-scroll.png"
          alt=""
          draggable="false"
          className={`absolute z-20 object-fill opacity-100 ${
            mirror
              ? "left-[250px] top-[7px] h-[205px] w-[105px] scale-x-[-1] sm:left-auto sm:right-[14%] sm:top-[11%] sm:h-[64%] sm:w-[40%] lg:right-[14%]"
              : "left-[-32px] top-[7px] h-[205px] w-[125px] sm:left-[14%] sm:top-[11%] sm:h-[64%] sm:w-[40%]"
          }`}
        />

        {/* QUESTION CLOUD */}
        <img
          src="/question-cloud.png"
          alt=""
          draggable="false"
          className={`absolute z-10 object-fill opacity-100 ${
            mirror
              ? "left-[-0.08px] top-[22px] h-[186px] w-[343.079px] scale-x-[-1] sm:left-auto sm:right-[30%] sm:top-[10%] sm:h-[68%] sm:w-[70%] lg:right-[30%]"
              : "left-[-5px] top-[17px] h-[191px] w-[352.302px] sm:left-[30%] sm:top-[10%] sm:h-[68%] sm:w-[70%]"
          }`}
        />

        {/* TITLE */}
        <h3
          className={`absolute z-30 text-center font-['Jaini'] font-normal text-white ${
            mirror
              ? "left-[77px] top-[77px] h-[65px] w-[194px] text-[36px] leading-[34px] sm:left-auto sm:right-[36%] sm:top-[36%] sm:w-[48%] sm:text-[24px] sm:leading-[26px] lg:text-[44px] lg:leading-[46px]"
              : "left-[78px] top-[68px] h-[84px] w-[194px] text-[36px] leading-[34px] sm:left-[36%] sm:top-[36%] sm:w-[48%] sm:text-[24px] sm:leading-[26px] lg:text-[44px] lg:leading-[46px]"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}