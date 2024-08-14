import { companyLogos } from "@/constants";
import Image from "next/image";
import React from "react";

const CompanyLogos = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex ">
        {companyLogos.map((company, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center flex-1 h-[8.5rem]"
            >
              <Image src={company} width={134} height={28} alt="company-logo" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyLogos;
