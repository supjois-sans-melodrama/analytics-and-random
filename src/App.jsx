import React, { useState } from 'react';

const projects = [
  {
    title: "Commodity Prices Forecast",
    description: "A dashboard which forecasts and analyzes prices for things like wheat, corn, coffee and gold .",
    category: "Data & Analytics",
    stack: ["Python", "Streamlit"],
    url: "https://commodity-prices-forecast.streamlit.app/"
  },
  {
    title: "Song Reco Pilot",
    description: "An experimental prompt recommendation app which connects to an LLM to generate creative song ideas or a basic RAG implementation if the LLM API call fails .",
    category: "Data & Analytics",
    stack: ["Python", "Streamlit"],
    url: "https://songreco-pilot.streamlit.app/"
  },
  {
    title: "Board Game Analytics",
    description: "An analysis of 680 board games using PCA, K-means clustering and ridge regression.",
    category: "Data & Analytics",
    stack: ["Python", "Render"],
    url: "https://toomanyboardgames.onrender.com"
  },
  {
    title: "Creator Basics - A Dashboard",
    description: "A vanilla analysis of 100+ songs created on Flow Music.",
    category: "Data & Analytics",
    stack: ["React", "VibeFactory.ai"],
    url: "https://p7f515941-ub4eae18f.vibefactory.ai"
  },
  {
    title: "Transit Router",
    description: "A raw version of a dynamic routing and transit navigation web utility with some built-in routes.",
    category: "Prototype",
    stack: ["React", "TypeScript" ,"Google Maps Platform","Netlify"],
    url: "https://transit-router.netlify.app/"
  },
  {
    title: "Ideas Bucket",
    description: "Digital workspace and collection hub for tracking creative prototypes and ideas.",
    category: "Prototype",
    stack: ["React", "Gemini", "Vercel"],
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
      backgroundColor: '#0a0e17',
      color: '#f4f4f5',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      padding: 'clamp(20px, 4vw, 40px) clamp(16px, 4vw, 32px)',
      position: 'relative',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

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
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(14, 165, 233, 0) 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: floatOrb1 12s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .orb-2 {
          position: absolute;
          bottom: -5%;
          right: 10%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.14) 0%, rgba(20, 184, 166, 0) 70%);
          border-radius: 50%;
          filter: blur(70px);
          animation: floatOrb2 15s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .glass-card {
          background: rgba(18, 24, 38, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          transform: translateY(-3px);
          background: rgba(24, 32, 50, 0.9);
          border-color: rgba(45, 212, 191, 0.35);
          box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08), 0 15px 30px -10px rgba(0, 0, 0, 0.6);
        }

        .gradient-heading {
          background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        /* Luminous turquoise/blue polished button pill */
        .bright-turquoise-pill {
          background: linear-gradient(135deg, rgba(45, 212, 191, 0.38) 0%, rgba(14, 165, 233, 0.58) 100%);
          border: 1px solid rgba(153, 246, 228, 0.45);
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.4), 0 3px 12px rgba(14, 165, 233, 0.3);
          color: #ffffff;
          transition: all 0.2s ease;
        }

        .bright-turquoise-pill:hover {
          background: linear-gradient(135deg, rgba(94, 234, 212, 0.48) 0%, rgba(56, 189, 248, 0.68) 100%);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.7), 0 5px 18px rgba(45, 212, 191, 0.4);
          transform: translateY(-1px);
        }
      `}</style>

      {/* Floating Animated Orbs */}
      <div className="orb-1"></div>
      <div className="orb-2"></div>

      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1, flex: 1 }}>
        
        {/* Header */}
        <header style={{ 
          marginBottom: '24px', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          paddingBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 10px #2dd4bf' }}></span>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', fontWeight: '600' }}>
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
              <span className="gradient-heading">Analytics and Prototype Experiments</span>
            </h1>

            <p style={{ 
              color: '#94a3b8', 
              fontSize: '0.85rem', 
              lineHeight: '1.4', 
              margin: 0,
              flex: '1 1 280px',
              maxWidth: '380px'
            }}>
              A collection of building experiments covering aspects of data science, dashboarding, and generative app prototypes which use external APIs such as Google Maps and LLMs like Gemini.
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
                color: filter === cat ? '#0a0e17' : '#94a3b8',
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
                  {/* Category Tag */}
                  <span style={{ 
                    fontSize: '0.65rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    color: '#2dd4bf', 
                    fontWeight: '600',
                    background: 'rgba(45, 212, 191, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(45, 212, 191, 0.25)'
                  }}>
                    {project.category}
                  </span>
                  
                  {/* Tech Stack */}
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {project.stack.map((tech, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.6rem', 
                        color: '#cbd5e1', 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                        padding: '2px 6px', 
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0 0 6px 0', color: '#f4f4f5', letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.825rem', lineHeight: '1.4', margin: '0 0 16px 0' }}>
                  {project.description}
                </p>
              </div>

              {/* Compact Turquoise/Blue Pill Link */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bright-turquoise-pill"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.775rem',
                    letterSpacing: '0.02em'
                  }}
                >
                  <span>Launch App</span>
                  <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer / Copyright */}
      <footer style={{ 
        maxWidth: '1000px', 
        width: '100%', 
        margin: '40px auto 0 auto', 
        borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
        paddingTop: '20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '12px',
        position: 'relative',
        zIndex: 1,
        fontSize: '0.8rem',
        color: '#64748b'
      }}>
        <div>
          © {new Date().getFullYear()} Supriya Jois. All rights reserved.
        </div>
        <div style={{ color: '#94a3b8', fontWeight: '500' }}>
          Designed & built by Supriya Jois
        </div>
      </footer>

    </div>
  );
}