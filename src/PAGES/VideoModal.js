// VideoModal.js
import React from "react";
import "../STYLE/VideoModal.css";

function VideoModal({ isOpen, onClose, videoSrc }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <video controls src={videoSrc} />
      </div>
    </div>
  );
}

export default VideoModal;