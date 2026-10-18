import Link from "next/link";

export default function NotFound() {
  return <main className="not-found wrap"><div className="eyebrow">404 / PAGE NOT FOUND</div><h1>This page isn’t here.</h1><p>The address may have changed. Explore Atticspace’s projects, services or studio.</p><div className="hero-actions"><Link className="primary-link" href="/projects">VIEW PROJECTS <span aria-hidden="true">↗</span></Link><Link className="secondary-link" href="/">RETURN HOME</Link></div></main>;
}
