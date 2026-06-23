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

      {/* ================= PROJECT INFO FOR MOBILE (AFTER HERO) ================= */}
      <section className="block border-b border-black/5 bg-white px-6 py-12 lg:hidden">
        <div className="mx-auto max-w-7xl space-y-8">
          {/* SUMMARY */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Project Summary
            </p>
            <h3 className="mt-2 text-xl font-semibold">WhatsApp Automation System</h3>
            <p className="mt-3 text-sm leading-7 text-black/60">
              Internal recruitment automation system developed to streamline candidate communication
              through WhatsApp. The solution automates interview invitations, schedule
              confirmations, and recruitment notifications using Python and PyWhatKit while
              minimizing operational costs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* META */}
            <div className="space-y-4 rounded-2xl border border-black/10 bg-[#F7F8FA] p-6">
              <Meta label="Role" value="Automation Developer" />
              <Meta label="Year" value="2025" />
              <Meta label="Category" value={project.category} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
                  Tech Stack
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* IMPACT */}
            <div className="rounded-2xl bg-black p-6 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                Key Impact
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Stat number="100+" label="Messages Automated" />
                <Stat number="Reduced" label="Recruitment Workload" />
                <div className="col-span-2 border-t border-white/10 pt-3">
                  <Stat number="Zero" label="API Subscription Cost" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-[290px_minmax(0,1fr)]">
        {/* ================= SIDEBAR (DESKTOP ONLY) ================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-10 space-y-6">
            {/* SUMMARY */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                Project Summary
              </p>

              <h3 className="mt-3 text-xl font-semibold">WhatsApp Automation System</h3>

              <p className="mt-4 text-sm leading-7 text-black/60">
                Internal recruitment automation system developed to streamline candidate
                communication through WhatsApp. The solution automates interview invitations,
                schedule confirmations, and recruitment notifications using Python and PyWhatKit
                while minimizing operational costs.
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
                <Stat number="100+" label="Messages Automated" />
                <Stat number="Reduced" label="Recruitment Workload" />
                <Stat number="Zero" label="API Subscription Cost" />
              </div>
            </div>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <section className="space-y-16">
          <Block title="Project Overview">
            <p>
              Recruitment activities often involve repetitive communication tasks such as sending
              interview invitations, schedule confirmations, and recruitment updates.
            </p>

            <p className="mt-5">
              This project was developed to automate those repetitive activities using Python and
              PyWhatKit, allowing recruiters to focus on candidate evaluation instead of manual
              messaging.
            </p>

            <p className="mt-5">
              Rather than implementing a paid WhatsApp API solution, the system utilizes WhatsApp
              Web automation to provide a practical and cost-efficient internal recruitment tool.
            </p>
          </Block>

          <Block title="Business Context">
            <p>
              Recruitment demand fluctuates throughout the year. During hiring campaigns, recruiters
              may need to contact dozens or hundreds of candidates within a short period of time.
            </p>

            <p className="mt-5">
              Manual communication creates repetitive administrative work, increases the risk of
              human error, and reduces recruiter productivity.
            </p>

            <p className="mt-5">
              The organization required a lightweight automation solution that could improve
              efficiency without introducing recurring API subscription costs.
            </p>
          </Block>

          <Block title="Problem Statement">
            <List>
              <li>1. Manual WhatsApp communication consumed significant time</li>
              <li>2. Recruitment workload increased during hiring periods</li>
              <li>3. High risk of messaging and scheduling errors</li>
              <li>4. No standardized communication workflow</li>
              <li>5. WhatsApp API solutions introduced recurring costs</li>
            </List>
          </Block>

          <Block title="Objectives">
            <List>
              <li>Automate recruitment communication workflows</li>
              <li>Reduce repetitive administrative tasks</li>
              <li>Improve recruiter productivity</li>
              <li>Standardize messaging formats</li>
              <li>Minimize operational costs</li>
              <li>Accelerate candidate outreach activities</li>
            </List>
          </Block>

          <Block title="Why Python & PyWhatKit?">
            <p>
              Several technology options were evaluated before development. Python was selected
              because of its strong automation ecosystem, ease of development, and excellent data
              processing capabilities.
            </p>

            <p className="mt-5">
              PyWhatKit was chosen because it enables automated WhatsApp messaging through WhatsApp
              Web without requiring paid WhatsApp Business API subscriptions.
            </p>

            <List>
              <li>No recurring API subscription costs</li>
              <li>Rapid implementation and deployment</li>
              <li>Easy integration with Excel-based datasets</li>
              <li>Minimal infrastructure requirements</li>
              <li>Suitable for internal recruitment operations</li>
              <li>Lower operational cost compared to enterprise solutions</li>
            </List>
          </Block>

          <Block title="Role & Contributions">
            <List>
              <li>Designed the recruitment automation workflow</li>
              <li>Developed automation scripts using Python</li>
              <li>Built candidate data processing and validation logic</li>
              <li>Integrated Excel-based recruitment datasets</li>
              <li>Developed automated WhatsApp messaging workflows</li>
              <li>Conducted testing and optimization</li>
            </List>
          </Block>

          <Block title="Development Approach">
            <div className="grid gap-5 md:grid-cols-2">
              <Card title="Automation Workflow">
                Candidate data is processed from structured Excel files and transformed into
                personalized WhatsApp messages automatically.
              </Card>

              <Card title="Data Processing">
                Recruitment schedules and candidate information are managed through structured Excel
                datasets.
              </Card>

              <Card title="Cost Efficient Solution">
                Eliminates the need for paid WhatsApp API subscriptions while maintaining automation
                capabilities.
              </Card>

              <Card title="Validation Layer">
                Built-in validation reduces duplicate messages and scheduling errors.
              </Card>
            </div>
          </Block>

          <Block title="Challenges & Solutions">
            <div className="space-y-4">
              <Pair
                problem="Recruiters spent excessive time sending repetitive messages"
                solution="Developed automated WhatsApp workflows using Python and structured datasets"
              />

              <Pair
                problem="Recruitment demand fluctuated significantly"
                solution="Implemented batch processing capabilities for large candidate volumes"
              />

              <Pair
                problem="API implementation would increase operational expenses"
                solution="Utilized PyWhatKit and WhatsApp Web automation as a cost-efficient alternative"
              />
            </div>
          </Block>

          <Block title="Internal System Considerations">
            <p>
              This solution was intentionally designed as an internal desktop automation tool rather
              than a hosted web application.
            </p>

            <p className="mt-5">
              Since recruitment communication is managed by authorized HR personnel within a
              controlled environment, deploying cloud infrastructure would add unnecessary cost and
              complexity.
            </p>

            <List>
              <li>Lower infrastructure cost</li>
              <li>Simpler maintenance process</li>
              <li>Faster implementation</li>
              <li>Better operational control</li>
              <li>Reduced deployment complexity</li>
            </List>
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
              <li>Increased recruiter productivity</li>
              <li>Faster candidate outreach process</li>
              <li>Improved communication consistency</li>
              <li>Reduced risk of human error</li>
              <li>Standardized recruitment workflows</li>
              <li>Eliminated recurring messaging platform costs</li>
            </List>
          </Block>

          <Block title="Key Learnings">
            <p>
              This project strengthened my understanding of business process automation, workflow
              optimization, and practical software engineering decisions.
            </p>

            <p className="mt-5">
              The project demonstrated that the best solution is not always the most complex one.
              Technology decisions should balance functionality, cost, maintainability, and
              implementation speed based on actual business needs.
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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">{title}</p>
      <div className="mt-5 text-[16px] leading-8 text-black/75">{children}</div>
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