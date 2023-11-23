// AnaLayout

import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
	return (
		<div style={{ padding: 10 }}>
			<header>
				<h1>Header</h1>
			</header>
			<nav style={{ padding: 5 }}>
				<Link to="/">Anasayfa </Link> {' '}
				<Link to="/about">Hakkımızda </Link>{' '}
				<Link to="/contact">İletişim </Link>{' '}
				<Link to="/admin/users">Kullanıcılar</Link>{' '}
				<a target="blank" href="https://www.google.com">
					External Link{' '}
				</a>
				{/* href kullanacak isek bu durumda uygulama dışı linklerde tercih edelim. sosyal medya linkleri */}
			</nav>

			<main>
				{/* ana içerik */}
				<Outlet />
			</main>

			<footer>Alt Bilgi</footer>
		</div>
	);
}
