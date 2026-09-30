'use client';
import React, { useState, useEffect, useRef } from 'react';

const SAMPLE_PROMPTS = [
  "Which repositories use Python and Streamlit?",
  "Tell me about your forecasting or analytics projects",
  "Show me applications built with React or TypeScript"
];

export default function PortfolioAssistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState({ total_repos_indexed: 0, repos_injected_to_context: 0, tokens_saved: 0 });
  const chatEndRef = useRef(null);

  // Update this to your deployed Render/Railway backend URL
  const BACKEND_URL = "https://your-backend-service.onrender.com/api/ask-codebase";

  const toggleListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }
    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      setInput(speechText);
      handleSendMessage(speechText);
    };

    recognition.start();
  };

  const handleSendMessage = async (queryText) => {
    const query = queryText || input;
    if (!query.trim() || loading) return;

    const userMessage = { role: 'user', content: query };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query })
      });
      
      if (!res.ok) throw new Error("Backend connection error.");
      
      const data = await res.json();
      setMetrics(data.metrics);
      setMessages([...updatedMessages, { role: 'assistant', content: data.response }]);
    } catch (err) {
      setMessages([...updatedMessages, { 
        role: 'assistant', 
        content: `⚠️ Could not reach live backend server. Ensure your FastAPI service is running.\n\nQuery received: "${query}"` 
      }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0e17',
      color: '#f4f4f5',
      fontFamily: "'Inter', sans-serif",
      padding: 'clamp(20px, 4vw, 40px) clamp(16px, 4vw, 32px)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }}>
      <header style={{ 
        maxWidth: '1020px', 
        width: '100%', 
        margin: '0 auto 24px auto', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 10px #2dd4bf' }}></span>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', fontWeight: '600' }}>
              Interactive Sub-App
            </span>
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>
            Ask My Codebase <span style={{ color: '#2dd4bf' }}>(Gemini RAG + Voice)</span>
          </h1>
        </div>

        <a 
          href="/" 
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#cbd5e1',
            padding: '8px 16px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}
        >
          ← Back to Portfolio Grid
        </a>
      </header>

      <div style={{ maxWidth: '1020px', width: '100%', margin: '0 auto', display: 'flex', gap: '20px', flex: 1, flexWrap: 'wrap' }}>
        
        <div style={{ 
          flex: '1 1 520px', 
          display: 'flex', 
          flexDirection: 'column', 
          background: 'rgba(18, 24, 38, 0.92)', 
          border: '1px solid rgba(255, 255, 255, 0.08)', 
          borderRadius: '16px', 
          overflow: 'hidden',
          minHeight: '480px'
        }}>
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '55vh' }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', margin: 'auto', padding: '20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>✨🤖</div>
                <h3 style={{ color: '#f4f4f5', fontSize: '1rem', fontWeight: '600', margin: '0 0 6px 0' }}>Ask me anything about my codebase</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '20px' }}>
                  Choose a prompt or type/speak your question below:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px', margin: '0 auto' }}>
                  {SAMPLE_PROMPTS.map((sp, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => handleSendMessage(sp)} 
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.04)', 
                        border: '1px solid rgba(255, 255, 255, 0.08)', 
                        color: '#cbd5e1', 
                        padding: '10px 14px', 
                        borderRadius: '8px', 
                        cursor: 'pointer', 
                        textAlign: 'left', 
                        fontSize: '0.8rem'
                      }}
                    >
                      💡 {sp}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <div 
                key={i} 
                style={{ 
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', 
                  maxWidth: '85%', 
                  background: msg.role === 'user' ? 'linear-gradient(135deg, #0ea5e9 0%, #2dd4bf 100%)' : 'rgba(255, 255, 255, 0.05)', 
                  color: msg.role === 'user' ? '#0a0e17' : '#f4f4f5',
                  fontWeight: msg.role === 'user' ? '500' : '400',
                  padding: '12px 16px', 
                  borderRadius: '12px', 
                  fontSize: '0.85rem', 
                  lineHeight: '1.4', 
                  whiteSpace: 'pre-line',
                  border: msg.role === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '12px', fontSize: '0.85rem', color: '#94a3b8' }}>
                Querying GitHub GraphQL, vector ranking, & synthesizing via Gemini...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div style={{ padding: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '10px', background: 'rgba(10, 14, 23, 0.6)' }}>
            <button 
              onClick={toggleListening}
              title="Click to speak"
              style={{
                background: isListening ? '#ef4444' : 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                padding: '10px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              {isListening ? '⏹️' : '🎤'}
            </button>

            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={isListening ? "Listening..." : "Ask about stack, architecture, or repository files..."}
              style={{ 
                flex: 1, 
                background: '#0a0e17', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '8px', 
                padding: '10px 14px', 
                color: '#fff', 
                fontSize: '0.85rem', 
                outline: 'none' 
              }}
            />

            <button 
              onClick={() => handleSendMessage()} 
              disabled={loading}
              style={{ 
                background: '#2dd4bf', 
                color: '#0a0e17', 
                border: 'none', 
                padding: '10px 18px', 
                borderRadius: '8px', 
                fontWeight: '600', 
                fontSize: '0.85rem',
                cursor: 'pointer',
                opacity: loading ? 0.7 : 1
              }}
            >
              Send
            </button>
          </div>
        </div>

        <div style={{ 
          width: '280px', 
          background: 'rgba(18, 24, 38, 0.92)', 
          border: '1px solid rgba(255, 255, 255, 0.08)', 
          borderRadius: '16px', 
          padding: '20px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '14px',
          height: 'fit-content',
          flex: '1 1 240px'
        }}>
          <h2 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#94a3b8', margin: 0, fontWeight: '600' }}>
            Context Engine Metrics
          </h2>
          
          <div style={{ background: '#0a0e17', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>Indexed GitHub Repos</span>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f4f4f5' }}>{metrics.total_repos_indexed}</span>
          </div>

          <div style={{ background: '#0a0e17', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>Injected to LLM Context</span>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#2dd4bf' }}>{metrics.repos_injected_to_context} repos</span>
          </div>

          <div style={{ background: '#0a0e17', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>Estimated Tokens Saved</span>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#38bdf8' }}>~{metrics.tokens_saved}</span>
          </div>

          <p style={{ fontSize: '0.725rem', color: '#94a3b8', lineHeight: '1.4', margin: 0 }}>
            <strong>Gemini RAG Pipeline:</strong> Queries fetch live repository structures via GraphQL, filter relevant text using local vector embeddings, and synthesize the final answer using the Gemini API.
          </p>
        </div>

      </div>
    </div>
  );
}
