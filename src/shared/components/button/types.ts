import { PropsWithChildren, ReactNode } from "react";

export type ButtonProps = PropsWithChildren<{
  href?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "big" | "small";
}>;
