import React, { useContext } from "react";
import { SelectContext } from "./Select";

interface Props {
  value: string;
  children: React.ReactNode;
}

export function SelectOption({ value, children }: Props) {
  const context = useContext(SelectContext);
  if (!context)
    throw new Error("Select.Option은 Select 내부에서만 사용 가능합니다.");
  const isSelected = context.selected === value;

  const handleSelect = () => {
    context.onChange(value);
    context.close();
  };

  return (
    <li
      onClick={handleSelect}
      style={{
        padding: "10px",
        cursor: "pointer",
        // 선택된 상태일 때만 배경색과 볼드체 적용
        backgroundColor: isSelected ? "#f0f0f0" : "#fff",
        fontWeight: isSelected ? "bold" : "normal",
        color: isSelected ? "#007aff" : "#333",
      }}
    >
      {children}
      {isSelected && <span style={{ float: "right" }}>✓</span>}
    </li>
  );
}
