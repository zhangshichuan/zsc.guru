import LightRays from '@/bits/LightRays/LightRays'
import TextType from '@/bits/TextType/TextType'

export default function Home() {
	return (
		<div className="">
			<section className="relative -z-10">
				<LightRays
					raysOrigin="top-center"
					raysColor="#00ffff"
					raysSpeed={1.5}
					lightSpread={0.8}
					rayLength={1.2}
					followMouse={true}
					mouseInfluence={0.1}
					noiseAmount={0.1}
					distortion={0.05}
					className="custom-rays"
				/>
			</section>
			<section className="absolute top-1/5 left-1/2 transform -translate-x-1/2  text-[64px] font-bold ">
				<TextType
					text={['Hello, you!', '哈哈哈哈，我还没想好具体说啥', '先自己逛吧~']}
					typingSpeed={75}
					pauseDuration={1500}
					showCursor={true}
					cursorCharacter="_"
				/>
			</section>
		</div>
	)
}
