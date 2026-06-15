import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Explanation } from './components/Explanation';
import { WeightSection } from './components/WeightSection';
import { Playground } from './components/Playground';
import { FadeIn } from './components/FadeIn';

export default function Home() {
  return (
    <div className="bg-dark min-h-screen">
      <Nav />
      <Hero />
      <FadeIn>
        <Explanation />
      </FadeIn>
      <FadeIn>
        <WeightSection />
      </FadeIn>
      <FadeIn>
        <Playground />
      </FadeIn>
    </div>
  );
}
