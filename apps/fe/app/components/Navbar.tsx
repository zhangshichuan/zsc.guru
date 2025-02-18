import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Post', path: '/post' },
	]

	const linkVariants = {
		hover: {
			y: -2,
			transition: { type: 'spring', stiffness: 300 },
		},
		tap: { scale: 0.95 },
	}

	return (
		<motion.nav
			className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm"
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* 品牌Logo */}
					<motion.a href="/" className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
						<span className="text-2xl font-bold text-gray-800">Max</span>
					</motion.a>

					{/* 桌面导航 */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<motion.div key={link.name} className="relative">
								<NavLink
									to={link.path}
									className={({ isActive }) =>
										`px-3 py-2 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`
									}
								>
									<motion.span className="block" variants={linkVariants} whileHover="hover" whileTap="tap">
										{link.name}
									</motion.span>
								</NavLink>
							</motion.div>
						))}
					</div>

					{/* 移动菜单按钮 */}
					<div className="md:hidden">
						<motion.button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-md text-gray-800"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							{isOpen ? (
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</motion.button>
					</div>
				</div>

				{/* 移动菜单 */}
				{isOpen && (
					<motion.div
						className="md:hidden absolute top-16 right-0 w-full bg-white shadow-lg"
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<div className="px-4 pt-2 pb-4 space-y-2">
							{navLinks.map((link) => (
								<motion.div key={link.name} className="relative">
									<NavLink
										to={link.path}
										onClick={() => {
											setIsOpen(false)
										}}
										className={({ isActive }) =>
											`px-3 py-2 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`
										}
									>
										<motion.span className="block" variants={linkVariants} whileHover="hover" whileTap="tap">
											{link.name}
										</motion.span>
									</NavLink>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	)
}

export { Navbar }
