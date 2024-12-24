import { createContext } from "hono/jsx";

const MyContext = createContext<[string, (next: string) => void]>([
  "from context default value",
  () => {},
]);

export default MyContext;
