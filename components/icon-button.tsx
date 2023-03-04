import React from "react";

type IconButtonProps = {
  link: string;
  title: string;
  icon: string;
};

const IconButton = (props: IconButtonProps) => {
  const { link, title, icon } = props;
  return (
    <a
      href={link}
      className="transition-colors duration-200 text-theme-5 hover:text-theme-3 dark:text-theme-1 transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <title>{title}</title>
        <path d={icon}></path>
      </svg>
    </a>
  );
};

export default IconButton;
