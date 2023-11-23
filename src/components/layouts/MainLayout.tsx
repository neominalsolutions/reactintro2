// AnaLayout

import { Outlet } from 'react-router-dom';
import Header, { NavbarMenu } from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';

export default function MainLayout() {
	const navItems: NavbarMenu[] = [
		{
			text: 'Anasayfa',
			url: '/',
		},
		{
			text: 'Hakkımızda',
			url: '/about',
		},
		{
			text: 'İletişim',
			url: '/contact',
		},
	];

	return (
		<>
			<Header items={navItems} />

			<Container sx={{ marginTop: '5rem' }} maxWidth={'lg'}>
				<Outlet />
			</Container>

			<Footer>
				<p>Alt Bilgi</p>
			</Footer>
		</>
	);
}
