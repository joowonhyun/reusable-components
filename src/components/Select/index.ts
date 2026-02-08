import { Select as SelectMain } from "./Select";
import { SelectTrigger } from "./SelectTrigger";
import { SelectList } from "./SelectList";
import { SelectOption } from "./SelectOption";

// 메인 컴포넌트에 자식 컴포넌트들을 정적 속성으로 할당
// Object.assign을 쓰면 타입스크립트에서도 구조가 명확해집니다.
export const Select = Object.assign(SelectMain, {
  Trigger: SelectTrigger,
  List: SelectList,
  Option: SelectOption,
});
