import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  FileText,
  GraduationCap,
  Mail,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

import { ContactComposer } from '@/components/contact-composer';

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.71.4.08.55-.18.55-.39 0-.2-.01-.84-.01-1.52-2.01.38-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.16-.68-.56-.01-.57.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.9-3.64-4.01 0-.89.31-1.62.82-2.19-.08-.2-.36-1.04.08-2.16 0 0 .67-.22 2.2.84A7.5 7.5 0 0 1 8 3.88c.68 0 1.36.09 2 .27 1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.96.08 2.16.51.57.82 1.3.82 2.19 0 3.12-1.87 3.81-3.65 4.01.29.25.54.74.54 1.5 0 1.08-.01 1.95-.01 2.22 0 .22.15.47.55.39A8.13 8.13 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z" />
    </svg>
  );
}

function BrandMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="brand-mark-body"
        fillRule="evenodd"
        d="M7 4h10.1c4.1 0 6.8 2.5 6.8 6.1 0 2.4-1.2 4.2-3.3 5.2 2.6.9 4.1 3 4.1 5.8 0 4.1-3.1 6.9-7.6 6.9H7V4Zm5.2 4.2v5.1h4.2c1.6 0 2.5-.9 2.5-2.6 0-1.6-.9-2.5-2.5-2.5h-4.2Zm0 9.1v6.5h4.6c1.8 0 2.8-1.2 2.8-3.3 0-2-1-3.2-2.8-3.2h-4.6Z"
      />
      <path className="brand-mark-trace" d="M9.6 15.3h11.2" />
      <circle className="brand-mark-node" cx="9.4" cy="15.3" r="1.15" />
      <circle className="brand-mark-node" cx="21" cy="15.3" r="1.15" />
    </svg>
  );
}

type Experience = {
  company: string;
  location: string;
  role: string;
  period?: string;
  mark?: 'microsoft';
  logo?: {
    src: string;
    alt: string;
    className: string;
    width: number;
    height: number;
  };
  bullets?: React.ReactNode[];
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/brian--sun/',
    icon: LinkedInIcon,
  },
  {
    label: 'Resume',
    href: '/Brian-Sun-Resume.pdf',
    icon: FileText,
    download: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/BrianSun-UBC',
    icon: GitHubIcon,
  },
];

