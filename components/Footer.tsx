import React from "react";
import Section from "./Section";
import { socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <Section crosses id="footer" className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4">
          © {new Date().getFullYear()}. Made by Stepan Nimchuk. All Rights
          Reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="__blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <Image
                    src={item.iconUrl}
                    width={16}
                    height={16}
                    alt={item.title}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
