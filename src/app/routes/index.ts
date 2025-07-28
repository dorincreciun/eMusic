import { type RouteObject, useRoutes } from 'react-router'
import { publicRoutes } from './public'
import { guardRoutes } from './private'

export const AppRoutes = (): RouteObject[] =>
	useRoutes([...publicRoutes, guardRoutes])
