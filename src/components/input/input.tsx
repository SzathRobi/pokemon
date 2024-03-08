import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isSrOnlyLabel?: boolean;
  dataTestId?: string;
};

const Input = ({
  label,
  isSrOnlyLabel = false,
  dataTestId,
  ...props
}: InputProps) => {
  return (
    <div>
      <label
        className={`${isSrOnlyLabel && "sr-only"}`}
        htmlFor={`input-${label}`}
        data-testid="input-label"
      ></label>

      <input
        id={`input-${label}`}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        {...props}
        data-testid={dataTestId}
      />
    </div>
  );
};

export default Input;
