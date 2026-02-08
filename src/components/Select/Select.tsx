import React, {
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

// 공유할 상태 정의
export const SelectContext = createContext<{
  selected: string;
  isOpen: boolean;
  onChange: (value: string) => void;
  toggle: () => void;
  close: () => void;
} | null>(null);

export function Select({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue: string;
}) {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onChange = (value: string) => setSelected(value);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [close]);

  return (
    <SelectContext.Provider
      value={{ selected, isOpen, onChange, toggle, close }}
    >
      <div ref={containerRef} style={{ position: "relative", width: "200px" }}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}
