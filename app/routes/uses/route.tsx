import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: '工具就是生产力!' }]
}

export default function Uses() {
	return <div>工具就是生产力!</div>
}
