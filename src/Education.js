import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const education = [
  {
    school: 'University at Buffalo, The State University of New York',
    degree: "Master's in Engineering Science, Robotics",
    location: 'Buffalo, NY',
    date: 'Aug 2023 – Jan 2025',
    icon: <FaUniversity style={{fontSize: 24, color: '#6366f1'}} />
  },
  {
    school: 'BITS Edu Campus',
    degree: 'Bachelor of Engineering, Computer Science and Engineering',
    location: 'Vadodara, India',
    date: 'Jun 2019 – May 2023',
    icon: <FaUniversity style={{fontSize: 24, color: '#10b981'}} />
  }
];

const Education = () => (
  <motion.section 
    initial={{ opacity: 0, y: 40 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.7 }}
  >
    <h2>Education</h2>
    <div style={{marginTop: '2rem'}}>
      {education.map((edu, idx) => (
        <motion.div 
          key={idx} 
          className="card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          whileHover={{ x: 8 }}
          style={{marginBottom: '2rem'}}
        >
          <div style={{display: 'flex', alignItems: 'flex-start', gap: '1.5rem'}}>
            <div style={{padding: '1rem', background: 'linear-gradient(135deg, #f3f6fd 0%, #e0e7ff 100%)', borderRadius: '16px', flexShrink: 0}}>
              {edu.icon}
            </div>
            <div style={{flex: 1}}>
              <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: 'var(--text-heading)', fontWeight: 700}}>
                {edu.degree}
              </h3>
              <div style={{fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.8rem'}}>
                {edu.school}
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                  <FaMapMarkerAlt /> {edu.location}
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                  <FaCalendarAlt /> {edu.date}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Education; 