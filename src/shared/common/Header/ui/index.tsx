import { Link } from 'react-router'
/* SCSS */
import './index.scss'
/* UI */
import { Navigate } from '../../../ui/Navigate'

export const Header = () => {
	return (
		<header className={'container-fluid header'}>
			<div className={'container header__content'}>
				<Link
					to={'/'}
					className={'header__logo'}
				>
					Logo
				</Link>
				<nav>
					<ul className={'header__nav'}>
						<li>
							<Navigate path={'/'}>Home</Navigate>
						</li>
						<li>
							<Navigate path={'/about'}>About</Navigate>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

Header.displaName = 'Header'
