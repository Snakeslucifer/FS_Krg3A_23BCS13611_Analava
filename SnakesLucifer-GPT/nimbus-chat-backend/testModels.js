// testSSE.js
import fetch from "node-fetch";

const res = await fetch("http://localhost:5000/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: "Hello from SSE test" }),
});

for await (const chunk of res.body) {
  console.log(chunk.toString());
}
