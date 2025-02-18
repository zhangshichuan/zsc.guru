import type { Route } from './+types/about'

export function meta({}: Route.MetaArgs) {
	return [{ title: '关于' }, { name: 'description', content: '巴拉巴拉' }]
}

export default function Component() {
	return <div>about</div>
}
