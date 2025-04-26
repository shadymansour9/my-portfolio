// src/components/Projects.js
import React, { useState } from "react";
import "../STYLE/Projects.css";
import ParkingDemo from "../assets/ParkingDemo.mp4";
import ProjectModal from "./ProjectModal";
import ContactFooter from "./ContactFooter";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const projects = [
    {
      title: "Go Nature",
      summary:
        "Go Nature is a Java-based application designed to streamline park service management.",
      details: (
        <>
          <h4>👨‍💻 Technologies Used:</h4>
          <ul>
            <li>Java for object-oriented programming and scalable architecture.</li>
            <li>JDBC for database operations and data integrity.</li>
            <li>Peer-to-Peer Networking for real-time communication and updates.</li>
          </ul>

          <h4>🛠️ Skills Enhanced:</h4>
          <ul>
            <li>Mastering Java and OOP principles for maintainable software development.</li>
            <li>Efficiently managing databases to maintain data consistency.</li>
            <li>Implementing real-time data communication between clients and servers.</li>
            <li>Designing intuitive, user-friendly interfaces.</li>
            <li>Collaborating effectively within a diverse team environment.</li>
          </ul>

          <h4>🌟 Academic Achievement:</h4>
          <p>
            This project reflects the culmination of our coursework, integrating theoretical knowledge
            with hands-on practice. We’re excited about its potential to enhance park management efficiency
            and user satisfaction.
          </p>
          <a
            href="https://github.com/mohamadabuahmad/Go-Nature.git"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            🔗 View on GitHub
          </a>
        </>
      ),
    },
    {
      title: "RashaWeb – Revit and Interior Design Learning Platform",
      summary:
        "RashaWeb is a React-based platform to manage and register for Revit and Interior Design courses.",
      details: (
        <>
          <h4>👨‍💻 Technologies Used:</h4>
          <ul>
            <li>React (Hooks), React Router, Tailwind CSS, Axios</li>
          </ul>
          <h4>🛠️ Skills Enhanced:</h4>
          <ul>
            <li>Deepening knowledge of React’s hooks and functional components.</li>
            <li>Working with REST APIs and Axios for data handling.</li>
            <li>Managing dynamic content with Google Sheets integration.</li>
            <li>Enhancing user experience with modern UI/UX design principles.</li>
            <li>Implementing multi-language support and routing.</li>
          </ul>
          <h4>🌟 Key Achievements:</h4>
          <ul>
            <li>40% increase in registrations within the first month after launch.</li>
            <li>Improved user session time by 30%.</li>
            <li>Positive feedback from users, enhancing the online learning experience.</li>
          </ul>
          <a
            href="https://github.com/shadymansour9/RMDESIGN.git"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            🔗 View on GitHub
          </a>
        </>
      ),
    },
    {
      title: "Parking App – Smart Parking Management",
      summary:
        "Smart mobile & web-based parking system built with Flutter and Flask.",
      details: (
        <>
          
          {showVideo && (
            <div className="video-wrapper">
              <video controls src={ParkingDemo}></video>
            </div>
          )}

          <h4>👨‍💻 Technologies Used:</h4>
          <ul>
            <li>Python (Flask), Flutter (Dart), PostgreSQL, Firebase Authentication</li>
          </ul>
          <h4>🛠️ Skills Enhanced:</h4>
          <ul>
            <li>Backend development using Flask and REST APIs</li>
            <li>Mobile app development using Flutter</li>
            <li>PostgreSQL database management</li>
            <li>Firebase authentication integration</li>
            <li>Real-time data syncing between backend and frontend</li>
          </ul>
          <h4>🌟 Key Achievements:</h4>
          <ul>
            <li>Seamless real-time reservation system</li>
            <li>Fully integrated backend/frontend</li>
            <li>Mobile-first design experience</li>
          </ul>
          <a
            href="https://github.com/shadymansour9/final_project.git"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            🔗 View on GitHub
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <button className="read-more-btn" onClick={() => setSelectedProject(project)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          content={selectedProject.details}
          onClose={() => {
            setSelectedProject(null);
            setShowVideo(false);
          }}
        />
      )}

      {/* תוספת של תמונה ואייקונים בסוף העמוד */}
      <ContactFooter />
    </div>
  );
}

export default Projects;