// src/components/ui/badge.tsx

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "solid" | "secondary"; // Allow 'secondary' variant
  className?: string; // Optional custom className for more control
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "solid",
  className = "",
}) => {
  const baseClasses = "inline-block px-3 py-1 rounded-lg text-sm";
  const variantClasses =
    variant === "outline"
      ? "border border-primary text-primary"
      : variant === "secondary"
      ? "bg-gray-300 text-black" // Secondary variant style
      : "bg-primary text-white";

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};
