import React from 'react';
import profilepic from "../assets/ProfilePic.jpg";
import contact from "./contact";
import { list } from 'postcss';

const AboutMeContent = () => {
  return (
    <div className="about-me" style={containerStyle}>
      <div className="header" style={headerStyle}>
        <h3>Hi! I'm </h3>
        <h1>Sarahy Moros</h1>
        <h2>Full Stack Web Developer</h2>
        <img src={profilepic} alt="Sarahy Moros" style={imageStyle} />
        <ul className='first-list' style={list1style}>
          <li>🖥️ Love computers</li>
          <li>🌴 Based in Miami, FL</li>
          <li>🎮 Enjoy video games</li>
          <li>📩 sarahym0703@gmail.com</li>
        </ul>
      </div>

      <div className="bio" style={contentStyle}>
        
        <h2>About Me</h2>
        <p>
          Hi, I'm Sarahy Moros, a dedicated and detail-oriented web developer with a passion for creating elegant and functional web solutions. With a background in computer science and experience in front-end development, I specialize in crafting responsive and user-friendly web applications that delight users and exceed client expectations.
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

// h1Style = {
//   fontFamily: "Poppins, sans-serif",
//   fontWeight: 300,
//   fontStyle: "light",

// }

const headerStyle = {
  padding: '200px 0',
};

const list1style = {
  textAlign: 'left',
  fontSize: '1.3rem',
  listStyleType: 'none',
  padding: 20,
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const contentStyle = {
  textAlign: 'center',
  margin: '20px 0',
  padding: '0 100px',
};

const imageStyle = {
  width: '200px',
  height: 'auto',
  borderRadius: '50%',
};

const listStyle = {
  textAlign: 'left',
  fontSize: '1.2rem',
  listStyleType: 'none',
  padding: 20,
};

export default AboutMeContent;

