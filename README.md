# Agent Reach MCP

让 AI 搜索社区帖子、读取社交平台内容。基于 [Agent Reach](https://github.com/Panniantong/Agent-Reach) CLI，提供只读 MCP 工具和 OAuth 接入。

## 工具

| 工具 | 用途 |
| --- | --- |
| `reach_channels` | 查看可用平台和操作 |
| `reach_status` | 检查渠道状态 |
| `reach_search` | 跨平台搜索 |
| `reach_url` | 读取支持的帖子链接 |
| `reach_action` | 调用平台专用查询 |

支持的渠道包括小红书、X、Reddit、V2EX 等，实际可用性以 `reach_channels` 为准。部分渠道需要在服务器安装组件或登录。

## 接入与配置

部署后的地址格式为 `https://mcp.example.com/agent-reach/mcp`，支持 OAuth 或 Bearer。

```bash
git clone https://github.com/Kfjie-MCP/agent-reach.git
cd agent-reach
cp .env.example .env
```

在私有 `.env` 中填写 `PUBLIC_URL`，并让网关进程加载该文件。部署位置、CLI 安装和认证配置见[运行说明](docs/deployment.md)。

此适配器开放查询与读取操作；通用网页、GitHub、YouTube 及 Bilibili 字幕工具未开放。视频内容可配合 [Transcriptor](https://github.com/Kfjie-MCP/transcriptor) 使用。
