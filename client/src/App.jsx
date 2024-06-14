// src/App.js
import { useState } from 'react';
import MapView from '@components/MapView';
import AddNeighborhood from '@components/AddNeighborhood';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
    const [neighborhoods, setNeighborhoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3300/api')
            .then(response => setNeighborhoods(response.data))
            .catch(error => console.error('Error fetching neighborhoods:', error));
    }, []);

    const handleAddNeighborhood = (newNeighborhood) => {
        setNeighborhoods(prevNeighborhoods => [...prevNeighborhoods, newNeighborhood]);
    };

    return (
        <div className="App">
            <AddNeighborhood onAdd={handleAddNeighborhood} />
            <MapView neighborhoods={neighborhoods} />
        </div>
    );
}

export default App;