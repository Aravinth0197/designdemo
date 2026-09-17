import React from 'react';
import { Grid, List, Search } from 'lucide-react';

const FilterTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginBottom: '3.5rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Category Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                style={{
                  padding: '0.6rem 1.25rem',
                  backgroundColor: isActive ? 'var(--bg-dark)' : 'transparent',
                  color: isActive ? 'var(--text-light)' : 'var(--text-primary)',
                  border: isActive ? '1px solid var(--bg-dark)' : '1px solid var(--border-light)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: isActive ? '500' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Bar & View Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Keyword Search */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.55rem 1rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
            }}
          >
            <Search size={15} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search projects or location..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                color: 'var(--text-primary)',
                width: '180px',
              }}
            />
          </div>

          {/* Grid vs List View Switcher */}
          <div style={{ display: 'flex', border: '1px solid var(--border-light)' }}>
            <button
              onClick={() => onViewModeChange('grid')}
              style={{
                padding: '0.55rem 0.85rem',
                backgroundColor: viewMode === 'grid' ? 'var(--bg-dark)' : 'transparent',
                color: viewMode === 'grid' ? 'var(--text-light)' : 'var(--text-primary)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              title="Grid View"
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              style={{
                padding: '0.55rem 0.85rem',
                backgroundColor: viewMode === 'list' ? 'var(--bg-dark)' : 'transparent',
                color: viewMode === 'list' ? 'var(--text-light)' : 'var(--text-primary)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              title="List View"
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
