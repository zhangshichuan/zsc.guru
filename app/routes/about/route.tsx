import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: '自我介绍一下啦~' }]
}

export default function About() {
	return <div>自我介绍一下啦~</div>
}
