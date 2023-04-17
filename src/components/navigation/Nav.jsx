import { Link } from 'react-router-dom';
import { BsPhoneFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

import './nav.css';
import Burger from '../burger-menu/Burger';

export default function Nav({ isOpen, onClose, visited, path }) {
	return (
		<nav>
			<motion.div
				className='hamburger'
				style={!visited && path === '' && { opacity: 0, y: -100 }}
				animate={!visited && path === '' && { opacity: 1, y: 0 }}
				transition={!visited && path === '' && { delay: 1.1, duration: 0.3 }}
			>
				<Burger isOpen={isOpen} onClose={onClose} />
			</motion.div>
			<div className='banderole'></div>
			<div className={isOpen ? 'closing' : undefined} onClick={onClose}>
				<div
					className={`nav_container ${
						isOpen
							? 'md:translate-x-0 md:opacity-100'
							: 'md:-translate-x-full md:opacity-0'
					}`}
					onClick={(e) => e.stopPropagation()}
				>
					<div>
						<div className='hidden md:block text-center mb-10'>
							<h3 className='text-xl uppercase'>MANITA</h3>
							<h4 className='text-sm uppercase'>PIZZERIA</h4>
						</div>
						<ul className='flex gap-5 md:flex-col'>
							<motion.li
								className='nav-items laptop:hover:text-emerald-700'
								style={!visited && path === '' && { opacity: 0, y: -100 }}
								animate={!visited && path === '' && { opacity: 1, y: 0 }}
								transition={
									!visited && path === '' && { delay: 1.3, duration: 0.2 }
								}
							>
								<div className='separator'></div>
								<Link to='/' onClick={onClose}>
									Accueil
								</Link>
							</motion.li>
							<motion.li
								className='nav-items laptop:hover:text-neutral-400'
								style={!visited && path === '' && { opacity: 0, y: -100 }}
								animate={!visited && path === '' && { opacity: 1, y: 0 }}
								transition={
									!visited && path === '' && { delay: 1.4, duration: 0.2 }
								}
							>
								<div className='separator'></div>
								<Link to='/menu' onClick={onClose}>
									Menu
								</Link>
							</motion.li>
							<motion.li
								className='nav-items laptop:hover:text-red-700'
								style={!visited && path === '' && { opacity: 0, y: -100 }}
								animate={!visited && path === '' && { opacity: 1, y: 0 }}
								transition={
									!visited && path === '' && { delay: 1.5, duration: 0.2 }
								}
							>
								<div className='separator'></div>
								<Link to='/contact' onClick={onClose}>
									Contact
								</Link>
							</motion.li>
						</ul>
					</div>
					<div className='hidden md:flex flex-col justify-center text-center'>
						<div>
							20 Rue Pasteur <br />
							57000 Metz
						</div>
						<div>
							<a href='tel:+33387790773' className='flex justify-center mt-5'>
								<BsPhoneFill size={20} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
