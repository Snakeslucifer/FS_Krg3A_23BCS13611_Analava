import React, { useState, useEffect } from "react";
import ChatWindow from "./components/ChatWindow";
import ProviderSelector from "./components/ProviderSelector";
import "./styles.css";

export default function App() {
  const [provider, setProvider] = useState("Gemini");
  const [darkMode, setDarkMode] = useState(true); // default dark

  // Add dark or light class to body
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <h1>🐍 SnakesLucifer</h1>
        <div className="header-controls">
          <ProviderSelector provider={provider} setProvider={setProvider} />
          <button
            className="mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle dark mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      <ChatWindow provider={provider} />
    </div>
  );
}
