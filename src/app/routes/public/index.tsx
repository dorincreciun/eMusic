/* Types */
import type { RouteObject } from 'react-router'
/* Pages */
import { OauthPage } from '../../../pages/oauth'
import { PlaylistsPage } from '../../../pages/playlists'

export const publicRoutes: RouteObject[] = [
	{
		path: '/oauth',
		element: <OauthPage />
	},
	{
		path: '/',
		element: <PlaylistsPage />
	}
]
