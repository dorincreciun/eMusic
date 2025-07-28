import { useQuery } from '@tanstack/react-query'
import { client } from '../../../shared/api/client.ts'

export const usePlaylist = () => {
	return useQuery({
		queryKey: ['playlist'],
		queryFn: async () => {
			return await client.GET('/playlists')
		}
	})
}
