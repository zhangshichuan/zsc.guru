import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

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
		<html lang="zh-CN">
			<body className="antialiased flex justify-center">
				<ThemeProvider enableSystem={true} disableTransitionOnChange>
					<div className="w-[1080px]">{children}</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
