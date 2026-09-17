import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Calculator, Building, Home, Hotel, ShieldCheck } from 'lucide-react';

const QuoteEstimator = () => {
  const [step, setStep] = useState(1);
  const [spaceType, setSpaceType] = useState('Private Estate & Residence');
  const [scope, setScope] = useState('Full Architecture & Renovation');
  const [budgetTier, setBudgetTier] = useState('$300k - $600k');

  const spaceOptions = [
    { title: 'Private Estate & Residence', desc: 'Single-family estate or villa (3,500+ sq ft)', icon: Home },
    { title: 'Penthouse & Loft', desc: 'Urban high-floor sanctuary or duplex', icon: Building },
    { title: 'Boutique Hotel & Lounge', desc: 'Commercial hospitality & VIP venue', icon: Hotel },
  ];

  const scopeOptions = [
    'Full Architecture & Renovation',
    'Bespoke Joinery & Custom FF&E',
    'Turnkey Styling & Art Curation',
  ];

  const budgetOptions = [
    '$150,000 - $300,000',
    '$300,000 - $600,000',
    '$600,000 - $1,500,000+',
  ];

  const getEstimatedTimeline = () => {
    if (budgetTier.includes('150,000')) return '5 – 8 Months';
    if (budgetTier.includes('300,000')) return '8 – 12 Months';
    return '12 – 18 Months';
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-dark-card)',
        border: '1px solid var(--border-dark)',
        padding: '3rem 2.5rem',
        borderRadius: '2px',
        color: 'var(--text-light)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)' }}>
        <div>
          <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.3rem' }}>Interactive Feasibility Wizard</span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem' }}>Estimate Your Spatial Project</h3>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: step === s ? 'var(--accent-brass)' : step > s ? 'var(--bg-dark)' : 'rgba(255,255,255,0.05)',
                color: step === s ? 'var(--bg-dark)' : 'var(--text-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: '600',
                border: step > s ? '1px solid var(--accent-brass)' : 'none',
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: Space Type */}
      {step === 1 && (
        <div style={{ animation: 'fadeIn 0.3s ease forwards' }}>
          <p style={{ color: 'var(--text-light-muted)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
            Step 1 of 3 — Select your primary spatial typology:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {spaceOptions.map((opt) => {
              const IconComp = opt.icon;
              const isSelected = spaceType === opt.title;
              return (
                <div
                  key={opt.title}
                  onClick={() => setSpaceType(opt.title)}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: isSelected ? 'rgba(197, 160, 89, 0.12)' : 'rgba(255,255,255,0.02)',
                    border: isSelected ? '1px solid var(--accent-brass)' : '1px solid var(--border-dark)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <IconComp size={24} style={{ color: 'var(--accent-brass)', marginBottom: '1rem' }} />
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: '500', marginBottom: '0.35rem' }}>{opt.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>{opt.desc}</p>
                </div>
              );
            })}
          </div>
          <button onClick={() => setStep(2)} className="btn-primary" style={{ backgroundColor: 'var(--accent-brass)', color: 'var(--bg-dark)' }}>
            <span>Continue to Scope Selection</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* STEP 2: Scope Selection */}
      {step === 2 && (
        <div style={{ animation: 'fadeIn 0.3s ease forwards' }}>
          <p style={{ color: 'var(--text-light-muted)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
            Step 2 of 3 — Select the depth of architectural engagement:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {scopeOptions.map((opt) => {
              const isSelected = scope === opt;
              return (
                <div
                  key={opt}
                  onClick={() => setScope(opt)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    backgroundColor: isSelected ? 'rgba(197, 160, 89, 0.12)' : 'rgba(255,255,255,0.02)',
                    border: isSelected ? '1px solid var(--accent-brass)' : '1px solid var(--border-dark)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.95rem' }}>{opt}</span>
                  {isSelected && <CheckCircle2 size={18} style={{ color: 'var(--accent-brass)' }} />}
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setStep(1)} className="btn-secondary" style={{ color: 'var(--text-light)', borderColor: 'var(--border-dark)' }}>
              Back
            </button>
            <button onClick={() => setStep(3)} className="btn-primary" style={{ backgroundColor: 'var(--accent-brass)', color: 'var(--bg-dark)' }}>
              <span>Continue to Budget Tier</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Investment Tier & Feasibility Output */}
      {step === 3 && (
        <div style={{ animation: 'fadeIn 0.3s ease forwards' }}>
          <p style={{ color: 'var(--text-light-muted)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
            Step 3 of 3 — Select target investment range (excluding structural real estate):
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {budgetOptions.map((opt) => {
              const isSelected = budgetTier === opt;
              return (
                <div
                  key={opt}
                  onClick={() => setBudgetTier(opt)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    backgroundColor: isSelected ? 'rgba(197, 160, 89, 0.12)' : 'rgba(255,255,255,0.02)',
                    border: isSelected ? '1px solid var(--accent-brass)' : '1px solid var(--border-dark)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                  }}
                >
                  {opt}
                </div>
              );
            })}
          </div>

          {/* Preliminary Output Card */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.75rem', border: '1px solid var(--border-brass)', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-brass)', marginBottom: '0.75rem' }}>
              <Sparkles size={18} />
              <span className="label-uppercase" style={{ fontSize: '0.7rem' }}>Feasibility Projection Summary</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', display: 'block' }}>Target Space</span>
                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{spaceType}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', display: 'block' }}>Est. Project Duration</span>
                <span style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--accent-brass)' }}>{getEstimatedTimeline()}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', display: 'block' }}>Assigned Lead</span>
                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>Senior Principal Architect</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => setStep(2)} className="btn-secondary" style={{ color: 'var(--text-light)', borderColor: 'var(--border-dark)' }}>
              Adjust Parameters
            </button>
            <Link
              to={`/contact?space=${encodeURIComponent(spaceType)}&scope=${encodeURIComponent(scope)}&budget=${encodeURIComponent(budgetTier)}`}
              className="btn-primary"
              style={{ backgroundColor: 'var(--accent-brass)', color: 'var(--bg-dark)', flex: 1, justifyContent: 'center' }}
            >
              <span>Submit & Schedule Private Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteEstimator;
