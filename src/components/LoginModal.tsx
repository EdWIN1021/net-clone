import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error?.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (data) {
      navigate("/browse");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto h-full rounded bg-black px-[5%] py-[60px] pt-[40px] text-white sm:h-[660px] sm:w-[450px] sm:bg-[rgba(0,0,0,0.75)] sm:px-[68px]"
    >
      <h1 className="text-[2rem] font-medium">Sign In</h1>

      <div className="mt-4">
        <TextInput
          label={"Email or phone number"}
          variant="secondary"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mt-4">
        <TextInput
          label={"Password"}
          variant="secondary"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Button className="mt-10 w-full py-3">Sign In</Button>

      <div className="mt-4 text-right text-[13px] text-[#b3b3b3]">
        <Link to={"/"}>Need Help?</Link>
      </div>

      <div className="mt-20 text-[#737373]">
        <div className="text-[16px]">
          New to Netflix?{" "}
          <Link className="text-white hover:underline" to="/">
            Sign up now.
          </Link>
        </div>

        <p className="my-[13px] text-[13px]">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a
          bot.
          <Link className="text-[#0071eb] hover:underline" to="/">
            Learn more.
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginModal;
