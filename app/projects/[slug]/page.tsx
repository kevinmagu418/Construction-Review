import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "../../../components";
import { projects } from "../../../data";

export function generateStaticParams() { return projects.filter(project => project.published).map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = projects.find(item => item.slug === slug && item.published);
  return { title: project ? `${project.title} | Atticspace` : "Project | Atticspace", description: project?.description ?? "An Atticspace project." };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(item => item.slug === slug && item.published);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
