import { useRef, useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { pizzaData, panuozziData, dessertData, drinkData } from '../../assets/data/data';
import Header from '../../components/header/Header';
import Nav from '../../components/navigation/Nav';
import ItemList from '../../components/pizzas/ItemList';
import Footer from '../../components/footer/Footer';
import { useFetchData } from '../../hooks/useFetchData';
import './menu.css';

export default function Menu({ isOpen, onClose }) {
    const scrollToRef = useRef(null);

    // Fetch data using the custom hook
    const pizzas = useFetchData('pizza', pizzaData);
    const panuozzis = useFetchData('panuozzi', panuozziData); 
    const desserts = useFetchData('dessert', dessertData);
    const drinks = useFetchData('drink', drinkData);

    const [visibleMenu, setVisibleMenu] = useState(null);

    const handleMenuClick = (menu) => {
        scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setVisibleMenu(visibleMenu === menu ? null : menu);
    };

    const menuItems = {
        pizza: {
            title: 'Nos pizze',
            list: pizzas,
            component: <ItemList list={pizzas} />,
        },
        panuozzi: {
            title: 'Nos panuozzi',
            list: panuozzis,
            component: <ItemList list={panuozzis} />,
        },
        dessert: {
            title: 'Nos desserts',
            list: desserts,
            component: <ItemList list={desserts} />,
        },
        drink: {
            title: 'Nos boissons',
            list: drinks,
            component: <ItemList list={drinks} />,
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
            <section className='min-h-screen flex flex-col items-center text-center pt-14' ref={scrollToRef}>
                <div className='w-3/5 flex flex-col mt-10 px-10 gap-6 xl:w-full md:w-4/5 sm:w-full'>
                    {Object.keys(menuItems).map((menuKey, index) => {
                        const menu = menuItems[menuKey];
                        const isVisible = visibleMenu === menuKey;

                        if (menu.list.length === 0) return null;

                        return (
                            <div
                                className={`menu_btn ${isVisible ? 'flex-col px-2' : ''}`}
                                key={menuKey + index}
                                onClick={() => handleMenuClick(menuKey)}
                            >
                                <div className='w-full flex justify-between items-center p-2 text-xl tracking-wider'>
                                    {menu.title}
                                    <BsFillArrowRightCircleFill className={isVisible ? 'rotate-90' : ''} />
                                </div>
                                <div className={`${isVisible ? 'block py-5' : 'hidden'} w-full bg-gray-50`}>
                                    {menu.component}
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
