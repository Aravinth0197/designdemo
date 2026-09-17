import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Award, Compass, Layers, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { SERVICES_DATA } from '../data/services';
import { PRESS_DATA } from '../data/team';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import ProjectCard from '../components/ui/ProjectCard';
import QuoteEstimator from '../components/ui/QuoteEstimator';

const Home = () => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <div style={{ width: '100%' }}>
      {/* HERO SECTION */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '8rem 2.5rem 4rem 2.5rem',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          overflow: 'hidden',
        }}
      >
        {/* Hero Background Image with Editorial Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(20,19,18,0.4), rgba(20,19,18,0.85)), url('/images/hero_penthouse.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.05) brightness(0.95)',
          }}
        />

        {/* Hero Content */}
        <div className="container-editorial" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '920px' }}>
            <span
              className="label-uppercase"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'rgba(197, 160, 89, 0.15)',
                border: '1px solid var(--border-brass)',
                padding: '0.4rem 1rem',
                marginBottom: '1.75rem',
              }}
            >
              <Sparkles size={14} />
              <span>International Architecture & Spatial Atelier</span>
            </span>

            <h1
              className="text-editorial-title"
              style={{
                color: 'var(--text-light)',
                marginBottom: '1.75rem',
              }}
            >
              Crafting Sanctuary from Silence & Light
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                color: 'var(--text-light-muted)',
                marginBottom: '3rem',
                maxWidth: '680px',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              We re-architect high-end residential estates, penthouses, and hospitality sanctuaries through an uncompromising palette of natural travertine, hand-carved timber, and refined lighting choreography.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
              <Link to="/projects" className="btn-primary" style={{ backgroundColor: 'var(--accent-brass)', color: 'var(--bg-dark)', borderColor: 'var(--accent-brass)' }}>
                <span>Explore Portfolio</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-secondary" style={{ color: 'var(--text-light)', borderColor: 'rgba(255,255,255,0.2)' }}>
                <span>Schedule Private Audit</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(253, 251, 247, 0.15)',
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--accent-brass)', display: 'block', lineHeight: 1 }}>60+</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>International Projects</span>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--accent-brass)', display: 'block', lineHeight: 1 }}>14</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>AD100 & Dezeen Awards</span>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--accent-brass)', display: 'block', lineHeight: 1 }}>100%</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Bespoke Artisan Joinery</span>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--accent-brass)', display: 'block', lineHeight: 1 }}>4</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Global Studio Hubs</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL MANIFESTO SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-editorial">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            {/* Image Composition */}
            <div style={{ position: 'relative' }}>
              <div className="img-zoom-container" style={{ height: '580px', width: '100%', border: '1px solid var(--border-light)' }}>
                <img src="/images/principal_architect.png" alt="Principal Architect in Studio" />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2rem',
                  right: '-1.5rem',
                  backgroundColor: 'var(--bg-dark)',
                  color: 'var(--text-light)',
                  padding: '2rem',
                  maxWidth: '280px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <span className="label-uppercase" style={{ fontSize: '0.65rem', marginBottom: '0.5rem', display: 'block' }}>Design Ethos</span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
                  "Luxury is not complexity. True luxury is absolute silence, proportion, and weightless natural light."
                </p>
                <span style={{ display: 'block', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--accent-brass)' }}>— Elena Vance, Founder</span>
              </div>
            </div>

            {/* Manifesto Text */}
            <div>
              <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.75rem' }}>The Atelier Manifesto</span>
              <h2 className="text-editorial-subtitle" style={{ marginBottom: '2rem' }}>
                We believe a home should feel like a sanctuary carved out of eternity.
              </h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Most interior design studios decorate spaces with off-the-shelf trends. At MAISON SORA, we act as spatial sculptors. We evaluate natural sunlight, acoustic resonant frequencies, and material weight.
              </p>
              <p style={{ fontSize: '1.05rem', marginBottom: '2.5rem' }}>
                From Roman silver travertine slabs to hand-turned Kyoto hinoki wood screens, our spatial interventions are designed to endure for generations without losing their soul.
              </p>
              <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                <Link to="/about" className="btn-secondary">
                  <span>Read Full Philosophy</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-editorial">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
            <div>
              <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Selected Works</span>
              <h2 className="text-editorial-subtitle">Curated Case Studies</h2>
            </div>
            <Link to="/projects" className="btn-secondary">
              <span>View All 6 Portfolio Works</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE BEFORE & AFTER SLIDER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-editorial">
          <BeforeAfterSlider
            beforeImage="/images/before_raw.png"
            afterImage="/images/after_sanctuary.png"
            title="The Metamorphosis of Space"
            subtitle="Drag the slider left or right to witness how raw industrial concrete structures are sculpted into warm luxury sanctuaries."
          />
        </div>
      </section>

      {/* DISCIPLINES SHOWCASE */}
      <section className="section-padding dark-section">
        <div className="container-editorial">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 5rem auto' }}>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.75rem' }}>Architectural Capabilities</span>
            <h2 className="text-editorial-subtitle" style={{ color: 'var(--text-light)' }}>Four Master Disciplines</h2>
            <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
              From initial structural floorplan volumetric restructuring to custom Italian marble joinery fabrication and white-glove move-in staging.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="card-editorial" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--accent-brass)', display: 'block', marginBottom: '1rem' }}>
                    {service.number}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-light)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: '1.5rem' }}>{service.description}</p>
                </div>
                <Link to="/services" style={{ color: 'var(--accent-brass)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                  <span>View Discipline</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS CITATIONS & RECOGNITION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-editorial">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Global Acclaim</span>
            <h2 className="text-editorial-subtitle">Press & Critical Recognition</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {PRESS_DATA.map((press, i) => (
              <div key={i} className="card-editorial" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--accent-brass)', marginBottom: '1.25rem' }}>
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={14} fill="var(--accent-brass)" />
                    ))}
                  </div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: 1.5 }}>
                    "{press.quote}"
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: '600', display: 'block', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {press.outlet}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{press.issue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR & LEAD SECTION */}
      <section className="section-padding dark-section" style={{ borderTop: '1px solid var(--border-dark)' }}>
        <div className="container-editorial">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.75rem' }}>Begin Your Journey</span>
              <h2 className="text-editorial-subtitle" style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                Ready to transform your residential or commercial space?
              </h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
                Use our interactive feasibility estimator to select your space type, desired scope, and investment tier. Our principal architecture team will review your parameters and prepare a customized spatial proposal within 48 hours.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-light-muted)', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--accent-brass)' }} />
                  <span>Strict confidentiality & NDA protection for private clients</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Compass size={18} style={{ color: 'var(--accent-brass)' }} />
                  <span>Global spatial feasibility audits conducted in-person or virtually</span>
                </div>
              </div>
            </div>

            {/* Embedded Quote Estimator Wizard Component */}
            <QuoteEstimator />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
