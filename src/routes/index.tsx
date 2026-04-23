import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowDown, Download, Mail, Phone, MapPin, Linkedin, ExternalLink, Code2, Library, Database, BarChart3, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import avatarImg from "@/assets/avatar.jpeg";
import { Section } from "@/components/Section";
import { BackToTop } from "@/components/BackToTop";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manukonda Sri Lakshmi — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Manukonda Sri Lakshmi, B.Tech ECE student and aspiring data analyst skilled in Python, SQL, and Power BI.",
      },
      { property: "og:title", content: "Manukonda Sri Lakshmi — Portfolio" },
      {
        property: "og:description",
        content: "Aspiring data analyst — Python, SQL, Power BI.",
      },
    ],
  }),
  component: Portfolio,
});

const education = [
  {
    title: "B.Tech, Electronics and Communication Engineering",
    place: "Chalapathi Institute of Technology, Guntur",
    score: "CGPA 8.44",
    period: "2022 — 2026",
  },
  {
    title: "Intermediate",
    place: "Vidyakendram Junior College, Sattenapalli",
    score: "70.2%",
    period: "2020 — 2022",
  },
  {
    title: "Secondary Education",
    place: "Pragati Talent School, Sattenapalli",
    score: "97.6%",
    period: "2019 — 2020",
  },
];

const skills = [
  { group: "Programming", icon: Code2, items: ["Python"] },
  { group: "Python Libraries", icon: Library, items: ["Pandas", "NumPy", "Matplotlib"] },
  { group: "Data Analysis", icon: Database, items: ["SQL", "Data Cleaning", "Report Generation"] },
  { group: "Visualization", icon: BarChart3, items: ["Power BI", "MS Excel"] },
  { group: "Soft Skills", icon: Sparkles, items: ["Communication", "Analytical Thinking", "Problem Solving", "Leadership"] },
];

const projects = [
  {
    title: "Sales Analysis Project",
    body: "Analyzed product sales data across multiple regions to identify revenue trends, top-performing products, and region-wise performance. Cleaned and organized raw data, calculated key metrics such as total sales, average revenue, and growth percentage, and built pivot tables and dashboards for visualization.",
    tags: ["Excel", "Pandas", "Power BI"],
  },
  {
    title: "Student Performance Analysis Project",
    body: "Performed analysis on student exam data to evaluate marks, pass/fail status, and overall academic performance. Applied data cleaning techniques, calculated averages and pass percentages, and categorized students based on performance levels with visual reports.",
    tags: ["Python", "Pandas", "Matplotlib"],
  },
];

const achievements = [
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    body: "Certified in Python programming with practical exposure to data handling, data analysis, and automation using Python libraries.",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Quantium (Forage)",
    body: "Completed practical tasks in data preparation, customer analytics, and experimentation analysis to support business decision-making with real-world datasets.",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    body: "Certified in AI fundamentals with knowledge of machine learning basics, AI concepts, and real-world business applications.",
  },
];

function Portfolio() {
  useReveal();
  useEffect(() => {
    document.documentElement.id = "top";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container-prose">
          <p className="reveal text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Portfolio · 2026
          </p>
          <div className="reveal flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05]">
              Manukonda
              <br />
              Sri Lakshmi.
            </h1>
            <img
              src={avatarImg}
              alt="Portrait of Manukonda Sri Lakshmi"
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 rounded-3xl object-cover shadow-soft border border-border shrink-0"
              loading="eager"
            />
          </div>
          <p className="reveal mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Aspiring data analyst and B.Tech ECE student. I turn raw data into
            clear, useful insights using Python, SQL, and Power BI — committed
            to learning, growing, and contributing meaningfully.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <a
              href="/resume.jpeg"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground hover:text-foreground transition"
            >
              Explore <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="reveal mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Palnadu, Andhra Pradesh
            </span>
            <a
              href="mailto:srilakshmimanukonda393@gmail.com"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> srilakshmimanukonda393@gmail.com
            </a>
            <a href="tel:+918186827290" className="inline-flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4" /> +91 81868 27290
            </a>
          </div>
        </div>
      </section>

      {/* About / Career Objective */}
      <Section id="about" eyebrow="Career Objective" title="A learner, building toward impact.">
        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Seeking an entry-level position where I can apply my technical skills
          to contribute positively to the company&rsquo;s objectives. Committed
          to professional growth and development, I aim to leverage my academic
          background and enthusiasm to make valuable contributions while
          continuously learning and adapting to new challenges.
        </p>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education" title="Academic background." tone="invert">
        <ul className="divide-y divide-border">
          {education.map((e) => (
            <li
              key={e.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6"
            >
              <div className="md:col-span-3 text-sm text-muted-foreground">
                {e.period}
              </div>
              <div className="md:col-span-7">
                <h3 className="text-lg font-medium">{e.title}</h3>
                <p className="text-muted-foreground">{e.place}</p>
              </div>
              <div className="md:col-span-2 md:text-right text-sm font-medium">
                {e.score}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Skills" title="Tools & strengths.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.group}
                className="rounded-2xl border border-border p-6 bg-card text-card-foreground hover:shadow-soft transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {s.group}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Mini Projects" title="Selected work." tone="invert">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border p-7 bg-card hover:shadow-soft transition"
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium opacity-70 group-hover:opacity-100 transition">
                View more <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" eyebrow="Achievements" title="Certifications.">
        <ul className="divide-y divide-border">
          {achievements.map((a) => (
            <li key={a.title} className="grid md:grid-cols-12 gap-4 py-6">
              <div className="md:col-span-4">
                <h3 className="text-lg font-medium">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.issuer}</p>
              </div>
              <p className="md:col-span-8 text-muted-foreground leading-relaxed">
                {a.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Get in touch" title="Let's connect." tone="invert">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Open to entry-level opportunities in data analytics and related
              roles. Reach out via email or LinkedIn — I&rsquo;d love to hear
              from you.
            </p>
            <a
              href="mailto:srilakshmimanukonda393@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              <Mail className="h-4 w-4" /> Send a message
            </a>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
            {[
              {
                href: "mailto:srilakshmimanukonda393@gmail.com",
                icon: Mail,
                label: "Email",
                value: "srilakshmimanukonda393@gmail.com",
              },
              {
                href: "tel:+918186827290",
                icon: Phone,
                label: "Phone",
                value: "+91 81868 27290",
              },
              {
                href: "https://www.linkedin.com/in/srilakshmi-manukonda-353400376",
                icon: Linkedin,
                label: "LinkedIn",
                value: "srilakshmi-manukonda",
                external: true,
              },
              {
                href: "#top",
                icon: MapPin,
                label: "Location",
                value: "Palnadu, Andhra Pradesh",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="group rounded-2xl border border-border p-5 hover:bg-accent hover:text-accent-foreground transition flex items-start gap-4"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm font-medium truncate">
                      {c.value}
                    </p>
                  </div>
                  {c.external && (
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-16 text-xs text-muted-foreground italic max-w-2xl">
          &ldquo;I hereby declare the information furnished above is true and
          correct to the best of my knowledge and belief.&rdquo;
        </p>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="container-prose flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Manukonda Sri Lakshmi.</p>
          <p>Designed with clarity & care.</p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