const experiences: Experience[] = [
  {
    company: 'Microsoft',
    location: 'Vancouver, BC',
    role: 'Staff Solution Engineer — Cloud and AI',
    period: 'Feb 2024 — Present',
    mark: 'microsoft',
    bullets: [
      <>
        Own <strong>end-to-end delivery</strong> for Azure, Copilot, Foundry,
        Fabric &amp; GitHub products, translating ambiguous enterprise workflows
        into scoped solutions, clear architecture, and rollout plans from
        discovery through production adoption
      </>,
      <>
        Personally <strong>write and review production-grade code</strong> for
        full-stack AI prototypes, microservices, evaluation harness and
        integrations; debug agent and workflow failures and harden successful
        pilots for production, shortening <strong>sales cycles by 27%</strong>{' '}
        and <strong>increasing deal closure rates by 33%</strong>
      </>,
      <>
        <strong>Own production quality</strong> through tracing, evals,
        monitoring, production metrics and failure-mode analysis; balance
        reliability, safety, latency and cost to{' '}
        <strong>accelerate launches by 35%</strong> and{' '}
        <strong>sustain 99.9% uptime</strong> across environments
      </>,
      <>
        Partner across sales, engineering, product, security and customer
        success teams to communicate technical tradeoffs, delivery blockers and
        guide production rollouts;{' '}
        <strong>Lead a team of 12 solution engineers</strong>, contributing to{' '}
        <strong>SMB and Enterprise deal growth of 24%</strong> and{' '}
        <strong>98% positive customer feedback</strong>
      </>,
      <>
        Codify field problems into reusable architecture, playbooks, and
        workshops that <strong>reduce customer time-to-value by 40%</strong>;{' '}
        <strong>ranked in the top 10%</strong> across a{' '}
        <strong>$40M+ portfolio</strong> and{' '}
        <strong>exceeded personal KPIs by 180%</strong>
      </>,
    ],
  },
  {
    company: 'VoPay',
    location: 'Vancouver, BC',
    role: 'Lead Solutions Engineer — Payments and Cloud',
    period: 'Feb 2023 — Feb 2024',
    logo: {
      src: '/vopay-logo.png',
      alt: 'VoPay',
      className: 'vopay-logo',
      width: 200,
      height: 200,
    },
    bullets: [
      <>
        Led discovery with 70+ monthly prospects, turning payment challenges
        into Python-based prototypes and tailored workflows that{' '}
        <strong>increased conversion by 60%</strong> and{' '}
        <strong>reduced sales cycles from 120 to 75 days</strong>.
      </>,
      <>
        Built Python and API integration workflows that automated
        troubleshooting, resolved technical objections and improved
        implementation, <strong>halving post-sales implementation time</strong>{' '}
        and <strong>reducing support tickets by 40%</strong>.
      </>,
      <>
        Turned recurring customer needs into reusable virtual labs and
        interactive demo environments used by 400+ prospects, accelerating{' '}
        <strong>time-to-value by 30%</strong> and{' '}
        <strong>contributing to 30% pipeline growth</strong>.
      </>,
      <>
        Promoted to Lead in eight months after driving{' '}
        <strong>$5M in year-over-year growth</strong> and{' '}
        <strong>exceeding KPIs by 220%</strong>; led four Solutions Engineers
        across three verticals and signed partnerships with{' '}
        <strong>Sage, Webull, and Mastercard</strong>.
      </>,
    ],
  },
  {
    company: 'Transcend',
    location: 'Vancouver, BC',
    role: 'Technical Co-Founder & CTO',
    period: 'Mar 2020 — Feb 2023',
    logo: {
      src: '/transcend-logo.png',
      alt: 'Transcend',
      className: 'transcend-logo',
      width: 200,
      height: 200,
    },
    bullets: [
      <>
        Co-founded and built a{' '}
        <strong>Python-based product and analytics platform</strong> for 200+
        ecommerce clients, owning{' '}
        <strong>
          product strategy, system architecture, and production delivery
        </strong>{' '}
        from zero to scale.
      </>,
      <>
        Developed{' '}
        <strong>
          product-recommendation, ad-spend-optimization, and product-research
          solutions
        </strong>{' '}
        that increased <strong>revenue by 85%</strong>,{' '}
        <strong>deal sizes by 60%</strong>, <strong>retention by 50%</strong>,
        and <strong>engagement by 300%</strong>.
      </>,
      <>
        Led and mentored an offshore engineering team while scaling{' '}
        <strong>
          annual recurring revenue past $2M at 170% year-over-year growth
        </strong>
        ; the company and platform were ultimately acquired by a leading
        ecommerce competitor.
      </>,
    ],
  },
];

const internships: Experience[] = [
  {
    company: 'University of British Columbia',
    location: 'Vancouver, BC',
    role: 'Research Assistant',
    period: 'Jan 2017 — Jan 2019',
    logo: {
      src: '/ubc-logo.png',
      alt: 'University of British Columbia',
      className: 'ubc-logo',
      width: 100,
      height: 100,
    },
  },
];

const skillGroups = [
  {
    title: 'Agentic & generative AI',
    skills: [
      'Multi-agent systems',
      'LangChain / LangGraph',
      'AutoGen',
      'Semantic Kernel',
      'Prompt engineering',
    ],
  },
  {
    title: 'AI & product engineering',
    skills: [
      'Python',
      'RAG',
      'Embeddings',
      'Vector databases',
      'APIs',
      'GraphQL',
      'Postgres',
      'Microservices',
    ],
  },
  {
    title: 'Cloud, security & operations',
    skills: [
      'Azure',
      'AWS',
      'GCP',
      'CI/CD',
      'Evaluation',
      'Monitoring',
      'Security',
      'Governance',
    ],
  },
  {
    title: 'Forward-deployed leadership',
    skills: [
      'Technical discovery',
      'Rapid prototyping',
      'Enterprise integrations',
      'Stakeholder alignment',
    ],
  },
];

