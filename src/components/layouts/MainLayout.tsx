// AnaLayout

import { Outlet } from 'react-router-dom';
import Header, { NavbarMenu } from './Header';
import { Button, Container } from '@mui/material';
import Footer from './Footer';
import AppDrawer from './AppDrawer';
import { useState } from 'react';

export default function MainLayout() {
	// Drawer layout üzerinden görünüp görünmemesini sağlar
	const [isOpen, setOpen] = useState<boolean>(false);

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
			<Header
				items={navItems}
				openDrawer={(isOpen) => {
					setOpen(isOpen);
				}}
			/>

			<Container sx={{ marginTop: '5rem' }} maxWidth={'lg'}>
				<Outlet />
			</Container>

			<AppDrawer items={navItems} isOpen={isOpen}></AppDrawer>

			<Footer>
				<p>Alt Bilgi</p>
			</Footer>
		</>
	);
}
