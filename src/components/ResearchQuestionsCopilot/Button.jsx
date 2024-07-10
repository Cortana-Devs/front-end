import React from "react";

function Button({ children, variant = "primary", ...props }) {
  const baseClasses =
    "box-border relative shrink-0 px-6 py-4 text-base font-bold leading-6 text-center rounded-xl appearance-none cursor-pointer transition duration-300";
  const variantClasses = {
    primary:
      "bg-[background-color:#444] bg-[linear-gradient(315deg,#A855F7_0%,#6366F1_74%)] text-white w-40 hover:bg-[linear-gradient(315deg,#A855F7_0%,#6366F1_54%)]",
    secondary: "bg-neutral-400 text-white hover:bg-neutral-500",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;