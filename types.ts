export type Article = { id: string; slug: string; title: string; category: string; excerpt: string; date: string; readTime: number; image: string; author: string; body: string[] };
export type Project = { id: string; slug: string; title: string; location: string; country: string; sector: string; description: string; image: string; value: string; status: string; completionYear: number; developer: string; contractor: string; featured: boolean; lastUpdated: string; overview: string };
export type IndustryCategory = { title: string; description: string; image: string; href: string };
