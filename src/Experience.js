import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    company: 'University at Buffalo',
    title: 'Software Developer',
    location: 'Buffalo, NY',
    date: 'Jan 2025 – Present',
    icon: <FaUniversity style={{fontSize: 20, color: '#6366f1'}} />,
    bullets: [
      'Designed and implemented end-to-end software architecture for autonomous UGV system, developing modular control systems with optimized algorithms achieving sub-100ms response times for real-time operations.',
      'Built automated CI/CD pipeline using Docker and testing frameworks, reducing deployment time by 60% while maintaining 95% code coverage and implementing comprehensive monitoring for system reliability and performance tracking.'
    ]
  },
  {
    company: 'University at Buffalo',
    title: 'Graduate Research Assistant',
    location: 'Buffalo, NY',
    date: 'Aug 2024 – Dec 2024',
    icon: <FaUniversity style={{fontSize: 20, color: '#6366f1'}} />,
    bullets: [
      'Developed high-performance data processing algorithms handling 50,000+ features per second, implementing hybrid pathfinding solutions and graph optimization techniques that improved system accuracy by 15% in test environments.',
      'Designed and optimized machine learning models for object detection and spatial analysis, enhancing automated system performance and accuracy for industrial applications through efficient data processing pipelines.'
    ]
  },
  {
    company: 'University at Buffalo',
    title: 'Student Assistant – Manufacturing Automation',
    location: 'Buffalo, NY',
    date: 'Aug 2024 – Dec 2024',
    icon: <FaUniversity style={{fontSize: 20, color: '#6366f1'}} />,
    bullets: [
      'Mentored 47 students in Manufacturing Automation while collaborating with faculty to develop standardized assessment frameworks and optimize evaluation workflows, improving consistency and technical guidance.'
    ]
  },
  {
    company: 'DRAI FutureGen LLP',
    title: 'Founder, Software Engineer',
    location: 'Surat, Gujarat',
    date: 'Oct 2022 – Jul 2023',
    icon: <FaBuilding style={{fontSize: 20, color: '#10b981'}} />,
    bullets: [
      'Led cross-functional development team to deploy distributed autonomous systems, implementing data fusion algorithms and optimization strategies achieving 98% accuracy through performance monitoring and code review processes.',
      'Developed advanced path-finding software using graph-based algorithms and statistical filtering, resulting in 7% improved system stability and >90% detection accuracy through comprehensive unit testing frameworks.',
      'Engineered real-time processing algorithms and data integration pipelines for autonomous applications, delivering high-precision solutions through agile development methodologies and systematic debugging processes.'
    ]
  },
  {
    company: 'Wastefull Insights Pvt. Ltd',
    title: 'Software Engineer Intern',
    location: 'Vadodara, Gujarat',
    date: 'Jun 2022 – Sep 2022',
    icon: <FaBuilding style={{fontSize: 20, color: '#f59e0b'}} />,
    bullets: [
      'Reduced video processing delays by 20ms and enhanced system responsiveness by optimizing computer vision algorithms, achieving 92% training accuracy and 83% deployment performance through parallel processing optimization.',
      'Automated training and testing workflows by implementing cloud-based deployment pipeline on AWS (S3, EC2), optimizing model deployment with GPU acceleration and performance monitoring for seamless production releases.',
      'Improved system performance by 10% through architecture optimization and language migration from Python to C++, reducing computational latency in multi-threaded applications through efficient memory management and code profiling.'
    ]
  }
];

const Experience = () => (
  <motion.section 
    initial={{ opacity: 0, y: 40 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.7 }}
  >
    <h2>Professional Experience</h2>
    <div style={{marginTop: '2rem'}}>
      {experiences.map((exp, idx) => (
        <motion.div 
          key={idx} 
          className="card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          whileHover={{ x: 10 }}
          style={{position: 'relative', borderLeft: '4px solid #6366f1'}}
        >
          <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem'}}>
            <div style={{padding: '0.5rem', background: '#f3f6fd', borderRadius: '8px'}}>
              {exp.icon}
            </div>
            <div style={{flex: 1}}>
              <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.4rem', color: 'var(--text-heading)'}}>
                {exp.title}
              </h3>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', fontSize: '1rem', color: 'var(--text-main)', fontWeight: 600}}>
                {exp.company}
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '0.3rem'}}>
                  <FaMapMarkerAlt /> {exp.location}
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '0.3rem'}}>
                  <FaCalendarAlt /> {exp.date}
                </span>
              </div>
            </div>
          </div>
          <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
            {exp.bullets.map((bullet, i) => (
              <li key={i} style={{marginBottom: '0.8rem', lineHeight: 1.6, color: 'var(--text-secondary)'}}>
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Experience; 