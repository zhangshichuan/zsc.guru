import pluginJs from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		files: ['apps/ssr/**/*.{ts,tsx}'],
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
		},
	},
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	// 自定义排除规则
	{
		rules: {
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-namespace': 'off',
			'no-empty-pattern': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
		},
	},
	{
		ignores: ['**/.next/', '**/dist/', '**/build/', '**/node_modules/'],
	},
]
