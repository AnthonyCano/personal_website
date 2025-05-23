// src/components/ui/button.tsx

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "solid"; // Optional variant to style the button
  size?: "sm" | "md" | "lg"; // Optional size to style the button
  asChild?: boolean; // Optional to allow for link as button (like in your code)
  onClick?: () => void; // Optional onClick handler
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  onClick,
}) => {
  const baseClasses =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-300";
  const variantClasses =
    variant === "outline"
      ? "border border-primary text-primary hover:bg-primary hover:text-white"
      : "bg-primary text-white hover:bg-primary-dark";
  const sizeClasses =
    size === "sm"
      ? "text-sm"
      : size === "lg"
      ? "text-lg"
      : "text-base"; // Default to md size

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
