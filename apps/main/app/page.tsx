import GridDistortion from '@/bits/GridDistortion/GridDistortion'

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<div className="w-full h-[1080px] relative">
				<GridDistortion
					imageSrc="/home_banner.png"
					grid={10}
					mouse={0.1}
					strength={0.15}
					relaxation={0.9}
					className=""
				/>
			</div>
		</div>
	)
}
