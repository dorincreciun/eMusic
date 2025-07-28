import { Link } from 'react-router'
/* SCSS */
import './index.scss'
/* ICONS */
import { CirclePlay } from 'lucide-react'

export const Logo = () => {
	return (
		<Link
			to={'/'}
			className={'header__logo'}
		>
			<div className={'header__logo-icon'}>
				<CirclePlay />
			</div>
			<span className={'header__logo-text'}>eMusic</span>
		</Link>
	)
}
