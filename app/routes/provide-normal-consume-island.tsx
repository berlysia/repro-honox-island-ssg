import { createRoute } from "honox/factory";
import Provider from "../components/MyProvider";
import StateContextSwitcherWithIslandContext from "../islands/StateContextSwitcherWithIslandContext";

export default createRoute((c) => {
  const title = c.req.path;
  return c.render(
    <Provider>
      {title}
      <StateContextSwitcherWithIslandContext />
    </Provider>,
    { title },
  );
});
