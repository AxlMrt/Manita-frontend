import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import manitaImg from '../../assets/images/manita-logo.png';
import './hero.css';

export default function Hero({ visited }) {
	return (
		<section className='flex flex-col justify-center items-center p-16 md:min-h-screen md:px-6'>
			<motion.img
				className='max-w-lg md:w-full'
				src={manitaImg}
				initial={!visited && { opacity: 0, scale: 0.5 }}
				animate={!visited && { opacity: 1, scale: 1 }}
				transition={!visited && { duration: 1, delay: 0.5 }}
				alt='manita'
			/>
			<motion.h1
				className='text-5xl font-bold mt-8 tracking-widest little:text-4xl little:tracking-wider little:mt-5'
				initial={!visited && { opacity: 0, scale: 0.5 }}
				animate={!visited && { opacity: 1, scale: 1 }}
				transition={!visited && { duration: 1.1, delay: 0.5 }}
			>
				P I Z Z E R I A
			</motion.h1>
			<motion.h2
				className='text-2xl font-bold mt-5 tracking-widest little:text-xl little:tracking-wider'
				initial={!visited && { opacity: 0, scale: 0.5 }}
				animate={!visited && { opacity: 1, scale: 1 }}
				transition={!visited && { duration: 1.1, delay: 0.5 }}
			>
				E S T . 2 0 2 2
			</motion.h2>
			<div className='flex md:flex-col items-center mt-10 gap-5'>
				<motion.div
					style={!visited && { opacity: 0, x: -1000 }}
					animate={!visited && { opacity: 1, x: 0 }}
					transition={!visited && { delay: 1.3, duration: 0.5 }}
				>
					<Link to='/menu' className='btn py-4 px-6'>
						Menu
					</Link>
				</motion.div>
				<motion.div
					style={!visited && { opacity: 0, x: -1000 }}
					animate={!visited && { opacity: 1, x: 0 }}
					transition={!visited && { delay: 1.5, duration: 0.5 }}
				>
					<Link to='/contact' className='btn py-4 px-6'>
						Nous contacter
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
