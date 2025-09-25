import type { Metadata } from 'next'
import Link from 'next/link'
import { ThemeProvider } from 'next-themes'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

import './globals.css'

export const metadata: Metadata = {
	title: 'Max Zhang',
	description: '自留地',
}

const navLinks = [
	{ href: '/post', label: '文章' },
	{ href: '/life', label: '生活' },
	{ href: '/me', label: '关于' },
]

function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<span className="font-bold">Max Zhang</span>
					</Link>
					<nav className="flex items-center gap-6 text-sm">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-foreground/60 transition-colors hover:text-foreground/80"
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					{/* Mobile Nav */}
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Toggle Menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left">
								<Link href="/" className="mb-6 flex items-center space-x-2">
									<span className="font-bold">Max Zhang</span>
								</Link>
								<div className="flex flex-col gap-4">
									{navLinks.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											className="text-foreground/80 transition-colors hover:text-foreground"
										>
											{link.label}
										</Link>
									))}
								</div>
							</SheetContent>
						</Sheet>
					</div>
					{/* Right side of header */}
					<nav className="flex items-center">{/* You can add theme toggle or other icons here */}</nav>
				</div>
			</div>
		</header>
	)
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
						<main className="flex-1">{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
