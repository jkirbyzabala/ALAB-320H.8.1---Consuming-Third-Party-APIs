import React from 'react';
import '../../src/style.css'; // Optional: for additional styling

// StarshipCard component to display individual starship details
export default function StarshipCard({ name }) {
  return (
    <div className="starship-card">
      <h2>{name}</h2>
    </div>
  );
}
