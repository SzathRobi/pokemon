import { ButtonHTMLAttributes } from "react";

import Spinner from "../spinner/spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  dataTestId?: string;
};

const Button = ({
  children,
  className,
  isLoading = false,
  dataTestId,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-4 rounded bg-blue-500 px-4 py-2 font-bold text-white ring-offset-2 hover:bg-blue-700 focus:outline-none focus:ring-2 ${className}`}
      onClick={onClick}
      data-testid={dataTestId || "button"}
      {...props}
    >
      {children}

      {isLoading && <Spinner />}
    </button>
  );
};

export default Button;
