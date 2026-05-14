import { useEffect, useState } from "react";
import { ActionLink } from "./components/ActionLink";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import {
  detectLanguage,
  persistLanguage,
  portfolioContent,
  type Language,
} from "./content/portfolio";

function App() {
  const [language, setLanguage] = useState<Language>(() => detectLanguage());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const content = portfolioContent[language];

  useEffect(() => {
    persistLanguage(language);
    document.documentElement.lang = language;
    document.title = content.meta.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", content.meta.description);
    }
  }, [content.meta.description, content.meta.title, language]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-shell">
      <Header
        items={content.navigation}
        name={content.profile.name}
        navLabel={content.a11y.navLabel}
        role={content.profile.role}
        rightSlot={
          <div
            aria-label={content.languageSwitcher.ariaLabel}
            className="language-switch"
            role="group"
          >
            <button
              className={`language-switch__button ${language === "es" ? "is-active" : ""}`}
              onClick={() => setLanguage("es")}
              type="button"
            >
              {content.languageSwitcher.es}
            </button>
            <button
              className={`language-switch__button ${language === "en" ? "is-active" : ""}`}
              onClick={() => setLanguage("en")}
              type="button"
            >
              {content.languageSwitcher.en}
            </button>
          </div>
        }
      />

      <main>
        <section className="hero section" id="top">
          <div className="hero__copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.profile.title}</h1>
            <p className="hero__summary">{content.profile.summary}</p>
            <p className="hero__framing">{content.profile.framing}</p>

            <div className="hero__actions">
              {content.primaryActions.map((action) => (
                <ActionLink
                  key={action.label}
                  href={action.href}
                  label={action.label}
                  download={action.download}
                  variant={action.variant}
                />
              ))}
            </div>

            <div className="signal-grid">
              {content.heroSignals.map((signal) => (
                <article key={signal.title} className="signal-card">
                  <h2>{signal.title}</h2>
                  <p>{signal.body}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero__panel">
            <div className="hero-panel">
              <p className="eyebrow">{content.hero.panelEyebrow}</p>
              <h2>{content.hero.panelTitle}</h2>
              <p>{content.hero.panelBody}</p>

              <div className="workflow-list">
                {content.heroWorkflows.map((workflow) => (
                  <section key={workflow.title} className="workflow-card">
                    <h3>{workflow.title}</h3>
                    <ul>
                      {workflow.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="hero-panel__footer">
                <span>{content.profile.location}</span>
                <span>React, .NET, Proxmox, Docker, k3s</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="projects">
          <SectionHeading
            eyebrow={content.sections.projects.eyebrow}
            title={content.sections.projects.title}
            description={content.sections.projects.description}
          />

          <div className="project-grid">
            {content.featuredProjects.map((project) => (
              <ProjectCard
                decisionsLabel={content.sections.projects.decisionsLabel}
                key={project.name}
                project={project}
                resourcesLabel={content.a11y.projectResources}
                stackLabelPrefix={content.a11y.projectStackPrefix}
              />
            ))}
          </div>
        </section>

        <section className="section section--soft" id="desktop">
          <SectionHeading
            eyebrow={content.sections.desktop.eyebrow}
            title={content.sections.desktop.title}
            description={content.sections.desktop.description}
          />

          <div className="desktop-layout">
            <div className="desktop-copy">
              <article className="feature-panel">
                <p className="eyebrow">{content.desktopFocus.eyebrow}</p>
                <h3>{content.desktopFocus.title}</h3>
                <p>{content.desktopFocus.description}</p>
              </article>

              <div className="capability-grid">
                {content.desktopFocus.capabilities.map((capability) => (
                  <article key={capability.label} className="capability-card">
                    <h4>{capability.label}</h4>
                    <p>{capability.value}</p>
                  </article>
                ))}
              </div>

              <div className="split-note-grid">
                <article className="note-card">
                  <h4>{content.sections.desktop.decisionsLabel}</h4>
                  <ul>
                    {content.desktopFocus.decisions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>

                <article className="note-card">
                  <h4>{content.sections.desktop.valueLabel}</h4>
                  <ul>
                    {content.desktopFocus.notes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>

            <div className="desktop-visual" aria-hidden="true">
              <div className="mock-window">
                <div className="mock-window__topbar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="mock-window__body">
                  <div className="mock-window__scene">
                    <div className="scene-panel scene-panel--source">
                      <p className="scene-label">{content.sections.desktop.visualSource}</p>
                      <div className="scene-line scene-line--long" />
                      <div className="scene-line scene-line--mid" />
                      <div className="scene-line scene-line--short" />
                    </div>

                    <div className="scene-overlay">
                      <p className="scene-label">{content.sections.desktop.visualOverlay}</p>
                      <div className="overlay-badge">{content.sections.desktop.visualLive}</div>
                      <div className="scene-line scene-line--long" />
                      <div className="scene-line scene-line--mid" />
                    </div>
                  </div>

                  <div className="mock-window__stats">
                    <div>
                      <span>{content.sections.desktop.visualCapture}</span>
                      <strong>Windows.Graphics.Capture</strong>
                    </div>
                    <div>
                      <span>{content.sections.desktop.visualOcr}</span>
                      <strong>Windows.Media.Ocr</strong>
                    </div>
                    <div>
                      <span>{content.sections.desktop.visualRuntime}</span>
                      <strong>.NET 8 / WPF</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="platform">
          <SectionHeading
            eyebrow={content.sections.platform.eyebrow}
            title={content.sections.platform.title}
            description={content.sections.platform.description}
          />

          <div className="platform-overview">
            <article className="platform-overview__primary">
              <h3>{content.platformSummary.title}</h3>
              <p>{content.platformSummary.summary}</p>

              <div className="platform-overview__list">
                {content.platformSummary.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>

            <article className="platform-overview__secondary">
              <h3>{content.sections.platform.incidentsTitle}</h3>
              <ul>
                {content.platformSummary.incidents.map((incident) => (
                  <li key={incident}>{incident}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="pillar-grid">
            {content.platformPillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
                <div className="tag-list">
                  {pillar.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="evolution-block">
            <div className="evolution-block__header">
              <h3>{content.sections.platform.evolutionTitle}</h3>
              <p>{content.sections.platform.evolutionBody}</p>
            </div>

            <div className="evolution-grid">
              {content.platformEvolution.map((step) => (
                <article key={step.phase} className="evolution-card">
                  <span>{step.phase}</span>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--about" id="about">
          <SectionHeading
            eyebrow={content.sections.about.eyebrow}
            title={content.about.title}
            description={content.about.summary}
          />

          <div className="principles-grid">
            {content.about.principles.map((principle) => (
              <article key={principle.title} className="principle-card">
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="contact-card">
            <div className="contact-card__intro">
              <p className="eyebrow">{content.sections.contact.eyebrow}</p>
              <h2>{content.contact.title}</h2>
              <p>{content.contact.summary}</p>
            </div>

            <div className="contact-grid">
              {content.contact.links.map((link) => (
                <a
                  key={link.label}
                  className="contact-link"
                  href={link.href}
                  download={link.download}
                  target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <button
        aria-label={content.a11y.backToTop}
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        type="button"
      >
        <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}

export default App;
