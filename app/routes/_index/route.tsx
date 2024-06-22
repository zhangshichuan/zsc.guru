import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: 'Max Zhang - 前端工程师' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
	return <div>每天至少写 100 行代码来完善这个网站~</div>
}
