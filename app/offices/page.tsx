import type { Metadata } from "next";
import { CategoryShowcase } from "../../components";
import { portfolio } from "../../portfolio";

export const metadata: Metadata = { title: "Offices | Atticspace Architects & Interior Designers", description: "Explore Atticspace office architecture and workplace design." };
export default function OfficesPage() { return <CategoryShowcase category={portfolio.offices} />; }
