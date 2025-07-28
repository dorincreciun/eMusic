import { Link } from 'react-router'

export const Header = () => {
	return (
		<header className={'container-fluid'}>
			<div className={'container'}>
				<Link to={'/'}>Logo</Link>
				<nav>
					<ul>
						<li>
							<Link to={'/'}>Link</Link>
						</li>
						<li>
							<Link to={'/'}>Link</Link>
						</li>
						<li>
							<Link to={'/'}>Link</Link>
						</li>
						<li>
							<Link to={'/'}>Link</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

Header.displaName = 'Header'
