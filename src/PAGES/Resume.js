import React from "react";
import cvFile from "../assets/cv.pdf";
import "../STYLE/Resume.css";
import ContactFooter from "../components/ContactFooter";

function Resume() {
  return (
    <div className="resume-container">
      {/* כותרת */}
      <h2 className="resume-title">My Resume</h2>

      {/* כפתור הורדה */}
      <a href={cvFile} download="Shady_Mansour_CV.pdf" className="download-btn">
        📄 Download PDF
      </a>

      {/* סיכום כמו ספר */}
      <div className="about-modern">
        {/* צד שמאל - אנגלית */}
        <div className="about-box about-left" dir="ltr">
          <p>
            I’m a Software Engineering student (expected to graduate in 2025), with hands-on experience in web development and technical support.
            During my 3 years at Partner, I focused on troubleshooting, debugging, and mentoring junior staff. Alongside my academic studies,
            I developed three key projects involving full-stack apps using React, Flask, and machine learning.
            I aim to join a team where I can combine my technical skills with practical, results-driven thinking.
          </p>
        </div>

        <div className="divider-line"></div>

        {/* צד ימין - עברית */}
        <div className="about-box about-right" dir="rtl">
          <p>
            אני סטודנט להנדסת תוכנה (צפוי לסיים ב־2025), עם ניסיון מעשי בפיתוח מערכות WEB ובתמיכה טכנית.
            עבדתי 3 שנים ב־Partner, שם התמחיתי באיתור תקלות, בדיקות (Debug), והדרכת עובדים חדשים.
            במהלך לימודיי האקדמיים עבדתי על שלושה פרויקטים מרכזיים, כולל אפליקציות מבוססות React, Flask ולמידת מכונה.
            שואף להשתלב בצוות שמשלב מקצועיות עם עשייה משמעותית.
          </p>
        </div>
      </div>

      {/* תצוגת PDF */}
      <div className="pdf-frame">
        <iframe
          src={cvFile}
          width="100%"
          height="800px"
          title="Resume"
          style={{ border: "none" }}
        ></iframe>
      </div>

      {/* תחתית עם תמונה ואייקונים */}
      <ContactFooter />
    </div>
  );
}

export default Resume;