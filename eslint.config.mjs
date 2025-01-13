import pluginJs from '@eslint/js'
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
		ignores: ['**/dist/', '**/build/', '**/node_modules/'],
	},
]
