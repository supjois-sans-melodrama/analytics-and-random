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
    description: "Analysis of songs created on Flow Music.",
    category: "Data & Analytics",
    stack: ["React", "Vibefactory", "AI"],
    url: "https://p7f515941-ub4eae18f.vibefactory.ai"
  },
  {
    title: "Transit Router",
    description: "Dynamic routing and transit navigation web utility.",
    category: "Prototypes",
    stack: ["JavaScript", "Netlify"],
    url: "https://transit-router.netlify.app/"
  },
  {
    title: "Ideas Bucket",
    description: "Digital workspace and collection hub for tracking creative prototypes and ideas.",
    category: "Prototypes",
    stack: ["React", "Vercel"],
    url: "https://ideas-bucket.vercel.app/"
  }
];

export default function App() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Data & Analytics", "Prototypes"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#021510',
      color: '#f0fdf4',
      fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif",
      padding: 'clamp(24px, 5vw, 60px) clamp(16px, 4vw, 32px)',
      position: 'relative',
      overflowX: 'hidden',
      boxSizing: 'border-box'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes floatBg {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .glass-card {
          background: rgba(6, 78, 59, 0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(52, 211, 153, 0.12);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          transform: translateY(-4px);
          border-color: rgba(52, 211, 153, 0.4);
          box-shadow: 0 20px 40px -15px rgba(52, 211, 153, 0.15);
        }

        .gradient-text {
          background: linear-gradient(135deg, #34d399 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Responsive Grid Adjustments */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
          }
        }
      `}</style>

      {/* Background ambient orbs */}
      <div style={{
        position: 'absolute',
        top: '-5%',
        left: '10%',
        width: 'min(500px, 80vw)',
        height: 'min(500px, 80vw)',
        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        animation: 'floatBg 10s infinite ease-in-out',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        width: 'min(400px, 70vw)',
        height: 'min(400px, 70vw)',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        animation: 'floatBg 12s infinite ease-in-out reverse',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <header style={{ marginBottom: '40px', borderBottom: '1px solid rgba(52, 211, 153, 0.12)', paddingBottom: '24px', textAlign: 'left' }}>
          <h1 style={{ 
            fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)', 
            fontWeight: '700', 
            letterSpacing: '-0.03em',
            margin: '0 0 12px 0', 
            lineHeight: '1.2'
          }}>
            <span className="gradient-text">Analytics & Prototype Lab</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', maxWidth: '750px', lineHeight: '1.6', margin: 0 }}>
            A collection of (direct) building experiments in data science, dashboarding, and generative app prototypes which use external APIs such as Maps and LLMs like Gemini.
          </p>
        </header>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                backgroundColor: filter === cat ? '#059669' : 'rgba(6, 78, 59, 0.4)',
                color: filter === cat ? '#fff' : '#cbd5e1',
                border: filter === cat ? '1px solid #34d399' : '1px solid rgba(52, 211, 153, 0.15)',
                padding: '8px 18px',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
                boxShadow: filter === cat ? '0 0 15px rgba(5, 150, 105, 0.4)' : 'none'
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
              className="glass-card animate-fade"
              style={{
                borderRadius: '16px',
                padding: 'clamp(20px, 3vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                animationDelay: `${index * 0.06}s`,
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.08em', 
                    color: '#34d399', 
                    fontWeight: '700',
                    background: 'rgba(52, 211, 153, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '20px'
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 10px 0', color: '#f8fafc', letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.stack.map((tech, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.7rem', 
                      backgroundColor: 'rgba(2, 21, 16, 0.6)', 
                      color: '#94a3b8', 
                      padding: '4px 8px', 
                      borderRadius: '6px', 
                      border: '1px solid rgba(52, 211, 153, 0.1)',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Launch Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                    color: '#fff',
                    padding: '11px 0',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                    boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                >
                  Launch App &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}