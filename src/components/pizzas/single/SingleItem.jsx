import { capitalizeFirstLetter, capitalizeAllWords } from '../../../assets/utils/capitalize';

export default function SingleItem({ single }) {
    const name = single?.name || single?.Name; // Prend en compte à la fois `name` et `Name`
    const price = single?.price || 'N/A'; // Gestion du prix avec valeur par défaut
    const ingredients = Array.isArray(single?.Ingredients) ? single.Ingredients.join(', ') : null;

    return (
        <article className='h-36 lg:h-48 laptop:h-52 p-5 bg-white text-neutral-900 rounded-sm drop-shadow-lg '>
            <div className='flex justify-between items-center'>
                <span className='uppercase text-xl font-bold tracking-wider md:text-lg'>
                    {name && capitalizeAllWords(name)}
                </span>
                <span className='p-1.5 text-white font-semibold bg-red-700 md:text-sm'>
                    {price}€
                </span>
            </div>
            {/* Afficher les ingrédients seulement s'ils existent */}
            {ingredients && (
                <div className='mt-5 text-left md:text-sm text-neutral-700'>
                    {capitalizeFirstLetter(ingredients)}
                </div>
            )}
        </article>
    );
}
