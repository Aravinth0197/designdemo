import React from 'react';
import { TEAM_MEMBERS, AWARDS_DATA, PRESS_DATA } from '../data/team';
import { Award, Globe, MapPin, Sparkles, Star } from 'lucide-react';

const About = () => {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh' }}>
      <div className="container-editorial" style={{ padding: '0 1.5rem' }}>
        {/* HERO TITLE */}
        <div style={{ marginBottom: '6rem', maxWidth: '880px' }}>
          <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Studio Profile</span>
          <h1 className="text-editorial-title" style={{ marginBottom: '1.5rem' }}>Architectural Restraint & Timeless Materiality</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            MAISON SORA was founded in 2018 with a single radical thesis: luxury is not decoration, but the sculpting of light, silence, and authentic enduring materials.
          </p>
        </div>

        {/* HERO IMAGE SHOWCASE */}
        <div className="img-zoom-container" style={{ height: '540px', width: '100%', marginBottom: '7rem', border: '1px solid var(--border-light)' }}>
          <img src="/images/hero_penthouse.png" alt="MAISON SORA Studio Atmosphere" />
        </div>

        {/* PHILOSOPHY & FOUNDER MANIFESTO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', marginBottom: '8rem', alignItems: 'center' }}>
          <div>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.75rem' }}>Core Ethos</span>
            <h2 className="text-editorial-subtitle" style={{ marginBottom: '1.75rem' }}>
              "We design spaces that feel like they have always existed and will never go out of style."
            </h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Our team consists of senior architects, master timber carpenters, stone carvers, and art procurement specialists across Paris, Tokyo, London, and New York.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              We limit our atelier to accepting only 12 master private projects per calendar year to ensure uncompromised principal level dedication to every single detail.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '3.5rem 2.5rem', border: '1px solid var(--border-light)' }}>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '1.5rem' }}>Atelier Principles</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', display: 'block' }}>1. Zero Disposable Materials</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Only natural silver travertine, solid oak, lime-wash plaster, and cast bronze.</span>
              </li>
              <li style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', display: 'block' }}>2. Acoustic Serenity</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Concealed acoustic wall dampening engineered for quiet sanctuary living.</span>
              </li>
              <li>
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', display: 'block' }}>3. White-Glove Turnkey Delivery</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>From architectural blueprint to curated fine art placement and fresh florals.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* TEAM LEADERSHIP */}
        <div style={{ marginBottom: '8rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Leadership</span>
            <h2 className="text-editorial-subtitle">Principal Designers & Directors</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="card-editorial">
                <div className="img-zoom-container" style={{ height: '340px', width: '100%', marginBottom: '1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
                  <img src={member.image} alt={member.name} />
                </div>
                <span className="label-uppercase" style={{ fontSize: '0.7rem', display: 'block', marginBottom: '0.25rem' }}>{member.location}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.2rem' }}>{member.name}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-brass)', display: 'block', marginBottom: '1rem', fontWeight: '500' }}>{member.role}</span>
                <p style={{ fontSize: '0.88rem' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GLOBAL STUDIOS & AWARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          {/* Studios */}
          <div>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.75rem' }}>International Footprint</span>
            <h2 className="text-editorial-subtitle" style={{ marginBottom: '2rem' }}>Global Studio Hubs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem' }}>Paris Atelier</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Rue des Francs-Bourgeois, 75004 Paris</span>
                </div>
                <Globe size={20} style={{ color: 'var(--accent-brass)' }} />
              </div>
              <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem' }}>New York Studio</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Franklin St, Tribeca, NY 10013</span>
                </div>
                <Globe size={20} style={{ color: 'var(--accent-brass)' }} />
              </div>
              <div style={{ padding: '1.25rem 1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem' }}>Tokyo Design Hub</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Minami-Aoyama, Minato-ku, Tokyo</span>
                </div>
                <Globe size={20} style={{ color: 'var(--accent-brass)' }} />
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.75rem' }}>Accolades</span>
            <h2 className="text-editorial-subtitle" style={{ marginBottom: '2rem' }}>Honors & Recognition</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {AWARDS_DATA.map((award, i) => (
                <div key={i} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <Award size={24} style={{ color: 'var(--accent-brass)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', display: 'block' }}>{award.title}</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{award.issuer} • {award.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
