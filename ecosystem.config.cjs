module.exports = {
	apps: [
		// 纯后端服务
		{
			name: 'be',
			script: "pnpm -F './apps/be' run start",
			log_file: './logs/be.log',
			error_file: './logs/be-err.log',
			out_file: './logs/be-out.log',
			merge_logs: true,
			max_memory_restart: '1G',
			autorestart: true,
			restart_delay: 5000,
			env: {
				NODE_ENV: 'development',
				LOG_LEVEL: 'debug',
			},
			env_production: {
				NODE_ENV: 'production',
				LOG_LEVEL: 'error',
			},
		},
		// 同构服务
		// 也可以是前端的 ssr 服务
		// 也可以是前端的 bff 服务
		{
			name: 'ssr',
			script: "pnpm -F './apps/ssr' run start",
			log_file: './logs/ssr.log',
			error_file: './logs/ssr-err.log',
			out_file: './logs/ssr-out.log',
			merge_logs: true,
			max_memory_restart: '1G',
			autorestart: true,
			restart_delay: 5000,
			env: {
				NODE_ENV: 'development',
				LOG_LEVEL: 'debug',
			},
			env_production: {
				NODE_ENV: 'production',
				LOG_LEVEL: 'error',
			},
		},
	],
}
