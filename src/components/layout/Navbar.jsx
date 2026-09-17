import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Portfolio', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About Studio', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: isScrolled ? '1rem 2rem' : '1.75rem 2.5rem',
          backgroundColor: isScrolled ? 'rgba(253, 251, 247, 0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(20, 19, 18, 0.08)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'var(--text-primary)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                letterSpacing: '0.12em',
                fontWeight: '500',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              Maison Sora
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--accent-brass)',
                fontWeight: '600',
                marginTop: '0.2rem',
              }}
            >
              Architectural Interiors
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '3rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontWeight: isActive ? '600' : '400',
                    color: isActive ? 'var(--accent-brass)' : 'var(--text-primary)',
                    transition: 'color 0.25s ease',
                    position: 'relative',
                    paddingBottom: '0.25rem',
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'var(--accent-brass)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1rem',
            }}
            className="desktop-nav"
          >
            <Link to="/contact" className="btn-primary" style={{ padding: '0.75rem 1.6rem', fontSize: '0.78rem' }}>
              <span>Book Consultation</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '0.5rem',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Embedded CSS for Responsive Desktop Nav Display */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>

      {/* Mobile Drawer Overlay */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navLinks={navLinks} />
    </>
  );
};

export default Navbar;
