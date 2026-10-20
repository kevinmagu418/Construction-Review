import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { site } from "../../site";

export const metadata: Metadata = { title: "Contact Us | Atticspace Architects & Interior Designers", description: "Contact the Atticspace studio in Kiambu Town about an architectural, interior design or product enquiry." };

const mapQuery = encodeURIComponent("Nanthill Court, Kiambu Town, Kenya");

export default function ContactPage() {
  return <main className="contact-page">
    <section className="contact-page-intro"><div className="wrap"><div className="eyebrow">CONTACT ATTICSPACE</div><h1>Let’s make room for a good conversation.</h1><p>Tell us what you’re planning. Our team is ready to hear about your project.</p></div></section>
    <section className="wrap contact-content">
      <div className="contact-form-wrap"><ContactForm /></div>
      <aside className="contact-side">
        <div className="contact-info-card"><span className="eyebrow">THE STUDIO</span><h2>Visit or reach us.</h2><p>We’re based at Nanthill Court in Kiambu Town, just north of Nairobi.</p><a className="contact-info-link" href={`mailto:${site.email}`}>{site.email}<span aria-hidden="true">↗</span></a><a className="map-directions" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">GET DIRECTIONS <span aria-hidden="true">↗</span></a><div className="contact-address">{site.location}<br />Postal: {site.postalAddress}</div></div>
        <div className="contact-map-wrap"><div className="contact-map-heading"><span className="eyebrow">FIND US</span><span>KIAMBU TOWN, KENYA</span></div><div className="contact-map"><iframe title="Map showing Nanthill Court in Kiambu Town, Kenya" src={`https://maps.google.com/maps?hl=en&q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=B&output=embed`} loading="eager" allowFullScreen /><div className="map-label"><span className="map-pin" aria-hidden="true" />NANTHILL COURT</div></div><a className="map-caption" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">Open location in Google Maps <span aria-hidden="true">↗</span></a></div>
      </aside>
    </section>
  </main>;
}
