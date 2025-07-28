import { Link } from 'react-router'
/* SCSS */
import './index.scss'

export const Logo = () => {
	return (
		<Link
			to={'/'}
			className={'header__logo'}
		>
			eMusic
		</Link>
	)
}
