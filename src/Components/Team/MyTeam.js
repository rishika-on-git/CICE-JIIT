// Team.js

import React from 'react';
import "./MyTeam.css"
import HeadingTeam from "./Heading"
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: 'Luna Turner',
    designation: 'Founder',
    image: 'profile-img-1.png',
    social: {
      github: 'https://github.com/luna-turner',
      twitter: 'https://twitter.com/luna_turner',
      linkedin: 'https://linkedin.com/in/luna-turner',
      email: 'mailto:luna.turner@example.com'
    }
  },
  {
    id: 2,
    name: 'Bryant Hall',
    designation: 'Developer',
    image: 'profile-img-2.png',
    social: {
      github: 'https://github.com/bryant-hall',
      twitter: 'https://twitter.com/bryant_hall',
      linkedin: 'https://linkedin.com/in/bryant-hall',
      email: 'mailto:bryant.hall@example.com'
    }
  },
  {
    id: 3,
    name: 'Hope Watkins',
    designation: 'Designer',
    image: 'profile-img-3.png',
    social: {
      github: 'https://github.com/hope-watkins',
      twitter: 'https://twitter.com/hope_watkins',
      linkedin: 'https://linkedin.com/in/hope-watkins',
      email: 'mailto:hope.watkins@example.com'
    }
  },
  {
    id: 3,
    name: 'Hope Watkins',
    designation: 'Designer',
    image: 'profile-img-3.png',
    social: {
      github: 'https://github.com/hope-watkins',
      twitter: 'https://twitter.com/hope_watkins',
      linkedin: 'https://linkedin.com/in/hope-watkins',
      email: 'mailto:hope.watkins@example.com'
    }
  },
  {
    id: 3,
    name: 'Hope Watkins',
    designation: 'Designer',
    image: 'profile-img-3.png',
    social: {
      github: 'https://github.com/hope-watkins',
      twitter: 'https://twitter.com/hope_watkins',
      linkedin: 'https://linkedin.com/in/hope-watkins',
      email: 'mailto:hope.watkins@example.com'
    }
  },
];

const MyTeam = () => {
  return (
    <>
      <HeadingTeam />
      <section className="team-section">
        <div className="team-row">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-column">
              <div className="team-card">
                <div className="team-img-container">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.designation}</p>
                <div className="team-icons">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.social.email} target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyTeam;
