import React from "react";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean; // Tambahkan ini
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false, // Default false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-65 bg-gradient-to-r from-[#0086D3] to-[#112D4E] text-white font-[Montserrat] font-bold p-3 rounded-full hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled} // Tambahkan ini
    >
      {children}
    </button>
  );
};

export default Button;
