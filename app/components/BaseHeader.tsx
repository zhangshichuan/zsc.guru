import { Avatar } from '@nextui-org/react'
import { NavLink, useNavigate } from '@remix-run/react'
import { DaySvg } from './DaySVG'

function BaseHeader() {
	const navigate = useNavigate()
	const navs = [
		{
			title: '关于',
			route: 'about',
		},
		{
			title: '文章',
			route: 'articles',
		},
		{
			title: '项目',
			route: 'projects',
		},
		{
			title: '用途',
			route: 'uses',
		},
	]

	return (
		<header className="flex items-center w-full justify-around mt-6">
			{/* 头像 */}
			<Avatar
				onClick={() => {
					navigate('/')
				}}
				className="cursor-pointer"
				size="sm"
				src="/image/avatar.png"
			/>

			{/* 导航 */}
			<nav
				className="
				pointer-events-auto

			"
			>
				<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
					{navs?.map((nav) => (
						<li key={nav.route}>
							<NavLink className="relative block px-3 py-2 transition hover:text-teal-500" to={nav.route}>
								{nav.title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			{/* 主题 */}
			<section className="cursor-pointer group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition">
				<DaySvg />
			</section>
		</header>
	)
}

export { BaseHeader }
