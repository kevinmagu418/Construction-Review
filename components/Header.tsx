"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "../site";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return <header className="site-header"><div className="wrap header-main">
    <Link href="/" className="brand-link" aria-label="Atticspace home"><BrandLogo /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{site.navigation.map(item => <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href || (item.label === "Sectors" && pathname.startsWith("/sectors/")) || pathname.startsWith(`${item.href}/`) ? "active" : ""}`}>{item.label}</Link>)}</nav>
    <Link className="header-cta" href="/contact">Discuss a project <span aria-hidden="true">↗</span></Link>
    <button ref={menuButton} className="menu-toggle" type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation menu" : "Open navigation menu"}><span className="menu-lines" /><span>{open ? "Close" : "Menu"}</span></button>
  </div>{open && <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation"><div className="wrap mobile-menu-inner">{site.navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}<span aria-hidden="true">↗</span></Link>)}</div></nav>}</header>;
}
