import React from 'react';
import { X, ZoomIn } from 'lucide-react';

const ImageLightbox = ({ isOpen, imageSrc, caption, onClose }) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(18, 17, 16, 0.95)',
        backdropFilter: 'blur(15px)',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        animation: 'fadeIn 0.3s ease forwards',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'none',
          border: '1px solid var(--border-dark)',
          color: 'var(--text-light)',
          padding: '0.75rem',
          cursor: 'pointer',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
        }}
      >
        <X size={24} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1200px',
          maxHeight: '82vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={imageSrc}
          alt={caption || 'Architectural View'}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            border: '1px solid var(--border-dark)',
          }}
        />
        {caption && (
          <p
            style={{
              marginTop: '1.5rem',
              color: 'var(--text-light-muted)',
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              textAlign: 'center',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
            }}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
