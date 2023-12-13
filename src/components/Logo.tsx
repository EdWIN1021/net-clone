import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC<{ width: number; height: number; className?: string }> = ({
  width,
  height,
  ...rest
}) => {
  return (
    <Link to={"/"}>
      <img {...rest} style={{ width, height }} src="/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
