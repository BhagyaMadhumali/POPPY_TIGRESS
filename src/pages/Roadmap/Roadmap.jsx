import { useState } from "react";

const roadmapItems = [
  { title: "01 Poppy Tigress", button: "Click 01" },
  { title: "02 Poppy Tigress", button: "Click 02" },
  { title: "03 Poppy Tigress", button: "Click 03" },
  { title: "04 Poppy Tigress", button: "Click 04" },
  { title: "05 PoppyTigress", button: "Click 05" },
];

export default function Roadmap() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const nextItem = () => {
    setSelectedIndex(null);
    setActiveIndex((prev) => (prev + 1) % roadmapItems.length);
  };

  const prevItem = () => {
    setSelectedIndex(null);
    setActiveIndex((prev) =>
      prev === 0 ? roadmapItems.length - 1 : prev - 1
    );
  };

  const handleMoveEnd = (endX) => {
    const diff = touchStart - endX;

    if (diff > 50) nextItem();
    if (diff < -50) prevItem();
  };

  return (
    <section
      onClick={() => setSelectedIndex(null)}
      className="relative min-h-[760px] w-full overflow-hidden bg-black sm:min-h-[850px] lg:min-h-[940px]"
    >
      <img
        src="/roadmap-bg.png"
        alt="Roadmap background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-20 flex min-h-[760px] w-full flex-col items-center justify-center px-4 pt-28 sm:min-h-[850px] sm:pt-44 lg:min-h-[940px] lg:pt-56">
        {/* Mobile carousel */}
        <div
          className="flex w-full cursor-grab select-none flex-col items-center justify-center lg:hidden"
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleMoveEnd(e.changedTouches[0].clientX)}
          onMouseDown={(e) => setTouchStart(e.clientX)}
          onMouseUp={(e) => handleMoveEnd(e.clientX)}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex flex-col items-center">
            <img
              src="/roadmap-scroll.png"
              alt={roadmapItems[activeIndex].button}
              draggable="false"
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === activeIndex ? null : activeIndex
                )
              }
              className="h-[240px] w-[240px] cursor-pointer object-contain sm:h-[300px] sm:w-[300px]"
            />

            {selectedIndex === activeIndex && (
              <div className="absolute left-1/2 top-1/2 z-50 h-[290px] w-[360px] -translate-x-1/2 -translate-y-1/2 sm:h-[410px] sm:w-[510px]">
                <img
                  src="/roadmap-popup.png"
                  alt=""
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-fill"
                />

                <div className="absolute left-1/2 top-[47%] flex w-[56%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                  <h3 className="font-['Jaini'] text-[20px] leading-[22px] text-white sm:text-[28px] sm:leading-[30px]">
                    {roadmapItems[activeIndex].title}
                  </h3>

                  <p className="mt-5 font-['Jaini'] text-[12px] leading-[15px] text-white sm:text-[17px] sm:leading-[21px]">
                    This is a short explanation.
                    <br />
                    Make it short and clear to keep
                    <br />
                    students attentive.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === activeIndex ? null : activeIndex
                )
              }
              className="mt-6 font-['Jaini'] text-[36px] leading-none text-black sm:text-[48px]"
            >
              {roadmapItems[activeIndex].button}
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden w-full max-w-[1540px] grid-cols-5 gap-0 lg:grid">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center justify-center"
            >
              <img
                src="/roadmap-scroll.png"
                alt={item.button}
                draggable="false"
                onClick={() =>
                  setSelectedIndex(selectedIndex === index ? null : index)
                }
                className="h-[301px] w-[301px] cursor-pointer object-contain transition-transform duration-300 hover:scale-105"
              />

              {selectedIndex === index && (
                <div className="absolute left-1/2 top-1/2 z-50 h-[610px] w-[760px] -translate-x-1/2 -translate-y-1/2">
                  <img
                    src="/roadmap-popup.png"
                    alt=""
                    draggable="false"
                    className="absolute inset-0 h-full w-full object-fill"
                  />

                  <div className="absolute left-1/2 top-[47%] flex w-[56%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                    <h3 className="font-['Jaini'] text-[40px] leading-[42px] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-8 font-['Jaini'] text-[24px] leading-[30px] text-white">
                      This is a short explanation.
                      <br />
                      Make it short and clear to keep
                      <br />
                      students attentive.
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={() =>
                  setSelectedIndex(selectedIndex === index ? null : index)
                }
                className="mt-6 font-['Jaini'] text-[52px] leading-none text-black transition hover:scale-105"
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-center font-['Jaini'] text-[48px] leading-none text-black sm:text-[84px] lg:mt-24 lg:text-[128px]">
          ROADMAP
        </h2>
      </div>
    </section>
  );
}