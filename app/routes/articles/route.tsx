import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: '好记性不如烂笔头!' }]
}

export default function Articles() {
	return <div>好记性不如烂笔头!</div>
}
