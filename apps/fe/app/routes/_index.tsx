import { motion } from 'framer-motion'
import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
	return [{ title: '首页' }, { name: 'description', content: '巴拉巴拉' }]
}

export default function Component() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* 头部 */}
			<header className="relative py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600">
				<div className="max-w-4xl mx-auto px-4">
					<motion.img
						src="https://avatars.githubusercontent.com/u/8280832?v=4"
						className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-6 shadow-lg"
						alt="Avatar"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					/>
					<motion.h1
						className="text-4xl font-bold text-white mb-4"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Max Zhang
					</motion.h1>
					<motion.p
						className="text-xl text-blue-100"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						开发 & 产品
					</motion.p>

					{/* 社交链接 */}
					<motion.div
						className="mt-8 flex justify-center space-x-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<a
							href="https://github.com/zhangshichuan"
							target="_blank"
							className="text-blue-100 hover:text-white transition-colors"
							rel="noreferrer"
						>
							<GitHubIcon className="h-6 w-6" />
						</a>
					</motion.div>
				</div>
			</header>

			{/* 主要内容 */}
			<main className="max-w-6xl mx-auto px-4 py-12">
				{/* 关于我 */}
				<section className="mb-20">
					<motion.h2
						className="text-3xl font-bold text-gray-800 mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						关于我
					</motion.h2>
					<div className="grid md:grid-cols-2 gap-8">
						<motion.p
							className="text-gray-600 leading-relaxed"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							我是有 8 年经验的全栈开发者，擅长使用现代Web技术构建高效、可扩展的应用程序。
							热爱开源社区，持续学习新技术，喜欢通过代码解决实际问题。
						</motion.p>
						<div className="grid grid-cols-2 gap-4">
							{['TypeScript', 'React', 'Nest.js', 'PostgreSQL', 'Prisma', 'Linux'].map((skill) => (
								<motion.span
									key={skill}
									className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-center text-sm font-medium"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: 0.2 }}
								>
									{skill}
								</motion.span>
							))}
						</div>
					</div>
				</section>

				{/* 项目展示 */}
				<section className="mb-20">
					<motion.h2
						className="text-3xl font-bold text-gray-800 mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						精选项目
					</motion.h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[1, 2, 3].map((item) => (
							<motion.div
								key={item}
								className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<img
									src={`https://picsum.photos/400/300?random=${item}`}
									alt="Project"
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">项目 {item}</h3>
									<p className="text-gray-600 mb-4">项目简要描述，展示主要功能和使用的技术栈</p>
									<div className="flex flex-wrap gap-2">
										{['React', 'Tailwind', 'Node.js'].map((tech) => (
											<span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
												{tech}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* 联系方式 */}
				<section className="text-center py-12 bg-white rounded-xl shadow-lg">
					<motion.h2
						className="text-3xl font-bold text-gray-800 mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						保持联系
					</motion.h2>
					<motion.p
						className="text-gray-600 mb-8 max-w-xl mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						如果你有任何问题或想讨论合作机会，欢迎随时联系我
					</motion.p>
					<motion.a
						href="mailto:zsc.guru@gmail.com"
						className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						发送邮件
					</motion.a>
				</section>
			</main>

			{/* 页脚 */}
			<footer className="border-t border-gray-200 mt-12 py-8 text-center text-gray-600">
				<p>© 2025 Max Zhang. All rights reserved</p>
			</footer>
		</div>
	)
}

// SVG图标组件
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path
				fillRule="evenodd"
				d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
				clipRule="evenodd"
			/>
		</svg>
	)
}
