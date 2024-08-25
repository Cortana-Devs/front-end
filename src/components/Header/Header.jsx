import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex relative flex-row gap-5 justify-between items-center self-stretch my-3 w-full">
      <div className="flex relative flex-row self-stretch grow-[1.1674179080885916] max-md:items-center max-md:my-auto max-md:mr-auto max-md:w-full max-sm:justify-start">
        <Logo />
        <Link to="/" className="relative pl-1.5 w-full text-4xl font-bold tracking-tight leading-10 text-left grow-[3.1608208817763215] max-w-[860px] text-zinc-100 max-md:mr-auto max-sm:text-4xl">
          Seamless Research
        </Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
