import { AuthGuard } from '../guards/AuthGuard.tsx'
import type { RouteObject } from 'react-router'

export const privateRoutes: RouteObject[] = [
	{
		path: '/dashboard',
		element: <div></div>
	}
]

export const guardRoutes = {
	element: <AuthGuard />,
	children: [...privateRoutes]
}
