import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import './App.css';

// Component to render individual starship card
const StarshipCard = ({ name }) => {
  return (
    <div className="starship-card">
      <h2>{name}</h2>
    </div>
  );
};

// Main App component
export default function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starshipList = await getAllStarships();
        setStarships(starshipList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching starships:', error);
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Starships</h1>
      <div className="starship-list">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} name={starship.name} />
        ))}
      </div>
    </div>
  );
}