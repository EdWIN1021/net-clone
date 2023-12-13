import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="whitespace-nowrap rounded bg-[rgb(229,9,20)] text-white hover:bg-[rgb(193,17,25)] active:bg-[rgb(153,22,29)] px-4 py-1 text-sm font-medium">
      {children}
    </button>
  );
};

export default Button;
