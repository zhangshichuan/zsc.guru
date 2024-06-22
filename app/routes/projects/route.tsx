import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: '我都做过哪些项目' }]
}

export default function Projects() {
	return <div>我都做过哪些项目</div>
}
