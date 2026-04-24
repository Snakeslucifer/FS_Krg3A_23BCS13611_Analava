import React from "react";

export default function MessageBubble({ role, text, time }) {
  return (
    <div className={`message-row ${role}`}>
      <div className={`message-bubble ${role}`}>
        <div className="message-text">{text}</div>
        <div className="message-time">{time}</div>
      </div>
    </div>
  );
}
