import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowLeft, ArrowRight, ArrowUpRight, ZoomIn, Layers, Calendar, MapPin, Maximize2, Quote } from 'lucide-react';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import ImageLightbox from '../components/ui/ImageLightbox';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = PROJECTS_DATA.find((p) => p.slug === slug) || PROJECTS_DATA[0];
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={!!selectedImage}
        imageSrc={selectedImage}
        caption={`${project.title} — Architectural View`}
        onClose={() => setSelectedImage(null)}
      />

      {/* CASE STUDY HERO */}
      <section style={{ position: 'relative', width: '100%', minHeight: '75vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '4rem' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(20,19,18,0.3), rgba(20,19,18,0.9)), url(${project.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container-editorial" style={{ position: 'relative', zIndex: 10, padding: '0 1.5rem', color: 'var(--text-light)' }}>
          <button
            onClick={() => navigate('/projects')}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'var(--text-light)',
              padding: '0.6rem 1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              marginBottom: '2rem',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Works</span>
          </button>

          <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--accent-brass)' }}>
            Case Study • {project.category}
          </span>
          <h1 className="text-editorial-title" style={{ color: 'var(--text-light)', marginBottom: '1.25rem' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light-muted)', maxWidth: '750px', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            {project.subtitle}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
            <div>
              <span style={{ color: 'var(--text-light-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</span>
              <span style={{ fontSize: '1rem', fontWeight: '500' }}>{project.location}</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-light-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Area</span>
              <span style={{ fontSize: '1rem', fontWeight: '500' }}>{project.area}</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-light-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Completion Year</span>
              <span style={{ fontSize: '1rem', fontWeight: '500' }}>{project.year}</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-light-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lead Architect</span>
              <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--accent-brass)' }}>{project.leadArchitect}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS GRID & DESIGN NARRATIVE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-editorial">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', marginBottom: '6rem' }}>
            {/* Design Story Narrative */}
            <div>
              <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.75rem' }}>Architectural Concept</span>
              <h2 className="text-editorial-subtitle" style={{ marginBottom: '2rem' }}>
                Spatial Identity & Volumetric Flow
              </h2>
              <p style={{ fontSize: '1.08rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                {project.description}
              </p>
              {project.designNarrative.map((paragraph, index) => (
                <p key={index} style={{ fontSize: '1.02rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  {paragraph}
                </p>
              ))}

              {/* Material Swatches List */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
                <span className="label-uppercase" style={{ display: 'block', marginBottom: '1.25rem' }}>Primary Material Swatches</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.materials.map((mat, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.82rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architectural Specifications Table */}
            <div>
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  padding: '2.5rem',
                }}
              >
                <span className="label-uppercase" style={{ display: 'block', marginBottom: '1.5rem' }}>Project Blueprint Specs</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {project.specs.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-light)' }}>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{spec.label}</span>
                      <span style={{ fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-primary)' }}>{spec.value}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Investment Tier</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--accent-brass)' }}>{project.budgetTier}</span>
                  </div>
                </div>

                {/* Client Quote Card */}
                {project.clientQuote && (
                  <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-brass)' }}>
                    <Quote size={24} style={{ color: 'var(--accent-brass)', marginBottom: '1rem' }} />
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                      "{project.clientQuote.quote}"
                    </p>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block' }}>{project.clientQuote.author}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{project.clientQuote.role}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* HIGH-RES EDITORIAL GALLERY */}
          <div style={{ marginBottom: '6rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
              <div>
                <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.4rem' }}>Visual Archive</span>
                <h2 className="text-editorial-subtitle">Photographic Monograph</h2>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Click any photograph to inspect high-resolution details</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="img-zoom-container"
                  onClick={() => setSelectedImage(img)}
                  style={{
                    height: i === 0 ? '480px' : '380px',
                    width: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <img src={img} alt={`${project.title} view ${i + 1}`} />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(20, 19, 18, 0.75)',
                      color: 'var(--text-light)',
                      padding: '0.5rem',
                      borderRadius: '50%',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BEFORE & AFTER COMPARISON (If available) */}
          {project.beforeAfter && (
            <div style={{ marginBottom: '6rem' }}>
              <BeforeAfterSlider
                beforeImage={project.beforeAfter.before}
                afterImage={project.beforeAfter.after}
                title={project.beforeAfter.title}
                subtitle={project.beforeAfter.description}
              />
            </div>
          )}

          {/* NEXT / PREVIOUS CASE STUDY PAGINATION BANNER */}
          <div
            style={{
              paddingTop: '4rem',
              borderTop: '1px solid var(--border-light)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
            }}
          >
            <Link
              to={`/projects/${prevProject.slug}`}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                padding: '2rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <span className="label-uppercase" style={{ fontSize: '0.68rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ArrowLeft size={14} /> Previous Case Study
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>{prevProject.title}</span>
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                padding: '2rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                alignItems: 'flex-end',
                textAlign: 'right',
              }}
            >
              <span className="label-uppercase" style={{ fontSize: '0.68rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                Next Case Study <ArrowRight size={14} />
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>{nextProject.title}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
