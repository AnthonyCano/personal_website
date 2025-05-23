// src/components/ui/card.tsx

import React from "react";

interface CardProps {
  children: React.ReactNode; // Content inside the card
  className?: string; // Optional custom classes
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-card text-card-foreground border border-border shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};


interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className="p-4 border-b border-muted">{children}</div>;
};

interface CardContentProps {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string; // Allow className prop here
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string; // Allow className prop here
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = "" }) => {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
};


