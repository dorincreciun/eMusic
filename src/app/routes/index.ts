import { useRoutes } from 'react-router'
import { publicRoutes } from './public'
import { guardRoutes } from './private'

export const AppRoutes = () => useRoutes([...publicRoutes, guardRoutes])
