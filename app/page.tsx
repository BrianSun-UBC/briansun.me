import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Contact,
  FileText,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

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
  bullets?: string[];
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/brian--sun/',
    icon: Contact,
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
    icon: GitBranch,
  },
  {
    label: 'Email',
    href: 'mailto:briansun@alumni.ubc.ca',
    icon: Mail,
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
      'Own end-to-end delivery for Azure AI, Enterprise Copilot, Fabric, and GitHub Copilot, translating ambiguous enterprise workflows into scoped solutions, clear architecture, and rollout plans from discovery through production adoption.',
      'Write and review production-grade Python and JavaScript for full-stack AI prototypes, microservices, integrations, and LLM evaluation harnesses; hardening successful pilots for production shortened sales cycles by 27% and increased deal closure rates by 33%.',
      'Own production quality through tracing, evaluations, monitoring, metrics, and failure-mode analysis—balancing reliability, safety, latency, and cost to accelerate launches by 35% and sustain 99.2% uptime.',
      'Partner across sales, engineering, product, security, and executive teams; lead 12 cross-functional solution engineers while contributing to 98% positive customer ratings and 85% contract renewal rates.',
      'Turn field problems into reusable architecture, playbooks, and workshops that reduce time-to-value by 40%; ranked in Microsoft’s top 10% across a $40M+ portfolio and exceeded personal KPIs by 180%.',
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
      'Led discovery with 70+ monthly prospects, turning payment challenges into Python-based prototypes and tailored workflows that increased conversion by 60% and reduced sales cycles from 120 to 75 days.',
      'Built Python and API integration workflows that automated troubleshooting, halving post-sales implementation time and reducing support tickets by 40%.',
      'Turned recurring customer needs into reusable virtual labs and interactive demo environments used by 400+ prospects, accelerating time-to-value by 30% and contributing to 30% pipeline growth.',
      'Promoted to Lead in eight months after driving $5M in year-over-year growth and exceeding KPIs by 220%; led four Solutions Engineers across three verticals and signed partnerships with Sage, Webull, and Mastercard.',
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
      'Co-founded and built a Python-based product and analytics platform for 200+ ecommerce clients, owning product strategy, system architecture, and production delivery from zero to scale.',
      'Developed product-recommendation, ad-spend-optimization, and product-research solutions that increased revenue by 85%, deal sizes by 60%, retention by 50%, and engagement by 300%.',
      'Led and mentored an offshore engineering team while scaling annual recurring revenue past $2M at 170% year-over-year growth; the company and platform were ultimately acquired by a leading ecommerce competitor.',
    ],
  },
];

const internships: Experience[] = [
  {
    company: 'University of British Columbia',
    location: 'Vancouver, BC',
    role: 'Research Assistant',
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

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-kicker">
      <span>{number}</span>
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
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
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
          BS
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
          BS
        </a>
        <nav aria-label="Mobile navigation">
          <a href="#experience">Work</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
        </nav>
        <a className="mobile-contact" href="mailto:briansun@alumni.ubc.ca">
          Let&apos;s talk
        </a>
      </div>

      <div className="content" id="top">
        <header className="hero">
          <div className="portrait-wrap">
            <Image
              className="portrait"
              src="/brian-sun.jpg"
              alt="Brian Sun"
              width={88}
              height={88}
              priority
              unoptimized
            />
            <span
              className="availability-dot"
              aria-label="Open to conversations"
            />
          </div>
          <p className="eyebrow">
            <MapPin aria-hidden="true" /> Vancouver, Canada · Building at the
            edge of AI and enterprise
          </p>
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
          <p className="intro">
            I lead enterprise Azure, Copilot, and API products from the first
            ambiguous conversation to production adoption. My work blends{' '}
            <span>hands-on engineering</span>, solution architecture, and the
            calm, high-agency leadership required to make complex systems
            useful.
          </p>
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
              <strong>10K+</strong>
              <span>user environments</span>
            </div>
            <div>
              <strong>99.2%</strong>
              <span>uptime sustained</span>
            </div>
          </div>
        </header>

        <div className="soft-divider" />

        <section className="section" id="experience">
          <SectionTitle number="01">Experience</SectionTitle>
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
          <SectionTitle number="02">Education &amp; toolkit</SectionTitle>
          <article className="education-card">
            <div className="school-mark" aria-hidden="true">
              UBC
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
          <SectionTitle number="03">Selected projects</SectionTitle>
          <div className="project-grid">
            {projects.map((project, index) => {
              const card = (
                <>
                  <div className="project-topline">
                    <span className="project-number">0{index + 1}</span>
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
          <SectionTitle number="04">Technical writing</SectionTitle>
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
          <p className="card-eyebrow">Have an ambitious problem?</p>
          <h2>Let&apos;s turn ambiguity into something that ships.</h2>
          <p>
            I&apos;m always happy to compare notes on enterprise AI,
            forward-deployed engineering, product architecture, and the work of
            moving prototypes into production.
          </p>
          <div className="contact-actions">
            <a className="primary-action" href="mailto:briansun@alumni.ubc.ca">
              <Mail aria-hidden="true" /> Email Brian
            </a>
          </div>
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
