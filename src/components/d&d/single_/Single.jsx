import { capitalizeAllWords } from '../../../assets/utils/capitalize';

export default function Single({ single }) {
	const name = single.Name;
	return (
		<article className='w-88 p-5 bg-white text-neutral-900 rounded-sm drop-shadow-lg xl:w-full'>
			<div className='flex justify-between items-center'>
				<span className='text-md font-bold tracking-wider'>
					{name && capitalizeAllWords(name[0])}
				</span>
				<span className='p-1.5 text-white font-semibold bg-red-700 md:text-sm'>
					{single.price}€
				</span>
			</div>
		</article>
	);
}
