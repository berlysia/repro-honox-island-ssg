import { createRoute } from "honox/factory";
import IslandProvider from "../islands/MyProvider";
import StateContextSwitcherWithContext from "../islands/StateContextSwitcherWithContext";

export default createRoute((c) => {
  const title = c.req.path;
  return c.render(
    <IslandProvider>
      {title}
      <StateContextSwitcherWithContext />
    </IslandProvider>,
    { title },
  );
});