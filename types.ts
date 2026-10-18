export type ProjectStatus = "Concept" | "In progress" | "Completed";
export type Project = { id: string; slug: string; title: string; sector: string; location?: string; country?: string; description?: string; overview?: string; scopeOfServices?: string[]; status?: ProjectStatus; completionYear?: number; client?: string; heroImage?: string; gallery?: string[]; featured?: boolean; published: boolean; imageAlt?: string };
export type Sector = { slug: string; title: string; introduction: string };
export type ServiceGroup = { title: string; description: string; services: string[] };
export type Product = { slug: string; title: string; description: string };
