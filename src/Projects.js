import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaEye } from 'react-icons/fa';

const projects = [
  {
    title: 'Real-Time Path Planning Algorithm',
    image: process.env.PUBLIC_URL + '/images/f1tenth.png',
    icon: <FaRobot style={{fontSize: 32, color: '#6366f1'}} />,
    description: 'Developed gap-following and trajectory optimization algorithms for autonomous vehicle simulation, implementing efficient path-finding solutions that improved system reliability by 30% through optimized decision-making logic.',
    tech: ['Python', 'C++', 'OpenCV', 'ROS', 'Machine Learning'],
    category: 'Navigation Projects'
  },
  {
    title: 'Automated Quality Control System',
    image: process.env.PUBLIC_URL + '/images/robotic_arm.jpg',
    icon: <FaRobot style={{fontSize: 32, color: '#6366f1'}} />,
    description: 'Built machine learning pipeline for defect detection using computer vision, integrating camera systems with robotic control through PLC communication protocols for automated sorting operations.',
    tech: ['Python', 'C++', 'OpenCV', 'ROS', 'Machine Learning'],
    category: 'Navigation Projects'
  },
  {
    title: 'Video Enhancement Processing System',
    image: process.env.PUBLIC_URL + '/images/snow_comparison.png',
    icon: <FaEye style={{fontSize: 32, color: '#10b981'}} />,
    description: 'Developed real-time video processing pipeline with Zero-DCE and SRCNN algorithms, achieving 12% resolution improvement through optimized frame processing.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Reinforcement Learning'],
    category: 'Computer Vision Systems'
  },
  {
    title: 'Real-Time Object Detection Platform',
    image: '', // No image
    icon: <FaEye style={{fontSize: 32, color: '#10b981'}} />,
    description: 'Built conveyor vision system for product detection and tracking, implementing parallel processing achieving 96% accuracy for industrial applications.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Reinforcement Learning'],
    category: 'Computer Vision Systems'
  },
  {
    title: 'Adaptive Learning System using Reinforcement Learning',
    image: process.env.PUBLIC_URL + '/images/silhoutte.png',
    icon: <FaEye style={{fontSize: 32, color: '#10b981'}} />,
    description: 'Developed reinforcement learning system achieving 99% accuracy for pattern optimization, implementing CNN and PPO algorithms with genetic optimization.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Reinforcement Learning'],
    category: 'Computer Vision Systems'
  }
];

const categories = ['All', 'Navigation Projects', 'Computer Vision Systems'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7 }}
    >
      <h2>Featured Projects</h2>
      <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap'}}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '0.5rem 1.3rem',
              borderRadius: '20px',
              border: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              background: selectedCategory === cat
                ? 'linear-gradient(90deg, #6366f1 30%, #60a5fa 100%)'
                : 'var(--badge-bg)',
              color: selectedCategory === cat ? '#fff' : 'var(--text-main)',
              boxShadow: selectedCategory === cat ? '0 2px 8px #6366f133' : 'none',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="project-grid" style={{
          marginTop: '2rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          boxSizing: 'border-box'
        }}>
          {filteredProjects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              style={{
                marginBottom: 0,
                height: '100%',
                minHeight: '370px',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                padding: '1.7rem 1.2rem',
                borderRadius: '22px',
                gap: '0.7rem'
              }}
            >
              {proj.image && (
                <img src={proj.image} alt={proj.title + ' image'} style={{width: '100%', height: 150, objectFit: 'cover', borderRadius: '14px', marginBottom: 14}} />
              )}
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.7rem'}}>
                <div style={{padding: '0.7rem', background: 'linear-gradient(135deg, #f3f6fd 0%, #e0e7ff 100%)', borderRadius: '12px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  {React.cloneElement(proj.icon, { style: { fontSize: 22, color: proj.icon.props.style.color } })}
                </div>
                <div style={{flex: 1}}>
                  <h3 style={{margin: '0 0 0.4rem 0', fontSize: '1.15rem', color: 'var(--text-heading)', fontWeight: 800, lineHeight: 1.3}}>
                    {proj.title}
                  </h3>
                  <p style={{margin: '0 0 0.7rem 0', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 500}}>
                    {proj.description}
                  </p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem'}}>
                    {proj.tech.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        style={{
                          background: 'linear-gradient(90deg, #6366f1 30%, #60a5fa 100%)',
                          color: '#fff',
                          padding: '0.22rem 0.6rem',
                          borderRadius: '12px',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          boxShadow: '0 2px 6px rgba(99, 102, 241, 0.13)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/* Responsive grid for project tiles */
const style = document.createElement('style');
style.innerHTML = `
  @media (max-width: 700px) {
    .project-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(style);

export default Projects; 