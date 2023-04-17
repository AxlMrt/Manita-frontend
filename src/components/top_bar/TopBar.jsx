import { motion } from 'framer-motion';
import { BsPhoneFill, BsFacebook, BsInstagram } from 'react-icons/bs';

export default function TopBar({ visited }) {
	return (
		<section>
			<div className='flex justify-between items-center px-8 py-3 '>
				<motion.div
					className='w-1/4 flex justify-start items-center md:hidden'
					style={!visited && { opacity: 0, y: -1000 }}
					animate={!visited && { opacity: 1, y: 0 }}
					transition={!visited && { delay: 1.2, duration: 0.8 }}
				>
					<div>
						<a href='tel:+33387790773'>
							<BsPhoneFill size={30} />
						</a>
					</div>
					<div className='phone ml-2'>
						<a
							href='tel:+33387790773'
							className='text-xs font-bold tracking-widest hover:text-gray-500 ease-in-out duration-150'
						>
							03 87 79 07 73
						</a>
						<div>
							<p className='text-sm tracking-wider opacity-50'>18:30 - 21:30</p>
						</div>
					</div>
				</motion.div>

				<div className='w-1/4 md:w-full md:py-3 flex justify-end gap-5'>
					<motion.a
						href='tel:+33387790773'
						className='hidden md:block'
						style={!visited && { opacity: 0, y: -1000 }}
						animate={!visited && { opacity: 1, y: 0 }}
						transition={!visited && { delay: 1.6, duration: 0.4 }}
					>
						<BsPhoneFill size={20} />
					</motion.a>
					<motion.a
						href='https://www.facebook.com/profile.php?id=100083428926529'
						style={!visited && { opacity: 0, y: -1000 }}
						animate={!visited && { opacity: 1, y: 0 }}
						transition={!visited && { delay: 1.7, duration: 0.4 }}
					>
						<BsFacebook
							size={20}
							className='hover:text-blue-600 ease-in-out duration-150'
						/>
					</motion.a>
					<motion.a
						href='https://www.instagram.com/manita_pizza/'
						style={!visited && { opacity: 0, y: -1000 }}
						animate={!visited && { opacity: 1, y: 0 }}
						transition={!visited && { delay: 1.8, duration: 0.4 }}
					>
						<BsInstagram
							size={20}
							className='hover:text-pink-500 ease-in-out duration-150'
						/>
					</motion.a>
				</div>
			</div>
		</section>
	);
}
