import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaTools, FaCloud, FaCogs, FaServer } from 'react-icons/fa';
import { SiC, SiCplusplus, SiPython, SiJavascript, SiReact, SiNodedotjs, SiPytorch, SiOpencv, SiDocker, SiAmazonwebservices, SiLinux, SiGit, SiGithub, SiJest, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode style={{fontSize: 24, color: '#6366f1'}} />,
    skills: [
      { name: 'C', icon: <SiC style={{fontSize: 16, color: '#A8B9CC'}} /> },
      { name: 'C++', icon: <SiCplusplus style={{fontSize: 16, color: '#00599C'}} /> },
      { name: 'Python', icon: <SiPython style={{fontSize: 16, color: '#3776AB'}} /> },
      { name: 'JavaScript', icon: <SiJavascript style={{fontSize: 16, color: '#F7DF1E'}} /> }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: <FaLaptopCode style={{fontSize: 24, color: '#60a5fa'}} />,
    skills: [
      { name: 'React', icon: <SiReact style={{fontSize: 16, color: '#61DAFB'}} /> },
      { name: 'Node.js', icon: <SiNodedotjs style={{fontSize: 16, color: '#339933'}} /> },
      { name: 'PyTorch', icon: <SiPytorch style={{fontSize: 16, color: '#EE4C2C'}} /> },
      { name: 'OpenCV', icon: <SiOpencv style={{fontSize: 16, color: '#5C3EE8'}} /> },
      { name: 'REST APIs', icon: <FaServer style={{fontSize: 16, color: '#6366f1'}} /> }
    ]
  },
  {
    title: 'Software Development',
    icon: <FaCogs style={{fontSize: 24, color: '#10b981'}} />,
    skills: [
      { name: 'Object Oriented Programming', icon: <FaCode style={{fontSize: 16, color: '#10b981'}} /> },
      { name: 'Data Structure & Algorithms', icon: <FaCode style={{fontSize: 16, color: '#10b981'}} /> },
      { name: 'Git', icon: <SiGit style={{fontSize: 16, color: '#F05032'}} /> },
      { name: 'GitHub', icon: <SiGithub style={{fontSize: 16, color: '#181717'}} /> },
      { name: 'Unit Testing', icon: <SiJest style={{fontSize: 16, color: '#C21325'}} /> },
      { name: 'Debugging', icon: <FaCogs style={{fontSize: 16, color: '#10b981'}} /> },
      { name: 'Code Review', icon: <FaCogs style={{fontSize: 16, color: '#10b981'}} /> }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools style={{fontSize: 24, color: '#f59e0b'}} />,
    skills: [
      { name: 'Linux', icon: <SiLinux style={{fontSize: 16, color: '#FCC624'}} /> },
      { name: 'Docker', icon: <SiDocker style={{fontSize: 16, color: '#2496ED'}} /> },
      { name: 'CI/CD', icon: <FaTools style={{fontSize: 16, color: '#f59e0b'}} /> },
      { name: 'MongoDB', icon: <SiMongodb style={{fontSize: 16, color: '#47A248'}} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql style={{fontSize: 16, color: '#336791'}} /> },
      { name: 'MySQL', icon: <SiMysql style={{fontSize: 16, color: '#4479A1'}} /> },
      { name: 'AWS', icon: <SiAmazonwebservices style={{fontSize: 16, color: '#FF9900'}} /> },
              { name: 'Azure', icon: <FaCloud style={{fontSize: 16, color: '#0078D4'}} /> }
    ]
  },
  {
    title: 'Technical Skills',
    icon: <FaCloud style={{fontSize: 24, color: '#8b5cf6'}} />,
    skills: [
      { name: 'System Design', icon: <FaCloud style={{fontSize: 16, color: '#8b5cf6'}} /> },
      { name: 'Performance Optimization', icon: <FaCogs style={{fontSize: 16, color: '#8b5cf6'}} /> },
      { name: 'Agile Development', icon: <FaCogs style={{fontSize: 16, color: '#8b5cf6'}} /> },
      { name: 'API Development', icon: <FaServer style={{fontSize: 16, color: '#8b5cf6'}} /> },
      { name: 'Software Architecture', icon: <FaCloud style={{fontSize: 16, color: '#8b5cf6'}} /> }
    ]
  }
];

const Skills = () => (
  <motion.section 
    initial={{ opacity: 0, y: 40 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.7 }}
  >
    <h2>Skills & Technologies</h2>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
      {skillCategories.map((category, idx) => (
        <motion.div 
          key={idx}
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          whileHover={{ y: -8 }}
        >
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
            {category.icon}
            <h3 style={{margin: 0, fontSize: '1.3rem'}}>{category.title}</h3>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {category.skills.map((skill, skillIdx) => (
              <span 
                key={skillIdx}
                style={{
                  background: 'var(--badge-bg)',
                  color: 'var(--badge-text)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  boxShadow: '0 2px 8px var(--badge-shadow)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills; 