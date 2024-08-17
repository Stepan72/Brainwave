import { pricing } from "@/constants";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { check } from "@/assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => {
        return (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full lg:w-auto h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2  [&>h4]:even:text-color-1  [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <p>
                  <span className="h3">$</span>
                  <span className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </span>
                </p>
              )}
            </div>
            <Button
              className="w-full mb-6"
              white={!!item.price}
              href={item.price ? "/#pricing" : "mailto:st.nim@list.ru"}
            >
              {item.price ? "Get started" : "Contact us"}
            </Button>
            <ul>
              {item.features.map((feature, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-start py-5 border-t border-n-6 gap-4"
                  >
                    <Image src={check} alt="check" width={24} height={24} />
                    <p className="body-2">{feature}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PricingList;
