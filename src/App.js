import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api'; // Import the API function
import StarshipCard from './components/StarshipCard'; // Import the StarshipCard component
import './App.css'; // Import CSS for styling

// Main App component
export default function App() {
  const [starships, setStarships] = useState([]); // Initialize state for starships
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Effect to fetch starships data on component mount
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships(); // Fetch starships data
        setStarships(data); // Update state with the fetched data
      } catch (error) {
        setError('Failed to load starships.');
      } finally {
        setLoading(false); // Set loading to false once data is fetched or an error occurs
      }
    };

    fetchStarships(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>; // Show loading message while data is being fetched
  if (error) return <div>{error}</div>; // Show error message if there's an error

  return (
    <div className="App">
      <h1>Starships</h1>
      <div className="starship-list">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} name={starship.name} /> // Render a StarshipCard for each starship
        ))}
      </div>
    </div>
  );
}
// // Trying to test with Static Data _________________________________________________________________________
// import React, { useState, useEffect } from 'react';
// import './App.css';

// // Component to render an individual starship card
// const StarshipCard = ({ name }) => {
//   return (
//     <div className="starship-card">
//       <h2>{name}</h2>
//     </div>
//   );
// };

// // Main App component
// export default function App() {
//   // State for storing starships and loading/error states
//   const [starships, setStarships] = useState([
//     { name: 'X-Wing' },
//     { name: 'TIE Fighter' },
//     { name: 'Millennium Falcon' },
//     { name: 'Death Star' },
//     { name: 'Star Destroyer' }
//   ]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Effect to simulate loading of starships
//   useEffect(() => {
//     const fetchStarships = async () => {
//       try {
//         setLoading(true);
//         // Simulate a delay for loading
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         // Setting static data
//         setStarships([
//           { name: 'X-Wing' },
//           { name: 'TIE Fighter' },
//           { name: 'Millennium Falcon' },
//           { name: 'Death Star' },
//           { name: 'Star Destroyer' }
//         ]);
//       } catch (error) {
//         setError('Failed to load starships.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStarships();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="App">
//       <h1>Starships</h1>
//       <div className="starship-list">
//         {starships.map((starship) => (
//           <StarshipCard key={starship.name} name={starship.name} />
//         ))}
//       </div>
//     </div>
//   );
// }