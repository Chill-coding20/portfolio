import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { site } from "@/lib/site";
import { profile } from "@/lib/portfolio";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { MotionProvider } from "@/motion/MotionProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            suppressHydrationWarning
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: ({ match }) => {
    const canonical = site.url + match.pathname;
    const ogImage = site.url + site.image;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: site.title },
        { name: "description", content: site.description },
        { name: "author", content: site.name },
        {
          name: "theme-color",
          content: "#14162a",
          media: "(prefers-color-scheme: dark)",
        },
        {
          name: "theme-color",
          content: "#f5f6fa",
          media: "(prefers-color-scheme: light)",
        },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: site.name },
        { property: "og:locale", content: site.locale },
        { property: "og:url", content: canonical },
        { property: "og:title", content: site.title },
        { property: "og:description", content: site.description },
        { property: "og:image", content: ogImage },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "P. Siranjeevi — Java Full Stack Developer & QA Automation Engineer",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: site.title },
        { name: "twitter:description", content: site.description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "canonical", href: canonical },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
        },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      scripts: [
        {
          children: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}else{document.documentElement.classList.remove("dark");document.documentElement.style.colorScheme="light";}}catch(e){}})();`,
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${site.url}/#person`,
            name: site.name,
            url: site.url,
            image: ogImage,
            jobTitle: "Java Full Stack Developer & QA Automation Engineer",
            description:
              "Java full stack developer and QA automation engineer building Spring Boot services, React interfaces and Playwright test frameworks.",
            email: `mailto:${profile.email}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Madurai Kamaraj University",
            },
            knowsAbout: [
              "Java",
              "Spring Boot",
              "Spring Security",
              "React",
              "TypeScript",
              "Playwright",
              "MySQL",
              "PostgreSQL",
              "REST APIs",
              "JWT",
              "JUnit",
              "Mockito",
              "Maven",
              "Oracle Cloud Infrastructure",
            ],
            sameAs: [profile.github, profile.linkedin],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: `${site.name} — Portfolio`,
            url: site.url,
            description: site.description,
            inLanguage: "en",
          }),
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <MotionProvider>
      <QueryClientProvider client={queryClient}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
        <Toaster />
      </QueryClientProvider>
    </MotionProvider>
  );
}
