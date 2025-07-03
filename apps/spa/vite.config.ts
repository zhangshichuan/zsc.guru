import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import checker from 'vite-plugin-checker'
import devtoolsJson from 'vite-plugin-devtools-json'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
	// 按照自定义 mode 加载对应的环境配置。.env.local 存在的时候无论什么 mode 配置都会被.env.local 覆盖，因为 *.local 优先级最高
	Object.assign(process.env, loadEnv(mode, process.cwd()))

	return {
		plugins: [
			tailwindcss(),
			reactRouter(),
			tsconfigPaths(),
			devtoolsJson(),
			checker({
				typescript: true,
			}),
		],
		server: {
			open: true,
			proxy: {
				'/api': {
					target: process.env.VITE_GATEWAY,
					changeOrigin: true,
					secure: false,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
		},
	}
})
