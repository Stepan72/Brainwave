import ButtonGradient from "@/assets/svg/ButtonGradient";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";

export default function App() {
  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Hero />
        <Benefits />
        <ButtonGradient />
      </div>
    </div>
  );
}
