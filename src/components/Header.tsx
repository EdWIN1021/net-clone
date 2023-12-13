import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import DropDown from "../ui/DropDown";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[5rem] max-w-[1250px] items-center p-10 lg:mx-auto">
      <Link className="h-[1.5rem] flex-1 self-center sm:h-[2.5rem]" to={"/"}>
        <img className="h-full w-[9.25rem] flex-1" src="/logo.svg" alt="" />
      </Link>

      <DropDown variant="transparent" />

      <Button
        className="px-4 py-1 text-sm font-medium"
        onClick={() => navigate("/signin")}
      >
        Sign In
      </Button>
    </div>
  );
};

export default Header;
