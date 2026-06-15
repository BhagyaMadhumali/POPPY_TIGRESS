import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Roadmap from "./pages/Roadmap/Roadmap";
import HowToBuy from "./pages/HowToBuy/HowToBuy";
import MarqueeBar from "./components/MarqueeBar/MarqueeBar";
import Tokenomics from "./pages/Tokenomics/TokenomicsPage/Tokenomics";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>

      <section id="how-to-buy">
        <HowToBuy />
      </section>

      <section id="tokenomics">
        <MarqueeBar />
        <Tokenomics />
      </section>

      <section id="faq">
        <Footer />
      </section>
    </main>
  );
}

export default App;