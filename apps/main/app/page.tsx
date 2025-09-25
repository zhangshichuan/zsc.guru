import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { FaGithub, FaMailBulk } from 'react-icons/fa'

const recentPosts = [
	{
		slug: 'post/hello-world',
		title: 'Hello World: 我的第一篇文章',
		date: '2025-09-25',
	},
	{
		slug: 'post/tech-stack',
		title: '我使用的技术栈',
		date: '2025-09-20',
	},
]

export default function Home() {
	return (
		<div className="container mx-auto max-w-screen-lg px-4 py-12 md:py-20">
			<section className="flex flex-col items-center text-center">
				<Avatar className="h-24 w-24 md:h-28 md:w-28">
					<AvatarImage src="/avatar.jpg" alt="@MaxZhang" />
					<AvatarFallback>MZ</AvatarFallback>
				</Avatar>
				<h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">Max Zhang</h1>
				<p className="mt-3 text-lg text-muted-foreground md:text-xl">TypeScript & Rust</p>
				<div className="mt-6 flex gap-4">
					<Button asChild variant="outline">
						<a href="https://github.com/zhangshichuan" target="_blank" rel="noopener noreferrer">
							<FaGithub className="mr-2 h-4 w-4" />
							GitHub
						</a>
					</Button>
					<Button asChild variant="outline">
						<a href="mailto:zsc.guru@gmail.com">
							<FaMailBulk className="mr-2 h-4 w-4" />
							联系我
						</a>
					</Button>
				</div>
			</section>

			<section className="mt-20 md:mt-28">
				<h2 className="text-2xl font-bold tracking-tight md:text-3xl">最新文章</h2>
				<div className="mt-8 grid gap-6 md:grid-cols-2">
					{recentPosts.map((post) => (
						<Link href={post.slug} key={post.slug}>
							<Card className="transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
								<CardHeader>
									<CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">{post.date}</p>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
				<div className="mt-8 text-center">
					<Button asChild variant="ghost">
						<Link href="/post">查看所有文章 &rarr;</Link>
					</Button>
				</div>
			</section>
		</div>
	)
}
