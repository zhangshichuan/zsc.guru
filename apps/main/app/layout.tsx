import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import { Header } from '@/components/layout/header'

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
	return (
		<html lang="zh-CN" suppressHydrationWarning>
			<body className="min-h-screen bg-background font-sans antialiased">
				<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
					<div className="relative flex min-h-screen flex-col">
						<Header />
						<main className="container flex-1">{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
