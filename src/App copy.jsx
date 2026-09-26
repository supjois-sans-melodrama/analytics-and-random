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
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'system-ui, sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '40px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 10px 0', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Analytics & Prototype Lab
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', margin: 0 }}>
            A dedicated showcase of data models, Streamlit dashboards, and experimental apps.
          </p>
        </header>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                backgroundColor: filter === cat ? '#0284c7' : '#1e293b',
                color: '#fff',
                border: '1px solid #334155',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'background 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', fontWeight: 'bold' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', margin: '8px 0 12px 0', color: '#f1f5f9' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.stack.map((tech, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', backgroundColor: '#0f172a', color: '#cbd5e1', padding: '4px 8px', borderRadius: '4px', border: '1px solid #334155' }}>
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
                    display: 'inline-block',
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: '#0284c7',
                    color: '#fff',
                    padding: '10px 0',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    boxSizing: 'border-box'
                  }}
                >
                  Launch App →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}