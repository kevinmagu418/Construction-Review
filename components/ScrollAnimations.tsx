"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(target => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    const observeTargets = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.matches("[data-reveal]")) {
        if (!root.classList.contains("is-visible")) {
          root.classList.add("reveal-pending");
          observer.observe(root);
        }
      }
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach(target => {
        if (!target.classList.contains("is-visible")) {
          target.classList.add("reveal-pending");
          observer.observe(target);
        }
      });
    };

    observeTargets(document);
    const mutationObserver = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(node => {
        if (node instanceof HTMLElement) observeTargets(node);
      }));
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
