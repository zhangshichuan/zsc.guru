import { motion } from 'framer-motion'
import { useLoaderData } from 'react-router'
import { getPostFileList } from '~/services/post'
import type { Route } from './+types/post._index'

export function meta({}: Route.MetaArgs) {
	return [{ title: '文章列表' }, { name: 'description', content: '巴拉巴拉' }]
}

export function loader() {
	const postFileList = getPostFileList()
	return {
		postFileList,
	}
}

export default function Component() {
	const { postFileList } = useLoaderData<typeof loader>()

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4">
				<motion.h1
					className="text-4xl font-bold text-gray-800 mb-8 text-center"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					文章列表
				</motion.h1>
				<motion.ul
					className="space-y-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{postFileList.map((file, index) => (
						<motion.li
							key={file.name}
							className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							<a href={`/post/${file.name}`} className="text-blue-600 hover:underline">
								{file.name}
							</a>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</div>
	)
}
