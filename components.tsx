import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { projects, sectors, serviceGroups, products } from "./data";
import { site } from "./site";
import type { Project, Sector } from "./types";
import { BrandLogo } from "./components/BrandLogo";

export function Footer() {
  return <footer className="footer"><div className="wrap footer-top"><div className="footer-brand-group"><Link href="/" aria-label="Atticspace home"><BrandLogo /></Link><p>Architecture shaped around people,<br />purpose and place.</p></div><nav className="footer-links" aria-label="Footer navigation">{site.navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><address className="footer-contact"><span className="eyebrow">CONTACT</span><strong>{site.name}</strong><span>{site.location}</span><span>Postal: {site.postalAddress}</span><a href={`mailto:${site.email}`}>{site.email}</a></address></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Nairobi, Kenya</span></div></footer>;
}

export function SectionHeading({ eyebrow, title, link, href }: { eyebrow: string; title: string; link?: string; href?: string }) {
  return <div className="section-heading"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div>{link && href && <Link className="text-link" href={href}>{link} <span aria-hidden="true">↗</span></Link>}</div>;
}

export function ContactCTA({ title = "Have a project in mind?", description = "Tell us what you are considering. We would be glad to hear from you." }: { title?: string; description?: string }) {
  return <section className="contact-cta"><div className="wrap contact-cta-inner"><div><div className="eyebrow">START A CONVERSATION</div><h2>{title}</h2><p>{description}</p></div><Link href="/contact" className="primary-link">DISCUSS A PROJECT <span aria-hidden="true">↗</span></Link></div></section>;
}

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><Link href={`/projects/${project.slug}`} className="project-media" aria-label={`View ${project.title}`}>
    {project.heroImage ? <Image src={project.heroImage} alt={project.imageAlt ?? project.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <span className="image-placeholder" aria-hidden="true" />}
    <span className="image-arrow" aria-hidden="true">↗</span>
  </Link><div className="project-card-copy"><div className="eyebrow">{project.sector}</div><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{[project.location, project.country].filter(Boolean).join(", ")}</p>{(project.status || project.completionYear) && <div className="project-card-facts">{project.status && <span>{project.status}</span>}{project.completionYear && <span>{project.completionYear}</span>}</div>}</div></article>;
}

export function ProjectGrid({ entries = projects }: { entries?: Project[] }) {
  if (!entries.length) return <div className="empty-state"><span className="eyebrow">PORTFOLIO IN PROGRESS</span><h2>Selected work is being prepared.</h2><p>We are reviewing project information and imagery with the practice. Please contact the studio to discuss relevant experience for your project.</p><Link className="text-link" href="/contact">ENQUIRE WITH THE STUDIO <span aria-hidden="true">↗</span></Link></div>;
  return <div className="project-grid">{entries.map(project => <ProjectCard key={project.id} project={project} />)}</div>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-intro wrap"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>;
}

export function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  const count = projects.filter(project => project.published && project.sector === sector.slug).length;
  return <Link href={`/sectors/${sector.slug}`} className="sector-card"><span className="sector-index">0{index + 1}</span><span><strong>{sector.title}</strong><small>{count ? `${count} selected ${count === 1 ? "project" : "projects"}` : "Explore this area of practice"}</small></span><span aria-hidden="true">↗</span></Link>;
}

