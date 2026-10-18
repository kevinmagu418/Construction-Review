import type { Metadata } from "next";
import { ProjectsPage } from "../../components";
import { ProjectFilters } from "../../components/ProjectFilters";
import { projects } from "../../data";

export const metadata: Metadata = { title: "Projects | Atticspace Architects & Interior Designers", description: "Explore selected architectural and interior design projects by Atticspace." };
export default function ProjectsRoute() { return <ProjectsPage filters={<ProjectFilters entries={projects.filter(project => project.published)} />} />; }
