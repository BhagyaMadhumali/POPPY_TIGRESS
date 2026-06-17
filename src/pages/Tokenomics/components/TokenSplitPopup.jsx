export default function TokenSplitPopup({ onClose }) {
  return (
    <div
      className="absolute inset-0 z-[999] min-h-screen w-full bg-transparent"
      onClick={onClose}
    >
      {/* MOBILE VIEW - MORE LEFT + BIGGER */}
      <div className="absolute left-[-90px] top-[10px] block h-[380px] w-[420px] opacity-100 sm:hidden">
        <div
          className="relative h-full w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/token-split-bg.png"
            alt="Token Split"
            className="absolute inset-0 h-full w-full object-fill"
          />

          <div className="absolute left-1/2 top-[58px] flex h-[185px] w-[260px] -translate-x-1/2 flex-col items-center gap-[30px] text-center opacity-100">
            <p className="h-[16px] w-[260px] text-center font-['Jaini'] text-[22px] font-normal leading-[16px] text-white">
              50% Liquidity
            </p>

            <p className="h-[16px] w-[260px] text-center font-['Jaini'] text-[22px] font-normal leading-[16px] text-white">
              35% Airdrop
            </p>

            <p className="h-[42px] w-[260px] text-center font-['Jaini'] text-[22px] font-normal leading-[24px] text-white">
              10% Marketing and
              <br />
              Exchanges
            </p>

            <p className="h-[16px] w-[260px] text-center font-['Jaini'] text-[22px] font-normal leading-[16px] text-white">
              5% Team
            </p>
          </div>
        </div>
      </div>

      {/* TABLET + DESKTOP VIEW - KEEP AS IT IS */}
      <div className="hidden min-h-screen w-full items-start justify-center px-3 py-6 sm:flex sm:px-6 sm:py-10 lg:justify-start lg:px-0">
        <div
          className="relative h-[720px] w-[96vw] max-w-[680px] lg:ml-[80px] lg:mt-[-60px] lg:h-[860px] lg:w-[1050px] lg:max-w-none"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/token-split-bg.png"
            alt="Token Split"
            className="absolute inset-0 h-full w-full object-fill"
          />

          <div className="absolute left-1/2 top-[17%] flex w-[62%] -translate-x-1/2 flex-col items-center gap-8 text-center lg:gap-10">
            <p className="font-['Jaini'] text-[40px] leading-[42px] text-white lg:text-[50px] lg:leading-[52px]">
              50% Liquidity
            </p>

            <p className="font-['Jaini'] text-[40px] leading-[42px] text-white lg:text-[50px] lg:leading-[52px]">
              35% Airdrop
            </p>

            <p className="font-['Jaini'] text-[40px] leading-[42px] text-white lg:text-[50px] lg:leading-[52px]">
              10% Marketing and
              <br />
              Exchanges
            </p>

            <p className="font-['Jaini'] text-[40px] leading-[42px] text-white lg:text-[50px] lg:leading-[52px]">
              5% Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}