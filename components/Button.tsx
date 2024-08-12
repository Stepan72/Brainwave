import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps {
  children: React.ReactNode | JSX.Element;
  onClick?: () => void;
  href?: string;
  className?: string;
  px?: string;
  white?: string;
}

const Button = ({
  children,
  onClick,
  href,
  className,
  px,
  white,
}: ButtonProps) => {
  const _className = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  if (href) {
    return (
      <a href={href} className={_className}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(false)}
      </a>
    );
  }

  if (onClick) {
    return (
      <button className={_className}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(false)}
      </button>
    );
  }
};

export default Button;
