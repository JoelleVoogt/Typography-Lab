import "./globals.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Explanation from "./components/explanation";
import WeightSection from "./components/weight";
import Playground from "./components/playground";
import Filtering from "./components/filtering";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-dark min-h-screen">
      <Nav />
      <Hero />
      <Explanation />
      <WeightSection />
      <Playground />
      <Filtering />
      <Footer />
    </div>
  );
}
