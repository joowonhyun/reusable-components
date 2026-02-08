import { useContext } from "react";
import { SelectContext } from "./Select";

export function SelectTrigger() {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select.Trigger must be used within Select");

  return (
    <div
      onClick={context.toggle}
      style={{
        width: "100%",
        padding: "10px",
        textAlign: "left",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
    >
      {context.selected} {/* 선택된 값이 버튼에 표시됨 */}
      <span style={{ float: "right" }}>{context.isOpen ? "▲" : "▼"}</span>
    </div>
  );
}
