import React from "react";

const ButtonIcon = ({
  children,
  title,
  classname,
  disabled = false,
  type = "button",
}: Readonly<{
  children?: React.ReactNode | null;
  title: string;
  classname: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}>) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`inline-flex items-center gap-x-1.5 py-2 rounded-md px-4  text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${classname}`}
      >
        {title != "" ? <span>{title}</span> : null}
        {children}
      </button>
    </>
  );
};

export default ButtonIcon;
