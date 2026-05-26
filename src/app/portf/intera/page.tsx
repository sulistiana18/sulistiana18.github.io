import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
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

export default function InteraCaseStudyPage() {
  const project = (data as Project[]).find((p) => p.id === 1);

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
                Case Study · Frontend Engineering
              </p>

              <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
                INTERA
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
                Internship Management Platform
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Web-based system designed to centralize internship registration,
                applicant monitoring, and recruitment workflows through a
                responsive dashboard interface.
              </p>
            </div>

            {/* META */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="space-y-6">
                <Meta label="Role" value="Frontend Developer" />
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

            {/* QUICK IMPACT */}
            <div className="rounded-3xl border border-black/10 bg-black p-6 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                Key Impact
              </p>

              <div className="mt-5 space-y-5">
                <Stat number="Centralized" label="Recruitment Workflow" />
                <Stat number="Responsive" label="Dashboard Interface" />
                <Stat number="Reusable" label="Frontend Components" />
              </div>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <section className="space-y-16">
          <Block title="Project Overview">
            <p>
              INTERA is an internship application management system developed to
              streamline recruitment workflows through a centralized dashboard
              interface. The platform helps recruitment teams manage applicant
              registration, monitor candidate progress, and simplify operational
              processes within a single system.
            </p>
          </Block>

          <Block title="Business Context">
            <p>
              The recruitment workflow previously relied on fragmented manual
              processes and spreadsheet-based administration, making it
              difficult to organize applicant data efficiently and monitor
              recruitment progress in real time.
            </p>

            <p className="mt-5">
              INTERA was developed to centralize recruitment operations while
              improving accessibility, visibility, and workflow efficiency for
              internal teams.
            </p>
          </Block>

          <Block title="Problem Statement">
            <List>
              <li>
                Recruitment data scattered across multiple administrative tools
              </li>
              <li>
                Difficulties monitoring applicant progress efficiently
              </li>
              <li>Manual workflows slowed operational processes</li>
              <li>
                Lack of centralized dashboard for recruitment visibility
              </li>
            </List>
          </Block>

          <Block title="Objectives">
            <List>
              <li>Centralize internship applicant management</li>
              <li>Improve recruitment monitoring workflows</li>
              <li>Reduce dependency on manual administration</li>
              <li>Build scalable and responsive dashboard interfaces</li>
              <li>Improve accessibility of operational data</li>
            </List>
          </Block>

          <Block title="Role & Contributions">
            <List>
              <li>
                Developed responsive dashboard interfaces using Next.js &
                React.js
              </li>
              <li>
                Built reusable frontend components for scalable UI architecture
              </li>
              <li>Implemented filtering and search functionality</li>
              <li>Integrated REST API data into frontend views</li>
              <li>Improved dashboard readability and navigation flow</li>
              <li>
                Collaborated with design and backend teams during development
              </li>
            </List>
          </Block>

          <Block title="Development Approach">
            <div className="grid gap-5 md:grid-cols-2">
              <Card title="Component Architecture">
                Reusable UI structures were implemented to improve scalability
                and maintain consistency across the system.
              </Card>

              <Card title="Responsive Strategy">
                Interfaces were optimized for desktop and tablet layouts while
                maintaining usability for data-heavy dashboards.
              </Card>

              <Card title="Frontend Scalability">
                Structured component separation improved maintainability and
                simplified future feature expansion.
              </Card>

              <Card title="Performance Focus">
                Filtering systems and rendering structures were optimized to
                improve usability and data accessibility.
              </Card>
            </div>
          </Block>

          <Block title="Challenges & Solutions">
            <div className="space-y-4">
              <Pair
                problem="Large dataset rendering reduced readability"
                solution="Implemented filtering systems and structured table layouts for better scanning."
              />

              <Pair
                problem="Complex dashboard interface structure"
                solution="Created modular reusable component architecture."
              />

              <Pair
                problem="Responsive layout inconsistency"
                solution="Applied mobile-first responsive implementation strategy."
              />

              <Pair
                problem="Maintaining scalable frontend structure"
                solution="Separated UI components and data handling logic."
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
              <li>Improved recruitment workflow efficiency</li>
              <li>Centralized applicant monitoring processes</li>
              <li>Reduced dependency on manual spreadsheets</li>
              <li>Improved operational visibility and accessibility</li>
              <li>
                Established scalable frontend structure for future development
              </li>
            </List>
          </Block>

          <Block title="Key Learnings">
            <p>
              This project strengthened my ability to build scalable frontend
              systems, maintain reusable component structures, and design
              responsive interfaces for real operational workflows. It also
              improved my understanding of frontend architecture for
              data-intensive dashboard applications.
            </p>
          </Block>
        </section>
      </div>
    </main>
  );
}

/* ================= UI COMPONENTS ================= */

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-black/10 pt-10">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
          {title}
        </p>

        <div className="mt-5 text-[16px] leading-8 text-black/75">
          {children}
        </div>
      </div>
    </div>
  );
}

function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-black">
        {value}
      </p>
    </div>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-3 text-[16px] leading-8 text-black/75">
      {children}
    </ul>
  );
}

function Pair({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) {
  return (
    <div className="grid gap-5 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-red-500">
          Problem
        </p>

        <p className="mt-2 text-[15px] leading-7 text-black/80">
          {problem}
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
          Solution
        </p>

        <p className="mt-2 text-[15px] leading-7 text-black/80">
          {solution}
        </p>
      </div>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-[15px] leading-7 text-black/65">
        {children}
      </p>
    </div>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div>
      <h4 className="text-2xl font-bold">
        {number}
      </h4>

      <p className="mt-1 text-sm text-white/70">
        {label}
      </p>
    </div>
  );
}