import './index.scss'

interface PlaylistProps {
	title: string
	description: string
	image: string
	likes: number
	dislikes: number
}

export const Playlist = ({
	title,
	description,
	image,
	likes,
	dislikes
}: PlaylistProps) => {
	return (
		<div className={'playlist'}>
			<div className={'playlist__image'}>
				<img
					src={image}
					alt={title}
				/>
			</div>
			<div className={'playlist__content'}>
				<div className={'playlist__title'}>{title}</div>
				<div className={'playlist__description'}>{description}</div>
				<div className={'playlist__footer'}>
					<div className={'playlist__footer-likes-count'}>
						{likes}
					</div>
					<div className={'playlist__footer-dislikes-count'}>
						{dislikes}
					</div>
				</div>
			</div>
		</div>
	)
}
