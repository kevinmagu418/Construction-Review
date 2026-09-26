import { SearchPage } from "../../components";
export default async function SearchRoute({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) { const { q = "" } = await searchParams; const query = Array.isArray(q) ? q[0] ?? "" : q; return <SearchPage query={query}/>; }
