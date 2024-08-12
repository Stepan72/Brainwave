import ButtonGradient from "@/assets/svg/ButtonGradient";
import Button from "@/components/Button";

export default function App() {
  return (
    <div className="w-[400px] h-[400px]">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] h-[400px] overflow-hidden">
        <Button className="" href="#love">
          Something
        </Button>
        <ButtonGradient />
      </div>
    </div>
  );
}
