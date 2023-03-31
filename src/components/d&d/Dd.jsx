import Single from './single_/Single';

export default function Dd({ main }) {
	return (
		<section className='flex flex-wrap justify-around gap-5 xl:flex-col xl:px-3 cursor-default'>
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
