export const postModules = import.meta.glob('../posts/*')

export type IPost = {
	name: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	element: () => Promise<any>
}
export function getPostFileList() {
	const list: IPost[] = []

	Object.entries(postModules).map((entry) => {
		const match = entry?.[0].match(/..\/posts\/(.*)\.md/)

		if (match) {
			list.push({
				element: entry[1],
				name: match[1],
			})
		}
		return entry
	})

	return list
}
