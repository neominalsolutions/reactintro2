import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AdminLayout from './components/layouts/AdminLayout';
import PostsPageApiFunc from './pages/PostsPageApiFunc';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// <Accordion />

root.render(
	<>
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<><h1>Anasayfa</h1></>}></Route>
				<Route path="/about" element={<><h1>Hakkımızda</h1></>}></Route>
				<Route path="/contact" element={ <><h1>İletişim</h1></>}></Route> */}
				<Route path="/" Component={MainLayout}>
					<Route path="" Component={HomePage}></Route>
					<Route path="about" Component={AboutPage}></Route>
					<Route path="contact" Component={ContactPage}></Route>
					<Route path="posts" Component={PostsPageApiFunc}></Route>
				</Route>
				<Route
					path="/admin"
					element={
						<AdminLayout>
							{/* child olarak gönderilecek olan değer elementler arasına alınır */}
							<footer>Admin Footer</footer>
						</AdminLayout>
					}
				>
					<Route path="users" element={<>Users Page</>}></Route>
				</Route>
				{/* nested layout yapısı */}
				{/* /admin/users */}
			</Routes>
		</BrowserRouter>
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
