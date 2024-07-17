// Define the base URL for the Star Wars API
const BASE_URL = 'https://swapi.dev/api/';

// Generic function to fetch data from a specific endpoint
const fetchFromApi = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};

// Function to fetch all starships from the API
export const getAllStarships = async () => {
  try {
    const data = await fetchFromApi('starships/');
    return data.results; // Return only the starships array
  } catch (error) {
    console.error('Error fetching all starships:', error);
    throw error;
  }
};

// Function to fetch a specific starship by ID from the API
export const getStarshipById = async (id) => {
  try {
    const data = await fetchFromApi(`starships/${id}/`);
    return data; // Return the starship data
  } catch (error) {
    console.error(`Error fetching starship with ID ${id}:`, error);
    throw error;
  }
};