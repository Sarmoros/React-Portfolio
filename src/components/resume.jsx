import React from 'react';


const Resume = () => {
  // Define CSS styles as JavaScript objects
  const resumeStyle = {
    maxWidth: '800px', // Limit the width of the resume content
    margin: '0 auto', // Center the content horizontally
    padding: '20px', // Add some padding around the content
    backgroundColor: '#ffffff', // White background
    color: '#000000', // Black text
    fontFamily: 'Arial, sans-serif', // Specify font family
  };

  const sectionTitleStyle = {
    borderBottom: '2px solid #000000', // Add a border bottom to section titles
    paddingBottom: '10px', // Add some space below section titles
    marginTop: '20px' // Add some space above section titles
  };

  return (
    <div className="resume" style={resumeStyle}>
      <h2 style={{ textAlign: 'center' }}>Resume</h2>
      {/* <b>Download my resume <a href="./assets/resume.jpeg" target="_blank" rel="noopener noreferrer">here</a>.</b> */}
      <p>Aspiring web developer with a fervent enthusiasm for crafting engaging online experiences. Eager to leverage skills in JavaScript, HTML, and CSS honed through a full-stack coding bootcamp at the University of Miami. Dedicated to mastering the intricacies of front-end and back-end development to create dynamic and user-centric websites. Committed to continuous learning and excited to contribute innovative solutions to the ever-evolving digital landscape</p>
      <h3 style={sectionTitleStyle}>Skills</h3>
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
      <h3 style={sectionTitleStyle}>Experience</h3>
      <h4>Web Developer (2023 - Present)</h4>
      <p>Passionate and dedicated programmer with expertise in JavaScript, HTML, and CSS. Graduated from the University of Miami's full-stack coding bootcamp, equipped with comprehensive skills in both front-end and back-end development. Experienced in freelance coding projects, demonstrating versatility and commitment to delivering high-quality solutions.</p>
      <h4>Accounts Payable Secialist (2018 - 2024)</h4>
      <p>Dedicated and detail-oriented accountant with over 5 years of professional experience in financial management. Proficient in analyzing financial data, identifying trends, and implementing strategies to optimize financial performance. Strong knowledge of accounting principles, regulations, and software applications. Proven ability to maintain accurate financial records, prepare comprehensive reports, and provide strategic financial guidance to support organizational goals.</p>
      <h4>Teacher's Assistant (2016 - 2018)</h4>
      <p>Experienced teacher's assistant with 2 years of dedicated service in a kindergarten classroom. Skilled in supporting lead teachers in creating engaging lesson plans, implementing educational activities, and fostering a positive learning environment. Proficient in assisting with classroom management, student supervision, and individualized student support. Strong communication and teamwork abilities, with a passion for contributing to the academic and social development of young learners.</p>
    </div>
  );
}

export default Resume;
