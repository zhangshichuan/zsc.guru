import { Suspense, lazy } from 'react'
import { useLoaderData } from 'react-router'
import { MDXWrapper } from '~/components/MDXWrapper'
import { getPostFileList, type IPost } from '~/services/post'
import type { Route } from './+types/post.$name'

export function meta({ params }: Route.MetaArgs) {
	return [{ title: params.name }, { name: 'description', content: '巴拉巴拉' }]
}

export async function loader({ params }: Route.LoaderArgs) {
	const { name } = params
	return { name }
}

export default function Component() {
	const { name } = useLoaderData<typeof loader>()

	return (
		<div>
			<MDXWrapper>
				<LazyPost name={name} />
			</MDXWrapper>
		</div>
	)
}

function LazyPost({ name }: Pick<IPost, 'name'>) {
	const list = getPostFileList()
	const element = list.find((item) => item.name === name)?.element
	if (!element) return <div>文章不存在</div>
	const Post = lazy(() => element())

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Post />
		</Suspense>
	)
}
