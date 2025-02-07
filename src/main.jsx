import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import AnimatedCursor from "react-animated-cursor";
import "react-awesome-button/dist/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={30}
      innerScale={1}
      outerScale={0.7}
      outerAlpha={0}
      outerStyle={{
        border: "3px solid var(--cursor-color)",
      }}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
    />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
