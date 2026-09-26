"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navigation } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  return <header className="site-header"><div className="header-main wrap"><Link href="/" className="brand" aria-label="Construction Review home"><span className="brand-mark">CR</span><span className="brand-name">CONSTRUCTION<br/>REVIEW</span></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.label} href={item.href} className={pathname === item.href.split("?")[0] ? "nav-link active" : "nav-link"}>{item.label}</Link>)}</nav><div className="header-actions"><Link href="/search" className="search-link">Search <span aria-hidden="true">↗</span></Link><a href="#newsletter" className="subscribe-link">Subscribe <span>↗</span></a><button ref={menuButton} className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">{open ? "Close" : "Menu"}<span className="menu-lines" /></button></div></div><AnimatePresence>{open && <motion.nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); } }} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}><div className="mobile-menu-inner">{navigation.map((item, index) => <motion.div key={item.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .025 }}><Link onClick={() => setOpen(false)} href={item.href}>{item.label}<span>↗</span></Link></motion.div>)}<Link onClick={() => setOpen(false)} href="/search">Search the journal <span>↗</span></Link></div></motion.nav>}</AnimatePresence></header>;
}
