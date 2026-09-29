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
  },
  {
    title: "Weather Intelligence Harness",
    description: "An experimental agent harness using GPT-5.5 and ReAct tool orchestration to route weather and travel queries across live APIs and a vector RAG.",
    category: "Prototype",
    stack: ["ReAct Harness", "GPT-5.5", "Vector RAG", "Python", "Streamlit"],
    url: "https://globalweather-harness.streamlit.app/"
  },
  {
    title: "Creative Helper Chat Bot",
    description: "An AI-powered DIY assistant that helps you plan projects, choose materials, and solve home improvement and crafting challenges.",
    category: "Prototype",
    stack: ["React + TypeScript", "Express.js", "OpenAI GPT‑4o", "PostgreSQL + Drizzle ORM"],
    url: "https://globalweather-harness.streamlit.app/"
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

        .ambient-glow-left {
          position: fixed;
          top: 10%;
          left: -100px;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .ambient-glow-right {
          position: fixed;
          bottom: 10%;
          right: -100px;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .portfolio-frame {
          max-width: 1020px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          flex: 1;
          padding: 0 12px;
          box-sizing: border-box;
          border-left: 2px solid transparent;
          border-right: 2px solid transparent;
          border-image: linear-gradient(to bottom, rgba(14, 165, 233, 0.4), rgba(45, 212, 191, 0.15), rgba(14, 165, 233, 0.4)) 1;
        }

        .glass-card {
          background: rgba(18, 24, 38, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          will-change: transform;
        }

        .glass-card:hover {
          transform: translateY(-3px);
          background: rgba(24, 32, 50, 0.98);
          border-color: rgba(45, 212, 191, 0.4);
          box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 12px 25px -8px rgba(0, 0, 0, 0.5);
        }

        .gradient-heading {
          background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-name {
          background: linear-gradient(135deg, #2dd4bf 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .bright-turquoise-pill {
          background: linear-gradient(135deg, rgba(45, 212, 191, 0.38) 0%, rgba(14, 165, 233, 0.58) 100%);
          border: 1px solid rgba(153, 246, 228, 0.45);
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.4), 0 3px 12px rgba(14, 165, 233, 0.3);
          color: #ffffff;
          transition: transform 0.15s ease, filter 0.15s ease;
        }

        .bright-turquoise-pill:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }
      `}</style>

      <div className="ambient-glow-left"></div>
      <div className="ambient-glow-right"></div>

      <div className="portfolio-frame">
        
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
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h1 style={{ 
                fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)', 
                fontWeight: '700', 
                letterSpacing: '-0.03em',
                margin: 0, 
                lineHeight: '1.2'
              }}>
                <span className="gradient-heading">Analytics & Prototyping Playground</span>
              </h1>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Designed & built by <span className="gradient-name">Supriya Jois</span>
              </div>
            </div>

            <p style={{ 
              color: '#94a3b8', 
              fontSize: '0.85rem', 
              lineHeight: '1.4', 
              margin: 0,
              flex: '1 1 280px',
              maxWidth: '380px'
            }}>
              A collection of building experiments covering aspects of data science, dashboarding, and generative app prototypes which use external APIs such as Google Maps, GPT and Gemini.
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

      {/* Footer */}
      <footer style={{ 
        maxWidth: '1020px', 
        width: '100%', 
        margin: '40px auto 0 auto', 
        borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
        paddingTop: '20px', 
        paddingLeft: '12px',
        paddingRight: '12px',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '12px',
        position: 'relative',
        zIndex: 1,
        fontSize: '0.8rem',
        color: '#64748b',
        boxSizing: 'border-box'
      }}>
        <div>
          © {new Date().getFullYear()} Supriya Jois. All rights reserved.
        </div>
        <div style={{ color: '#94a3b8' }}>
          Analytics & Prototypes Lab
        </div>
      </footer>

    </div>
  );
}