"use client";

import { useMemo, useState } from "react";
import { ProjectGrid } from "../components";
import { sectors } from "../data";
import type { Project } from "../types";

export function ProjectFilters({ entries }: { entries: Project[] }) {
  const [activeSector, setActiveSector] = useState("all");
  const filtered = useMemo(() => activeSector === "all" ? entries : entries.filter(project => project.sector === activeSector), [activeSector, entries]);
  return <>
    <div className="project-filters" aria-label="Filter projects by sector">
      <button type="button" onClick={() => setActiveSector("all")} aria-pressed={activeSector === "all"}>All work <span>{entries.length}</span></button>
      {sectors.map(sector => {
        const count = entries.filter(project => project.sector === sector.slug).length;
        return <button key={sector.slug} type="button" onClick={() => setActiveSector(sector.slug)} aria-pressed={activeSector === sector.slug}>{sector.title} <span>{count}</span></button>;
      })}
    </div>
    <ProjectGrid entries={filtered} />
  </>;
}
