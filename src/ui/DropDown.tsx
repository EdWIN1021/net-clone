import clsx from "clsx";
import { MdLanguage } from "react-icons/md";

const DropDown: React.FC<{ variant?: "transparent" }> = ({ variant }) => {
  return (
    <div className="mr-6 flex max-w-[135px] items-center gap-1 rounded border border-[rgb(128,128,128)]  px-5 py-1.5">
      <MdLanguage
        className={clsx("w-[25px]", {
          "text-white": variant,
        })}
      />
      <select
        className={clsx("bg-transparent outline-none", {
          "text-white": variant,
        })}
      >
        <option value="english">English</option>
        <option value="中文">中文</option>
      </select>
    </div>
  );
};

export default DropDown;
