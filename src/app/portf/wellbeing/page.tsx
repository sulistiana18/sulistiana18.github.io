"use client";

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
  link: string;
  externalLink: string;
};

export default function WellbeingCaseStudyPage() {
  const project = (data as Project[]).find((p) => p.id === 3);

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
                Case Study · Data Analytics
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
                  Data Analyst · 2025
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
                Employee Wellbeing Dashboard
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Streamlit-based analytics dashboard to monitor employee wellbeing
                indicators and support data-driven HR decision making.
              </p>
            </div>

            {/* META */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="space-y-6">

                <Meta label="Role" value="Data Analyst / Developer" />
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
                <Stat number="Real-time" label="Wellbeing Insights" />
                <Stat number="Data-driven" label="HR Decisions" />
                <Stat number="Interactive" label="Dashboard Experience" />
              </div>
            </div>

          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <section className="space-y-16">

          <Block title="Project Overview">
            <p>
              Employee Wellbeing Analytics Dashboard is an interactive Streamlit
              application designed to visualize employee wellbeing metrics and
              support HR teams in making data-driven decisions.
            </p>
          </Block>

          <Block title="Business Context">
            <p>
              Organizations often struggle to monitor employee wellbeing in a
              structured and measurable way.
            </p>

            <p className="mt-5">
              This dashboard was created to centralize wellbeing data and provide
              actionable insights in real time.
            </p>
          </Block>

          <Block title="Problem Statement">
            <List>
              <li>No centralized wellbeing tracking system</li>
              <li>Difficulty interpreting employee sentiment data</li>
              <li>Lack of real-time insights for HR decisions</li>
              <li>Data scattered across multiple sources</li>
            </List>
          </Block>

          <Block title="Objectives">
            <List>
              <li>Centralize employee wellbeing data</li>
              <li>Provide interactive analytics dashboard</li>
              <li>Support HR decision making with insights</li>
              <li>Improve visibility of employee health trends</li>
            </List>
          </Block>

          <Block title="Role & Contributions">
            <List>
              <li>Built Streamlit dashboard interface</li>
              <li>Processed and visualized wellbeing datasets</li>
              <li>Designed KPI metrics for HR analytics</li>
              <li>Implemented interactive filters and charts</li>
            </List>
          </Block>

          <Block title="Development Approach">
            <div className="grid gap-5 md:grid-cols-2">

              <Card title="Data Visualization">
                Built interactive charts and metrics to represent employee wellbeing trends clearly.
              </Card>

              <Card title="Streamlit Framework">
                Used Streamlit to rapidly develop and deploy analytics dashboard.
              </Card>

              <Card title="KPI Design">
                Defined meaningful wellbeing indicators for HR interpretation.
              </Card>

              <Card title="User Experience">
                Focused on simplicity and clarity for non-technical HR users.
              </Card>

            </div>
          </Block>

          <Block title="Challenges & Solutions">
            <div className="space-y-4">

              <Pair
                problem="Raw data difficult to interpret"
                solution="Converted datasets into structured visual metrics and KPIs"
              />

              <Pair
                problem="Lack of real-time insights"
                solution="Implemented interactive dashboard filtering system"
              />

              <Pair
                problem="Data inconsistency across sources"
                solution="Standardized preprocessing pipeline before visualization"
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
              <li>Improved visibility of employee wellbeing trends</li>
              <li>Faster HR decision-making process</li>
              <li>Centralized analytics dashboard</li>
              <li>Better understanding of workforce health</li>
            </List>
          </Block>

          <Block title="Key Learnings">
            <p>
              This project strengthened my skills in data visualization,
              dashboard design, and building analytics tools using Streamlit
              for real-world business use cases.
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
      <p className="text-xs font-semibold uppercase text-black/40">{label}</p>
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
        <p className="text-xs font-semibold uppercase text-red-500">Problem</p>
        <p className="mt-2">{problem}</p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase text-green-600">Solution</p>
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