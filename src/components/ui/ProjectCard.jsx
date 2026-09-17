import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <Link
        to={`/projects/${project.slug}`}
        style={{
          textDecoration: 'none',
          color: 'var(--text-primary)',
          display: 'grid',
          gridTemplateColumns: '80px 1fr 150px 120px 40px',
          alignItems: 'center',
          gap: '2rem',
          padding: '1.5rem 0',
          borderBottom: '1px solid var(--border-light)',
          transition: 'all 0.3s ease',
        }}
        className="project-list-row"
      >
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          {project.year}
        </span>
        <div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '400', marginBottom: '0.2rem' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{project.subtitle}</p>
        </div>
        <span style={{ fontSize: '0.82rem', color: 'var(--accent-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {project.category}
        </span>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.location}</span>
        <ArrowUpRight size={20} style={{ color: 'var(--accent-brass)' }} />
      </Link>
    );
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      style={{
        textDecoration: 'none',
        color: 'var(--text-primary)',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="project-grid-card"
    >
      {/* Image Container */}
      <div
        className="img-zoom-container"
        style={{
          height: '420px',
          width: '100%',
          backgroundColor: 'var(--bg-secondary)',
          position: 'relative',
          marginBottom: '1.25rem',
        }}
      >
        <img src={project.coverImage} alt={project.title} loading="lazy" />
        <div
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            backgroundColor: 'rgba(20, 19, 18, 0.75)',
            backdropFilter: 'blur(8px)',
            color: 'var(--text-light)',
            padding: '0.35rem 0.8rem',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {project.category}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            right: '1.25rem',
            width: '42px',
            height: '42px',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'transform 0.3s ease',
          }}
          className="card-arrow"
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Details */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.55rem', fontWeight: '400', lineHeight: 1.2 }}>
          {project.title}
        </h3>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
          {project.year}
        </span>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', lineHeight: 1.5 }}>
        {project.subtitle}
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.78rem', color: 'var(--accent-brass)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <span>{project.location}</span>
        <span>•</span>
        <span>{project.area}</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
