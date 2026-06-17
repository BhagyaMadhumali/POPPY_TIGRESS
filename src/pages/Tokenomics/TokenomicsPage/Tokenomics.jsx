import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import QuestionPopup from "../components/QuestionPopup";
import TokenSplitPopup from "../components/TokenSplitPopup";

const popupData = {
  earn: {
    title: "How do I earn Tigress Tokens?",
    text: "You can earn Tigress Tokens by actively engaging in various in-game activities such as completing daily and special quests, winning mini-games, and interacting with your virtual tiger through feeding, grooming, and playing. Additionally, you can participate in community events, trading, and referral programs to earn extra tokens.",
  },
  free: {
    title: "Is Tigress free to play?",
    text: "Yes, Tigress is completely free to play, allowing players to adopt and interact with virtual tiger without any initial investment. However, for those who want to enhance their experience, certain premium items, accessories, and advanced gameplay features require Tigress Tokens. Players can earn these tokens through in-game achievements or purchase them for additional benefits.",
  },
  poppy: {
    title: "What is PoppyTigress?",
    text: "PoppyTigress is an immersive blockchain-based game where you can adopt, raise, and interact with virtual tiger that communicate in a unique tiger language. Built on a decentralized platform, PoppyTigress allows players to collect, customize, and train their digital feline companions while earning and spending Tigress Tokens in an evolving ecosystem.",
  },
  token: {
    title: "What are Tigress Tokens?",
    text: "Tigress Tokens are the native cryptocurrency of the Tigress game, functioning as the primary medium of exchange within the ecosystem. These tokens can be used to purchase exclusive accessories, unlock special features, participate in limited-time events, and trade with other players. As a blockchain asset, Tigress Tokens can also hold real-world value.",
  },
};

