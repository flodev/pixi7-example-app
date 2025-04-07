import "./App.css";

import { Stage } from "@pixi/react";
import "@pixi/events";
import { BunnySprite } from "./BunnySprite";

const App = () => {
  return (
    <Stage width={800} height={600}>
      <BunnySprite />
    </Stage>
  );
};

export default App;
