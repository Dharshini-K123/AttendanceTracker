// src/components/FeatureHighlight.js
import React from "react";
import "./feature.css";


const FeatureHighlight = () => {
  return (
    <section className="feature-section">
      <h2 className="feature-title">
        More Than Attendance to Keep Your <span>Academic Records Organized</span>
      </h2>

      <div className="feature-content">
        <div className="feature-text">
          <h3>Helps Students Stay on Track and Graduate</h3>
          <p>
            Spot students who are falling behind early. Advisors can step in before grades drop,
            helping students stay engaged and accountable.
          </p>
        </div>

        <div className="feature-image">
          <img src={"https://www.onetapcheckin.com/images/faster-check-in-app-onetap.png"} alt="Academic Record UI" />
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
