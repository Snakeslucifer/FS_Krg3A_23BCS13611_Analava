export async function streamChatResponse(message, onDelta) {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Failed to connect to backend");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const parts = buffer.split("\n\n");
    buffer = parts.pop();

    for (const part of parts) {
      if (part.startsWith("data: ")) {
        const dataStr = part.replace("data: ", "").trim();

        if (dataStr === "[DONE]") return;

        try {
          const data = JSON.parse(dataStr);
          if (data.text) onDelta(data.text);
        } catch {
          console.warn("Invalid SSE chunk:", dataStr);
        }
      }
    }
  }
}
