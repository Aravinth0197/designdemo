import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, PROCESS_STAGES, FAQS_DATA } from '../data/services';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Layers, Sliders, Shield, Award } from 'lucide-react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh' }}>
      <div className="container-editorial" style={{ padding: '0 1.5rem' }}>
        {/* HEADER */}
        <div style={{ marginBottom: '6rem', maxWidth: '850px' }}>
          <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Disciplines & Methodology</span>
          <h1 className="text-editorial-title" style={{ marginBottom: '1.5rem' }}>Comprehensive Spatial Architecture</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
            We provide end-to-end architectural interventions for high-net-worth individuals, luxury property developers, and international hospitality groups.
          </p>
        </div>

        {/* 4 CORE DISCIPLINES GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="card-editorial" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--accent-brass)', display: 'block', marginBottom: '1rem' }}>
                  {service.number}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', marginBottom: '0.5rem' }}>
                  {service.title}
                </h2>
                <span className="label-uppercase" style={{ fontSize: '0.7rem', display: 'block', marginBottom: '1.25rem', color: 'var(--text-muted)' }}>
                  {service.tagline}
                </span>
                <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', marginBottom: '2rem', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '1rem', color: 'var(--accent-brass)' }}>
                    Key Deliverables
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.84rem' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--accent-brass)', marginTop: '0.15rem', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>
                  <strong>Ideal for:</strong> {service.idealFor}
                </span>
                <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Inquire for {service.title}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 4-STAGE PROCESS TIMELINE */}
        <div style={{ marginBottom: '8rem', backgroundColor: 'var(--bg-secondary)', padding: '5rem 3rem', border: '1px solid var(--border-light)' }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 4rem auto' }}>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Execution Methodology</span>
            <h2 className="text-editorial-subtitle">The 4-Stage Creation Sequence</h2>
            <p style={{ fontSize: '0.95rem', marginTop: '0.75rem' }}>From initial spatial audit to white-glove turnkey installation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {PROCESS_STAGES.map((proc) => (
              <div key={proc.step} style={{ position: 'relative' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--accent-brass)', opacity: 0.8, display: 'block', lineHeight: 1, marginBottom: '0.75rem' }}>
                  {proc.step}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>{proc.title}</h3>
                <span className="label-uppercase" style={{ fontSize: '0.65rem', display: 'block', marginBottom: '1rem' }}>{proc.subtitle}</span>
                <p style={{ fontSize: '0.88rem' }}>{proc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Client Enquiries</span>
            <h2 className="text-editorial-subtitle">Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    padding: '1.75rem 2rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: '500' }}>{faq.q}</h3>
                    {isOpen ? <ChevronUp size={20} style={{ color: 'var(--accent-brass)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '1.25rem', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, animation: 'fadeIn 0.3s ease' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
