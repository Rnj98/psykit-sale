import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
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