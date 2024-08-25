import React from "react";

function Header() {
  return (
    <>
      <img
        loading="lazy"
        sizes="(max-width: 638px) 100vw, 27vw"
        src="https://cdn.builder.io/api/v1/image/assets%2F013dbc85a35a4f2ea2d2664ea6761da6%2Fc86d3568a25644c99bb1de6716ee1dac?format=webp"
        alt="Research logo"
        className="object-cover shrink-0 mx-auto mt-0 w-full h-auto text-center aspect-square max-w-[170px] text-stone-600 max-sm:mt-3 max-sm:max-w-[152px]"
      />
      <div className="flex flex-col justify-start items-start mx-auto mt-9 max-w-[860px]">
        <h1 className="w-full text-5xl font-bold tracking-tight text-center text-white leading-[57.6px] max-w-[860px] max-sm:text-4xl">
          Seamless Research
        </h1>
        <p className="mt-5 text-2xl font-light tracking-normal text-center max-w-[860px] text-stone-300 max-md:text-base">
          Quickly identify research gaps and explore AI-driven suggestions for
          your next breakthrough.
        </p>
        <div className="box-border flex relative flex-row shrink-0 gap-4 self-center pt-4 mx-auto w-auto" />
      </div>
    </>
  );
}

export default Header;
