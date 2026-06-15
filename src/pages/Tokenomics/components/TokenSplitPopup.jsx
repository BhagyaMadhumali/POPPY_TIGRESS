export default function TokenSplitPopup({ onClose }) {
  return (
    <div
      className="absolute inset-0 z-[999] min-h-screen w-full bg-transparent"
      onClick={onClose}
    >
      <div className="flex min-h-screen w-full items-start justify-center px-3 py-6 sm:px-6 sm:py-10 lg:justify-start lg:px-0">
        <div
          className="relative h-[520px] w-[96vw] max-w-[420px] sm:h-[720px] sm:max-w-[680px] lg:ml-[80px] lg:mt-[-60px] lg:h-[860px] lg:w-[1050px] lg:max-w-none"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/token-split-bg.png"
            alt="Token Split"
            className="absolute inset-0 h-full w-full object-fill"
          />

          <div className="absolute left-1/2 top-[17%] flex w-[62%] -translate-x-1/2 flex-col items-center gap-5 text-center sm:gap-8 lg:gap-10">
            <p className="font-['Jaini'] text-[26px] leading-[30px] text-white sm:text-[40px] sm:leading-[42px] lg:text-[50px] lg:leading-[52px]">
              50% Liquidity
            </p>

            <p className="font-['Jaini'] text-[26px] leading-[30px] text-white sm:text-[40px] sm:leading-[42px] lg:text-[50px] lg:leading-[52px]">
              35% Airdrop
            </p>

            <p className="font-['Jaini'] text-[26px] leading-[30px] text-white sm:text-[40px] sm:leading-[42px] lg:text-[50px] lg:leading-[52px]">
              10% Marketing and
              <br />
              Exchanges
            </p>

            <p className="font-['Jaini'] text-[26px] leading-[30px] text-white sm:text-[40px] sm:leading-[42px] lg:text-[50px] lg:leading-[52px]">
              5% Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}