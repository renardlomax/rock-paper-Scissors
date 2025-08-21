import express from "express";
import { supabase } from "./superbaseClient.js";

const app = express();
const PORT = process.env.PORT || 5000;

/* ---------- Middleware ---------- */

// Parse JSON request bodies into req.body
app.use(express.json());

app.get("/players", async (req, res) => {
  const { data, error } = await supabase.from("players").select("*")
  if (error) return res.status(400).json(error)
  res.json(data)
})

// Simple request logger (method, path, time)
app.use((req, _res, next) => {
  const now = new Date().toISOString();
  console.log(`use [${now}] ${req.method} ${req.path}`);
  next();
});

/* ---------- Routes ---------- */

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});
app.get("/test", (_req, res) => {
   res.json({ message: "Hello from the RPS backend!" });
});

// Echo: demonstrates reading JSON from the body
app.post("/api/echo", (req, res) => {
  // whatever JSON you send from the client will come back here
  res.json({ youSent: req.body });
});

/* ---------- 404 and Error Handling ---------- */
app.get("/", (_req, res) => {
  res.send("RPS Backend is running. Try /api/health or POST /api/echo");
});



// 404 for unmatched routes
app.use((req, res, _next) => {
  res.status(404).json({ error: "Not Found", path: req.path });
});

// Centralized error handler
app.use((err, _req, res, _next) => {
  console.error("ERROR:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
