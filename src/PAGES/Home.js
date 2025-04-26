import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../STYLE/Home.css";
import profilePic from "../assets/shady.jpg";

function Home() {
  const skills = [
    { name: "React", desc: "Used for dynamic UI in RashaWeb." },
    { name: "Flask", desc: "Built RESTful backend in Parking App." },
    { name: "JavaScript", desc: "Core language in all frontend apps." },
    { name: "Tailwind CSS", desc: "Styled all pages with utility classes." },
    { name: "TCP/IP", desc: "Analyzed data flow using Wireshark." },
    { name: "Wireshark", desc: "Captured packets in testing sessions." },
    { name: "Linux (Ubuntu, CentOS)", desc: "Worked in terminal for networking tests." },
    { name: "Postman", desc: "Tested backend APIs locally." },
    { name: "Selenium", desc: "Ran UI automation tests." },
    { name: "System Monitoring", desc: "Checked CPU/memory during app tests." },
    { name: "Git", desc: "Used for team collaboration on GitHub." },
    { name: "Docker", desc: "Containerized Flask app." },
    { name: "PostgreSQL", desc: "Managed user & reservation DBs." },
    { name: "MySQL", desc: "Built DB schema in other courses." },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Hi, I'm Shady Mansour 👋</h1>
        <p className="hero-subtitle">
          Software Engineering Student | Networking & Testing Enthusiast | React & Flask Developer
        </p>
      </div>

      {/* Profile Image & Contact Icons */}
      <img src={profilePic} alt="Shady" className="profile-pic" />
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/shady-mansour-411a67230" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/shadymansour" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="mailto:mansourshady69@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={32} />
        </a>
      </div>

      {/* About Me Section */}
      <div className="about-wrapper">
        <div className="about-modern">
          <div className="about-box about-left" dir="ltr">
            <h2>About Me</h2>
            <p>
              I'm Shady Mansour, a Software Engineering student with a passion for networks, system testing, and smart infrastructure.
              While I develop full-stack web applications using React and Flask, I find my true interest in understanding how systems
              communicate, testing their reliability, and ensuring performance under real-world conditions.
            </p>
          </div>

          <div className="divider-line"></div>

          <div className="about-box about-right" dir="rtl">
            <h2>קצת עליי</h2>
            <p>
              שמי שדי מנסור, סטודנט להנדסת תוכנה עם תשוקה לעולם הרשתות, הבדיקות והמערכות החכמות. לצד פיתוח אפליקציות WEB ב־React ו־Flask,
              אני נהנה במיוחד להבין איך מערכות מתקשרות, לבדוק את האמינות שלהן, ולוודא שהן עומדות בתנאי ביצועים אמיתיים.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
      {skills.map((skill, index) => (
  <div className="skill-card hover-card" key={index}>
    <div className="card-name">{skill.name}</div>
    <div className="card-desc">{skill.desc}</div>
  </div>
))}
      </div>
    </div>
  );
}

export default Home;
