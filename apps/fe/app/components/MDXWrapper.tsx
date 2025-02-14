import { MDXProvider } from '@mdx-js/react'
import type { PropsWithChildren } from 'react'

interface MDXProviderProps extends PropsWithChildren {}

export function MDXWrapper({ children }: MDXProviderProps) {
	return (
		<MDXProvider>
			<div className="prose max-w-prose">{children}</div>
		</MDXProvider>
	)
}
