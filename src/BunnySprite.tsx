import { Sprite } from "@pixi/react";
import { useState } from "react";

export function BunnySprite() {
  const bunnyUrl = "https://react.pixijs.io/v7/img/bunny.png";

  const [position, setPosition] = useState({ x: 100, y: 100 });

  const onmousedown = () => {
    window.addEventListener("mousemove", (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    });
  };

  return (
    <Sprite
      interactive={true}
      image={bunnyUrl}
      scale={2}
      mousedown={onmousedown}
      eventMode="static"
      x={position.x}
      y={position.y}
    />
  );
}
