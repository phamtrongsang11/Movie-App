import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import useConfig from '../hooks/useConfig';

const Layout = () => {
	useConfig();
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
