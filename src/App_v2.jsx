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
      backgroundColor: '#030712',
      color: '#f9fafb',
      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      padding: '60px 20px',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        @keyframes floatBg {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .glass-card {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.4);
          box-shadow: 0 20px 40px -15px rgba(56, 189, 248, 0.15);
        }

        .gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background ambient orbs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        animation: 'floatBg 10s infinite ease-in-out',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        animation: 'floatBg 12s infinite ease-in-out reverse',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header - Fixed Alignment and Sub-heading */}
        <header style={{ marginBottom: '50px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '30px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            margin: '0 0 15px 0', 
            lineHeight: '1.15',
            display: 'inline-block'
          }}>
            <span className="gradient-text">Analytics & Prototype Lab</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.6', margin: 0 }}>
            A collection of (direct) building experiments in data science, dashboarding, and generative app prototypes which use external APIs such as Maps and LLMs like Gemini.
          </p>
        </header>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                backgroundColor: filter === cat ? '#0284c7' : 'rgba(30, 41, 59, 0.6)',
                color: filter === cat ? '#fff' : '#cbd5e1',
                border: filter === cat ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '10px 20px',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
                boxShadow: filter === cat ? '0 0 20px rgba(2, 132, 199, 0.4)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="glass-card animate-fade"
              style={{
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                animationDelay: `${index * 0.08}s`
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.08em', 
                    color: '#38bdf8', 
                    fontWeight: '700',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '20px'
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', margin: '0 0 12px 0', color: '#f8fafc', letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 24px 0' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {project.stack.map((tech, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.75rem', 
                      backgroundColor: 'rgba(15, 23, 42, 0.6)', 
                      color: '#94a3b8', 
                      padding: '5px 10px', 
                      borderRadius: '6px', 
                      border: '1px solid rgba(255, 255, 255, 0.05)',
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
                    background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                    color: '#fff',
                    padding: '12px 0',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box',
                    boxShadow: '0 4px 14px rgba(2, 132, 199, 0.3)',
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