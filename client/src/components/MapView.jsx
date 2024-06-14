/* eslint-disable react/prop-types */
// src/MapView.js

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ neighborhoods }) => {
    return (
        <MapContainer center={[52.5200, 13.4050]} zoom={12} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {neighborhoods.map((neighborhood, index) => (
                <Marker key={index} position={[neighborhood.lat, neighborhood.lng]}>
                    <Popup>{neighborhood.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;
