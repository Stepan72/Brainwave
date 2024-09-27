import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "@/constants";
import Image from "next/image";
import Arrow from "@/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10 max-md:overflow-hidden">
          {benefits.map((benefit) => {
            return (
              <div
                key={benefit.id}
                className="relative p-0.5 max-w-[24rem] bg-no-repeat bg-[length:100%_100%]"
              >
                <Image
                  src={benefit.backgroundUrl}
                  alt="background"
                  className="w-auto h-auto absolute inset-0 z-1"
                />
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                  <h5 className="h5 mb-5">{benefit.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
                  <div className="flex items-center mt-auto cursor-pointer">
                    <Image
                      src={benefit.iconUrl}
                      width={48}
                      height={48}
                      alt={benefit.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider ">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {benefit.light && <GradientLight />}

                <div
                  className="absolute z-2 inset-0.5 bg-n-8 opacity-0 transition-opacity hover:opacity-20"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <Image
                    src={benefit.imageUrl}
                    width={380}
                    height={362}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />

                  <ClipPath />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
