import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { NavbarMenu } from './Header';

export type AppDrawerProps = {
	items: NavbarMenu[];
	isOpen: boolean;
};

export default function AppDrawer(props: AppDrawerProps) {
	return (
		<Drawer
			sx={{
				width: '200px',
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: '200px',
					boxSizing: 'border-box',
				},
			}}
			variant="persistent"
			anchor="left"
			open={props.isOpen}
		>
			<List sx={{ marginTop: '5rem' }}>
				{props.items.map((item, index) => (
					<ListItem key={index} disablePadding>
						<Link to={item.url}>
							<ListItemButton>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}
