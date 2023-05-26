import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/:mediaType/:id', element: <Details /> },
			{ path: '/search/:query', element: <SearchResult /> },
			{
				path: '/explore/:mediaType',
				element: <Explore />,
			},
			{
				path: '*',
				element: '<PageNotFound />',
			},
		],
	},
]);

export default router;
