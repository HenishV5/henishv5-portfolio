import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AVATAR_URL = 'https://api.dicebear.com/7.x/identicon/svg?seed=henish'; // Placeholder avatar
const MEDIUM_RSS = 'https://medium.com/feed/@rexos05';

function parseMediumRSS(xml) {
  const parser = new window.DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const items = Array.from(doc.querySelectorAll('item'));
  return items.slice(0, 3).map(item => ({
    title: item.querySelector('title')?.textContent,
    link: item.querySelector('link')?.textContent,
    pubDate: item.querySelector('pubDate')?.textContent,
    description: item.querySelector('description')?.textContent
  }));
}

function stripImages(html) {
  return html.replace(/<img[^>]*>/g, '');
}

// Futuristic code generation animation for avatar
const CodeGenerationAvatar = () => {
  const [progress, setProgress] = React.useState(0);
  const [codeBytes, setCodeBytes] = React.useState([]);
  
  React.useEffect(() => {
    let frame;
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min(elapsed / 4000, 1); // 4s duration
      setProgress(pct);
      if (pct < 1) frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  React.useEffect(() => {
    const avatarSize = 200; // Bigger avatar
    const byteSize = 12;
    const cols = Math.floor(avatarSize / byteSize);
    const rows = Math.floor(avatarSize / byteSize);
    const totalBytes = cols * rows;
    const bytesToShow = Math.floor(progress * totalBytes);
    
    // Generate random code bytes (hex, binary, or symbols)
    const codeChars = ['0', '1', 'A', 'B', 'C', 'D', 'E', 'F', 'x', 'f', 'e', 'd', 'c', 'b', 'a', '9', '8', '7', '6', '5', '4', '3', '2'];
    const newBytes = [];
    for (let i = 0; i < bytesToShow; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const x = col * byteSize;
      const y = row * byteSize;
      const char = codeChars[Math.floor(Math.random() * codeChars.length)];
      const color = Math.random() > 0.7 ? '#00ff41' : '#00cc33'; // Different shades of green
      newBytes.push({ x, y, char, color });
    }
    setCodeBytes(newBytes);
  }, [progress]);

  const avatarX = 50, avatarY = 20, avatarSize = 200;
  const centerX = avatarX + avatarSize / 2, centerY = avatarY + avatarSize / 2, radius = avatarSize / 2;

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <svg width={avatarX + avatarSize + 100} height={avatarY + avatarSize + 60} style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <clipPath id="avatar-clip">
            <circle cx={centerX} cy={centerY} r={radius} />
          </clipPath>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background grid for futuristic effect */}
        <g clipPath="url(#avatar-clip)">
          {Array.from({ length: 17 }, (_, i) => (
            <line
              key={`h-${i}`}
              x1={avatarX}
              y1={avatarY + i * 12}
              x2={avatarX + avatarSize}
              y2={avatarY + i * 12}
              stroke="#00ff41"
              strokeWidth="0.5"
              opacity="0.2"
            />
          ))}
          {Array.from({ length: 17 }, (_, i) => (
            <line
              key={`v-${i}`}
              x1={avatarX + i * 12}
              y1={avatarY}
              x2={avatarX + i * 12}
              y2={avatarY + avatarSize}
              stroke="#00ff41"
              strokeWidth="0.5"
              opacity="0.2"
            />
          ))}
        </g>

        {/* Code bytes generating the image */}
        <g clipPath="url(#avatar-clip)">
          {codeBytes.map((byte, index) => (
            <text
              key={index}
              x={avatarX + byte.x + 6}
              y={avatarY + byte.y + 9}
              fontSize="10"
              fontFamily="monospace"
              fill={byte.color}
              opacity="0.9"
              filter="url(#glow)"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {byte.char}
            </text>
          ))}
        </g>

        {/* Avatar image with mask */}
        <image
          href={process.env.PUBLIC_URL + '/images/avatar.PNG'}
          x={avatarX}
          y={avatarY}
          width={avatarSize}
          height={avatarSize}
          style={{ borderRadius: '50%' }}
          clipPath="url(#avatar-clip)"
          opacity={progress > 0.8 ? (progress - 0.8) * 5 : 0}
        />

        {/* Scanning line effect */}
        <line
          x1={avatarX}
          y1={avatarY + progress * avatarSize}
          x2={avatarX + avatarSize}
          y2={avatarY + progress * avatarSize}
          stroke="#00ff41"
          strokeWidth="2"
          opacity="0.8"
          filter="url(#glow)"
        />

        {/* Border with tech effect */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#00ff41"
          strokeWidth="3"
          opacity="0.6"
          filter="url(#glow)"
        />
        
        {/* Corner brackets for tech feel */}
        <path
          d={`M ${avatarX - 10} ${avatarY - 10} L ${avatarX + 20} ${avatarY - 10} M ${avatarX - 10} ${avatarY - 10} L ${avatarX - 10} ${avatarY + 20}`}
          stroke="#00ff41"
          strokeWidth="2"
          fill="none"
        />
        <path
          d={`M ${avatarX + avatarSize - 20} ${avatarY - 10} L ${avatarX + avatarSize + 10} ${avatarY - 10} M ${avatarX + avatarSize + 10} ${avatarY - 10} L ${avatarX + avatarSize + 10} ${avatarY + 20}`}
          stroke="#00ff41"
          strokeWidth="2"
          fill="none"
        />
        <path
          d={`M ${avatarX - 10} ${avatarY + avatarSize - 20} L ${avatarX + 20} ${avatarY + avatarSize - 20} M ${avatarX - 10} ${avatarY + avatarSize - 20} L ${avatarX - 10} ${avatarY + avatarSize + 10}`}
          stroke="#00ff41"
          strokeWidth="2"
          fill="none"
        />
        <path
          d={`M ${avatarX + avatarSize - 20} ${avatarY + avatarSize - 20} L ${avatarX + avatarSize + 10} ${avatarY + avatarSize - 20} M ${avatarX + avatarSize + 10} ${avatarY + avatarSize - 20} L ${avatarX + avatarSize + 10} ${avatarY + avatarSize + 10}`}
          stroke="#00ff41"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      
      {/* Code text effect */}
      <div style={{
        position: 'absolute',
        top: avatarY + avatarSize + 20,
        left: avatarX,
        right: avatarX,
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#00ff41',
        opacity: progress > 0.3 ? 1 : 0,
        transition: 'opacity 0.5s'
      }}>
        {progress > 0.3 && `Processing developer... ${Math.floor(progress * 100)}%`}
      </div>
    </div>
  );
};

// Remove RobotArmReveal and all robot arm logic. Only show the avatar image in the Home page card.

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [errorBlogs, setErrorBlogs] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      setLoadingBlogs(true);
      setErrorBlogs(false);
      try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS)}`);
        const data = await res.json();
        if (data.status === 'ok') {
          setBlogs(data.items.slice(0, 3));
        } else {
          setErrorBlogs(true);
        }
      } catch {
        setErrorBlogs(true);
      }
      setLoadingBlogs(false);
    }
    fetchBlogs();
  }, []);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{textAlign: 'center', background: 'linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%)'}}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 18,
        boxShadow: '0 2px 12px rgba(91,33,182,0.06)',
        padding: '2.5rem 2rem',
        maxWidth: 700,
        margin: '2.5rem auto 0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Avatar image with SVG mask: spiral reveal */}
        <CodeGenerationAvatar />
        {/* Robot Arm SVG (2-link, base at bottom center) */}
        {/* The spray sparkles animation is removed */}
        <h1 style={{fontSize: '2.7rem', fontWeight: 900, background: 'linear-gradient(90deg, #6366f1 30%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0}}>Henish Viradiya</h1>
        <p style={{fontSize: '1.25rem', color: '#2a3d66', margin: 0, fontWeight: 500}}>
          Software Developer | Robotics Engineer | Jersey City, New Jersey
        </p>
        <div style={{display: 'flex', gap: '1.5rem', margin: '1.5rem 0'}}>
          <a href="https://www.linkedin.com/in/henish-viradiya" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{color: '#0077b5', fontSize: 28}}><FaLinkedin /></a>
          <a href="mailto:viradiyahenish@gmail.com" title="Email" style={{color: '#ea4335', fontSize: 28}}><FaEnvelope /></a>
          <a href="tel:+17169396833" title="Phone" style={{color: '#2a3d66', fontSize: 28}}><FaPhone /></a>
          <a href="https://github.com/HenishV5" target="_blank" rel="noopener noreferrer" title="GitHub" style={{color: '#333', fontSize: 28}}><FaGithub /></a>
        </div>
        <p style={{ margin: '2rem 0', color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: 1.7 }}>
  Hey there! I'm Henish Viradiya, a Software Engineer passionate about autonomous systems, computer vision, and intelligent robotics. I build high-performance, real-time software solutions using C++, Python, JavaScript, and modern frameworks. My work spans autonomous vehicles, advanced computer vision, and scalable cloud deployments. I thrive on solving complex problems and pushing the boundaries of intelligent automation. Let’s connect if you’re interested in cutting-edge software, robotics, or machine learning!
</p>
        <motion.a href="/projects" className="motion-fade" style={{marginTop: 24, display: 'inline-block', background: 'linear-gradient(90deg, #6366f1 30%, #60a5fa 100%)', color: '#fff', padding: '0.9rem 2.2rem', borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 2px 12px #6366f133', letterSpacing: 1}} whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 300 }}>
          View My Projects
        </motion.a>
        {/* Featured Blogs Section */}
        <div style={{width: '100%', maxWidth: 600, margin: '48px auto 0 auto', textAlign: 'left', boxSizing: 'border-box'}}>
          <h2 style={{fontWeight: 800, fontSize: '1.5rem', marginBottom: 18, color: 'var(--text-heading)'}}>Featured Blogs</h2>
          {loadingBlogs && <div style={{color: 'var(--text-secondary)'}}>Loading latest blogs...</div>}
          {errorBlogs && <div style={{color: 'var(--text-secondary)'}}>Could not load blogs from Medium.</div>}
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%'}}>
            {blogs.slice(0, 2).map(blog => (
              <a key={blog.link} href={blog.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', width: '100%'}}>
                <div style={{background: 'var(--badge-bg)', borderRadius: 14, boxShadow: '0 2px 8px var(--badge-shadow)', padding: '1.1rem 1.3rem', transition: 'box-shadow 0.2s', cursor: 'pointer', width: '100%'}}>
                  <div style={{fontWeight: 700, fontSize: '1.08rem', color: 'var(--text-heading)', marginBottom: 6}}>{blog.title}</div>
                  <div style={{fontSize: '0.93rem', color: 'var(--text-secondary)', marginBottom: 4}}>{new Date(blog.pubDate).toLocaleDateString()}</div>
                  <div style={{fontSize: '0.97rem', color: 'var(--text-main)', opacity: 0.85, marginBottom: 4}} dangerouslySetInnerHTML={{__html: stripImages(blog.description).slice(0, 120) + '...'}} />
                  <span style={{color: '#6366f1', fontWeight: 600, fontSize: '0.97rem'}}>Read more →</span>
                </div>
              </a>
            ))}
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 8}}>
              <a href="https://medium.com/@rexos05" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #6366f1 30%, #60a5fa 100%)',
                color: '#fff',
                padding: '0.6rem 1.5rem',
                borderRadius: 10,
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px #6366f133',
                letterSpacing: 0.5,
                transition: 'background 0.2s',
                marginLeft: 'auto'
              }}>View All</a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home; 