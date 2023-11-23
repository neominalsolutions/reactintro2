import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
type HeaderProps = {
	items: NavbarMenu[];
};
export type NavbarMenu = {
	text: string;
	url: string;
};
export default function Header({ items }: HeaderProps) {
	return (
		<AppBar component="nav">
			<Toolbar>
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
