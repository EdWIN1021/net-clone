import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Footer = ({
  links,
  showName = true,
  dropDown,
  className,
}: {
  links: string[];
  className?: string;
  showName?: boolean;
  dropDown: React.ReactNode;
}) => {
  //   const bgVariants = {
  //     light: "bg-[rgb(243,243,243)]",
  //     dark: "bg-black",
  //     transparent: "bg-[rgba(0,0,0,0.75)]",
  //   };

  //   const colorVariants = {
  //     light: "text-[#737373]",
  //     dark: "text-[rgba(255,255,255,0.7)]",
  //     transparent: "text-[#737373]",
  //   };

  //   ${bgVariants[variant]} ${colorVariants[variant]}

  return (
    <div
      className={twMerge(`mt-2 px-8 py-10 text-left md:px-[200px]`, className)}
    >
      <div className={`lg:mx-auto xl:w-[1000px]`}>
        <div className="py-2">
          <a className="opacity-70" href="">
            Questions? Contact us.
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-3 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {links?.map((link) => (
            <li key={link}>
              <Link
                className={`text-[13px] opacity-70 hover:underline `}
                to="/"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        {dropDown && <div className="pb-3 pt-5">{dropDown}</div>}

        {showName && <p className="py-3 text-sm opacity-70">Netflix Canada</p>}
      </div>
    </div>
  );
};

export default Footer;
