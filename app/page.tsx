import type { Metadata } from "next";
import { HomePage } from "../components";

export const metadata: Metadata = { title: "Atticspace | Architects & Interior Designers", description: "Architecture shaped around people, purpose and place. Explore the services and practice of Atticspace Architects & Interior Designers." };
export default function Home() { return <HomePage />; }
