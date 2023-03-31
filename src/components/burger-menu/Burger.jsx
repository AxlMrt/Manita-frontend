import './burger.css';

export default function Burger({ onClose, isOpen }) {
	return (
		<div className='burger-menu' onClick={onClose}>
			<span
				aria-hidden='true'
				className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
					isOpen && 'text-white rotate-45 -translate-y-1.5 mt-3'
				}`}
			></span>
			<span
				aria-hidden='true'
				className={`block absolute mt-1.5 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
					isOpen && 'hidden'
				}`}
			></span>
			<span
				aria-hidden='true'
				className={`block absolute mt-3 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
					isOpen && 'text-white -rotate-45 -translate-y-1.5'
				}`}
			></span>
		</div>
	);
}
