import { useState } from "react";

const buySteps = [
  { title: "Buy Some TRX" },
  { title: "Type The Amount" },
  { title: "Get PoppyTigress" },
];

export default function HowToBuy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % buySteps.length);
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev === 0 ? buySteps.length - 1 : prev - 1));
  };

  const handleMoveEnd = (endX) => {
    const diff = touchStart - endX;

    if (diff > 50) nextItem();
    if (diff < -50) prevItem();
  };

  const StepCard = ({ step }) => (
    <div className="relative h-[240px] w-[340px] sm:h-[310px] sm:w-[430px] lg:h-[360px] lg:w-[520px]">
      <img
        src="/roadmap-popup.png"
        alt=""
        draggable="false"
        className="h-full w-full object-fill"
      />

      <div className="absolute left-1/2 top-[45%] flex w-[45%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <h3 className="font-['Jaini'] text-[18px] leading-[20px] text-white sm:text-[24px] sm:leading-[26px] lg:text-[32px] lg:leading-[34px]">
          {step.title}
        </h3>

        <p className="mt-4 font-['Jaini'] text-[10px] leading-[13px] text-white sm:text-[13px] sm:leading-[17px] lg:text-[16px] lg:leading-[20px]">
          This is a short explanation.
          <br />
          Make it short and clear
          <br />
          to keep students attentive.
        </p>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-[900px] w-full overflow-hidden bg-white sm:min-h-[1000px] lg:min-h-[901px]">
      <img
        src="/bg-left.png"
        alt=""
        className="absolute bottom-[-45px] left-0 z-0 h-full max-h-[850px] w-auto object-contain"
      />

      <img
        src="/bg-left.png"
        alt=""
        className="absolute bottom-[-45px] right-0 z-0 h-full max-h-[850px] w-auto scale-x-[-1] object-contain"
      />

      <img
        src="/temple.png"
        alt="Temple"
        className="absolute bottom-[-150px] left-1/2 z-10 w-[95%] max-w-[750px] -translate-x-1/2 object-contain sm:w-[75%] lg:w-[48%]"
      />

      {/* Mobile carousel */}
      <div
        className="relative z-30 flex min-h-[900px] cursor-grab select-none flex-col items-center justify-center lg:hidden"
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleMoveEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => setTouchStart(e.clientX)}
        onMouseUp={(e) => handleMoveEnd(e.clientX)}
      >
        <StepCard step={buySteps[activeIndex]} />
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <div className="absolute left-[27%] top-[18%] z-30 -translate-x-1/2">
          <StepCard step={buySteps[0]} />
        </div>

        <div className="absolute left-1/2 top-[0%] z-30 -translate-x-1/2">
          <StepCard step={buySteps[1]} />
        </div>

        <div className="absolute left-[73%] top-[18%] z-30 -translate-x-1/2">
          <StepCard step={buySteps[2]} />
        </div>
      </div>
    </section>
  );
}