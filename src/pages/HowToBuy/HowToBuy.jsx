import { useRef } from "react";
import MarqueeBar from "../../components/MarqueeBar/MarqueeBar";

const steps = [
  {
    title: "Buy Same Trx",
    cardClass: "lg:left-[189px] lg:top-[198px]",
    titleClass: "lg:w-[149px]",
  },
  {
    title: "Type The Amount",
    cardClass: "lg:left-[696px] lg:top-0",
    titleClass: "lg:w-[198px]",
  },
  {
    title: "Get PoppyTigress",
    cardClass: "lg:left-[1181px] lg:top-[197px]",
    titleClass: "lg:w-[198px]",
  },
];

function HowToBuyCard({ title, cardClass, titleClass }) {
  return (
    <div
      className={`relative h-[400px] w-[342px] shrink-0 lg:absolute lg:h-[516px] lg:w-[516px] ${cardClass}`}
    >
      <img
        src="/roadmap-popup.png"
        alt=""
        draggable="false"
        className="absolute inset-0 h-full w-full object-fill"
      />

      <div className="absolute left-1/2 top-1/2 flex h-[161px] w-[177px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-start gap-[14px] text-center lg:left-[142px] lg:top-[151px] lg:h-[173px] lg:w-[232px] lg:translate-x-0 lg:translate-y-0 lg:gap-[40px]">
        <h3
          className={`flex h-[49px] items-center justify-center text-center font-['Jaini'] text-[32px] font-normal leading-[25px] text-white lg:h-[49px] lg:text-[32px] ${titleClass}`}
        >
          {title}
        </h3>

        <p className="h-[112px] w-[177px] text-center font-['Jaini'] text-[21px] font-normal leading-[100%] text-white lg:h-[84px] lg:w-[232px] lg:text-[21px]">
          This is a short explanation. make it short and clear to keep students
          attentive.
        </p>
      </div>
    </div>
  );
}

export default function HowToBuy() {
  const sliderRef = useRef(null);
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const startDrag = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    dragRef.current.isDown = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.scrollLeft = slider.scrollLeft;

    slider.setPointerCapture?.(e.pointerId);
  };

  const moveDrag = (e) => {
    const slider = sliderRef.current;
    if (!slider || !dragRef.current.isDown) return;

    const x = e.clientX;
    const walk = x - dragRef.current.startX;

    slider.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const endDrag = () => {
    dragRef.current.isDown = false;
  };

  return (
    <>
      <section
        id="how-to-buy"
        className="relative h-[720px] w-full overflow-hidden bg-white lg:-mt-[14px] lg:h-[1098px]"
      >
        {/* LEFT BG */}
        <img
          src="/bg-left.png"
          alt=""
          className="absolute left-[-10px] top-[326px] z-0 h-[392px] w-[196.65260314941406px] object-cover opacity-100 lg:left-0 lg:top-[197px] lg:block lg:h-[901px] lg:w-[452px]"
        />

        {/* RIGHT BG - MIRROR OF LEFT */}
        <img
          src="/bg-left.png"
          alt=""
          className="absolute z-0 hidden scale-x-[-1] object-cover opacity-100 lg:left-[1471px] lg:top-[197px] lg:block lg:h-[901px] lg:w-[452px]"
        />

        {/* MOBILE TEMPLE - LITTLE BELOW + ZOOMED */}
        <img
          src="/temple.png"
          alt="Temple"
          className="absolute left-[80px] top-[455px] z-10 h-[330px] w-[540px] max-w-none object-contain opacity-100 lg:hidden"
        />

        {/* DESKTOP TEMPLE - KEEP AS IT IS */}
        <img
          src="/temple.png"
          alt="Temple"
          className="absolute z-10 hidden lg:left-1/2 lg:top-[420px] lg:block lg:h-[840px] lg:w-[1390px] lg:-translate-x-1/2 lg:scale-[1.12] lg:object-contain"
        />

        {/* MOBILE DRAG SLIDER - NO ARROWS */}
        <div
          ref={sliderRef}
          className="absolute left-[33px] top-[122px] z-30 flex h-[400px] w-[342px] cursor-grab select-none snap-x snap-mandatory gap-[24px] overflow-x-auto overflow-y-hidden scroll-smooth active:cursor-grabbing lg:hidden [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            touchAction: "pan-y",
          }}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {steps.map((step) => (
            <div
              key={step.title}
              className="h-[400px] w-[342px] shrink-0 snap-start"
            >
              <HowToBuyCard
                title={step.title}
                cardClass=""
                titleClass={step.titleClass}
              />
            </div>
          ))}
        </div>

        {/* DESKTOP CARDS */}
        <div className="relative z-30 hidden h-full w-full lg:block">
          {steps.map((step) => (
            <HowToBuyCard
              key={step.title}
              title={step.title}
              cardClass={step.cardClass}
              titleClass={step.titleClass}
            />
          ))}
        </div>
      </section>

      <MarqueeBar />
    </>
  );
}