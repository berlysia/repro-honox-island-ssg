import { createRoute } from "honox/factory";
import IslandProvider from "../islands/MyProvider";
import StateContextSwitcherWithIslandContext from "../islands/StateContextSwitcherWithIslandContext";

export default createRoute((c) => {
  const title = c.req.path;
  return c.render(
    <IslandProvider>
      {title}
      <StateContextSwitcherWithIslandContext />
    </IslandProvider>,
    { title },
  );
});
