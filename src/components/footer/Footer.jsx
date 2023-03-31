import { motion } from 'framer-motion';
import footerImg from '../../assets/images/footer.png';
import './footer.css';

export default function Footer({ visited, path }) {
	const text = 'fait maison - fait maison -';
	return (
		<motion.section
			className='h-48 relative flex justify-center items-end '
			initial={!visited && path === '' && { opacity: 0, scale: 0.5 }}
			animate={!visited && path === '' && { opacity: 1, scale: 1 }}
			transition={
				!visited &&
				path === '' && { duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }
			}
		>
			<div className='absolute w-24 h-24 rounded-full flex justify-center items-center bottom-20'>
				<img src={footerImg} alt="logo" className='w-12'/>
				<div className='text uppercase'>
					{text.split('').map((letter, index) => (
						<span
							key={letter + index}
							style={{ transform: `rotate(${index * 12.8}deg)` }}
						>
							{letter}
						</span>
					))}
				</div>
			</div>
			<div>
				<p className='text-center text-sm text-gray-500 sm:text-xs'>
					© 2023 Manita - Créé par{' '}
					<a href='http://www.axel-martin.fr/' className='underline'>
						Axel Martin
					</a>
				</p>
			</div>
		</motion.section>
	);
}
