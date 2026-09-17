import React, { useState, useRef, useCallback } from 'react';
import { GripVertical } from 'lucide-react';

const BeforeAfterSlider = ({
  beforeImage = '/images/before_raw.png',
  afterImage = '/images/after_sanctuary.png',
  title = 'Structural Transformation',
  subtitle = 'Drag slider to reveal structural metamorphosis'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div style={{ width: '100%' }}>
      {title && (
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.4rem' }}>Architectural Comparison</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem' }}>{title}</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{subtitle}</p>
        </div>
      )}

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          height: '520px',
          overflow: 'hidden',
          cursor: 'ew-resize',
          userSelect: 'none',
          borderRadius: '2px',
          border: '1px solid var(--border-light)',
        }}
      >
        {/* AFTER IMAGE (Background Full View) */}
        <img
          src={afterImage}
          alt="Transformed Luxury Space"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            backgroundColor: 'rgba(20, 19, 18, 0.75)',
            backdropFilter: 'blur(8px)',
            color: 'var(--text-light)',
            padding: '0.4rem 0.9rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            zIndex: 10,
          }}
        >
          TRANSFORMED SANCTUARY
        </div>

        {/* BEFORE IMAGE (Clipped Foreground) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: `${sliderPosition}%`,
            overflow: 'hidden',
          }}
        >
          <img
            src={beforeImage}
            alt="Raw Structural Concrete Core"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '1000px',
              height: '100%',
              objectFit: 'cover',
              maxWidth: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.25rem',
              backgroundColor: 'rgba(20, 19, 18, 0.75)',
              backdropFilter: 'blur(8px)',
              color: 'var(--text-light)',
              padding: '0.4rem 0.9rem',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              zIndex: 10,
            }}
          >
            RAW STRUCTURAL CORE
          </div>
        </div>

        {/* SLIDER LINE & HANDLE */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            width: '2px',
            backgroundColor: 'var(--accent-brass)',
            transform: 'translateX(-50%)',
            zIndex: 20,
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '42px',
              height: '42px',
              backgroundColor: 'var(--bg-dark)',
              border: '2px solid var(--accent-brass)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-brass)',
              cursor: 'ew-resize',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
            }}
          >
            <GripVertical size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
