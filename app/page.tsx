import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Explanation } from './components/Explanation';
import { WeightSection } from './components/WeightSection';
import { Playground } from './components/Playground';
export default function Home() {
  return (
    <div className="bg-dark min-h-screen">
      <Nav />
      <Hero />
      <Explanation />
      <WeightSection />
      <Playground />
    </div>
  );
}
