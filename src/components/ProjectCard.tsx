type ResourceLink = {
  label: string;
  href?: string;
};

type ProjectCardProps = {
  decisionsLabel: string;
  resourcesLabel: string;
  stackLabelPrefix: string;
  project: {
    name: string;
    type: string;
    status: string;
    summary: string;
    impact: string;
    stack: string[];
    decisions: string[];
    resources: ResourceLink[];
  };
};

export function ProjectCard({
  decisionsLabel,
  project,
  resourcesLabel,
  stackLabelPrefix,
}: ProjectCardProps) {
  const visibleResources = project.resources.filter((resource) => resource.href);

  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{project.type}</span>
        <span>{project.status}</span>
      </div>

      <h3>{project.name}</h3>
      <p className="project-card__summary">{project.summary}</p>
      <p className="project-card__impact">{project.impact}</p>

      <div className="tag-list" aria-label={`${stackLabelPrefix} ${project.name}`}>
        {project.stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>

      <div className="project-card__section">
        <h4>{decisionsLabel}</h4>
        <ul>
          {project.decisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </div>

      {visibleResources.length > 0 ? (
        <div className="project-card__resources" aria-label={resourcesLabel}>
          {visibleResources.map((resource) => (
            <a
              key={`${project.name}-${resource.label}`}
              href={resource.href}
              target={resource.href?.startsWith("http") ? "_blank" : undefined}
              rel={resource.href?.startsWith("http") ? "noreferrer" : undefined}
            >
              {resource.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
