import { useEffect, useState, useRef } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import {
	pizzaData,
	panuozziData,
	dessertData,
	drinkData,
} from '../../assets/data/data';
import { motion } from 'framer-motion';

import Header from '../../components/header/Header';
import Nav from '../../components/navigation/Nav';
import Main from '../../components/mainDish/Main';
import Single from '../../components/mainDish/single/Single';
import Dd from '../../components/d&d/Dd';
import Footer from '../../components/footer/Footer';
import './menu.css';

export default function Menu({ isOpen, onClose }) {
	const base_url = `${import.meta.env.VITE_API_URL}`;
	const scrollToRef = useRef(null);

	const [pizzas, setPizza] = useState(pizzaData);
	const [panuozzis, setPanuozzis] = useState(panuozziData);
	const [desserts, setDesserts] = useState(dessertData);
	const [drinks, setDrinks] = useState(drinkData);
	console.log(dessertData)

	const [pizzaVisible, setPizzaVisible] = useState(false);
	const [panuozziVisible, setPanuozziVisible] = useState(false);
	const [dessertVisible, setDessertVisible] = useState(false);
	const [drinkVisible, setDrinkVisible] = useState(false);

	useEffect(() => {
		async function fetchPizza() {
			const response = await fetch(`${base_url}/pizza`);
			const data = await response.json();

			setPizza(data);
		}

		async function fetchPanuozzis() {
			const response = await fetch(`${base_url}panuozzi`);
			const data = await response.json();

			setPanuozzis(data);
		}

		async function fetchDesserts() {
			const response = await fetch(`${base_url}dessert`);
			const data = await response.json();

			setDesserts(data);
		}

		async function fetchDrinks() {
			const response = await fetch(`${base_url}drink`);
			const data = await response.json();

			setDrinks(data);
		}

		fetchPizza();
		fetchPanuozzis();
		fetchDesserts();
		fetchDrinks();
	}, []);

	const onOpen = (e) => {
		scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

		if (e.target.innerText === 'Nos pizze') {
			setPizzaVisible(!pizzaVisible);
			setPanuozziVisible(false);
			setDessertVisible(false);
			setDrinkVisible(false);
		} else if (e.target.innerText === 'Nos panuozzi') {
			setPanuozziVisible(!panuozziVisible);
			setPizzaVisible(false);
			setDessertVisible(false);
			setDrinkVisible(false);
		} else if (e.target.innerText === 'Nos desserts') {
			setDessertVisible(!dessertVisible);
			setPizzaVisible(false);
			setPanuozziVisible(false);
			setDrinkVisible(false);
		} else if (e.target.innerText === 'Nos boissons') {
			setDrinkVisible(!drinkVisible);
			setPizzaVisible(false);
			setPanuozziVisible(false);
			setDessertVisible(false);
		}
	};

	const setMenu = {
		pizza: {
			title: 'Nos pizze',
			visible: pizzaVisible,
			tag: <Main main={pizzas} />,
			function: onOpen,
			icon: (
				<BsFillArrowRightCircleFill className={pizzaVisible && 'rotate-90'} />
			),
		},
		panuozzi: {
			title: 'Nos panuozzi',
			visible: panuozziVisible,
			tag: <Main main={panuozzis} />,
			function: onOpen,
			icon: (
				<BsFillArrowRightCircleFill
					className={panuozziVisible && 'rotate-90'}
				/>
			),
		},
		dessert: {
			title: 'Nos desserts',
			visible: dessertVisible,
			tag: <Dd main={desserts} />,
			function: onOpen,
			icon: (
				<BsFillArrowRightCircleFill className={dessertVisible && 'rotate-90'} />
			),
		},
		drink: {
			title: 'Nos boissons',
			visible: drinkVisible,
			tag: <Dd main={drinks} />,
			function: onOpen,
			icon: (
				<BsFillArrowRightCircleFill className={drinkVisible && 'rotate-90'} />
			),
		},
	};

	return (
		<motion.main
			initial={{ opacity: 0, x: window.innerWidth }}
			animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
			exit={{ opacity: 0, x: window.innerWidth }}
		>
			<Header />
			<Nav isOpen={isOpen} onClose={onClose} />
			<section
				className='min-h-screen flex flex-col items-center text-center pt-14'
				ref={scrollToRef}
			>
				{pizzas.map((pizza, index) => {
					if (pizza.monthPizza) {
						return (
							<div className='xl:w-2/5 md:w-4/5' key={pizza.name + index}>
								<h3 className='text-3xl mb-5 uppercase'>Pizza du mois</h3>
								<Single single={pizza} />
							</div>
						);
					}
				})}
				<div className='w-3/5 flex flex-col mt-10 px-10 gap-6 xl:w-full md:w-4/5 sm:w-full'>
					{Object.keys(setMenu).map((menu, index) => {
						return (
							<div
								className={`menu_btn ${
									setMenu[menu].visible ? 'flex-col px-2' : undefined
								}`}
								key={menu + index}
								onClick={setMenu[menu].function}
							>
								<div className='w-full flex justify-between items-center p-2 text-xl tracking-wider'>
									{setMenu[menu].title}
									{setMenu[menu].icon}
								</div>
								<div
									className={`${
										setMenu[menu].visible ? 'block py-5' : 'hidden'
									} w-full bg-gray-50`}
								>
									{setMenu[menu].tag}
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<Footer />
		</motion.main>
	);
}
