import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="link-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
