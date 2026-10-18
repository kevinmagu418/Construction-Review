import type { Project, Sector, ServiceGroup, Product } from "./types";

// Public project records stay empty until Atticspace approves project facts and imagery.
export const projects: Project[] = [];

// Historical profile leads only. Do not publish as portfolio case studies until reviewed.
export const projectReviewQueue = [
  { title: "Family Bank", sector: "banking", note: "Profile describes architectural consultancy for countrywide branch expansion and alterations; project records and imagery require client confirmation." },
  { title: "Shoe4Africa Hospital", sector: "healthcare", note: "Associated with the historical profile in Eldoret; role, status and imagery require client confirmation." },
  { title: "Chandaria Cancer and Chronic Diseases Centre", sector: "healthcare", note: "Associated with the historical profile at Moi Teaching and Referral Hospital, Eldoret; Atticspace role requires confirmation." },
  { title: "Aflasafe Modular Plant", sector: "industrial", note: "Historical profile says Atticspace was selected to design the plant at KARLO, Katumani; status, scope and imagery require confirmation." },
] as const;

export const sectors: Sector[] = [
  { slug: "banking", title: "Banking and Financial Institutions", introduction: "Architectural consultancy for banking environments, including branch expansion and alterations, as described in the practice’s historical profile." },
  { slug: "healthcare", title: "Healthcare", introduction: "Healthcare work associated with the practice’s historical profile. Project roles and approved presentation details are being confirmed." },
  { slug: "industrial", title: "Industrial and Agricultural Facilities", introduction: "Industrial and agricultural facility design associated with the practice’s historical profile. Project information is being reviewed before publication." },
];

export const serviceGroups: ServiceGroup[] = [
  { title: "Project feasibility and planning", description: "Early investigation to help establish a considered direction for a project.", services: ["Site investigation", "Project feasibility and planning"] },
  { title: "Architectural services", description: "Design development and the documentation needed to communicate project requirements.", services: ["Design formulation and draughting", "Specifications and tender documents preparation"] },
  { title: "Procurement support", description: "Support through the tender process and review of submissions.", services: ["Calling for tenders", "Review of tenders"] },
  { title: "Project delivery", description: "Coordination and oversight through construction and contract delivery.", services: ["Construction supervision", "Contract administration", "Overall project management"] },
  { title: "Existing buildings and spaces", description: "Advice for clients considering new buildings, reusing existing buildings, and planning the spaces around them in towns and cities.", services: ["Advice on new buildings", "Advice on reuse of existing buildings", "Advice on surrounding spaces in towns and cities"] },
];

export const products: Product[] = [
  { slug: "chain-link-fencing", title: "Chain-link fencing", description: "Contact the team to discuss product availability and requirements." },
  { slug: "barbed-wire", title: "Barbed wire", description: "Contact the team to discuss product availability and requirements." },
];
