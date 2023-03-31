import { capitalizeFirstLetter } from '../../../assets/utils/capitalize';

export default function Single({ single }) {
	return (
		<article className='w-88 h-52 p-5 bg-white text-neutral-900 rounded-sm drop-shadow-lg xl:h-40 md:h-auto xl:w-full 1xl:w-full' >
			<div className='flex justify-between items-center'>
				<span className='uppercase text-xl font-bold tracking-wider md:text-lg'>
					{single.name}
				</span>
				<span className='p-1.5 text-white font-semibold bg-red-700 md:text-sm'>
					{single.price}€
				</span>
			</div>
			<div className='mt-5 text-left md:text-sm text-neutral-700'>
				{capitalizeFirstLetter(single.Ingredients.join(', '))}
			</div>
		</article>
	);
}
