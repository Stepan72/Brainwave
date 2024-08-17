import React from "react";
import Tagline from "./Tagline";

interface HeadingProps {
  title?: string;
  className?: string;
  text?: string;
  tag?: string;
}

const Heading = ({ title, className, text, tag }: HeadingProps) => {
  return (
    <div className={`max-w-[50rem] mx-auto mb-12 lg:mb-20 ${className}`}>
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 text-n-4 mt-4">{text}</p>}
    </div>
  );
};

export default Heading;
