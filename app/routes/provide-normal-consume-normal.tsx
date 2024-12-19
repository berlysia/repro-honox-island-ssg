import { createRoute } from "honox/factory";
import Provider from "../components/MyProvider";
import StateContextSwitcherWithContext from "../islands/StateContextSwitcherWithContext";

export default createRoute((c) => {
  const title = c.req.path;
  return c.render(
    <Provider>
      {title}
      <StateContextSwitcherWithContext />
    </Provider>,
    { title },
  );
});
