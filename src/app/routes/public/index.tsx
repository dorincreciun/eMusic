import { OauthPage } from '../../../pages/oauth'
import type { RouteObject } from 'react-router'

export const publicRoutes: RouteObject[] = [
	{
		path: '/oauth',
		element: <OauthPage />
	}
]
