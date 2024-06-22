import { NextUIProvider } from '@nextui-org/system'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { BaseHeader } from './components/BaseHeader'
import './tailwind.css'

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<NextUIProvider>
			<section className="w-full h-screen bg-[#fafafa] flex justify-center">
				<section className="w-[1200px] px-12 bg-white">
					<BaseHeader />
					<section className="mt-36">
						<Outlet />
					</section>
				</section>
			</section>
		</NextUIProvider>
	)
}
