<img src="/client/src/assets/berlin.jpg" />

# From Struggling with Berlin's Neighborhoods to Building an Interactive Map App

Four years ago, I moved to Berlin, a city rich with history, culture, and vibrant neighborhoods. As much as I love living here, I have to admit that learning and remembering the names and locations of all the neighborhoods has been quite a challenge. Determined to get a better grasp of my surroundings, I decided to turn this challenge into an opportunity to combine my love for coding with my need to navigate Berlin more effectively.

Introducing my latest project: an interactive map application that helps you explore and familiarize yourself with Berlin's neighborhoods by generating pins on a map for each one. Here’s a peek into how I built it and the technologies I used.

Technologies Used:
Node.js and Express: For the backend server, I chose Node.js and Express. These technologies allowed me to set up a robust and scalable server quickly. The backend handles API requests, fetching and storing neighborhood data, and communicating with the frontend.

MongoDB and Mongoose: I used MongoDB for data storage, with Mongoose as an ODM to streamline data interactions. This setup made it easy to store neighborhood names along with their latitude and longitude coordinates, which are essential for accurate pin placement on the map.

React: For the frontend, I opted for React. Its component-based architecture made it simple to build a dynamic and responsive user interface. React’s state management also ensured that any new neighborhood added would immediately reflect on the map.

Leaflet and React-Leaflet: To display the map, I used Leaflet, a powerful open-source JavaScript library for interactive maps, along with its React wrapper, React-Leaflet. This combination allowed me to create a visually appealing and interactive map that can handle user interactions smoothly.

Axios: For handling HTTP requests between the frontend and backend, I used Axios. Its promise-based HTTP client made the code more readable and easier to manage.

How It Works:
Backend: The backend server, built with Node.js and Express, provides endpoints for CRUD operations. You can add new neighborhoods with their coordinates, fetch all neighborhoods, update, and delete them.

Frontend: The React frontend fetches neighborhood data from the backend and uses React-Leaflet to place pins on the map. Users can add new neighborhoods through a form, which immediately updates the map with the new pins.

Interactivity: Each pin on the map represents a neighborhood. Clicking on a pin displays a popup with the neighborhood’s name, making it easy to identify and learn about different areas in Berlin.

This project has not only helped me remember the names and locations of Berlin’s neighborhoods but also allowed me to leverage my coding skills to solve a personal challenge. I hope this app can be useful for others who are new to Berlin or simply want a better way to explore the city.
