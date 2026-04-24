import rateLimit from "express-rate-limit";

const windowMs =
  parseInt(process.env.RATE_LIMIT_WINDOW, 10) * 60 * 1000 || 15 * 60 * 1000;
const max = parseInt(process.env.RATE_LIMIT_MAX, 10) || 100;

const limiter = rateLimit({
  windowMs,
  max,
  message: "Too many requests, please try again later.",
});

export default limiter;
