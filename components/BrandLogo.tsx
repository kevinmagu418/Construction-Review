"use client";
import { useState } from "react";
import Image from "next/image";
export function BrandLogo({ className = "" }: { className?: string }) {
  const [logoUnavailable, setLogoUnavailable] = useState(false);
  return <span className={`brand ${className}`}>{!logoUnavailable ? <Image className="brand-logo-image" src="/atticspace-logo.svg" alt="ATTICSPACE Architects & interior designers" width={810} height={700} onError={() => setLogoUnavailable(true)} /> : <span className="brand-fallback"><span className="brand-name">ATTICSPACE<br/>ARCHITECTS & INTERIOR DESIGNERS</span></span>}</span>;
}
