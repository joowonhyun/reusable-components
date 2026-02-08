import React, { useContext } from "react";
import { SelectContext } from "./Select";

export function SelectList({ children }: { children: React.ReactNode }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.List must be used within Select");

  if (!context.isOpen) return null;

  return (
    <ul
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        margin: "4px 0 0 0",
        padding: "0",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        listStyle: "none",
        zIndex: 10,
      }}
    >
      {children}
    </ul>
  );
}
