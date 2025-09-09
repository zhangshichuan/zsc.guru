module.exports = {
	apps: [
		{
			name: 'main',
			script: "pnpm -F './apps/main' run start",
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
