import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA, PageIntro } from "../../../components";

export const metadata: Metadata = { title: "Chain-link and Barbed Wire Production | Atticspace", description: "A product case study for Atticspace chain-link fencing and barbed wire production." };
export default function ProductCaseStudyPage() {
  return <main><PageIntro eyebrow="CASE STUDY / PRODUCTS" title="Chain-link fencing and barbed wire production" description="Atticspace’s product offering includes chain-link fencing and barbed wire." /><section className="wrap case-study-detail"><div className="case-study-detail-image"><Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85" alt="Metal fabrication equipment in an industrial workshop" fill priority sizes="100vw" /></div><div className="case-study-detail-copy"><div className="eyebrow">PRODUCT OVERVIEW</div><h2>Made for boundaries and protection.</h2><p>Atticspace produces chain-link fencing and barbed wire. Product specifications, production details and availability can be discussed with the team.</p><Link className="text-link" href="/contact">CONTACT US ABOUT THESE PRODUCTS <span aria-hidden="true">↗</span></Link></div></section><ContactCTA title="Ask us about chain-link fencing and barbed wire." description="Contact the studio to discuss product requirements and availability." /></main>;
}
