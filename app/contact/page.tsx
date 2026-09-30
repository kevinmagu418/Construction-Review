import { site } from "../../site";

export default function ContactPage() {
  return <main><div className="page-intro wrap"><div className="eyebrow">Contact / Get in touch</div><h1>LET’S TALK<br/>ABOUT SPACE.</h1><p>Send an enquiry using the contact details below.</p></div><section className="wrap contact-details"><div><div className="eyebrow">Practice</div><h2>{site.name}</h2></div><div className="contact-detail"><span className="eyebrow">Location</span><p>{site.location}</p></div><div className="contact-detail"><span className="eyebrow">Postal</span><p>{site.postalAddress}</p></div><div className="contact-detail"><span className="eyebrow">Email</span><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div></section></main>;
}
