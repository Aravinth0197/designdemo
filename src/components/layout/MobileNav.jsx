import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Compass, Mail } from 'lucide-react';

const MobileNav = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-light)',
        zIndex: 99,
        padding: '6rem 2rem 3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        animation: 'fadeIn 0.3s ease forwards',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <span className="label-uppercase" style={{ opacity: 0.7 }}>
          Navigation
        </span>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              style={{
                textDecoration: 'none',
                color: 'var(--text-light)',
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                lineHeight: 1.1,
                fontWeight: '400',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Link
          to="/contact"
          onClick={onClose}
          className="btn-primary"
          style={{
            backgroundColor: 'var(--accent-brass)',
            color: 'var(--bg-dark)',
            borderColor: 'var(--accent-brass)',
            justifyContent: 'space-between',
            padding: '1.1rem 1.75rem',
          }}
        >
          <span>Schedule Consultation</span>
          <ArrowUpRight size={18} />
        </Link>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-dark)',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>
            Paris • New York • Tokyo • London
          </span>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--accent-brass)' }}>
            <Globe size={18} />
            <Compass size={18} />
            <Mail size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
