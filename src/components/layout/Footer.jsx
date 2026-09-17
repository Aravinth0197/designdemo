import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="dark-section" style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '6rem', paddingBottom: '3rem' }}>
      <div className="container-editorial" style={{ padding: '0 1.5rem' }}>
        {/* Upper Editorial Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            paddingBottom: '5rem',
            borderBottom: '1px solid var(--border-dark)',
          }}
        >
          {/* Brand Manifesto & Slogan */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              MAISON SORA
            </span>
            <p style={{ maxWidth: '420px', fontSize: '0.95rem', marginBottom: '2rem' }}>
              An international high-end interior architecture and spatial design atelier crafting sanctuary from silence, natural stone, and tailored light.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <span className="label-uppercase" style={{ display: 'block', fontSize: '0.65rem' }}>Global Footprint</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>New York • Paris • Tokyo • London</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <span className="label-uppercase" style={{ display: 'block', marginBottom: '1.25rem' }}>Exploration</span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li><Link to="/projects" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Selected Works</Link></li>
                <li><Link to="/services" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Disciplines & Process</Link></li>
                <li><Link to="/about" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Studio Philosophy</Link></li>
                <li><Link to="/contact" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>Book Consultation</Link></li>
              </ul>
            </div>

            <div>
              <span className="label-uppercase" style={{ display: 'block', marginBottom: '1.25rem' }}>Disciplines</span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-light-muted)', fontSize: '0.9rem' }}>
                <li>Interior Architecture</li>
                <li>Bespoke FF&E Joinery</li>
                <li>Turnkey Styling</li>
                <li>Hospitality Identity</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '1.25rem' }}>The Atelier Journal</span>
            <p style={{ fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              Subscribe for private architectural briefings, newly completed case studies, and material monographs.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-brass)', padding: '0.75rem 0' }}>
                <CheckCircle2 size={18} />
                <span style={{ fontSize: '0.85rem' }}>Welcome to the private journal list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Enter private email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-dark)',
                    color: 'var(--text-light)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    flex: 1,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '0.85rem 1.25rem',
                    backgroundColor: 'var(--accent-brass)',
                    color: 'var(--bg-dark)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowUpRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Lower Legal & Copyright Footer */}
        <div
          style={{
            paddingTop: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--text-light-muted)',
          }}
        >
          <span>© {new Date().getFullYear()} MAISON SORA ARCHITECTURAL INTERIORS. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span style={{ cursor: 'pointer' }}>PRIVACY POLICY</span>
            <span style={{ cursor: 'pointer' }}>TERMS OF ENGAGEMENT</span>
            <span style={{ cursor: 'pointer' }}>PRESS INQUIRIES</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
