import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [visited, setVisited] = useState(false);
	const path = location.pathname.split('/')[1];

	const onClose = () => {
		setIsOpen(!isOpen);
	};

	window.onload = function () {
		setVisited(true);
	};

	window.onunload = function () {
		setVisited(false);
	};

	return (
		<AnimatePresence>
			<Routes basename='/'>
				<Route
					path='/'
					element={
						<Home
							isOpen={isOpen}
							onClose={onClose}
							visited={visited}
							path={path}
						/>
					}
				/>
				<Route
					path='/menu'
					element={<Menu isOpen={isOpen} onClose={onClose} />}
				/>
				<Route
					path='/contact'
					element={<Contact isOpen={isOpen} onClose={onClose} />}
				/>
			</Routes>
		</AnimatePresence>
	);
}

export default App;
