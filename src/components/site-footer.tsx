import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface/40">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground">
                PS
              </span>
              <span className="font-semibold tracking-tight">{profile.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Java full stack developer and QA automation engineer building dependable web
              platforms.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden /> {profile.location}
            </p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <h2 className="font-medium">Pages</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resume" className="transition-colors hover:text-foreground">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <h2 className="font-medium">Elsewhere</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" aria-hidden /> Email
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Github className="size-4" aria-hidden /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Linkedin className="size-4" aria-hidden /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
