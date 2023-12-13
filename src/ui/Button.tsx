import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "whitespace-nowrap text-white rounded bg-[rgb(229,9,20)] hover:bg-[rgb(193,17,25)] active:bg-[rgb(153,22,29)]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
