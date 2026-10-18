import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectorPage } from "../../../components";
import { sectors } from "../../../data";

export function generateStaticParams() { return sectors.map(sector => ({ slug: sector.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const sector = sectors.find(item => item.slug === slug);
  return { title: sector ? `${sector.title} | Atticspace` : "Sector | Atticspace", description: sector?.introduction };
}
export default async function SectorRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const sector = sectors.find(item => item.slug === slug);
  if (!sector) notFound();
  return <SectorPage sector={sector} />;
}
