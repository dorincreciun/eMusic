import { LayoutPage } from '../../../shared/layouts'
import { usePlaylist } from '../../../features/playlists'
import { Playlist } from '../../../shared/ui/Playlist'
import './index.scss'

export const PlaylistsPage = () => {
	const { data, isLoading, isError } = usePlaylist()

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error...</div>

	return (
		<LayoutPage>
			<div className={'grid-playlists'}>
				{data?.data?.data.map((item) => {
					const data = item.attributes
					return (
						<Playlist
							title={data.title}
							image={data.image}
							likes={data.likes}
							dislikes={data.dislikes}
							description={data.description}
						/>
					)
				})}
			</div>
		</LayoutPage>
	)
}
