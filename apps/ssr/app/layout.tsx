import type { Metadata } from 'next'
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
		<html lang="en">
			<body className="antialiased flex justify-center">
				<div className="w-[1080px]">{children}</div>
			</body>
		</html>
	)
}
