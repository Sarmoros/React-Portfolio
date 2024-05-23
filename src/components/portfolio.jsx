import React from 'react';
import Header from './header';

const projects = [
  {
    title: 'Project 1: WeatherLens',
    description: 'The Weather & Image Comparison Tool is a web application that allows users to compare the weather conditions of two cities along with visual representations through images. The tool fetches real-time weather data using the OpenWeatherMap API, displays the data in a user-friendly format, and utilizes the Unsplash API to showcase images related to the searched cities. Additionally, the tool provides a geographical perspective by integrating Google Maps to visualize the locations of the compared cities.',
    deployedLink: 'https://sarmoros.github.io/WeatherLens/',
    githubLink: 'https://github.com/Sarmoros/WeatherLens',
    // imageUrl: 'https://github.com/Sarmoros/WeatherLens/raw/main/assets/images/weatherlensdemo(1).png',
  },
  {
    title: 'Project 2: Movie Night Planner',
    description: 'As a user, I want to easily plan a movie night with friends, including choosing movies, scheduling, and sending invitations, so that I can organize a fun and stress-free movie night.',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/Blade7unner/Movie-Night-Planner-App',
    // imageUrl: 'https://example.com/project2-screenshot.jpg',
  },
  {
    title: 'Project 3: E-commerce Back-end Only',
    description: 'This project is a backend application for an e-commerce website built using Express.js and Sequelize, with MySQL as the database. It provides API endpoints for managing categories, products, and tags.The application aims to streamline the backend operations of an e-commerce platform, allowing businesses to efficiently organize and manage their inventory, product listings, and associated metadata. With its intuitive API structure and robust database interactions, the backend facilitates seamless integration with frontend client applications, enabling a smooth and responsive user experience.',
    // deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/Sarmoros/E-commerce-Back-End',
    walkthroughVideo: 'https://app.screencastify.com/v3/watch/yn6b9ET3Hkx5GvzIb11h'
    // imageUrl: 'https://example.com/project2-screenshot.jpg',
  },
  {
    title: 'Project 4: Echoes of Astra',
    description: 'Your virtual dream interpreter powered by cutting-edge AI technology. Echoes of Astra is a web application that allows users to record their dreams, receive interpretations, and explore dream meanings. Users can also connect with a community of dream enthusiasts, share their dreams, and engage in discussions about dream interpretation and symbolism.',
    deployedLink: 'https://echoes-of-astra.onrender.com/',
    githubLink: 'https://github.com/reagan1440/Echoes-of-Astra',
    walkthroughVideo: 'https://drive.google.com/file/d/1IwnHZLdhXe_UxkF7kpqzcasD90tbWhJp/view'
    // imageUrl: 'https://example.com/project2-screenshot.jpg',
  },
];

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              View deployed application
            </a>
            <br />
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View GitHub repository
            </a>
            <br />
            <a href={project.walkthroughVideo} target="_blank" rel="noopener noreferrer">
              View Walkthrough Video
            </a>
            <br />
            {/* <img src={project.imageUrl} alt={`Screenshot of ${project.title}`} style={{ maxWidth: '100%' }} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
