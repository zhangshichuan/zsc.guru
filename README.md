# Modern Monorepo Template

A full-stack TypeScript monorepo template with React 19, React Router v7, Vite, TailwindCSS and NestJS.

---

## Features

- 🚀 **Modern Stack**: React 19 + Vite + TailwindCSS
- ⚡ **Full-stack**: Frontend (SPA/SSR) + Backend (NestJS / NextJS)
- 📦 **Monorepo**: Managed by TurboRepo with pnpm workspaces
- 🛠 **Developer Experience**: ESLint + Prettier + Husky
- 🔄 **CI/CD Ready**: Changesets for versioning and publishing

---

## Tech Stack

### Frontend

- [React 19](https://react.dev/)
- [React Router v7](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend

- [NestJS](https://nestjs.com/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Tooling

- [pnpm workspaces](https://pnpm.io/workspaces)
- [TurboRepo](https://turbo.build/repo)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/) (Git hooks)
- [Changesets](https://github.com/changesets/changesets) (Version management)

---

## Getting Started

### Prerequisites

- Node.js >=20.12.0
- pnpm >=8.0.0
- React >=19.0.0
- NestJS >=10.0.0

### Installation

```bash
pnpm install
```

### Development

```bash
# Start all apps in development mode
pnpm dev
```

- SPA 默认端口：`5173`（可通过 package.json 修改）
- SSR 默认端口：`5174`（开发环境）, `3001`（生产环境）
- Backend (NestJS) 默认端口：`3000`（可通过环境变量 PORT 修改）

#### 各子项目单独启动

```bash
# 启动 SPA
cd apps/spa && pnpm dev

# 启动 SSR
cd apps/ssr && pnpm dev

# 启动后端
cd apps/be && pnpm dev
```

### Production Build

```bash
pnpm build:prod
```

```bash
pnpm pm2
```

- SPA/SSR 构建产物在 `apps/spa/build`、`apps/ssr/build`
- 后端构建产物在 `apps/be/build`

### 端口自定义

- SPA/SSR: 修改 `apps/spa/package.json` 或 `apps/ssr/package.json` 的 `dev` 脚本中的 `--port` 参数
- 后端: 设置环境变量 `PORT`，如 `PORT=4000 pnpm start`

### 环境变量

- 前端通过 `.env` 或 `.env.local` 配置，变量如 `VITE_GATEWAY` 用于 API 代理
- 后端通过 `.env` 或直接设置 process.env 变量

---

## Project Structure

```
modern-monorepo-template/
├── apps/
│   ├── be/        # NestJS backend
│   │   ├── src/   # 源码目录
│   │   └── build/ # 构建产物
│   ├── spa/       # SPA (Vite)
│   │   ├── app/   # 前端页面与组件
│   │   └── build/ # 构建产物
│   └── ssr/       # SSR (NextJS)
│       ├── app/   # 前端页面与组件
│       └── .next/ # 构建产物
├── packages/      # 共享包（如 utils、types）
├── docs/          # 项目文档
├── .eslintrc.js   # ESLint config
├── .prettierrc    # Prettier config
├── package.json   # Root package
└── turbo.json     # TurboRepo config
```

---

## Application Details

### SPA Frontend

- 开发服务器： http://localhost:5173
- 生产构建： `pnpm build:prod` in spa 目录
- 端口修改：编辑 `apps/spa/package.json` 的 dev 脚本
- 产物目录：`apps/spa/build/client`
- 本地调试：支持 Vite 热更新和 React DevTools

### SSR Frontend

- 开发服务器： http://localhost:5173
- 生产服务器： http://localhost:3001
- 构建命令：`pnpm build:prod` in ssr 目录
- 产物目录：`apps/ssr/.next`

### Backend API

- 开发服务器： http://localhost:3000
- 生产服务器： http://localhost:3000（PM2 部署时）
- 端口修改：设置环境变量 `PORT`
- 产物目录：`apps/be/build`
- 本地调试：支持 NestJS Debug 模式启动

---

## 环境变量说明

- 前端：在 `apps/spa/.env` 中配置，如：
  - `VITE_GATEWAY`：API 代理目标
- 后端：在 `apps/be/.env` 或直接通过 `process.env` 读取

---

## 常见问题

### 1. SSR/CSR 产物为什么有 client/server 两层目录？

- react-router v7 支持 SSR/CSR 两种模式，构建时会根据 `ssr` 配置生成 `client`（前端静态资源）和 `server`（Node 服务端渲染入口）目录。
- 只用 CSR 时可在 `react-router.config.ts` 里将 `ssr` 设为 `false`，产物只会有 `client` 目录。

### 2. 如何自定义端口？

- SPA/SSR: 修改 package.json 的 dev/start 脚本 `--port` 参数
- 后端: 设置环境变量 `PORT`

### 3. 如何添加新的共享包？

- 在 `packages/` 下新建目录，配置好 package.json 并在各子项目中通过 pnpm workspace 依赖

### 4. 如何调试 SSR/CSR 切换？

- 修改 `apps/ssr/react-router.config.ts` 的 `ssr` 字段，重新构建即可

---

## 日志管理

项目使用分层日志策略，日志文件位于 `logs/` 目录：

- `app.log`：应用主日志
- `app-err.log`：错误日志
- `app-out.log`：标准输出日志
- `be.log`：后端服务日志
- `be-err.log`：后端错误日志
- `ssr.log`：SSR 服务日志
- `ssr-err.log`：SSR 错误日志

## License

ISC
