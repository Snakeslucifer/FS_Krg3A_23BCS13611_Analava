import React from "react";

export default function ProviderSelector({ provider, setProvider }) {
  return (
    <div className="provider-selector">
      <label>Provider:</label>
      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
      >
        <option value="Gemini">Gemini (Google AI)</option>
        <option value="OpenAI">OpenAI</option>
      </select>
    </div>
  );
}
