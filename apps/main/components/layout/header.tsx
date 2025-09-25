import { Menu, Newspaper, Smile, User } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
	{ href: '/post', label: '文章', icon: Newspaper },
	{ href: '/life', label: '生活', icon: Smile },
	{ href: '/me', label: '关于', icon: User },
]

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container relative flex h-14  ">
				{/* Left Side: Logo */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center space-x-2">
						<span className="font-bold">Max Zhang</span>
					</Link>
				</div>

				{/* Center: Desktop Nav (Absolutely Centered) */}
				<nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
					<div className="flex items-center gap-6 text-sm">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-foreground/60 transition-colors hover:text-foreground/80"
							>
								{link.label}
							</Link>
						))}
					</div>
				</nav>

				{/* Right Side: Mobile Nav Trigger & other controls */}
				<div className="flex flex-1 items-center justify-end">
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-6 w-6" />
									<span className="sr-only">Toggle Menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="w-full max-w-xs pt-6">
								<Link href="/" className="flex justify-center items-center">
									<span className="text-lg font-bold">Max Zhang</span>
								</Link>
								<Separator className="mb-6" />
								<div className="flex flex-col gap-y-2">
									{navLinks.map((link) => (
										<Button key={link.href} variant="ghost" className="w-full justify-start text-base" asChild>
											<Link href={link.href}>
												<link.icon className="mr-3 h-5 w-5 text-muted-foreground" />
												{link.label}
											</Link>
										</Button>
									))}
								</div>
							</SheetContent>
						</Sheet>
					</div>
					<nav className="hidden items-center md:flex">{/* Future icons can go here */}</nav>
				</div>
			</div>
		</header>
	)
}
