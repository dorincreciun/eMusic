import { createRoot } from 'react-dom/client'

/* TANSTACK */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

/* ROUTING */
import { BrowserRouter } from 'react-router'
import { AppRoutes } from '../routes'

/* LAYOUTS */
import { LayoutApp } from '../../shared/layouts'

/* COMMON */
import { Footer, Header } from '../../shared/common'

/* SCSS */
import '../styles/index.scss'

/* TANSTACK DEFAULT SETTINGS */
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		{/* APP */}
		<BrowserRouter>
			<LayoutApp>
				<Header />
				<AppRoutes />
				<Footer />
			</LayoutApp>
		</BrowserRouter>

		{/* TANSTACK DEVTOOLS */}
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
)
