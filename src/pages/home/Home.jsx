import { motion } from 'framer-motion';

import Nav from '../../components/navigation/Nav';
import Hero from '../../components/hero/Hero';
import TopBar from '../../components/top_bar/TopBar';
import Footer from '../../components/footer/Footer';

export default function Home({ isOpen, onClose, visited, path }) {
	return (
		<motion.main
			initial={visited && { opacity: 0, x: window.innerWidth }}
			animate={visited && { opacity: 1, x: 0, transition: { duration: 0.4 } }}
			exit={visited && { opacity: 0, x: window.innerWidth }}
		>
			<motion.header
				initial={!visited && { opacity: 0, scale: 0.5 }}
				animate={!visited && { opacity: 1, scale: 1 }}
				transition={
					!visited && { duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }
				}
			>
				<TopBar visited={visited} />
				<Nav isOpen={isOpen} onClose={onClose} visited={visited} path={path} />
			</motion.header>
			<Hero visited={visited} path={path} />
			<Footer visited={visited} path={path} />
		</motion.main>
	);
}
