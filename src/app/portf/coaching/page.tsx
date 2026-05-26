import Image from "next/image";
import data from "@/../public/data/porto-data.json";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import BackButton from "@/components/BackButton";

export const dynamic = "force-static";

type Project = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  externalLink: string;
};

export default function CoachingCaseStudyPage() {
  const project = (data as Project[]).find((p) => p.id === 5);

  if (!project) return <div className="p-10">Project not found</div>;

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0F172A]">
      <BackButton />

      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">
                Case Study · Employee Development
              </p>

              <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <ExternalLinkButton href={project.externalLink} />

                <div className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm text-black/60">
                  Frontend Developer · 2025
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-orange-100 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1400}
                  height={900}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-10 space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                Project Summary
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Coaching Management Platform
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Digital coaching platform built to support employee development,
                feedback management, and coaching activity monitoring.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-black p-6 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                Key Impact
              </p>

              <div className="mt-5 space-y-5">
                <Stat number="Structured" label="Coaching Workflow" />
                <Stat number="Digitalized" label="Feedback Process" />
                <Stat number="Improved" label="Employee Development" />
              </div>
            </div>
          </div>
        </aside>

        <section className="space-y-16">
          <Block title="Project Overview">
            <p>
              Employee Coaching Management System is a digital coaching platform
              developed to support coaching sessions, progress tracking,
              feedback management, and employee development programs.
            </p>
          </Block>

          <Block title="Objectives">
            <List>
              <li>Digitalize coaching activities</li>
              <li>Improve coaching visibility</li>
              <li>Centralize feedback management</li>
              <li>Track employee development progress</li>
            </List>
          </Block>

          <Block title="Results & Impact">
            <List>
              <li>Improved coaching coordination</li>
              <li>Centralized employee feedback process</li>
              <li>Better coaching visibility & monitoring</li>
              <li>Improved employee development workflow</li>
            </List>
          </Block>
        </section>
      </div>
    </main>
  );
}

function Block({ title, children }: any) {
  return (
    <div className="border-t border-black/10 pt-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
        {title}
      </p>
      <div className="mt-5 text-[16px] leading-8 text-black/75">
        {children}
      </div>
    </div>
  );
}

function List({ children }: any) {
  return <ul className="space-y-3 text-black/75">{children}</ul>;
}

function Stat({ number, label }: any) {
  return (
    <div>
      <h4 className="text-2xl font-bold">{number}</h4>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}