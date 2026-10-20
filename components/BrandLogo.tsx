import Image from "next/image";

export function BrandLogo({ className = "" }: { className?: string }) {
  return <span className={`brand ${className}`}><Image className="brand-logo-image" src="/originallogo.jpeg" alt="Atticspace Architects & Interior Designers" width={810} height={700} priority /></span>;
}