const projects = [
  {
    eyebrow: 'Product case study',
    title: 'Transcend Commerce Intelligence Platform',
    description:
      'A Python product and analytics platform for 200+ ecommerce teams, combining recommendation systems, product research, and ad-spend optimization. Scaled beyond $2M ARR before acquisition.',
    tags: ['Python', 'Analytics', 'Recommendations', 'Ecommerce'],
  },
  {
    eyebrow: 'Open source · JavaScript',
    title: 'Ad Reporting for Google & Meta',
    description:
      'An asynchronous Google Apps Script workflow that exports campaign data from Meta and Google Ads into Sheets for recurring dashboard reporting.',
    tags: ['Apps Script', 'Meta API', 'Google Ads', 'Sheets'],
    href: 'https://github.com/BrianSun-UBC/Ad-Reporting-for-Google-Meta',
  },
  {
    eyebrow: 'Open source · Python',
    title: 'Google & Meta Ad Research Toolkit',
    description:
      'A research pipeline built on the Facebook Ad Library API that cleans public political-ad data, including regional and demographic distributions, into analysis-ready CSV files.',
    tags: ['Python', 'Ad Library API', 'Data cleaning', 'CSV'],
    href: 'https://github.com/BrianSun-UBC/Google-Meta-Ad-Scraper',
  },
  {
    eyebrow: 'Open source · Automation',
    title: 'Oberlo Fulfilment Bot',
    description:
      'A legacy browser-automation project for moving ecommerce orders through purchase and tracking workflows—built as the capstone for Harvard CS50.',
    tags: ['Python', 'Automation', 'Ecommerce', 'CS50'],
    href: 'https://github.com/BrianSun-UBC/Oberlo-Bot',
  },
  {
    eyebrow: 'Coursework · Systems',
    title: 'Harvard CS50 Portfolio',
    description:
      'A collection of systems and web projects spanning C, Python, Flask, SQL, JavaScript, HTML, and CSS, including the Oberlo automation capstone.',
    tags: ['C', 'Python', 'Flask', 'SQL'],
    href: 'https://github.com/BrianSun-UBC/Harvard-CS50-Projects',
  },
];

