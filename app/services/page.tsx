import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA, PageIntro } from "../../components";
import { serviceGroups } from "../../data";

export const metadata: Metadata = { title: "Services | Atticspace Architects & Interior Designers", description: "Architectural planning, design, procurement support, construction supervision and project management." };
export default function ServicesPage() {
  return <main><PageIntro eyebrow="SERVICES / HOW WE CAN HELP" title="Professional services, from planning to delivery." description="Atticspace advises clients across the life of a project: from initial site investigation to design, procurement support and construction delivery."/><section className="wrap service-groups">{serviceGroups.map((group, index) => <article className="service-group" key={group.title}><div className="service-group-index">0{index + 1}</div><div><h2>{group.title}</h2><p>{group.description}</p></div><ul>{group.services.map(service => <li key={service}>{service}</li>)}</ul></article>)}</section><div className="wrap inline-contact"><p>Considering a new building, a reuse project, or a surrounding urban space?</p><Link className="text-link" href="/contact">TALK WITH THE STUDIO <span aria-hidden="true">↗</span></Link></div><ContactCTA title="Let’s talk about the right scope for your project." /></main>;
}
