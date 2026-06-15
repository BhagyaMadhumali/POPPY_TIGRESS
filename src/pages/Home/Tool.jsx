import { useEffect } from "react";

export default function Tool({ onBack }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const tools = [
    {
      icon: "/coingecko.png",
      className: "left-[4%] top-[8%]",
      iconClass: "h-[150px] w-[150px]",
    },
    {
      icon: "/gateio.png",
      className: "left-[22%] top-[25%]",
      iconClass: "h-[145px] w-[145px]",
    },
    {
      icon: "/jupiter.png",
      label: "Jupiter",
      className: "left-[40%] top-[8%]",
      iconClass: "h-[145px] w-[145px]",
    },
    {
      icon: "/download.png",
      className: "left-[58%] top-[34%]",
      iconClass: "h-[120px] w-[210px]",
    },
    {
      icon: "/dextools.png",
      label: "Dextools",
      className: "left-[76%] top-[8%]",
      iconClass: "h-[160px] w-[160px]",
    },
  ];

  return (
    <section className="fixed inset-0 z-[9999] overflow-hidden bg-black">
      <img
        src="/tools-bg.png"
        alt="Tools background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <button
        onClick={onBack}
        className="absolute bottom-5 left-5 z-50 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white font-['Jaini'] text-3xl text-black"
      >
        ←
      </button>

      <div className="relative z-10 h-full w-full">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`absolute h-[560px] w-[600px] ${tool.className}`}
          >
            <img
              src="/token-split-bg.png"
              alt=""
              className="absolute inset-0 h-full w-full object-fill"
            />

            <img
              src={tool.icon}
              alt=""
              className={`absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 object-contain ${tool.iconClass}`}
            />

            {tool.label && (
              <p className="absolute left-1/2 top-[47%] -translate-x-1/2 text-center font-['Jaini'] text-[48px] leading-none text-white">
                {tool.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}