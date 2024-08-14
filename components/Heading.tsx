import React from "react";

interface HeadingProps {
  title?: string;
  className?: string;
}

const Heading = ({ title, className }: HeadingProps) => {
  return (
    <div className={`max-w-[50rem] mx-auto mb-12 lg:mb-20 ${className}`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
