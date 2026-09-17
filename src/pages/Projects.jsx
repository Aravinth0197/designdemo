import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import FilterTabs from '../components/ui/FilterTabs';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'High-End Residential', 'Penthouses', 'Heritage Restorations', 'Hospitality'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '8rem', minHeight: '100vh' }}>
      <div className="container-editorial" style={{ padding: '0 1.5rem' }}>
        {/* Header Title */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="label-uppercase" style={{ display: 'block', marginBottom: '0.5rem' }}>Architectural Index</span>
          <h1 className="text-editorial-title" style={{ marginBottom: '1.25rem' }}>Selected Works & Case Studies</h1>
          <p style={{ maxWidth: '650px', fontSize: '1.1rem' }}>
            An international archive of private residences, restored Haussmannian penthouses, and bespoke luxury hospitality spaces designed between 2024 and 2026.
          </p>
        </div>

        {/* Filter Bar & View Toggle */}
        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Projects Listing */}
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '6rem 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>No architectural works match your filter parameters.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="btn-secondary"
              style={{ marginTop: '1.5rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem' }}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} viewMode="grid" />
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} viewMode="list" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
