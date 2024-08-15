import ButtonGradient from "@/assets/svg/ButtonGradient";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function App() {
  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </div>
  );
}
