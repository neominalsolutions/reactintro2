import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AdminLayout from './components/layouts/AdminLayout';
import AboutPage from './pages/AboutPage';

function App() {
	return (
		<div className="App">
			{/* <HomePage>
				<AboutPage></AboutPage>
			</HomePage> */}
			{/* <AdminLayout>
				<HomePage></HomePage>
        <AboutPage></AboutPage>
			</AdminLayout> */}
		</div>
	);
}

export default App;