function MobileQuestionCard({ title, mirror = false, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute left-[16px] h-[219px] w-[343px] opacity-100 transition duration-300 ease-out ${className}`}
    >
      {/* SCROLL SIDE IMAGE */}
      <img
        src="/roadmap-scroll.png"
        alt=""
        draggable="false"
        className={`absolute top-[7px] z-20 h-[205px] w-[105px] object-fill opacity-100 ${
          mirror ? "left-[250px] scale-x-[-1]" : "left-[-18px]"
        }`}
      />

      {/* QUESTION CLOUD IMAGE */}
      <img
        src="/question-cloud.png"
        alt=""
        draggable="false"
        className={`absolute z-10 object-fill opacity-100 ${
          mirror
            ? "left-[-0.08px] top-[22px] h-[186px] w-[343.079px] scale-x-[-1]"
            : "left-[-5px] top-[17px] h-[191px] w-[352.302px]"
        }`}
      />

      {/* CARD TEXT */}
      <p
        className={`absolute z-30 w-[194px] text-center font-['Jaini'] text-[36px] font-normal leading-[34px] text-white ${
          mirror
            ? "left-[77px] top-[77px] h-[65px]"
            : "left-[78px] top-[68px] h-[84px]"
        }`}
      >
        {title}
      </p>
    </button>
  );
}

export default function Tokenomics() {
  const [activePopup, setActivePopup] = useState(null);
  const [showTokenSplit, setShowTokenSplit] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes tokenDissolve {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>

      {/* MOBILE TOP TOKENOMICS SECTION */}
      <section className="relative h-[803px] w-full overflow-hidden bg-white sm:hidden">
        {/* MOBILE TOKENOMICS TITLE */}
        <h2 className="absolute left-[15px] top-0 z-20 h-[31px] w-[343px] text-center font-['Jaini'] text-[48px] font-normal leading-[40px] text-black">
          TOKENOMICS
        </h2>

        {/* MOBILE TOKENOMICS TIGER */}
        <div
          onClick={() => setShowTokenSplit(true)}
          className="absolute left-[94px] top-[124px] z-20 h-[336px] w-[281px] cursor-pointer opacity-100"
        >
          <img
            src="/tokenomics-tiger.png"
            alt="Tokenomics Tiger"
            className="h-full w-full object-contain"
          />
        </div>

        {/* TOKEN SPLIT POPUP */}
        {showTokenSplit && (
          <TokenSplitPopup onClose={() => setShowTokenSplit(false)} />
        )}

      {/* MOBILE CLOUD + SEARCH AREA - HEIGHT INCREASED + MOVED TOP */}
<div className="absolute left-[23px] top-[250px] z-20 h-[520px] w-[329px] opacity-100">
  <img
    src="/tokenomics-cloud.png"
    alt=""
    className="absolute inset-0 h-full w-full object-contain"
  />

  {/* Search box */}
  <div className="absolute left-0 top-[45px] z-30 flex h-[59px] w-[329px] items-center rounded-[16px] border border-black bg-white p-[10px] opacity-100">
    <div className="flex h-[39px] w-[309px] items-center justify-between">
      <div className="flex h-[39px] w-[146px] items-center gap-[20px]">
        <div className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-[19px] bg-[#969696] px-[3px] py-[1px]">
          <img
            src="/searchiconformics.png"
            alt="Search"
            className="h-[17px] w-[15px] object-contain"
          />
        </div>

        <input
          type="text"
          placeholder="Type Here"
          className="h-[25px] w-[87px] bg-transparent font-['Times_New_Roman'] text-[20px] font-normal leading-[25px] text-black outline-none placeholder:text-[#7D7B7B]"
        />
      </div>

      <button
        type="button"
        className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-[19px] bg-[#969696] px-[3px] py-[1px]"
      >
        <img
          src="/sendicon.png"
          alt="Send"
          className="h-[17px] w-[17px] object-contain"
        />
      </button>
    </div>
  </div>

  <p className="absolute left-[84px] top-[120px] z-30 h-[25px] w-[161px] text-center font-['Jaini'] text-[32px] font-normal leading-[25px] text-white">
    Ask a question
  </p>

  <img
    src="/marquee-tiger.png"
    alt=""
    className="absolute left-[130px] top-[164px] z-30 h-[69px] w-[69px] rounded-full object-cover"
  />
</div>
      </section>

      {/* TABLET + DESKTOP TOP TOKENOMICS SECTION - DESKTOP KEPT AS IT IS */}
      <section className="relative hidden w-full overflow-visible bg-white px-4 py-10 sm:block sm:min-h-[1050px] lg:min-h-[1400px] lg:px-0 lg:py-0">
        {/* CLICK AREA: desktop 1476 x 745 */}
        <div
          onClick={() => setShowTokenSplit(true)}
          className="relative mx-auto h-[260px] w-full max-w-[1500px] cursor-pointer sm:h-[430px] lg:h-[745px] lg:max-w-[1476px]"
        >
          {/* Mobile / Tablet */}
          <div className="lg:hidden">
            <h2 className="absolute left-0 top-[20px] z-20 font-['Jaini'] text-[34px] leading-none text-black sm:top-[70px] sm:text-[110px]">
              TOKEN
            </h2>

            <img
              src="/tokenomics-tiger.png"
              alt="Tokenomics Tiger"
              className="absolute left-1/2 top-[30px] z-20 h-[220px] w-[220px] -translate-x-1/2 object-contain sm:top-0 sm:h-[460px] sm:w-[460px]"
            />

            <h2 className="absolute left-[58%] top-[20px] z-10 font-['Jaini'] text-[34px] leading-none text-black sm:top-[55px] sm:text-[110px]">
              MICS
            </h2>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="absolute left-0 top-[71px] z-20 h-[196px] w-[677px]">
              <span className="absolute left-0 top-[4px] h-[192px] w-[121px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                T
              </span>

              <span className="absolute left-[128px] top-[4px] h-[192px] w-[137px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                O
              </span>

              <span className="absolute left-[263px] top-[4px] h-[192px] w-[140px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                K
              </span>

              <span className="absolute left-[413px] top-[4px] h-[192px] w-[119px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                E
              </span>

              <span className="absolute left-[528px] top-0 h-[192px] w-[149px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                N
              </span>
            </div>

            <img
              src="/tokenomics-tiger.png"
              alt="Tokenomics Tiger"
              className="absolute left-[441px] top-0 z-30 h-[745px] w-[745px] object-contain"
            />

            <div className="absolute left-[967px] top-[55px] z-10 h-[192px] w-[508px]">
              <span className="absolute left-0 top-0 h-[192px] w-[181px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                M
              </span>

              <span className="absolute left-[181px] top-0 h-[192px] w-[76px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                I
              </span>

              <span className="absolute left-[257px] top-0 h-[192px] w-[126px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                C
              </span>

              <span className="absolute left-[385px] top-0 h-[192px] w-[123px] text-center font-['Jaini'] text-[300px] font-normal leading-[73px] text-black">
                S
              </span>
            </div>
          </div>
        </div>

        {/* TOKEN SPLIT POPUP - NOT FIXED, SCROLLS WITH PAGE */}
        {showTokenSplit && (
          <TokenSplitPopup onClose={() => setShowTokenSplit(false)} />
        )}

        {/* SEARCH / CLOUD AREA */}
        <div className="relative mx-auto mt-[80px] h-[420px] w-full max-w-[1232px] sm:mt-[260px] lg:mt-[66px] lg:h-[502px]">
          {/* Mobile / Tablet Search */}
          <div className="lg:hidden">
            <img
              src="/tokenomics-cloud.png"
              alt=""
              className="absolute left-1/2 top-[20px] z-0 h-[260px] w-[90%] max-w-[697px] -translate-x-1/2 object-contain sm:h-[430px]"
            />

            <div className="absolute left-1/2 top-[45px] z-20 flex h-[46px] w-[92%] max-w-[1231px] -translate-x-1/2 items-center rounded-[14px] border-[2px] border-black bg-white px-3 sm:top-[61px] sm:h-[92px] sm:rounded-[20px] sm:border-[3px] sm:px-5">
              <div className="mr-3 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#969696] sm:mr-4 sm:h-[52px] sm:w-[52px]">
                <img
                  src="/searchiconformics.png"
                  alt="Search"
                  className="h-[16px] w-[16px] object-contain sm:h-[22px] sm:w-[22px]"
                />
              </div>

              <input
                type="text"
                placeholder="Type here"
                className="h-full min-w-0 flex-1 bg-transparent font-['Jaini'] text-[14px] text-black outline-none placeholder:text-gray-500 sm:text-[26px]"
              />

              <button
                type="button"
                className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#969696] sm:h-[52px] sm:w-[52px]"
              >
                <img
                  src="/sendicon.png"
                  alt="Send"
                  className="h-[16px] w-[16px] object-contain sm:h-[30px] sm:w-[30px]"
                />
              </button>
            </div>

            <p className="absolute left-1/2 top-[110px] z-20 -translate-x-1/2 whitespace-nowrap font-['Jaini'] text-[18px] leading-[20px] text-white sm:top-[177px] sm:text-[32px]">
              Ask a question
            </p>

            <img
              src="/marquee-tiger.png"
              alt=""
              className="absolute left-1/2 top-[150px] z-20 h-[80px] w-[80px] -translate-x-1/2 rounded-full object-cover sm:top-[225px] sm:h-[170px] sm:w-[170px]"
            />
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:block">
            <img
              src="/tokenomics-cloud.png"
              alt=""
              className="absolute left-[287px] top-[-23px] z-0 h-[502px] w-[697.487px] object-contain"
            />

            <div className="absolute left-1/2 top-[61px] z-20 flex h-[92px] w-[1231px] -translate-x-1/2 items-center rounded-[20px] border-[3px] border-black bg-white px-5">
              <div className="flex h-[52px] w-[1191px] items-center justify-between">
                <div className="flex h-[52px] w-[360px] items-center gap-[78px]">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[30px] bg-[#969696] px-[3px] py-[1px]">
                    <img
                      src="/searchiconformics.png"
                      alt="Search"
                      className="h-[22px] w-[22px] object-contain"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Type Here"
                    className="h-[25px] w-[160px] bg-transparent font-['Times_New_Roman'] text-[32px] font-normal leading-[25px] text-black outline-none placeholder:text-[#7D7B7B]"
                  />
                </div>

                <button
                  type="button"
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[30px] bg-[#969696] px-[3px] py-[1px]"
                >
                  <img
                    src="/sendicon.png"
                    alt="Send"
                    className="h-[20px] w-[20px] object-contain"
                  />
                </button>
              </div>
            </div>

            <p className="absolute left-[543px] top-[177px] z-20 h-[25px] w-[161px] whitespace-nowrap font-['Jaini'] text-[32px] font-normal leading-[25px] text-white">
              Ask a question
            </p>

            <img
              src="/marquee-tiger.png"
              alt=""
              className="absolute left-[539px] top-[225px] z-20 h-[170px] w-[170px] rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BELOW SECTION */}
      <section className="relative z-10 w-full overflow-visible bg-white">
        {/* MOBILE QUESTION CARDS + TEMPLE/TIGER */}
        <div className="relative h-[1219px] w-full overflow-hidden bg-white sm:hidden">
          <MobileQuestionCard
            title="How do I earn Tigress Tokens?"
            onClick={() => setActivePopup("earn")}
            className="top-0"
          />

          <MobileQuestionCard
            title="What is PoppyTigress?"
            mirror
            onClick={() => setActivePopup("poppy")}
            className="top-[219px]"
          />

          <MobileQuestionCard
            title="Is Tigress free to play?"
            onClick={() => setActivePopup("free")}
            className="top-[438px]"
          />

          <MobileQuestionCard
            title="What are Tigress Tokens?"
            mirror
            onClick={() => setActivePopup("token")}
            className="top-[657px]"
          />

          {/* MOBILE TEMPLE + TIGER */}
          <div className="absolute left-[-125px] top-[899px] z-20 h-[320px] w-[500px] opacity-100">
            <img
              src="/temple.png"
              alt="Temple"
              className="absolute left-[125px] top-[9px] z-10 h-[311px] w-[251px] object-contain"
            />

            <img
              src="/tiger.png"
              alt="Tiger"
              className="absolute left-[329px] top-0 z-20 h-[320px] w-[171px] scale-x-[-1] object-contain"
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden min-h-[900px] overflow-visible sm:block">
          <img
            src="/bg-left.png"
            alt="Left Background"
            className="absolute left-[-127px] top-[-260px] z-0 h-[967px] w-[488px] object-contain"
          />

          <img
            src="/bg-left.png"
            alt="Right Background"
            className="absolute right-[-127px] top-[-260px] z-0 h-[967px] w-[488px] scale-x-[-1] object-contain"
          />

          <QuestionCard
            title="How do I earn Tigress Tokens?"
            className="left-[1%] top-[50px] z-30 scale-[1.20]"
            onClick={() => setActivePopup("earn")}
          />

          <QuestionCard
            title="Is Tigress free to play?"
            className="left-[1%] top-[410px] z-30 scale-[1.20]"
            onClick={() => setActivePopup("free")}
          />

          <QuestionCard
            title="What is PoppyTigress?"
            mirror
            className="right-[1%] top-[50px] z-30 scale-[1.20]"
            onClick={() => setActivePopup("poppy")}
          />

          <QuestionCard
            title="What are Tigress Tokens?"
            mirror
            className="right-[1%] top-[410px] z-30 scale-[1.20]"
            onClick={() => setActivePopup("token")}
          />

          {/* Temple image - bottom part lightly trimmed */}
          <div className="absolute left-1/2 top-[-300px] z-20 h-[1000px] w-[1962px] -translate-x-1/2 overflow-hidden">
            <img
              src="/temple.png"
              alt="Temple"
              className="absolute left-1/2 top-0 h-[1019px] w-[1401px] -translate-x-1/2 scale-[1.40] origin-top object-contain"
            />
          </div>

          {/* Tiger image */}
          <img
            src="/tiger.png"
            alt="Tiger"
            className="absolute left-1/2 top-[0px] z-50 h-[726px] w-[435.6px] -translate-x-1/2 scale-[1.70] object-contain"
          />
        </div>
      </section>

      {activePopup && (
        <QuestionPopup
          title={popupData[activePopup].title}
          description={popupData[activePopup].text}
          mirror={activePopup === "poppy" || activePopup === "token"}
          onClose={() => setActivePopup(null)}
        />
      )}
    </>
  );
}