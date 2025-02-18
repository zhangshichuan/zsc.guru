import { useEffect, useState } from 'react'

export function Clock() {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	const hours = time.getHours()
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()

	return (
		<div className="flex justify-center items-center h-[500px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
			<div className="flex items-center justify-center p-8 bg-white rounded-full shadow-lg">
				<div className="flex space-x-4">
					<div className="text-4xl font-bold text-gray-800">{hours < 10 ? `0${hours}` : hours}</div>
					<div className="text-4xl font-bold text-gray-800">:</div>
					<div className="text-4xl font-bold text-gray-800">{minutes < 10 ? `0${minutes}` : minutes}</div>
					<div className="text-4xl font-bold text-gray-800">:</div>
					<div className="text-4xl font-bold text-gray-800">{seconds < 10 ? `0${seconds}` : seconds}</div>
				</div>
			</div>
		</div>
	)
}
