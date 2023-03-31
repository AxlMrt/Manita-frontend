import Single from './single/Single';

export default function Pizzas({ main }) {
	return (
		<section className='flex flex-wrap justify-around gap-5 1xl:flex-col 1xl:px-3 cursor-default'>
			{main.map((single, index) => {
				return (
					<article key={index}>
						<Single single={single} />
					</article>
				);
			})}
		</section>
	);
}
