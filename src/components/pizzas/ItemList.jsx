import SingleItem from './single/SingleItem';

export default function ItemList({ list }) {
    return (
        <ul className='grid grid-cols-1 laptop:grid-cols-2 gap-5 cursor-default'>
            {list.map((single, index) => (
                <li key={index} className="col-span-1">
                    <SingleItem single={single} />
                </li>
            ))}
        </ul>
    );
}
