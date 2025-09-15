import { Heart, House, Pen, User } from 'lucide-react'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import Dock from '@/bits/Dock/Dock'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
	title: 'Max Zhang',
	description: '自留地',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const items = [
		{
			icon: (
				<Link href={'/'}>
					<House />
				</Link>
			),
			label: '首页',
		},
		{
			icon: (
				<Link href={'/post'}>
					<Pen />
				</Link>
			),
			label: '文字',
		},
		{
			icon: (
				<Link href={'/life'}>
					<Heart />
				</Link>
			),
			label: '生活',
		},
		{
			icon: (
				<Link href={'/me'}>
					<User />
				</Link>
			),
			label: '关于',
		},
	]

	return (
		<html lang="zh-CN" suppressHydrationWarning>
			<body className="antialiased">
				<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
					{children}
				</ThemeProvider>

				<Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
			</body>
		</html>
	)
}
