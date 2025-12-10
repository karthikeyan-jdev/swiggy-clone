import React, { type ReactNode } from "react";

export default function Button({
  children,
  type,
}: {
  children: ReactNode;
  type: "primary" | "secondary";
}) {
  const className =
    type === "primary"
      ? "bg-amber-500 text-white"
      : type === "secondary"
      ? "bg-gray-500 text-white"
      : "bg-black text-white";
  return <button className={className}>{children}</button>;
}
