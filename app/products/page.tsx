import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA, PageIntro } from "../../components";
import { products } from "../../data";

export const metadata: Metadata = { title: "Products | Atticspace Architects & Interior Designers", description: "Chain-link fencing and barbed-wire production from Atticspace. Contact the team to discuss availability and requirements." };
export default function ProductsPage() {
  return <main><PageIntro eyebrow="PRODUCTS / MANUFACTURING" title="A separate product offering." description="Alongside its architectural practice, Atticspace produces chain-link fencing and barbed wire. Contact the team to discuss product availability and requirements."/><section className="wrap product-list">{products.map((product, index) => <article key={product.slug} className="product-row"><div className="product-index">0{index + 1}</div><div><div className="eyebrow">ATTICSPACE PRODUCTS</div><h2>{product.title}</h2><p>{product.description}</p></div><Link className="text-link" href="/contact">ENQUIRE <span aria-hidden="true">↗</span></Link></article>)}</section><div className="wrap product-spec-note"><span className="eyebrow">PRODUCT INFORMATION</span><p>Product specifications, including dimensions, gauges, finishes, availability and delivery, can be confirmed directly with the team.</p></div><ContactCTA title="Ask about product availability." description="Share your requirements with the Atticspace team." /></main>;
}
