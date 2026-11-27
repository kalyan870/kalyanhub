import React from 'react';
import './showcase.css';
import './showcase-skills.css';

const portfolioLinks = [
  { version: '01', name: 'Portfolio V1', note: 'Standard layout', url: 'https://kalyan-portfolio-one.vercel.app/', color: 'blue', image: '/showcase/portfolio-v1.png' },
  { version: '02', name: 'Portfolio V2', note: 'Full-screen layout', url: 'https://kalyannexus.vercel.app/', color: 'orange', image: '/showcase/portfolio-v2.png' },
];

const media = [
  ['Conference stage presentation · 10 min', 'Full-length introduction and project walkthrough.', 'Kalyan_Conference_Stage_Presentation_10min_Edit.mp4', 'MP4'],
  ['Conference stage presentation · 3 min', 'Short conference cut of the portfolio and project story.', 'Kalyan_Conference_Stage_Presentation_3min_Edit.mp4', 'MP4'],
  ['Conference stage presentation · 1 min', 'One-minute highlight cut.', 'Kalyan_Conference_Stage_Presentation_1min_Edit.mp4', 'MP4'],
  ['53-repository architecture film', 'Walkthrough of the GitHub repository collection.', 'Kalyan_All_53_Repo_Architecture_Conference_Edit.mp4', 'MP4'],
  ['GitHub and LinkedIn portfolio film', 'Long-form profile and project walkthrough.', 'Kalyan_Full_LinkedIn_GitHub_Portfolio_Film_Conference_Edit.mp4', 'MP4'],
];

const documents = [
  ['53-repository architecture guide', 'PDF reference for the repository architecture and tools.', 'Kalyan_All_53_Repo_Architecture_Tools.pdf', 'PDF'],
  ['53-repository architecture slides', 'Editable architecture and tools presentation.', 'Kalyan_All_53_Repo_Architecture_Tools.pptx', 'PPTX'],
  ['GitHub and LinkedIn portfolio', 'Combined visual profile and project overview.', 'Kalyan_GitHub_LinkedIn_Portfolio_Combined.pdf', 'PDF'],
  ['GitHub and LinkedIn slides', 'Editable version of the combined portfolio presentation.', 'Kalyan_GitHub_LinkedIn_Portfolio_Combined.pptx', 'PPTX'],
  ['LinkedIn profile overview', 'Visual overview of the professional profile.', 'Kalyan_LinkedIn_Profile_Overview_Visual_Enhanced.pdf', 'PDF'],
];

const assetUrl = (filename) => `https://github.com/kalyan870/kalyanhub/releases/download/kalyanhub-showcase-2026-11/${encodeURIComponent(filename)}`;

function Showcase({ projects = [] }) {
  const featured = projects.slice(0, 6);
  return <section className="page showcase-page">
    <header className="showcase-intro">
      <div><span className="eyebrow">SARAGADAM KALYAN · AI & FULL-STACK DEVELOPER</span><h1>Building useful AI and full-stack products.</h1><p>B.Tech CSE student at Vignan’s Institute of Information Technology · Class of 2028. I build with Python, FastAPI, React, Generative AI, RAG, and AI agents, and I’m seeking AI/ML or software engineering internships.</p>
        <div className="showcase-actions"><a className="primary-button" href="https://github.com/kalyan870" target="_blank" rel="noreferrer">Explore GitHub ↗</a><a href="https://www.linkedin.com/in/saragadamkalyan/" target="_blank" rel="noreferrer">LinkedIn profile ↗</a></div>
      </div><div className="showcase-count"><strong>{projects.length || '—'}</strong><span>public repositories in the live GitHub archive</span><a href="#showcase-projects">Browse featured projects ↓</a></div>
    </header>
    <section className="showcase-skills" aria-label="Core skills"><span>CORE SKILLS</span><div>{['Python', 'FastAPI', 'React', 'TypeScript', 'Generative AI', 'RAG', 'AI Agents', 'Docker'].map(skill => <span key={skill}>{skill}</span>)}</div></section>

    <section className="showcase-block"><div className="showcase-heading"><span className="eyebrow">PORTFOLIO VERSIONS</span><h2>Choose a portfolio</h2></div><div className="portfolio-showcase-grid">{portfolioLinks.map(item => <a className={`portfolio-showcase-card ${item.color}`} href={item.url} target="_blank" rel="noreferrer" key={item.version}><img src={item.image} alt={`${item.name} preview`} loading="lazy"/><div className="portfolio-showcase-meta"><span>{item.version} / {item.note}</span><h3>{item.name} <i>↗</i></h3></div></a>)}</div></section>

    <section className="showcase-block" id="showcase-projects"><div className="showcase-heading with-link"><div><span className="eyebrow">LIVE PROJECT ARCHIVE</span><h2>Featured GitHub projects</h2><p>Repository details refresh from the public GitHub profile.</p></div><a href="https://github.com/kalyan870" target="_blank" rel="noreferrer">All repositories ↗</a></div><div className="showcase-project-grid">{featured.map((project, i) => <article className="showcase-project-card" key={project.url || project.name}><span>PROJECT / {String(i + 1).padStart(2, '0')}</span><h3>{project.name}</h3><p>{project.desc}</p><div className="tag-row">{(project.stack || []).slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div><div className="showcase-project-links">{project.url && <a href={project.url} target="_blank" rel="noreferrer">Repository ↗</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}</div></article>)}</div><a className="showcase-more-projects" href="https://github.com/kalyan870?tab=repositories" target="_blank" rel="noreferrer">Browse all GitHub repositories ↗</a></section>

    <section className="showcase-block"><div className="showcase-heading"><span className="eyebrow">WATCH</span><h2>Conference films</h2><p>Each MP4 opens as a direct download from the release archive.</p></div><div className="showcase-resource-grid">{media.map(([title, detail, filename, type]) => <article className="showcase-resource-card" key={filename}><span className="resource-type">▶ &nbsp;{type} VIDEO</span><div><h3>{title}</h3><p>{detail}</p></div><a href={assetUrl(filename)} target="_blank" rel="noreferrer">Download MP4 ↗</a></article>)}</div></section>

    <section className="showcase-block"><div className="showcase-heading"><span className="eyebrow">INDIVIDUAL FILES</span><h2>Project presentations and references</h2><p>Each of the 53 project PDFs and PowerPoint files is listed as a separate download.</p></div><div className="showcase-resource-grid">{documents.map(([title, detail, filename, type]) => <article className="showcase-resource-card" key={filename}><span className="resource-type">▤ &nbsp;{type}</span><div><h3>{title}</h3><p>{detail}</p></div><a href={assetUrl(filename)} target="_blank" rel="noreferrer">Download {type} ↗</a></article>)}</div><a className="showcase-more-projects" href="https://github.com/kalyan870/kalyanhub/releases/tag/kalyanhub-showcase-2026-11" target="_blank" rel="noreferrer">Open all individual project files ↗</a></section>

    <footer className="showcase-footer"><div><span className="eyebrow">FOLLOW THE JOURNEY</span><h2>Build in public. Keep learning.</h2></div><div><a href="https://github.com/kalyan870" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/saragadamkalyan/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
  </section>;
}

export default Showcase;
