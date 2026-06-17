import { useRef, useState } from "react";

const roadmapItems = [
  {
    title: "01 PoppyTigress",
    button: "Click 01",
    scrollLeft: 239,
    buttonLeft: 349,
  },
  {
    title: "02 PoppyTigress",
    button: "Click 02",
    scrollLeft: 540,
    buttonLeft: 650,
  },
  {
    title: "03 PoppyTigress",
    button: "Click 03",
    scrollLeft: 842,
    buttonLeft: 952,
  },
  {
    title: "04 PoppyTigress",
    button: "Click 04",
    scrollLeft: 1144,
    buttonLeft: 1254,
  },
  {
    title: "05 PoppyTigress",
    button: "Click 05",
    scrollLeft: 1445,
    buttonLeft: 1566,
  },
];

function RoadmapPopup({ title, className = "" }) {
  return (
    <div
      className={`absolute z-50 h-[300px] w-[300px] lg:h-[516px] lg:w-[516px] ${className}`}
    >
      <img
        src="/roadmap-popup.png"
        alt=""
        draggable="false"
        className="absolute inset-0 h-full w-full object-fill"
      />

      <div className="absolute left-1/2 top-1/2 flex w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[28px] text-center lg:left-[142px] lg:top-[151px] lg:h-[173px] lg:w-[232px] lg:translate-x-0 lg:translate-y-0 lg:gap-[40px]">
        <h3 className="text-center font-['Jaini'] text-[26px] font-normal leading-[25px] text-white lg:h-[49px] lg:w-[149px] lg:text-[32px]">
          {title}
        </h3>

        <p className="w-[190px] text-center font-['Jaini'] text-[16px] font-normal leading-[100%] text-white lg:h-[84px] lg:w-[232px] lg:text-[21px]">
          This is a short explanation. make it short and clear to keep students
          attentive.
        </p>
      </div>
    </div>
  );
}

function RoadmapScrollItem({ item, index, selectedIndex, setSelectedIndex }) {
  const isOpen = selectedIndex === index;

  return (
    <div
      className="absolute hidden lg:block"
      style={{
        left: `${item.scrollLeft}px`,
        top: "371px",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-[301px] w-[301px]">
        <img
          src="/roadmap-scroll.png"
          alt={item.button}
          draggable="false"
          onClick={() => setSelectedIndex(isOpen ? null : index)}
          className="h-[301px] w-[301px] cursor-pointer object-contain opacity-100 transition duration-300 ease-out hover:scale-105"
        />

        {isOpen && (
          <RoadmapPopup
            title={item.title}
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </div>
    </div>
  );
}

export default function Roadmap() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sliderRef = useRef(null);
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const startDrag = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    dragRef.current.isDown = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.scrollLeft = slider.scrollLeft;
    dragRef.current.moved = false;

    slider.setPointerCapture?.(e.pointerId);
  };

  const moveDrag = (e) => {
    const slider = sliderRef.current;
    if (!slider || !dragRef.current.isDown) return;

    const x = e.clientX;
    const walk = x - dragRef.current.startX;

    if (Math.abs(walk) > 5) {
      dragRef.current.moved = true;
    }

    slider.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const endDrag = () => {
    dragRef.current.isDown = false;

    setTimeout(() => {
      dragRef.current.moved = false;
    }, 50);
  };

  const handleMobileItemClick = (index) => {
    if (dragRef.current.moved) return;
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <section
      id="roadmap"
      onClick={() => setSelectedIndex(null)}
      className="relative h-[641px] w-full overflow-hidden bg-black lg:h-[940px]"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/roadmap-bg.png"
        alt="Roadmap background"
        className="absolute left-[-2px] top-0 h-[641px] w-[377px] object-cover object-center lg:left-[-6px] lg:top-0 lg:h-[940px] lg:w-[1929px] lg:max-w-none"
      />

      {/* MOBILE ROADMAP DRAG SLIDER */}
      <div
        ref={sliderRef}
        className="absolute left-[105px] top-[158px] z-20 flex h-[326px] w-[270px] cursor-grab select-none gap-[40px] overflow-x-auto overflow-y-hidden scroll-smooth active:cursor-grabbing lg:hidden [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          touchAction: "pan-y",
        }}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClick={(e) => e.stopPropagation()}
      >
        {roadmapItems.map((item, index) => (
          <div key={item.button} className="h-[326px] w-[144px] shrink-0">
            <img
              src="/roadmap-scroll.png"
              alt={item.button}
              draggable="false"
              onClick={() => handleMobileItemClick(index)}
              className="h-[301px] w-[144px] cursor-pointer object-fill opacity-100"
            />

            <button
              onClick={() => handleMobileItemClick(index)}
              className="h-[25px] w-[144px] text-center font-['Jaini'] text-[32px] font-normal leading-[25px] text-black"
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>

      {/* MOBILE POPUP */}
      {selectedIndex !== null && (
        <div className="lg:hidden" onClick={(e) => e.stopPropagation()}>
          <RoadmapPopup
            title={roadmapItems[selectedIndex].title}
            className="left-[37px] top-[170px]"
          />
        </div>
      )}

      {/* MOBILE ROADMAP TITLE */}
      <h2 className="absolute left-[105px] top-[546px] z-20 h-[31px] w-[163px] text-center font-['Jaini'] text-[48px] font-normal leading-[40px] text-black lg:hidden">
        ROADMAP
      </h2>

      {/* DESKTOP ROADMAP */}
      <div className="relative z-20 hidden h-full w-full lg:block">
        {roadmapItems.map((item, index) => (
          <RoadmapScrollItem
            key={index}
            item={item}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ))}

        {/* CLICK BUTTON TEXTS */}
        {roadmapItems.map((item, index) => (
          <button
            key={item.button}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(selectedIndex === index ? null : index);
            }}
            className="absolute top-[672px] z-30 h-[25px] text-left font-['Jaini'] text-[32px] font-normal leading-[25px] text-black transition duration-300 ease-out hover:scale-105"
            style={{
              left: `${item.buttonLeft}px`,
            }}
          >
            {item.button}
          </button>
        ))}

        {/* ROADMAP TITLE */}
        <h2 className="absolute left-[750px] top-[758px] z-20 h-[82px] w-[421px] text-center font-['Jaini'] text-[128px] font-normal leading-[73px] text-black">
          ROADMAP
        </h2>
      </div>
    </section>
  );
}