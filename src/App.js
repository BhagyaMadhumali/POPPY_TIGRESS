import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Roadmap from "./pages/Roadmap/Roadmap";
import HowToBuy from "./pages/HowToBuy/HowToBuy";
import Tokenomics from "./pages/Tokenomics/TokenomicsPage/Tokenomics";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Home />
      <AboutUs />
      <Roadmap />
      <HowToBuy />

      <section id="tokenomics">
        <Tokenomics />
      </section>

      <section id="faq">
        <Footer />
      </section>
    </main>
  );
}

export default App;