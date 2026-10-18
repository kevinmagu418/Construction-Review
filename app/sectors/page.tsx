import type { Metadata } from "next";
import { PageIntro, SectorCard } from "../../components";
import { sectors } from "../../data";

export const metadata: Metadata = { title: "Sectors | Atticspace Architects & Interior Designers", description: "Explore the sectors connected to Atticspace’s architectural practice." };
export default function SectorsIndexPage() {
  return <main><PageIntro eyebrow="SECTORS / ATTICSPACE" title="Work shaped by context." description="Explore the sectors connected to the practice. Published project work will be added as records and imagery are confirmed."/><section className="wrap sectors-index"><div className="sector-grid">{sectors.map((sector, index) => <SectorCard key={sector.slug} sector={sector} index={index}/>)}</div></section></main>;
}
