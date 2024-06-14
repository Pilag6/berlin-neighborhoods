/* eslint-disable react/prop-types */
// src/AddNeighborhood.js
import { useState } from 'react';
import axios from 'axios';

const AddNeighborhood = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3300/api', { name, lat: parseFloat(lat), lng: parseFloat(lng) });
            onAdd(response.data);
            setName('');
            setLat('');
            setLng('');
        } catch (error) {
            console.error('Error adding neighborhood:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Latitude:</label>
                <input type="number" value={lat} onChange={(e) => setLat(e.target.value)} required step="any" />
            </div>
            <div>
                <label>Longitude:</label>
                <input type="number" value={lng} onChange={(e) => setLng(e.target.value)} required step="any" />
            </div>
            <button type="submit">Add Pin</button>
        </form>
    );
};

export default AddNeighborhood;
