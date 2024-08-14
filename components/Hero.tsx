"use client";
import Image from "next/image";
import Section from "./Section";
import { curve, heroBackground, robot } from "@/assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "@/constants";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <Section
      id="Hero"
      className="pt-[12rem] -mt-[5.25rem] z-1"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings=""
    >
      <div className="container relative overflow-hidden">
        {/* Верхняя часть */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI Chatting with{" "}
            <span className="inline-block relative">
              Brainwave
              <Image
                src={curve}
                alt="text-curve"
                className="absolute top-full left-0 w-full lg:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>

        {/* Нижняя часть */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={robot}
                  alt="robot-hero"
                  width={1024}
                  height={490}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                />

                {/* TODO: Убрать в отдельный компонент */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => {
                      return (
                        <li className="p-5" key={index}>
                          <Image src={icon} width={24} height={25} alt={icon} />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>

          {/* Робот сзади */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={heroBackground}
              alt="hero-background"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
