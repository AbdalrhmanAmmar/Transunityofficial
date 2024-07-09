"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ITheme {
  children: ReactNode;
}

export default function Theme({ children }: ITheme) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
