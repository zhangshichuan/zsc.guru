module.exports = {
	apps: [
		// 后端服务
		{
			name: 'be',
			script: "pnpm -F './apps/be' run start",
			log_file: './logs/app.log',
			error_file: './logs/app-err.log',
			out_file: './logs/app-out.log',
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
		// 前端服务
		{
			name: 'fe',
			script: "pnpm -F './apps/fe' run start",
			log_file: './logs/fe.log',
			error_file: './logs/fe-err.log',
			out_file: './logs/fe-out.log',
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
