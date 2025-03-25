import React from "react";
import Benefits from "./Benefits";  // ✅ Import du composant
import Careers from "./Careers";    // ✅ Import du composant
import OurStory from "./OurStory";  // ✅ Import du composant
import Team from "./Team";


const About = () => {

  return (
    <div className="container py-5">
      
      <ul className="list-unstyled">
        <li><a href="/Benefits" className="text-dark text-decoration-none"></a></li>
        <li><a href="/Careers" className="text-dark text-decoration-none"></a></li>
        <li><a href="/OurStory" className="text-dark text-decoration-none"></a></li>
        <li><a href="/Team" className="text-dark text-decoration-none"></a></li>
      </ul>

      {/* Sections associées */}
      <div id="benefits"><Benefits /></div>
      <div id="careers"><Careers /></div>
      <div id="our-story"><OurStory /></div>
      <div id="team"><Team /></div>
    </div>
  );
};

export default About;
