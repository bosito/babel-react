import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...restProps }: IButton) {
  return (
    <button
      {...restProps}
      className="group flex items-center justify-center rounded-lg text-lg font-semibold text-white px-5 py-2 bg-gradient-custom bg-[length:300%_100%] bg-pos-100 transition-all ease-custom hover:bg-pos-0"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="ml-1 h-6 w-6 transition-all duration-1000 group-hover:translate-x-2"
      >
        <path d="M10.061 19.061L17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
      </svg>
    </button>
  );
}

export default Button;
