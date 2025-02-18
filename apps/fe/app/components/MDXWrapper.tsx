import { MDXProvider } from '@mdx-js/react'
import type { PropsWithChildren } from 'react'

interface MDXProviderProps extends PropsWithChildren {}

export function MDXWrapper({ children }: MDXProviderProps) {
	return (
		<MDXProvider>
			<div className="p-6 prose max-w-[1200px]" style={{ margin: '0 auto' }}>
				{children}
			</div>
		</MDXProvider>
	)
}
