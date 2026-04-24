export default function safetyCheck(req, res, next) {
  const text = req.body.message || "";
  const bannedWords = ["hate", "kill", "bomb"]; // Example keywords
  const hasBadContent = bannedWords.some(word => text.toLowerCase().includes(word));
  if (hasBadContent) {
    return res.status(400).json({ error: "Unsafe or prohibited content detected" });
  }
  next();
}
