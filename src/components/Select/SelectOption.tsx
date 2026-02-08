import React, { useContext } from "react";
import { SelectContext } from "./Select";

interface Props {
  value: string;
  children: React.ReactNode;
}

export function SelectOption({ value, children }: Props) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Option must be used within Select");

  const isSelected = context.selected === value;

  const handleSelect = () => {
    context.onChange(value); // 값 업데이트
    context.close(); // 선택 후 닫기
  };

  return (
    <li
      onClick={handleSelect}
      style={{
        padding: "10px",
        cursor: "pointer",
        backgroundColor: isSelected ? "#f0f0f0" : "#fff",
        fontWeight: isSelected ? "bold" : "normal",
      }}
    >
      {children}
    </li>
  );
}
