export default function QuestionCard({
  title,
  mirror = false,
  className = "",
  onClick,
}) {
  return (
   <div
  onClick={onClick}
  className={`${className} h-[150px] w-[290px] cursor-pointer sm:absolute sm:h-[330px] sm:w-[560px] lg:h-[457px] lg:w-[780px]`}
>
      <div className="relative h-full w-full">
        <img
          src="/roadmap-scroll.png"
          alt=""
          className={`absolute top-[11%] z-20 h-[64%] w-[40%] object-fill ${
            mirror ? "right-[14%] scale-x-[-1]" : "left-[14%]"
          }`}
        />

        <img
          src="/question-cloud.png"
          alt=""
          className={`absolute top-[10%] z-10 h-[68%] w-[70%] object-fill ${
            mirror ? "right-[30%] scale-x-[-1]" : "left-[30%]"
          }`}
        />

        <h3
          className={`absolute top-[36%] z-30 w-[48%] text-center font-['Jaini'] text-[16px] leading-[17px] text-white sm:text-[24px] sm:leading-[26px] lg:text-[44px] lg:leading-[46px] ${
            mirror ? "right-[36%]" : "left-[36%]"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}