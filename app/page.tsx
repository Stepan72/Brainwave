import ButtonGradient from "@/assets/svg/ButtonGradient";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Services from "@/components/Services";

export default function App() {
  return (
    <div>
      <div className="max-lg:pt-[5.25rem]">
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </div>
  );
}
