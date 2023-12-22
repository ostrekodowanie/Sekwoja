"use client";

import { MouseEvent } from "react";

export default function NavLink({
  children,
  title,
  className = "",
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  function handleScroll(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const element = document.getElementById(title.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      className={`text-sm font-medium ${className}`}
      onClick={handleScroll}
    >
      {children}
    </button>
  );
}
