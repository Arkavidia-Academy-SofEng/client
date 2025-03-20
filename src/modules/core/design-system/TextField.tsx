import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
  isPassword?: boolean;
  maxLength?: number; // Tambahkan properti maxLength
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  isPassword = false,
  maxLength, // Terima maxLength sebagai properti
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full mt-2">
      <label className="block text-gray-500 text-sm mb-1">{label}</label>
      <div className="relative border rounded-md px-4 py-3 flex items-center">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          maxLength={maxLength} // Gunakan maxLength jika diberikan
          className="w-full outline-none bg-transparent text-lg font-medium"
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="h-6 w-6 text-gray-500" />
            ) : (
              <AiOutlineEye className="h-6 w-6 text-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;
