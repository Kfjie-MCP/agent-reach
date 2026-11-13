import { readFileSync } from "node:fs";
import { createGateway } from "./app.mjs";

const publicUrl = process.env.PUBLIC_URL;
if (!publicUrl) throw new Error("Set PUBLIC_URL in the server environment");
const password = readFileSync(process.env.MCP_TOKEN_FILE || "/opt/mcp/agent-reach/private/mcp-bearer-token", "utf8").trim();
if (password.length < 24) throw new Error("MCP password is missing or too short");
const { app, provider } = createGateway({
  publicUrl,
  upstreamUrl: process.env.UPSTREAM_URL || "http://127.0.0.1:18750",
  database: process.env.OAUTH_DATABASE || "/opt/mcp/agent-reach/private/oauth.sqlite",
  password,
});
const server = app.listen(Number(process.env.PORT || 4203), "127.0.0.1", () => console.log("Agent Reach MCP OAuth gateway ready"));
const shutdown = () => server.close(() => { provider.close(); process.exit(0); });
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
