import type { Metadata } from "next";
import { PageIntro } from "../../components";
import { site } from "../../site";

export const metadata: Metadata = { title: "Contact | Atticspace Architects & Interior Designers", description: "Contact Atticspace about an architectural, interior design or product enquiry." };
export default function ContactPage() {
  return <main><PageIntro eyebrow="CONTACT / PROJECT ENQUIRIES" title="Let’s talk about your project." description="Share what you are considering and the Atticspace team can discuss the next steps with you."/><section className="wrap contact-details"><div className="contact-lead"><span className="eyebrow">START A CONVERSATION</span><h2>Good work begins with a clear conversation.</h2><a className="contact-email" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a></div><div className="contact-detail"><span className="eyebrow">LOCATION</span><p>{site.location}</p><small>Physical location</small></div><div className="contact-detail"><span className="eyebrow">POSTAL ADDRESS</span><p>{site.postalAddress}</p></div><div className="contact-detail"><span className="eyebrow">EMAIL</span><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div></section></main>;
}
