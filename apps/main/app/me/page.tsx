import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const skills = {
	Languages: ['TypeScript', 'Rust', 'PHP', 'Python', 'Dart', 'CSS', 'C/C++'],
	'Frameworks & Libraries': [
		'Next.js',
		'Nest.js',
		'Node.js',
		'Flutter',
		'Electron',
		'Tauri',
		'Tailwind CSS',
		'Framer Motion',
	],
	'Tools & Platforms': [
		'Git & GitHub',
		'Docker',
		'Vercel',
		'Figma',
		'PNPM',
		'Vite',
		'Turborepo',
		'PostgreSQL',
		'GraphQL',
		'Browser APIs & Graphics',
	],
	'Web3 & Blockchain': ['Solana', 'Smart Contracts', 'Anchor', 'Web3.js', 'IPFS'],
	'CS Fundamentals': ['数据结构与算法', '计算机网络', '操作系统'],
}

export default function MePage() {
	return (
		<div className=" py-12 md:py-20">
			{/* Section 1: Hero */}
			<section className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
				<Avatar className="h-32 w-32 md:h-40 md:w-40">
					<AvatarImage src="/avatar.jpg" alt="Max Zhang" />
					<AvatarFallback>Max</AvatarFallback>
				</Avatar>
				<div className="flex-1">
					<h1 className="text-3xl font-bold tracking-tight md:text-4xl">Max Zhang</h1>
					<p className="mt-3 text-lg text-muted-foreground md:text-xl">
						一位数字世界的探索者，致力于用代码和创意，编织出温暖而有力量的在线体验。
					</p>
				</div>
			</section>

			{/* Section 2: My Story */}
			<section className="mt-16 md:mt-20">
				<h2 className="text-2xl font-bold tracking-tight md:text-3xl">我的故事</h2>
				<div className="prose prose-neutral prose-p:mt-6 mt-6 max-w-none text-foreground/80 dark:prose-invert flex flex-col gap-4">
					<p>
						你好，我是
						Max。一名对技术充满热情的软件工程师。我的旅程始于对计算机如何工作的简单好奇，如今，这份好奇心已经引导我走上了创造高效、美观且用户友好的网络应用的职业道路。
					</p>
					<p>
						我坚信，最好的产品源于对人的深刻理解和对技术的精湛掌握。无论是构建一个复杂的后端系统，还是打磨一个像素完美的UI，我都力求在每一个细节中体现出简洁与优雅。对我而言，代码不仅仅是逻辑，它也是一种艺术和手艺。
					</p>
					<p>
						在这个不断变化的行业中，我是一个终身学习者。目前，我正怀着巨大的热情投身于 Web3
						的世界，并计划在未来专注于高性能的 Solana 生态。我渴望将我的技能应用于构建下一代互联网的浪潮中。
					</p>
				</div>
			</section>

			{/* Section 3: My Toolkit */}
			<section className="mt-16 md:mt-20">
				<h2 className="text-2xl font-bold tracking-tight md:text-3xl">我的工具箱</h2>
				<div className="mt-6 space-y-6">
					{Object.entries(skills).map(([category, items]) => (
						<div key={category}>
							<h3 className="text-lg font-semibold text-foreground/90">{category}</h3>
							<div className="mt-3 flex flex-wrap gap-2">
								{items.map((item) => (
									<Badge key={item} variant="secondary">
										{item}
									</Badge>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Section 4: Get in Touch */}
			<section className="mt-16  md:mt-20">
				<h2 className="text-2xl font-bold tracking-tight md:text-3xl">与我联系</h2>
				<p className="mt-4 text-muted-foreground">随时欢迎你通过以下方式与我交流。</p>
				<div className="mt-6 flex gap-4">
					<Button asChild variant="outline">
						<a href="https://github.com/zhangshichuan" target="_blank" rel="noopener noreferrer">
							<FaGithub className="mr-2 h-4 w-4" />
							GitHub
						</a>
					</Button>
					<Button asChild variant="outline">
						<a href="mailto:zsc.guru@gmail.com">
							<Mail className="mr-2 h-4 w-4" />
							邮箱
						</a>
					</Button>
				</div>
			</section>
		</div>
	)
}
