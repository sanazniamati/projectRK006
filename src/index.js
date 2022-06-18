import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Ellipse } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Ellipse
          x={200}
          y={100}
          radiusX={100}
          radiusY={50}
          fill={"yellow"}
          stroke={"black"}
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
