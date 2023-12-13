import React, { useEffect, useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const { signUp } = useContext(AuthContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // signUp(email, password);
  };

  useEffect(() => {
    setEmail(sessionStorage.getItem("email") || "");
  }, []);

  return (
    <form className="mx-auto my-10 max-w-[440px] p-2" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-[32px] font-medium">
          Create a password to start your membership
        </h2>

        <div className="my-4 text-[18px]">
          <p>You&apos;re almost done!</p>
          <p>We hate paperwork, too.</p>
        </div>

        <div className="mb-5 mt-4">
          <div className="mb-3">
            <TextInput
              label="Email"
              id="email"
              variant="tertiary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <TextInput
            label="Add a password"
            id="password"
            variant="tertiary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>

        <Button className="mt-6 w-full px-12 py-5 text-2xl" type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
