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

export default function Tokenomics() {
  const [activePopup, setActivePopup] = useState(null);
  const [showTokenSplit, setShowTokenSplit] = useState(false);

  return (
    <>
      <section className="relative min-h-[760px] w-full overflow-hidden bg-white px-4 py-10 sm:min-h-[1050px] lg:min-h-[1250px] lg:py-16">
        <div
          onClick={() => setShowTokenSplit(true)}
          className="relative mx-auto h-[260px] w-full max-w-[1500px] cursor-pointer sm:h-[430px]"
        >
          <h2 className="absolute left-0 top-[20px] z-20 font-['Jaini'] text-[34px] leading-none text-black sm:top-[70px] sm:text-[110px] lg:text-[180px]">
            TOKEN
          </h2>

          <img
            src="/tokenomics-tiger.png"
            alt="Tokenomics Tiger"
            className="absolute left-1/2 top-[30px] z-20 h-[220px] w-[220px] -translate-x-1/2 object-contain sm:top-0 sm:h-[460px] sm:w-[460px] lg:h-[745px] lg:w-[745px]"
          />

          <h2 className="absolute left-[58%] top-[20px] z-10 font-['Jaini'] text-[34px] leading-none text-black sm:top-[55px] sm:text-[110px] lg:left-[61%] lg:text-[180px]">
            MICS
          </h2>
        </div>

        <div className="relative mx-auto mt-[80px] h-[420px] w-full max-w-[1232px] sm:mt-[260px] lg:mt-[330px] lg:h-[520px]">
          <img
            src="/tokenomics-cloud.png"
            alt=""
            className="absolute left-1/2 top-[20px] z-0 h-[260px] w-[90%] max-w-[697px] -translate-x-1/2 object-contain sm:h-[430px] lg:top-[-23px] lg:h-[502px]"
          />

          <div className="absolute left-1/2 top-[45px] z-20 flex h-[46px] w-[92%] max-w-[1231px] -translate-x-1/2 items-center rounded-[14px] border-[2px] border-black bg-white px-3 sm:top-[61px] sm:h-[92px] sm:rounded-[20px] sm:border-[3px] sm:px-5">
            <img
              src="/searchiconformics.png"
              alt="Search"
              className="mr-3 h-[22px] w-[22px] object-contain sm:mr-4 sm:h-[42px] sm:w-[42px]"
            />

            <input
              type="text"
              placeholder="Type here"
              className="h-full min-w-0 flex-1 bg-transparent font-['Jaini'] text-[14px] text-black outline-none placeholder:text-gray-500 sm:text-[26px]"
            />

            <button className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#969696] sm:h-[52px] sm:w-[52px]">
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

        {showTokenSplit && (
          <TokenSplitPopup onClose={() => setShowTokenSplit(false)} />
        )}
      </section>

      <section className="relative w-full overflow-hidden bg-white">
        <div className="flex flex-col items-center pt-0 sm:hidden">
          <div className="w-full max-w-[390px] px-4">
            <div className="flex w-full justify-start">
              <QuestionCard
                title="How do I earn Tigress Tokens?"
                onClick={() => setActivePopup("earn")}
                className="relative -mt-8"
              />
            </div>

            <div className="flex w-full justify-end">
              <QuestionCard
                title="What is PoppyTigress?"
                mirror
                onClick={() => setActivePopup("poppy")}
                className="relative -mt-12"
              />
            </div>

            <div className="flex w-full justify-start">
              <QuestionCard
                title="Is Tigress free to play?"
                onClick={() => setActivePopup("free")}
                className="relative -mt-12"
              />
            </div>

            <div className="flex w-full justify-end">
              <QuestionCard
                title="What are Tigress Tokens?"
                mirror
                onClick={() => setActivePopup("token")}
                className="relative -mt-12"
              />
            </div>
          </div>

          <div className="relative mt-2 h-[320px] w-full overflow-hidden">
            <img
              src="/temple.png"
              alt="Temple"
              className="absolute bottom-0 left-[-70px] z-10 w-[280px] object-contain"
            />

            <img
              src="/tiger.png"
              alt="Tiger"
              className="absolute bottom-0 right-[-60px] z-20 h-[300px] w-[220px] scale-x-[-1] object-contain"
            />
          </div>
        </div>

        <div className="relative hidden min-h-[900px] sm:block">
          <img
            src="/bg-left.png"
            alt=""
            className="absolute left-[-127px] top-[-206px] z-0 h-[967px] w-[750px] object-contain"
          />

          <img
            src="/bg-left.png"
            alt=""
            className="absolute right-[-127px] top-[-206px] z-0 h-[967px] w-[750px] scale-x-[-1] object-contain"
          />

          <QuestionCard
            title="How do I earn Tigress Tokens?"
            className="left-[8%] top-[200px] z-30"
            onClick={() => setActivePopup("earn")}
          />

          <QuestionCard
            title="Is Tigress free to play?"
            className="left-[8%] top-[480px] z-30"
            onClick={() => setActivePopup("free")}
          />

          <QuestionCard
            title="What is PoppyTigress?"
            mirror
            className="right-[8%] top-[200px] z-30"
            onClick={() => setActivePopup("poppy")}
          />

          <QuestionCard
            title="What are Tigress Tokens?"
            mirror
            className="right-[8%] top-[480px] z-30"
            onClick={() => setActivePopup("token")}
          />

          <div className="absolute bottom-[150px] left-1/2 z-10 h-[600px] w-[2600px] -translate-x-1/2 overflow-hidden">
            <img
              src="/temple.png"
              alt="Temple"
              className="absolute left-1/2 top-0 h-[800px] w-[3000px] -translate-x-1/2 object-contain"
            />
          </div>

          <img
            src="/tiger.png"
            alt="Tiger"
            className="absolute bottom-[14px] left-1/2 z-40 h-[700px] w-[450px] -translate-x-1/2 object-contain"
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