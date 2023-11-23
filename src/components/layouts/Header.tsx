import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

type HeaderProps = {
	items: NavbarMenu[];
	openDrawer: (isOpen: boolean) => void;
};
export type NavbarMenu = {
	text: string;
	url: string;
};
export default function Header({ items, openDrawer }: HeaderProps) {
	// drawer state
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<AppBar sx={{ zIndex: '999999 !important' }} component="nav">
			<Toolbar>
				<IconButton
					onClick={() => {
						setOpen(!isOpen);
						openDrawer(!isOpen);
					}}
					color="inherit"
					aria-label="open drawer"
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					React MUI
				</Typography>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					{items.map((item, index) => (
						<Link key={index} to={item.url}>
							<Button sx={{ color: '#fff' }}>{item.text}</Button>
						</Link>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
}
