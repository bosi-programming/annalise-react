import type { PropsWithChildren } from "react";

interface ButtonProps extends Omit<HTMLButtonElement, "className"> {
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}
export function Button({ className, onClick, type, children }: PropsWithChildren<ButtonProps>) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
