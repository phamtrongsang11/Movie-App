import React from 'react';
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa';

import ContentWrapper from '../contentWrapper/ContentWrapper';

import './style.scss';

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>
				<div className="infoText">
					Movix is a service that provides information about movies and TV
					series. It is designed to help users discover new movies and TV shows,
					as well as learn more about their favorites. Moviex uses a variety of
					sources to provide comprehensive information about movies and TV
					shows, including plot summaries, cast and crew members, ratings, and
					more.
				</div>
				<div className="socialIcons">
					<span className="icon">
						<FaFacebookF />
					</span>
					<span className="icon">
						<FaInstagram />
					</span>
					<span className="icon">
						<FaTwitter />
					</span>
					<span className="icon">
						<FaLinkedin />
					</span>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
