import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export type AdminLayoutProps = {
	children?: ReactNode; // çocuk element
};

// Layout içinde dışarıdan çocuk component alabilir anlamına gelir

export default function AdminLayout({ children }: AdminLayoutProps) {
	return (
		<>
			<h1>Admin</h1>
			<p>
				<Outlet />
			</p>
			{/* child component işaretlendiği yer */}
			<>{children}</>
		</>
	);
}
