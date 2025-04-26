// src/components/ProjectModal.js
import React, { useState } from "react";
import "../STYLE/VideoModal.css";
import ParkingDemo from "../assets/ParkingDemo.mp4";

function ProjectModal({ title, content, onClose }) {
  const [showVideo, setShowVideo] = useState(false);
  const hasVideo = title === "Parking App – Smart Parking Management";

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

        {/* כפתור להפעיל וידאו */}
        {hasVideo && !showVideo && (
          <button
            className="watch-video-button"
            onClick={(e) => {
              e.stopPropagation();
              setShowVideo(true);
            }}
          >
            ▶ Watch Video
          </button>
        )}

        {/* וידאו קטן */}
        {hasVideo && showVideo && (
          <div className="modal-video-container">
            <video controls src={ParkingDemo}></video>
          </div>
        )}

        {/* תוכן הפרויקט */}
        <div className="modal-text">{content}</div>
      </div>
    </div>
  );
}

export default ProjectModal;
