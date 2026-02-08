import "@/styles/utility.css";
import "@/styles/theme.css";
import { Button, Select, Input } from "@/components";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <h1 className="text-4xl mb-4">Reusable Components</h1>
      <main className="flex">
        <div className="flex flex-col gap-16">
          <Button>버튼1</Button>
          <Button color="primary">버튼2</Button>
          <Input
            placeholder="입력인풋"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Select defaultValue="미선택">
            <Select.Trigger />
            <Select.List>
              <Select.Option value="A">옵션 A</Select.Option>
              <Select.Option value="B">옵션 B</Select.Option>
            </Select.List>
          </Select>
        </div>
      </main>
    </>
  );
}
