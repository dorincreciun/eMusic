import { NavLink } from 'react-router'
/* Types */
import type { FC } from 'react'
import type { NavigateType } from '../model/types.ts'
/* SCSS */
import './index.scss'

export const Navigate: FC<NavigateType> = ({ children, path }) => {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive
					? 'header__nav-link header__nav-link--active'
					: 'header__nav-link'
			}
		>
			{children}
		</NavLink>
	)
}
