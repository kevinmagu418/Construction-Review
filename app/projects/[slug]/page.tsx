import { notFound } from "next/navigation";
import { projects } from "../../../data";
import { ProjectDetail } from "../../../components";
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find(item => item.slug === slug); if (!project) notFound(); return <ProjectDetail project={project}/>; }
