/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GATEWAY: string
	// 更多环境变量...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare namespace NodeJS {
	interface ProcessEnv extends ImportMetaEnv {}
}
