// src/components/ProjectModal.js
import React, { useState } from "react";
import "../STYLE/VideoModal.css";
import ParkingDemo from "../assets/ParkingDemo.mp4";
import RMProject from "../assets/RMPROJECT.mp4";

function ProjectModal({ title, content, onClose }) {
  const [showVideo, setShowVideo] = useState(false);

  // מיפוי בין שם פרויקט לווידאו
  const videoSources = {
    "Parking App – Smart Parking Management": ParkingDemo,
    "RashaWeb – Revit and Interior Design Learning Platform": RMProject,
  };

  const videoSrc = videoSources[title]; // אם יש וידאו לפרויקט הזה

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
      >
        <button className="close-button" onClick={onClose}>
          ← Back
        </button>

        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>{title}</h2>

        {/* כפתור לצפייה בווידאו */}
        {videoSrc && !showVideo && (
          <button
            className="watch-video-button"
            onClick={(e) => {
              e.stopPropagation();
              setShowVideo(true);
            }}
          >
            ▶️ Watch Video
          </button>
        )}

        {/* הצגת הווידאו אם נלחץ כפתור */}
        {videoSrc && showVideo && (
          <div className="modal-video-container">
            <video controls src={videoSrc}></video>
          </div>
        )}

        {/* תוכן פרויקט רגיל */}
        <div className="modal-text">{content}</div>
      </div>
    </div>
  );
}

export default ProjectModal;
