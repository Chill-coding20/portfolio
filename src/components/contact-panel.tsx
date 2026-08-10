import { type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

import { profile } from "@/lib/portfolio";
import { Reveal } from "@/components/motion-primitives";
import { MagneticCard } from "@/components/magnetic-card";
import { MotionLayer } from "@/motion/magnetic-layers";

export function ContactPanel() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Portfolio enquiry");
    const message = String(data.get("message") ?? "");

    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    toast.success("Your email app should open now", {
      description: "If nothing happens, write to " + profile.email + " directly.",
    });
    form.reset();
  };

  const field =
    "w-full rounded-xl border border-hairline bg-background/60 px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/80 focus:border-primary/50";

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <MagneticCard
          magnetic={4}
          glow
          glowColor="rgba(99,102,241,0.08)"
          glowSize={400}
          className="rounded-3xl border border-hairline bg-surface/50 p-7 sm:p-9"
        >
          <form onSubmit={onSubmit} aria-label="Contact form" aria-describedby="contact-form-note">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  suppressHydrationWarning
                  className={`mt-2 ${field}`}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  suppressHydrationWarning
                  className={`mt-2 ${field}`}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="Role, project or collaboration"
                suppressHydrationWarning
                className={`mt-2 ${field}`}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a little about what you're building."
                suppressHydrationWarning
                className={`mt-2 resize-none ${field}`}
              />
            </div>
            <button
              type="submit"
              suppressHydrationWarning
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.02] active:scale-95"
            >
              <MotionLayer layer="text">Open email with message</MotionLayer>
              <Send
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </button>
            <p
              id="contact-form-note"
              className="mt-3 text-xs leading-relaxed text-muted-foreground"
            >
              Submitting opens your email app with the message pre-filled — this site doesn&rsquo;t
              store or send your details anywhere. You can also write to{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-medium underline decoration-hairline underline-offset-2 transition-colors hover:text-foreground"
              >
                {profile.email}
              </a>{" "}
              directly.
            </p>
          </form>
        </MagneticCard>
      </Reveal>

      <Reveal delay={0.1}>
        <MagneticCard
          magnetic={4}
          glow
          glowColor="rgba(99,102,241,0.08)"
          glowSize={400}
          className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-hairline bg-surface/50 p-7 sm:p-9"
        >
          <div className="space-y-5">
            <a href={`mailto:${profile.email}`} className="group flex items-start gap-4">
              <MotionLayer
                as="span"
                layer="icon"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"
              >
                <Mail className="size-4" aria-hidden />
              </MotionLayer>
              <span>
                <span className="block text-sm font-medium">Email</span>
                <span className="block text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {profile.email}
                </span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-start gap-4"
            >
              <MotionLayer
                as="span"
                layer="icon"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"
              >
                <Linkedin className="size-4" aria-hidden />
              </MotionLayer>
              <span>
                <span className="block text-sm font-medium">LinkedIn</span>
                <span className="block text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  Connect professionally
                </span>
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-start gap-4"
            >
              <MotionLayer
                as="span"
                layer="icon"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"
              >
                <Github className="size-4" aria-hidden />
              </MotionLayer>
              <span>
                <span className="block text-sm font-medium">GitHub</span>
                <span className="block text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  Code and side projects
                </span>
              </span>
            </a>
            <div className="flex items-start gap-4">
              <MotionLayer
                as="span"
                layer="icon"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"
              >
                <MapPin className="size-4" aria-hidden />
              </MotionLayer>
              <span>
                <span className="block text-sm font-medium">Location</span>
                <span className="block text-sm text-muted-foreground">{profile.location}</span>
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-hairline bg-background/60 p-5">
            <p className="inline-flex items-center gap-2 text-sm font-medium">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden />
              {profile.availability}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to full stack and QA automation roles. Typical reply within 24 hours.
            </p>
          </div>
        </MagneticCard>
      </Reveal>
    </div>
  );
}
