import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import emailjs from "@emailjs/browser";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

emailjs.init("YOUR_PUBLIC_KEY");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
