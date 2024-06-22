module.exports = {
	apps: [
		{
			name: 'zsc.guru',
			script: 'npm run start',
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
	],
}
