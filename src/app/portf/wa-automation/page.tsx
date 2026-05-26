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

export default function WAAutomationCaseStudyPage() {
  const project = (data as Project[]).find((p) => p.id === 2);

  if (!project) return <div className="p-10">Project not found</div>;

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0F172A]">
      {/* BACK BUTTON */}
      <BackButton />

      {/* ================= HERO ================= */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">
                Case Study · Automation System
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
                  Automation Engineer · 2025
                </div>
              </div>
            </div>

            {/* RIGHT */}
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

      {/* ================= CONTENT ================= */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-[290px_minmax(0,1fr)]">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-10 space-y-6">

            {/* SUMMARY */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                Project Summary
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                WhatsApp Automation System
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Automation system designed to streamline recruitment outreach,
                candidate scheduling, and confirmation messages via WhatsApp
                using structured data processing.
              </p>
            </div>

            {/* META */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="space-y-6">

                <Meta label="Role" value="Automation Developer" />
                <Meta label="Year" value="2025" />
                <Meta label="Category" value={project.category} />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
                    Tech Stack
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-black/5 px-3 py-1.5 text-xs font-medium text-black/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* IMPACT */}
            <div className="rounded-3xl border border-black/10 bg-black p-6 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                Key Impact
              </p>

              <div className="mt-5 space-y-5">
                <Stat number="Automated" label="Candidate Outreach" />
                <Stat number="Faster" label="Scheduling Process" />
                <Stat number="Reduced" label="Manual Communication" />
              </div>
            </div>

          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <section className="space-y-16">

          <Block title="Project Overview">
            <p>
              WA Automation is a WhatsApp-based automation system designed to
              handle candidate communication, scheduling, and confirmation
              workflows automatically using structured input data.
            </p>
          </Block>

          <Block title="Business Context">
            <p>
              Recruitment teams often spend significant time manually sending
              messages, scheduling interviews, and confirming attendance.
            </p>

            <p className="mt-5">
              This system was built to reduce repetitive communication tasks and
              improve efficiency through automation.
            </p>
          </Block>

          <Block title="Problem Statement">
            <List>
              <li>Manual WhatsApp messaging is time-consuming</li>
              <li>High risk of human error in scheduling</li>
              <li>No centralized outreach system</li>
              <li>Difficulty tracking candidate responses</li>
            </List>
          </Block>

          <Block title="Objectives">
            <List>
              <li>Automate WhatsApp candidate outreach</li>
              <li>Streamline scheduling communication</li>
              <li>Reduce manual HR workload</li>
              <li>Improve response tracking efficiency</li>
            </List>
          </Block>

          <Block title="Role & Contributions">
            <List>
              <li>Built automation logic using Python scripting</li>
              <li>Integrated structured Excel-based data processing</li>
              <li>Designed workflow for scheduling & messaging automation</li>
              <li>Optimized data handling for batch messaging</li>
            </List>
          </Block>

          <Block title="Development Approach">
            <div className="grid gap-5 md:grid-cols-2">

              <Card title="Automation Pipeline">
                Designed structured workflow to process candidate data and
                trigger automated WhatsApp messages.
              </Card>

              <Card title="Data Processing">
                Used Excel-based datasets to manage candidate scheduling and
                message personalization.
              </Card>

              <Card title="Scalability Focus">
                Built system to handle batch messaging efficiently without
                manual intervention.
              </Card>

              <Card title="Reliability Layer">
                Implemented validation to reduce incorrect or duplicate
                messaging.
              </Card>

            </div>
          </Block>

          <Block title="Challenges & Solutions">
            <div className="space-y-4">

              <Pair
                problem="Manual messaging slowed recruitment workflow"
                solution="Automated WhatsApp message generation using structured datasets"
              />

              <Pair
                problem="Scheduling inconsistencies"
                solution="Centralized scheduling logic using Excel-based control system"
              />

              <Pair
                problem="Data duplication risks"
                solution="Implemented validation before sending messages"
              />

            </div>
          </Block>

          <Block title="Interface Preview">
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_15px_60px_rgba(0,0,0,0.06)]">
              <Image
                src={project.image}
                alt={project.title}
                width={1400}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </Block>

          <Block title="Results & Impact">
            <List>
              <li>Reduced manual communication workload</li>
              <li>Faster candidate outreach process</li>
              <li>Improved scheduling efficiency</li>
              <li>Standardized messaging workflow</li>
            </List>
          </Block>

          <Block title="Key Learnings">
            <p>
              This project improved my understanding of automation workflows,
              data-driven messaging systems, and process optimization using
              Python and structured datasets.
            </p>
          </Block>

        </section>
      </div>
    </main>
  );
}

/* ================= COMPONENTS ================= */

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

function Meta({ label, value }: any) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-black/40">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium">{value}</p>
    </div>
  );
}

function List({ children }: any) {
  return <ul className="space-y-3 text-black/75">{children}</ul>;
}

function Pair({ problem, solution }: any) {
  return (
    <div className="grid gap-5 rounded-2xl border border-black/10 bg-white p-6 md:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase text-red-500">
          Problem
        </p>
        <p className="mt-2">{problem}</p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase text-green-600">
          Solution
        </p>
        <p className="mt-2">{solution}</p>
      </div>
    </div>
  );
}

function Card({ title, children }: any) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-3">{children}</p>
    </div>
  );
}

function Stat({ number, label }: any) {
  return (
    <div>
      <h4 className="text-2xl font-bold">{number}</h4>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}