const articles = [
  {
    meta: 'Technical note · APIs',
    title: 'Exporting Google & Meta Ads Data Without Timing Out',
    description:
      'The architecture behind an asynchronous Apps Script pipeline for pulling ad data into a durable reporting workflow.',
    href: 'https://github.com/BrianSun-UBC/Ad-Reporting-for-Google-Meta#readme',
  },
  {
    meta: 'Technical note · Data engineering',
    title: 'A Research Workflow for the Facebook Ad Library',
    description:
      'Using the official API, structured queries, and a small cleaning pipeline to turn public political-ad records into useful datasets.',
    href: 'https://github.com/BrianSun-UBC/Google-Meta-Ad-Scraper#readme',
  },
  {
    meta: 'Build note · Automation',
    title: 'Automating an Ecommerce Fulfilment Queue',
    description:
      'A practical look at browser automation, queue handling, and the edges of a legacy dropshipping workflow.',
    href: 'https://github.com/BrianSun-UBC/Oberlo-Bot#readme',
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-kicker">
      <h2>{children}</h2>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      {experience.mark === 'microsoft' ? (
        <div className="company-mark microsoft" aria-label="Microsoft">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : experience.logo ? (
        <div className={`company-mark logo-mark ${experience.logo.className}`}>
          <Image
            src={experience.logo.src}
            alt={experience.logo.alt}
            width={experience.logo.width}
            height={experience.logo.height}
            unoptimized
          />
        </div>
      ) : null}
      <div className="entry-copy">
        <div className="entry-heading">
          <div>
            <h3>{experience.role}</h3>
            <p>
              {experience.company} · {experience.location}
            </p>
          </div>
          {experience.period ? <time>{experience.period}</time> : null}
        </div>
        {experience.bullets?.length ? (
          <ul>
            {experience.bullets.map((bullet, index) => (
              <li key={`${experience.company}-${index}`}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="rail" aria-label="Section navigation">
        <a className="monogram" href="#top" aria-label="Brian Sun, back to top">
          <BrandMark />
        </a>
        <nav>
          <a
            href="#experience"
            aria-label="Experience"
            data-tooltip="Experience"
          >
            <BriefcaseBusiness aria-hidden="true" />
          </a>
          <a
            href="#education"
            aria-label="Education and skills"
            data-tooltip="Education"
          >
            <GraduationCap aria-hidden="true" />
          </a>
          <a href="#projects" aria-label="Projects" data-tooltip="Projects">
            <Sparkles aria-hidden="true" />
          </a>
          <a href="#writing" aria-label="Writing" data-tooltip="Writing">
            <BookOpen aria-hidden="true" />
          </a>
          <a href="#contact" aria-label="Contact" data-tooltip="Contact">
            <Mail aria-hidden="true" />
          </a>
        </nav>
      </aside>

      <div className="mobile-bar">
        <a className="monogram" href="#top" aria-label="Brian Sun, back to top">
          <BrandMark />
        </a>
        <nav aria-label="Mobile navigation">
          <a href="#experience">Work</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
        </nav>
        <a className="mobile-contact" href="#contact">
          Contact
        </a>
      </div>

      <div className="content" id="top">
        <header className="hero">
          <h1>Brian Sun</h1>
          <p className="hero-role">
            Staff Solutions Engineer — Cloud &amp; AI at Microsoft
          </p>
          <div className="social-row" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon, download }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                download={download ? 'Brian-Sun-Resume.pdf' : undefined}
              >
                <Icon aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
          <div className="intro">
            <p>
              I’m currently a Staff Solutions Engineer with 6+ years of
              experience turning complex AI, cloud, and API challenges into
              scalable solutions and measurable business outcomes.
            </p>
            <p>
              At Microsoft, I lead enterprise initiatives across Azure AI,
              Enterprise Copilot, Fabric, and GitHub Copilot, supporting a $40M+
              portfolio and serving more than 5M+ monthly users. My work has
              helped reduce client time-to-value by 40% and accelerate
              production launches by 35%.
            </p>
            <p>
              Previously, I led Solutions Engineering at VoPay, contributing to
              $5M in year-over-year growth, and co-founded an ecommerce
              analytics platform that scaled beyond $2M in ARR before being
              acquired.
            </p>
          </div>
          <div className="impact-strip" aria-label="Career highlights">
            <div>
              <strong>6+</strong>
              <span>years shipping</span>
            </div>
            <div>
              <strong>$40M+</strong>
              <span>portfolio supported</span>
            </div>
            <div>
              <strong>5M+</strong>
              <span>monthly users</span>
            </div>
            <div>
              <strong>99.9%</strong>
              <span>uptime sustained</span>
            </div>
          </div>
        </header>

        <div className="soft-divider" />

        <section className="section" id="experience">
          <SectionTitle>Experience</SectionTitle>
          <div className="experience-list">
            {experiences.map((experience) => (
              <ExperienceCard
                experience={experience}
                key={experience.company}
              />
            ))}
          </div>
          <h3 className="subsection-label">Internship</h3>
          <div className="experience-list internship-list">
            {internships.map((experience) => (
              <ExperienceCard
                experience={experience}
                key={experience.company}
              />
            ))}
          </div>
        </section>

        <div className="soft-divider" />

        <section className="section" id="education">
          <SectionTitle>Education &amp; Skills</SectionTitle>
          <article className="education-card">
            <div className="school-mark">
              <Image
                src="/ubc-logo.png"
                alt="University of British Columbia"
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <div>
              <div className="entry-heading">
                <div>
                  <h3>BSc in Computer Science</h3>
                  <p>University of British Columbia · Minor in Neuroscience</p>
                </div>
                <time>2015 — 2020</time>
              </div>
              <p className="education-note">
                3.9 / 4.0 GPA · Five-time Dean&apos;s Honour List
              </p>
            </div>
          </article>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="soft-divider" />

        <section className="section" id="projects">
          <SectionTitle>Projects</SectionTitle>
          <div className="project-grid">
            {projects.map((project) => {
              const card = (
                <>
                  <div className="project-topline">
                    {project.href ? (
                      <ArrowUpRight aria-hidden="true" />
                    ) : (
                      <Code2 aria-hidden="true" />
                    )}
                  </div>
                  <p className="card-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <div className="tag-list compact">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </>
              );

              return project.href ? (
                <a
                  className="project-card"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  key={project.title}
                >
                  {card}
                </a>
              ) : (
                <article className="project-card" key={project.title}>
                  {card}
                </article>
              );
            })}
          </div>
          <a
            className="text-link"
            href="https://github.com/BrianSun-UBC?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Explore all repositories <ArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <div className="soft-divider" />

        <section className="section" id="writing">
          <SectionTitle>Writing</SectionTitle>
          <p className="section-intro">
            Build notes from shipped side projects—focused on the architecture,
            tradeoffs, and edges that matter once an idea meets a real workflow.
          </p>
          <div className="article-list">
            {articles.map((article) => (
              <a
                className="article-row"
                href={article.href}
                target="_blank"
                rel="noreferrer"
                key={article.title}
              >
                <div>
                  <p className="card-eyebrow">{article.meta}</p>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <div className="soft-divider" />

        <section className="contact-card" id="contact">
          <p className="card-eyebrow">
            Feel free to reach out and send me a message
          </p>
          <h2>Let&apos;s connect</h2>
          <p>
            I&apos;m always happy to connect with other like-minded
            professionals across AI, technology, and entrepreneurship. Open to
            exploring other opportunities in the AI space, startups or big tech.
          </p>
          <ContactComposer />
        </section>

        <footer>
          <a className="footer-brand" href="#top">
            Brian Sun
          </a>
          <div>
            <a
              href="https://www.linkedin.com/in/brian--sun/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/BrianSun-UBC"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:briansun@alumni.ubc.ca">Email</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
