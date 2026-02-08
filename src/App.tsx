import "@/styles/utility.css";
import "@/styles/theme.css";
import { Button, Input } from "@/components";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <main className="m-4">
      <h1 className="text-4xl mb-4">Reusable Components</h1>
      <Button>버튼1</Button>
      <Button color="primary">버튼2</Button>
      <Input
        placeholder="입력인풋"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </main>
  );
}
