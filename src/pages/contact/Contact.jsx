import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsPhoneFill, BsFacebook, BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';

import Header from '../../components/header/Header';
import Nav from '../../components/navigation/Nav';
import Map from '../../components/map/Map';
import Footer from '../../components/footer/Footer';

export default function Contact({ isOpen, onClose }) {
	return (
		<motion.main
			initial={{ opacity: 0, x: window.innerWidth }}
			animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
			exit={{ opacity: 0, x: window.innerWidth }}
		>
			<Header />
			<Nav isOpen={isOpen} onClose={onClose} />
			<section className='border-t border-white'>
				<Map />
			</section>
			<section className='flex flex-col items-center py-5 '>
				<div className='w-full flex flex-col items-center'>
					<h1 className='text-3xl font-semibold tracking-wider'>
						Manita Pizzeria
					</h1>
					<ul className='py-14'>
						<li className='border-l-2 border-emerald-700 rounded-sm px-2'>
							Lundi: 18:30 - 21:30
						</li>
						<li className='px-2'>Mardi: fermé</li>
						<li className='border-l-2 border-red-700 rounded-sm px-2'>
							Mercredi à dimanche: 18:30 - 21:30
						</li>
					</ul>
				</div>
				<div>
					<a
						href='tel:0387790773'
						className='flex justify-center gap-2 hover:text-gray-500'
					>
						<BsPhoneFill size={20} className='hover:text-indigo-900' />
						<p>03 87 79 07 73</p>
					</a>

					<a
						href='https://www.google.com/maps/place/Manita+Pizza/@49.1087245,6.171769,15z/data=!4m2!3m1!1s0x0:0x6ed66f369f0dc07a?sa=X&hl=fr&ved=2ahUKEwjtuJKvuO39AhUpU6QEHWqpCJ0Q_BJ6BAhtEAg'
						className='flex gap-2 hover:text-gray-500'
					>
						<FaMapMarkerAlt size={20} className='hover:text-red-700 ' />
						<p>20 rue Pasteur, 57000 Metz</p>
					</a>
				</div>

				<div className='flex gap-5 mt-10'>
					<a href='https://www.facebook.com/profile.php?id=100083428926529'>
						<BsFacebook
							size={20}
							className='hover:text-blue-600 ease-in-out duration-150'
						/>
					</a>
					<a href='https://www.instagram.com/manita_pizza/'>
						<BsInstagram
							size={20}
							className='hover:text-pink-500 ease-in-out duration-150'
						/>
					</a>
				</div>
			</section>
			<Footer />
		</motion.main>
	);
}
