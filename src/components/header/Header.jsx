import { Link } from 'react-router-dom';
import { BsPhoneFill, BsFacebook, BsInstagram } from 'react-icons/bs';

import manitaImg from '../../assets/images/manita.png';

export default function Header() {
	return (
		<header className='flex justify-between items-center bg-white p-12 md:justify-center md:py-16 md:px-5'>
			<div className='w-1/4 flex justify-start items-center md:hidden'>
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
			</div>

			<Link to='/'>
				<img className='max-w-180' src={manitaImg} />
			</Link>

			<div className='w-1/4 flex justify-end gap-5 md:hidden'>
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
		</header>
	);
}
