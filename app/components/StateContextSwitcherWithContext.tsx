import { useContext, useEffect, useState } from "hono/jsx";
import MyContext from "../MyContext";

function ClientStateContextSwitcher() {
  const [state, setState] = useContext(MyContext);
  const [value, setValue] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  function log(message: string) {
    setLogs((logs) => [...logs, message]);
  }

  useEffect(() => {
    log(`for normal context: ${JSON.stringify({ value, state })}`);
  }, [value, state]);

  return (
    <div>
      <div>
        <label>currentState: {state}</label>
      </div>
      <div>
        <label>
          newState:
          <input
            type="text"
            value={value}
            onChange={(e) =>
              setValue((e.currentTarget as HTMLInputElement).value)
            }
          ></input>
        </label>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setState(value);
          }}
        >
          update
        </button>
      </div>
      <textarea
        // @ts-ignore
        style={{ fieldSizing: "content" }}
        value={logs.join("\n")}
        readOnly
      ></textarea>
    </div>
  );
}

export default function StateContextSwitcher() {
  return <ClientStateContextSwitcher />;
}
