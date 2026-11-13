# 运行说明

当前适配器使用 `/opt/mcp/agent-reach` 作为部署目录。`run.sh` 将 CLI、uv 包和缓存分别放在 `bin/`、`uv-tools/`、`cache/`。CLI 安装方法以 [Agent Reach 上游说明](https://github.com/Panniantong/Agent-Reach) 为准。

- `server.py`：Python MCP 服务，默认 `127.0.0.1:18750/mcp`。
- `gateway/src/index.mjs`：OAuth 网关，默认 `127.0.0.1:4203`。
- `PUBLIC_URL`：公网 HTTPS origin，通过根目录的私有 `.env` 设置。
- `MCP_TOKEN_FILE`：连接密码文件，默认 `private/mcp-bearer-token`，至少 24 字符。
- `OAUTH_DATABASE`：授权数据库，默认 `private/oauth.sqlite`。

安装 Python 依赖和网关：

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements-mcp.txt
cd gateway
npm ci
npm run check
node --env-file=../.env src/index.mjs
```

共享授权页按 [Auth UI 部署说明](https://github.com/Kfjie-MCP/auth-ui/blob/main/docs/deployment.md)构建到 `/opt/mcp/auth-ui`。systemd 启动时，在网关服务的 `[Service]` 段加入 `EnvironmentFile=/opt/mcp/agent-reach/.env`。

渠道状态通过 `reach_status` 或上游 CLI 的 `doctor --text` 检查。平台登录由部署者在服务器完成，Cookie 和浏览器配置目录单独保存。
