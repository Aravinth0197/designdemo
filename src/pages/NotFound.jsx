import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-light)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '8rem', color: 'var(--accent-brass)', display: 'block', lineHeight: 1 }}>
          404
        </span>
        <h1 className="text-editorial-subtitle" style={{ color: 'var(--text-light)', marginBottom: '1.25rem' }}>
          Sanctuary Not Found
        </h1>
        <p style={{ color: 'var(--text-light-muted)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
          The architectural route or spatial archive you are attempting to inspect does not exist or has been relocated to our private client vault.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn-primary" style={{ backgroundColor: 'var(--accent-brass)', color: 'var(--bg-dark)', borderColor: 'var(--accent-brass)' }}>
            <Home size={16} />
            <span>Return Home</span>
          </Link>
          <Link to="/projects" className="btn-secondary" style={{ color: 'var(--text-light)', borderColor: 'rgba(255,255,255,0.2)' }}>
            <ArrowLeft size={16} />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
