import React from 'react';
import profilePic from "../../assets/stiner.jpg";

//about
function Portfolio() {
  return (
    <section className="my-5">
      <p>Thank you for stopping by! I'm Missy from Wichita, Kansas. I'm currently a digital marketing specialist with a goal to specialize in website and data project development following the completion of the KU coding boot camp.
        Other relevant skills include proficiency in Adobe Illustrator and Adobe Photoshop, video editing, and a certificiation in Google Analytics. I would love to learn more about the Americans with Disabilites Act (ADA) regulations to strive for AA/AAA accessibility on future website and application projects.</p>
      <img src={profilePic} className="img-thumbnail" alt="Missy Stiner" />
    </section>
  );
}

export default Portfolio;