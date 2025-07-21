// src/components/FeatureSection.js
import React from "react";
import "./FeatureSection.css";

const features = [
  {
    title: "Stops Proxy Check-Ins and Buddy Punching",
    description:
      "No more students signing in for their friends, checking in from their dorms or off-campus locations, and restricting check-in before school hours.",
    img: "https://www.onetapcheckin.com/images/proxy-check-ins-p-2000.png",
    reverse: false,
  },
  {
    title: "Takes the Stress Out of Accreditation and Compliance",
    description:
      "Generate attendance reports instantly for accreditation reviews. No more scrambling to pull data at the last minute for ABA and other educational credits.\n\nSee how many students participated in a program to give rewards or certification.",
    img: "https://www.onetapcheckin.com/images/Export-Reports-OneTap.png",
    reverse: true,
  },
];

const FeatureSection = () => {
  return (
    <div className="features-wrapper">
      {features.map((item, index) => (
        <div
          className={`feature-item ${item.reverse ? "reverse" : ""}`}
          key={index}
        >
          <div className="feature-image">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="feature-text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
