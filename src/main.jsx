import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./accessibility.css";
import App from "./App.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import SkipToContent from "./components/SkipToContent.jsx";

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <SkipToContent />
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </ErrorBoundary>
  </StrictMode>
);
