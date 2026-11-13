#!/bin/sh
set -eu
base=/opt/mcp/agent-reach
export PATH="$base/bin:$PATH"
export UV_TOOL_DIR="$base/uv-tools"
export UV_TOOL_BIN_DIR="$base/bin"
export UV_CACHE_DIR="$base/cache"
exec "$base/bin/agent-reach" "$@"
