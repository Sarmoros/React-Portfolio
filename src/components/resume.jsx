import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <b>Download my resume <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</b>
      <p>I have a diverse professional background that includes 5 years of experience as an accountant and 2 years as a teacher's assistant in a kindergarten classroom. As an accountant, I demonstrated proficiency in financial management, auditing, and tax preparation, leveraging my strong analytical skills to optimize financial performance. In my role as a teacher's assistant, I supported lead teachers in creating engaging lesson plans and fostering a positive learning environment for young learners, while also assisting with classroom management and individual student support. Through both roles, I have honed my communication, teamwork, and organizational abilities, contributing to the success of the teams and organizations I have been a part of.</p>
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
      <h3>Experience</h3>
      <h4>Software Developer Student (2023 - Present)</h4>
      <p>I have been studying at University of Miami's full stack coding bootcamp.</p>
      <h4>Accountant (2018 - Present)</h4>
      <p>"Dedicated and detail-oriented accountant with over 5 years of professional experience in financial management, auditing, and tax preparation. Proficient in analyzing financial data, identifying trends, and implementing strategies to optimize financial performance. Strong knowledge of accounting principles, regulations, and software applications. Proven ability to maintain accurate financial records, prepare comprehensive reports, and provide strategic financial guidance to support organizational goals."</p>
      <h4>Teacher's Assistant (2016 - 2018)</h4>
      <p>"Experienced teacher's assistant with 2 years of dedicated service in a kindergarten classroom. Skilled in supporting lead teachers in creating engaging lesson plans, implementing educational activities, and fostering a positive learning environment. Proficient in assisting with classroom management, student supervision, and individualized student support. Strong communication and teamwork abilities, with a passion for contributing to the academic and social development of young learners."</p>
    </div>
  );
}

export default Resume;
