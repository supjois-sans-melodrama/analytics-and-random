import React, { useState } from 'react';

const projects = [
  {
    title: "Commodity Prices Forecast",
    description: "Interactive data application for forecasting and analyzing commodity market trends.",
    category: "Data & Analytics",
    stack: ["Python", "Streamlit"],
    url: "https://commodity-prices-forecast.streamlit.app/"
  },
  {
    title: "Song Reco Pilot",
    description: "Interactive recommendation pilot app built with Streamlit.",
    category: "Data & Analytics",
    stack: ["Python", "Streamlit"],
    url: "https://songreco-pilot.streamlit.app/"
  },
  {
    title: "Board Game Analytics",
    description: "Interactive data app tracking board game metrics and player stats.",
    category: "Data & Analytics",
    stack: ["Python", "Render"],
    url: "https://toomanyboardgames.onrender.com"
  },
  {
    title: "Creator Basics - A Dashboard",
    description: "A very cursory analysis of songs created on Flow Music.",
    category: "Data & Analytics",
    stack: ["React", "Vibefactory", "AI"],
    url: "https://p7f515941-ub4eae18f.vibefactory.ai"
  },
  {
    title: "Transit Router",
    description: "A raw version of a dynamic routing and transit navigation web utility.",
    category: "Prototype",
    stack: ["JavaScript", "Netlify"],
    url: "https://transit-router.netlify.app/"
  },
  {
    title: "Ideas Bucket",
    description: "Digital workspace and collection hub for tracking creative prototypes and ideas.",
    category: "Prototype",
    stack: ["React", "Vercel"],
    url: "https://ideas-bucket.vercel.app/"
  }
];

export default function App() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Data & Analytics", "Prototype"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#09090b',
      color: '#f4f4f5',
      fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif",
      padding: 'clamp(20px, 4vw, 40px) clamp(16px, 4vw, 32px)',
      position: 'relative',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        @keyframes floatOrb1 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes floatOrb2 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-50px, 40px) scale(1.15); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .orb-1 {
          position: absolute;
          top: -5%;
          left: 10%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.22) 0%, rgba(147, 51, 234, 0) 70%);
          border-radius: 50%;
          filter: blur(50px);
          animation: floatOrb1 12s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .orb-2 {
          position: absolute;
          bottom: -5%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0) 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: floatOrb2 15s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .glass-card {
          background: rgba(24, 24, 27, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
        }

        .gradient-heading {
          background: linear-gradient(135deg, #ffffff 30%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
      `}</style>

      {/* Floating Animated Orbs */}
      <div className="orb-1"></div>
      <div className="orb-2"></div>

      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header - Flex alignment for full responsiveness */}
        <header style={{ 
          marginBottom: '24px', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          paddingBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 10px #38bdf8' }}></span>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a1a1aa', fontWeight: '600' }}>
              Portfolio Lab
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <h1 style={{ 
              fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)', 
              fontWeight: '700', 
              letterSpacing: '-0.03em',
              margin: 0, 
              lineHeight: '1.2',
              flex: '1 1 300px'
            }}>
              <span className="gradient-heading">Experiments - Analytics, App Prototypes</span>
            </h1>

            <p style={{ 
              color: '#a1a1aa', 
              fontSize: '0.85rem', 
              lineHeight: '1.4', 
              margin: 0,
              flex: '1 1 280px',
              maxWidth: '380px'
            }}>
              Active dashboard applications, data science experiments, and API-driven generative AI prototypes.
            </p>
          </div>
        </header>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                backgroundColor: filter === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                color: filter === cat ? '#09090b' : '#a1a1aa',
                border: filter === cat ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.8rem',
                transition: 'all 0.2s ease',
                boxShadow: filter === cat ? '0 0 12px rgba(255, 255, 255, 0.15)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ 
                    fontSize: '0.65rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    color: '#38bdf8', 
                    fontWeight: '600',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}>
                    {project.category}
                  </span>
                  
                  {/* Tech Stack */}
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {project.stack.map((tech, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.6rem', 
                        color: '#a1a1aa', 
                        backgroundColor: 'rgba(255, 255, 255, 0.04)', 
                        padding: '2px 6px', 
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 6px 0', color: '#f4f4f5', letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.825rem', lineHeight: '1.4', margin: '0 0 16px 0' }}>
                  {project.description}
                </p>
              </div>

              <div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#38bdf8',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.8rem',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#7dd3fc'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#38bdf8'}
                >
                  <span>Launch App</span>
                  <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}