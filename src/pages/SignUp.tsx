import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import DropDown from "../ui/DropDown";
import Logo from "../components/Logo";
import { signUpFooterLinks } from "../constants";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex min-h-[100vh] flex-col bg-white">
      <div className="flex w-full items-center border-b px-7 py-2">
        <div className="flex-1">
          <Logo width={167} height={65} />
        </div>

        <Link to={"/signin"} className="text-[19px] font-medium">
          Sign In
        </Link>
      </div>

      <div className="flex-1">
        <SignUpForm />
      </div>

      <Footer
        className="bg-[rgb(243,243,243)] text-[#737373]"
        links={signUpFooterLinks}
        showName={false}
        dropDown={<DropDown />}
      />
    </div>
  );
};

export default SignUp;
