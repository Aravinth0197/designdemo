import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Calendar, Clock } from 'lucide-react';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    spaceType: searchParams.get('space') || 'Private Estate & Residence',
    scope: searchParams.get('scope') || 'Full Architecture & Renovation',
    budget: searchParams.get('budget') || '$300,000 - $600,000',
    timeline: 'Within 3-6 Months',
    message: '',
  });

  useEffect(() => {
    const space = searchParams.get('space');
    const scope = searchParams.get('scope');
    const budget = searchParams.get('budget');
    if (space || scope || budget) {
      setFormData((prev) => ({
        ...prev,
        spaceType: space || prev.spaceType,
        scope: scope || prev.scope,
        budget: budget || prev.budget,
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh' }}>
      <div className="container-editorial" style={{ padding: '0 1.5rem' }}>
        {/* HEADER */}
        <div style={{ marginBottom: '5rem', maxWidth: '820px' }}>
          <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Private Consultation</span>
          <h1 className="text-editorial-title" style={{ marginBottom: '1.25rem' }}>Initiate Your Spatial Project</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
            We invite prospective clients to schedule a private spatial audit with our principal architectural partners in Paris, New York, Tokyo, or London.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '5rem' }}>
          {/* CONSULTATION FORM */}
          <div>
            {submitted ? (
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-brass)',
                  padding: '4rem 3rem',
                  textAlign: 'center',
                  animation: 'fadeIn 0.5s ease forwards',
                }}
              >
                <CheckCircle2 size={54} style={{ color: 'var(--accent-brass)', margin: '0 auto 1.5rem auto' }} />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '1rem' }}>
                  Consultation Dossier Received
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. Our senior architectural partner has received your project audit request for a <strong>{formData.spaceType}</strong> in <strong>{formData.location || 'your target city'}</strong>.
                </p>
                <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', marginBottom: '2rem', fontSize: '0.88rem' }}>
                  <span>We will reach out to you at <strong>{formData.email}</strong> within 24 business hours with an initial feasibility dossier.</span>
                </div>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Sterling / Vivienne Sato"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Private Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kyoto, Paris 4th, NYC, Ibiza"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Space Typology
                    </label>
                    <select
                      value={formData.spaceType}
                      onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option>Private Estate & Residence</option>
                      <option>Penthouse & Duplex</option>
                      <option>Boutique Hotel & Lounge</option>
                      <option>Commercial Flagship Sanctuary</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Estimated Investment Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option>$150,000 - $300,000</option>
                      <option>$300,000 - $600,000</option>
                      <option>$600,000 - $1,500,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Project Vision & Architectural Brief
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about the property, square footage, architectural style preferences, or current condition..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ backgroundColor: 'var(--accent-brass)', color: 'var(--bg-dark)', borderColor: 'var(--accent-brass)', padding: '1.1rem' }}>
                  <span>Submit Confidential Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* STUDIO CONTACT DETAILS */}
          <div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '3rem 2.5rem', marginBottom: '2.5rem' }}>
              <span className="label-uppercase" style={{ display: 'block', marginBottom: '1.25rem' }}>Direct Atelier Contact</span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Mail size={20} style={{ color: 'var(--accent-brass)', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Private Enquiries</span>
                    <strong style={{ fontSize: '1rem' }}>concierge@maisonsora.com</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Phone size={20} style={{ color: 'var(--accent-brass)', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Direct Studio Line</span>
                    <strong style={{ fontSize: '1rem' }}>+33 (0)1 42 68 90 00</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <MapPin size={20} style={{ color: 'var(--accent-brass)', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Headquarters Atelier</span>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', display: 'block' }}>18 Rue des Francs-Bourgeois</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>75004 Paris, France</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid var(--border-light)', padding: '2rem 2.5rem', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-brass)', marginBottom: '0.75rem' }}>
                <Shield size={20} />
                <strong style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Private Client Discretion</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                All correspondence, architectural floorplans, and property locations are bound by strict non-disclosure agreements (NDAs) to protect private high-net-worth client privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
