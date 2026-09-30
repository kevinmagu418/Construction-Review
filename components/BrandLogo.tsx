import Image from "next/image";
export function BrandLogo({ className = "" }: { className?: string }) {
  return <span className={`brand ${className}`}><Image className="brand-logo-image" src="/logo.jpeg" alt="Construction Review" width={1536} height={1024} priority /></span>;
}
