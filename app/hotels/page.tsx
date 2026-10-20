import type { Metadata } from "next";
import { CategoryShowcase } from "../../components";
import { portfolio } from "../../portfolio";

export const metadata: Metadata = { title: "Hotels | Atticspace Architects & Interior Designers", description: "Explore Atticspace hotel architecture and hospitality design." };
export default function HotelsPage() { return <CategoryShowcase category={portfolio.hotels} />; }
