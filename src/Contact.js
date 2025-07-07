import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7 }}
      style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-main)'
      }}
    >
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '14px',
        boxShadow: '0 2px 12px rgba(91,33,182,0.04)',
        padding: '3rem 2.5rem',
        maxWidth: 680,
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2.5rem'
      }}>
        <h2 style={{ color: 'var(--text-heading)', textAlign: 'left', marginBottom: 0, fontSize: '2.1rem' }}>Get In Touch</h2>
        <div style={{ width: '100%' }}>
          <iframe
            title="Jersey City Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.96496435744!2d-74.0739726!3d40.7177541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b8b7e2b0b1%3A0x8c2b7e2b0b1b7e2b!2sJersey%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1688937600000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '10px', minWidth: 0, minHeight: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <hr style={{width: '100%', border: 'none', borderTop: '1px solid #ece7fa', margin: '0.5rem 0 0.5rem 0'}} />
        <div style={{ width: '100%' }}>
          <h3 style={{ marginBottom: '1.2rem', color: 'var(--text-heading)', textAlign: 'left' }}>Contact Information</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--badge-bg)', borderRadius: '8px', justifyContent: 'flex-start' }}>
              <FaEnvelope style={{ fontSize: 20, color: '#ea4335' }} />
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Email</div>
                <div style={{ color: 'var(--text-main)' }}>viradiyahenish@gmail.com</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--badge-bg)', borderRadius: '8px', justifyContent: 'flex-start' }}>
              <FaPhone style={{ fontSize: 20, color: 'var(--text-heading)' }} />
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Phone</div>
                <div style={{ color: 'var(--text-main)' }}>+1 (716) 939-6833</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--badge-bg)', borderRadius: '8px', justifyContent: 'flex-start' }}>
              <FaMapMarkerAlt style={{ fontSize: 20, color: '#10b981' }} />
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Location</div>
                <div style={{ color: 'var(--text-main)' }}>Jersey City, New Jersey</div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{width: '100%', border: 'none', borderTop: '1px solid #ece7fa', margin: '0.5rem 0 0.5rem 0'}} />
        <div style={{ width: '100%' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--text-heading)', textAlign: 'left' }}>Connect with me</h4>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
            <a href="https://www.linkedin.com/in/henish-viradiya" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem', background: '#0077b5', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>
              <FaLinkedin style={{ fontSize: 20 }} />
            </a>
            <a href="https://github.com/HenishV5" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem', background: '#333', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>
              <FaGithub style={{ fontSize: 20 }} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 