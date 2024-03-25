import React from 'react';
import profilepic from "../assets/picture.jpg";
import contact from "./contact";

const AboutMeContent = () => {
  return (
    <div className="about-me" style={containerStyle}>
      <h1>Welcome to my Portfolio</h1>
      <h2>About Me</h2>
      <div className="bio" style={contentStyle}>
        <img src={profilepic} alt="Sarahy Moros" style={imageStyle} />
        <p>
          Hi, I'm Sarahy Moros, a dedicated and detail-oriented web developer with a passion for creating elegant and functional web solutions. With a background in computer science and years of experience in front-end development, I specialize in crafting responsive and user-friendly web applications that delight users and exceed client expectations.
        </p>
        <p>
          My journey in web development began with a curiosity-driven exploration of HTML, CSS, and JavaScript. Over time, I honed my skills and expanded my knowledge to include popular frameworks and libraries such as React.js, which I now use extensively to build dynamic and interactive user interfaces.
        </p>
        <p>
          Beyond coding, I thrive on collaboration and continuous learning. I enjoy working in agile environments where I can contribute my expertise and learn from fellow developers. I'm also passionate about staying up-to-date with the latest technologies and industry trends, which allows me to continuously improve my craft and deliver cutting-edge solutions to clients.
        </p>
      </div>
      <div className="skills" style={contentStyle}>
        <h3>Skills</h3>
        <ul className='list' style={listStyle}>
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


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const contentStyle = {
  textAlign: 'center',
  margin: '20px 0',
};

const imageStyle = {
  width: '160px',
  height: 'auto',
  borderRadius: '50%',
};

const listStyle = {
  textAlign: 'left',
  fontSize: '1.2rem',
  listStyleType: 'none',
};

export default AboutMeContent;

