import { createContext } from "react";

const MyContext = createContext<[string, (next: string) => void]>([
  "from context default value",
  () => {},
]);

export default MyContext;
