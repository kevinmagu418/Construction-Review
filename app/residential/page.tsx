import type { Metadata } from "next";
import { CategoryShowcase } from "../../components";
import { portfolio } from "../../portfolio";

export const metadata: Metadata = { title: "Residential | Atticspace Architects & Interior Designers", description: "Explore Atticspace residential architecture and interior design." };
export default function ResidentialPage() { return <CategoryShowcase category={portfolio.residential} />; }
