import QuestionCard from "./QuestionCard";

export default function QuestionPopup({ title, description, mirror, onClose }) {
  return (
    <div className="fixed inset-0 z-[999] bg-white" onClick={onClose}>
      <div
        className="relative h-full w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background image hidden on mobile */}
        <img
          src="/bg-left.png"
          alt=""
          className={`absolute top-[20px] z-0 hidden h-[1300px] w-[800px] object-contain lg:block ${
            mirror ? "right-[-120px] scale-x-[-1]" : "left-[-120px]"
          }`}
        />

        <QuestionCard
          title={title}
          mirror={mirror}
          className={`top-[35px] z-30 sm:top-[30px] lg:top-[20px] ${
            mirror ? "right-[-40px] sm:right-[2%]" : "left-[-40px] sm:left-[4%]"
          }`}
        />

        <p
          className={`absolute top-[230px] z-20 w-[88%] text-center font-['Jaini'] text-[16px] leading-[21px] text-black sm:top-[330px] sm:text-[30px] sm:leading-[34px] lg:top-[43%] lg:max-w-[1079px] lg:text-[50px] lg:leading-[54px] ${
            mirror
              ? "left-1/2 -translate-x-1/2 lg:right-[20%] lg:left-auto lg:translate-x-0"
              : "left-1/2 -translate-x-1/2"
          }`}
        >
          {description}
        </p>

        <img
          src="/temple.png"
          alt=""
          className={`absolute bottom-[-40px] z-10 w-[95%] max-w-[380px] object-contain sm:max-w-[620px] lg:hidden ${
            mirror ? "right-[-80px]" : "left-[-80px]"
          }`}
        />

        <img
          src="/tiger.png"
          alt=""
          className={`absolute bottom-[-55px] z-30 h-[330px] w-[230px] object-contain sm:h-[520px] sm:w-[360px] lg:bottom-[-160px] lg:h-[1050px] lg:w-[720px] ${
            mirror
              ? "left-[-55px]"
              : "right-[-55px] scale-x-[-1] lg:right-[-110px]"
          }`}
        />

        <button
          onClick={onClose}
          className="absolute bottom-[10px] left-[10px] z-40 h-[44px] w-[44px] rounded-full bg-[#D9D9D9] text-2xl font-bold sm:h-[56px] sm:w-[56px] lg:h-[66px] lg:w-[66px] lg:text-4xl"
        >
          ←
        </button>
      </div>
    </div>
  );
}