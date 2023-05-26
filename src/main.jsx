import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</Provider>
	</QueryClientProvider>
);
