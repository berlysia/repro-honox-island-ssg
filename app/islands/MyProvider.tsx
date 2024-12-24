import { type PropsWithChildren, useState } from "react";
import MyContext from "../MyContext";

export default function StateContextProvider({
  children,
}: PropsWithChildren<{}>) {
  const [state, setState] = useState("from provider");
  return (
    <MyContext
      value={[
        state,
        (next) => {
          console.log("SetStateContext", next);
          setState(next);
        },
      ]}
    >
      {children}
    </MyContext>
  );
}
