import type { Metadata } from "next";
import { HomePage } from "../components";

export const metadata: Metadata = { title: "Atticspace | Architects & Interior Designers", description: "Explore Atticspace architecture across residential, office and hospitality projects, and learn about the studio." };
export default function Home() { return <HomePage />; }