export function HomePage() {
  return <main>
    <section className="hero wrap"><div className="hero-copy"><div className="eyebrow">ATTICSPACE / ARCHITECTS &amp; INTERIOR DESIGNERS</div><h1>Architecture shaped around people, purpose and place.</h1><p>We bring together design thinking, technical coordination and practical project delivery to create buildings and spaces shaped around the people who use them.</p><div className="hero-actions"><Link className="primary-link" href="/projects">EXPLORE OUR PROJECTS <span aria-hidden="true">→</span></Link><Link className="secondary-link" href="/contact">DISCUSS A PROJECT <span aria-hidden="true">↗</span></Link></div><div className="hero-foot">NAIROBI, KENYA <span>ARCHITECTURE / INTERIORS / DELIVERY</span></div></div><div className="hero-image"><Image src={site.homepageImage.src} alt={site.homepageImage.alt} fill priority sizes="(max-width: 800px) 100vw, 58vw" unoptimized /><span className="hero-image-caption">SPACES FOR THE WAY WE LIVE</span></div></section>
    <section className="wrap projects-section"><SectionHeading eyebrow="SELECTED WORK" title="Projects shaped by their purpose" link="View portfolio" href="/projects"/><ProjectGrid entries={projects.filter(project => project.published && project.featured)} /></section>
    <section className="sectors-section"><div className="wrap"><SectionHeading eyebrow="EXPLORE OUR WORK" title="Considered across sectors"/><div className="sector-grid">{sectors.map((sector, index) => <SectorCard key={sector.slug} sector={sector} index={index} />)}</div></div></section>
    <section className="services-preview wrap"><div><div className="eyebrow">HOW WE CAN HELP</div><h2>From early questions to project delivery.</h2><p>Practical architectural services shaped around each project, from site investigation and planning through documentation, procurement support and construction.</p><Link className="text-link" href="/services">EXPLORE OUR SERVICES <span aria-hidden="true">↗</span></Link></div><div className="service-preview-list">{serviceGroups.slice(0, 4).map((group, index) => <Link href="/services" key={group.title}><span>0{index + 1}</span><strong>{group.title}</strong><span aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="studio-preview"><div className="wrap studio-preview-inner"><div className="studio-graphic" aria-hidden="true"><span>AS</span><i /></div><div><div className="eyebrow">THE STUDIO</div><h2>Thoughtful architecture. Practical delivery. Lasting partnerships.</h2><p>Atticspace is a Nairobi-based practice founded by Architect Geoffrey Njihia in Eldoret. The studio brings together experienced practitioners, new entrants and trainees around a considered, client-focused way of working.</p><Link className="text-link" href="/studio">GET TO KNOW THE STUDIO <span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="products-preview wrap"><div><div className="eyebrow">A DISTINCT PRODUCT OFFERING</div><h2>Made for boundaries and protection.</h2><p>Atticspace also produces chain-link fencing and barbed wire. Contact the team to discuss product availability and requirements.</p><Link className="text-link" href="/products">EXPLORE PRODUCTS <span aria-hidden="true">↗</span></Link></div><div className="product-teasers">{products.map((product, index) => <Link key={product.slug} href="/products"><span>0{index + 1}</span><strong>{product.title}</strong><span aria-hidden="true">↗</span></Link>)}</div></section>
    <ContactCTA title="Let’s discuss what you have in mind." />
  </main>;
}

export function ProjectsPage({ filters }: { filters: ReactNode }) { return <main><PageIntro eyebrow="PORTFOLIO / ATTICSPACE" title="Projects" description="A considered selection of architectural and interior design work. Published projects will include verified project information and approved imagery."/><section className="wrap projects-list"><div className="portfolio-note"><span className="eyebrow">PORTFOLIO</span><p>Project records and photographs are being reviewed with the practice before publication.</p></div>{filters}</section><ContactCTA /></main>; }

export function ProjectDetail({ project }: { project: Project }) {
  const related = projects.filter(item => item.published && item.slug !== project.slug && item.sector === project.sector).slice(0, 3);
  return <main className="detail-page"><div className="wrap"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>{project.title}</span></div><div className="project-detail-head"><div className="eyebrow">{project.sector}{project.location ? ` / ${project.location}` : ""}</div><h1>{project.title}</h1>{project.description && <p>{project.description}</p>}</div>
    {project.heroImage && <div className="detail-image project-detail-image"><Image src={project.heroImage} alt={project.imageAlt ?? project.title} fill priority sizes="100vw" /></div>}
    {(project.location || project.status || project.completionYear || project.client) && <dl className="project-facts">{project.location && <div><dt>LOCATION</dt><dd>{[project.location, project.country].filter(Boolean).join(", ")}</dd></div>}{project.status && <div><dt>STATUS</dt><dd>{project.status}</dd></div>}{project.completionYear && <div><dt>COMPLETION</dt><dd>{project.completionYear}</dd></div>}{project.client && <div><dt>CLIENT</dt><dd>{project.client}</dd></div>}</dl>}
    {project.overview && <section className="project-overview"><div className="eyebrow">PROJECT OVERVIEW</div><h2>Purpose, place and people.</h2><div><p>{project.overview}</p>{project.scopeOfServices && <><h3>Atticspace scope</h3><ul>{project.scopeOfServices.map(service => <li key={service}>{service}</li>)}</ul></>}</div></section>}
  </div>{related.length > 0 && <section className="related-section wrap"><SectionHeading eyebrow="RELATED WORK" title="More projects"/><ProjectGrid entries={related}/></section>}<ContactCTA title="Discuss a project with similar needs." /></main>;
}

export function SectorPage({ sector }: { sector: Sector }) {
  const entries = projects.filter(project => project.published && project.sector === sector.slug);
  return <main><PageIntro eyebrow="SECTORS / ATTICSPACE" title={sector.title} description={sector.introduction}/><section className="wrap projects-list"><SectionHeading eyebrow="SELECTED WORK" title="Projects in this sector"/><ProjectGrid entries={entries}/></section><ContactCTA title={`Talk to us about ${sector.title.toLowerCase()}.`} /></main>;
}
