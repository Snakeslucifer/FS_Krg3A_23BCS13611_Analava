import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import { streamChatResponse } from "../api/chatApi";

export default function ChatWindow({ provider }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = {
      role: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      let aiMessage = { role: "ai", text: "", time: "" };
      await streamChatResponse(input, (delta) => {
        aiMessage = {
          role: "ai",
          text: aiMessage.text + delta,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => {
          const updated = [...prev];
          if (updated[updated.length - 1]?.role === "ai") {
            updated[updated.length - 1] = aiMessage;
          } else {
            updated.push(aiMessage);
          }
          return updated;
        });
      });
    } catch (err) {
      console.error("❌ Streaming error:", err);
      setError("⚠️ Stream interrupted. Please retry.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => setMessages([]);

  return (
    <div className="chat-container glass">
      <div className="chat-header">
        <h2>SnakesLucifer — {provider}</h2>
        <button className="clear-btn" onClick={clearChat}>🧹 Clear</button>
      </div>

      <div className="messages">
        {messages.map((msg, i) => (
          <MessageBubble key={i} role={msg.role} text={msg.text} time={msg.time} />
        ))}

        {isLoading && <div className="typing">Gemini is thinking<span className="dots">...</span></div>}
        {error && <div className="error">{error}</div>}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading}>Send</button>
      </div>
    </div>
  );
}
