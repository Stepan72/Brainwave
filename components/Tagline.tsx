import brackets from "@/assets/svg/Brackets";
import { ReactNode } from "react";

interface TaglineProps {
  children: ReactNode;
  className?: string;
}

const Tagline = ({ className, children }: TaglineProps) => {
  return (
    <div className={`tagline flex items-center ${className}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div> {brackets("right")}
    </div>
  );
};

export default Tagline;
