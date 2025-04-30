import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Jeremy',
      role: 'Role 1',
      bio: 'With over 15 years of experience in mental health technology, Jeremy leads our team with a vision for transforming psychiatric care through innovative digital solutions.',
      image: new URL('../../assets/Jeremy.JPG', import.meta.url).href,
      alt: 'Jeremy - Founder & CEO'
    },
    {
      name: 'Elisheva',
      role: 'Role 2',
      bio: 'Elisheva brings extensive expertise in healthcare technology, driving our technical innovation and ensuring our platform meets the highest standards of security and usability.',
      image: new URL('../../assets/Elisheva.JPG', import.meta.url).href,
      alt: 'Elisheva - CTO'
    },
    {
      name: 'Kohrman',
      role: 'Role 3',
      bio: 'As a licensed psychiatrist, Kohrman ensures our tools align with clinical best practices and meet the real-world needs of mental health professionals.',
      image: new URL('../../assets/Kohrman.JPG', import.meta.url).href,
      alt: 'Kohrman - Clinical Director'
    },
    {
      name: 'AJ',
      role: 'Role 4',
      bio: 'AJ combines user experience expertise with deep understanding of healthcare workflows to create intuitive and effective solutions for our users.',
      image: new URL('../../assets/AJ.JPG', import.meta.url).href,
      alt: 'AJ - Head of Product'
    },
    {
      name: 'Ryan',
      role: 'Lead Developer',
      bio: 'Ryan leads our development team, implementing cutting-edge features and maintaining the high performance and reliability of our platform.',
      image: new URL('../../assets/ryan.JPG', import.meta.url).href,
      alt: 'Ryan - Lead Developer'
    }
  ];

  return (
    <div className="team-page">
      <section className="team-header">
        <h1>Our Team</h1>
        <p>Meet the dedicated professionals behind Psykit</p>
      </section>

      {teamMembers.map((member, index) => (
        <section 
          key={index} 
          className={`team-member-section ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
        >
          <div className="team-member-content">
            <div className="team-member-image">
              <img src={member.image} alt={member.alt} />
            </div>
            <div className="team-member-info">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.bio}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Team; 