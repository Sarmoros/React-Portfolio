import React from 'react';
import profilepic from "../assets/profilepic.jpg";

const AboutMeContent = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img src={profilepic} alt="Sarahy Moros" />
        <p>
          Hi, I'm Sarahy Moros! I'm a passionate web developer with experience in JavaScript, HTML, and CSS.
          I love building web applications and exploring new technologies to create engaging user experiences.
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Responsive Web Design</li>
          <li>Git/GitHub</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeContent;