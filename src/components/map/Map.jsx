import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ChangeView from './ChangeView';

function Map() {
  const center = [49.10881, 6.17175];

	return (
		<MapContainer
			center={center}
			zoom={16}
			scrollWheelZoom={true}
			className='h-60 w-full'
		>
			<ChangeView center={center} zoom={16} />
			<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			<Marker position={center}>
				<Popup>Manita Pizzeria</Popup>
			</Marker>
		</MapContainer>
	);
}

export default Map;
