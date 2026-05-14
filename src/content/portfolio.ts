export type Language = "es" | "en";

const LANGUAGE_STORAGE_KEY = "portfolio-language";

type NavigationItem = {
  label: string;
  href: string;
};

type ActionItem = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

type Project = {
  name: string;
  type: string;
  status: string;
  summary: string;
  impact: string;
  stack: string[];
  decisions: string[];
  resources: Array<{ label: string; href?: string }>;
};

type PortfolioContent = {
  meta: {
    title: string;
    description: string;
  };
  a11y: {
    navLabel: string;
    projectResources: string;
    projectStackPrefix: string;
    backToTop: string;
  };
  navigation: NavigationItem[];
  profile: {
    name: string;
    role: string;
    title: string;
    summary: string;
    framing: string;
    location: string;
  };
  languageSwitcher: {
    ariaLabel: string;
    es: string;
    en: string;
  };
  primaryActions: ActionItem[];
  hero: {
    eyebrow: string;
    panelEyebrow: string;
    panelTitle: string;
    panelBody: string;
  };
  heroSignals: Array<{ title: string; body: string }>;
  heroWorkflows: Array<{ title: string; items: string[] }>;
  sections: {
    projects: {
      eyebrow: string;
      title: string;
      description: string;
      decisionsLabel: string;
    };
    desktop: {
      eyebrow: string;
      title: string;
      description: string;
      decisionsLabel: string;
      valueLabel: string;
      visualSource: string;
      visualOverlay: string;
      visualLive: string;
      visualCapture: string;
      visualOcr: string;
      visualRuntime: string;
    };
    platform: {
      eyebrow: string;
      title: string;
      description: string;
      incidentsTitle: string;
      evolutionTitle: string;
      evolutionBody: string;
    };
    about: {
      eyebrow: string;
    };
    contact: {
      eyebrow: string;
    };
  };
  featuredProjects: Project[];
  desktopFocus: {
    eyebrow: string;
    title: string;
    description: string;
    capabilities: Array<{ label: string; value: string }>;
    decisions: string[];
    notes: string[];
  };
  platformSummary: {
    title: string;
    summary: string;
    highlights: string[];
    incidents: string[];
  };
  platformPillars: Array<{
    title: string;
    summary: string;
    stack: string[];
  }>;
  platformEvolution: Array<{
    phase: string;
    title: string;
    body: string;
  }>;
  about: {
    title: string;
    summary: string;
    principles: Array<{ title: string; body: string }>;
  };
  contact: {
    title: string;
    summary: string;
    links: Array<{ label: string; href: string; value: string; download?: boolean }>;
  };
};

export function detectLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  const storedLanguage = window.localStorage.getItem(
    LANGUAGE_STORAGE_KEY,
  ) as Language | null;

  if (storedLanguage === "es" || storedLanguage === "en") {
    return storedLanguage;
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  const prefersEnglish = browserLanguages.some((language) =>
    language.toLowerCase().startsWith("en"),
  );

  return prefersEnglish ? "en" : "es";
}

export function persistLanguage(language: Language) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
}

export const portfolioContent: Record<Language, PortfolioContent> = {
  es: {
    meta: {
      title: "Jose Alberto Enriquez | Desarrollo, despliegue e infraestructura",
      description:
        "Portafolio profesional de desarrollo, desktop, automatizacion de despliegues e infraestructura operada en Proxmox con base practica en k3s.",
    },
    a11y: {
      navLabel: "Navegacion principal",
      projectResources: "Recursos del proyecto",
      projectStackPrefix: "Stack de",
      backToTop: "Volver arriba",
    },
    navigation: [
      { label: "Inicio", href: "#top" },
      { label: "Proyectos", href: "#projects" },
      { label: "Desktop", href: "#desktop" },
      { label: "Proxmox Lab", href: "#platform" },
      { label: "Sobre mi", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    profile: {
      name: "Jose Alberto Enriquez",
      role: "Desarrollo, despliegue e infraestructura",
      title: "Construyo software util y lo llevo hasta produccion con criterio tecnico.",
      summary:
        "Desarrollo aplicaciones web y de escritorio, automatizo despliegues y mantengo infraestructura propia en Proxmox con observabilidad, logging, versionado, publicacion segura y una base practica en Kubernetes/k3s. Mi experiencia profesional parte del desarrollo full stack en entornos .NET y Angular desde 2018.",
      framing:
        "Mi perfil combina experiencia full stack, capacidad real de entrega y operacion de infraestructura propia, con foco en software util, decisiones tecnicas claras y entornos desplegados de forma responsable.",
      location: "Madrid, Espana / remoto",
    },
    languageSwitcher: {
      ariaLabel: "Selector de idioma",
      es: "ES",
      en: "EN",
    },
    primaryActions: [
      {
        label: "GitHub",
        href: "https://github.com/josealbertoenriquezp",
        variant: "primary",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/jos%C3%A9-alberto-enriquez-pincay-7b02a8163",
        variant: "secondary",
      },
      {
        label: "Descargar CV",
        href: "/cv-jose-alberto-enriquez.pdf",
        variant: "secondary",
        download: true,
      },
      { label: "Contacto", href: "#contact", variant: "ghost" },
    ],
    hero: {
      eyebrow: "React, .NET, desktop e infraestructura",
      panelEyebrow: "Entrega e infraestructura",
      panelTitle: "Del codigo al servicio publicado.",
      panelBody:
        "Cada proyecto importante conecta construccion de producto, despliegue versionado y una capa operativa real sobre infraestructura propia.",
    },
    heroSignals: [
      {
        title: "Entrega versionada",
        body: "Builds en GitHub Actions, imagenes en GHCR y despliegues orientados a rollback por tag.",
      },
      {
        title: "Desktop diferencial",
        body: "ChatLens integra OCR local, overlay y APIs nativas de Windows sobre .NET 8 y WPF.",
      },
      {
        title: "Infraestructura propia",
        body: "Proxmox, VMs/LXC, Docker, Traefik, observabilidad y publicacion segura en un entorno operado por ti.",
      },
      {
        title: "Evolucion a k3s",
        body: "k3s aparece como una progresion tecnica natural desde una base ya estable de contenedores y operacion.",
      },
    ],
    heroWorkflows: [
      {
        title: "Ruta de entrega",
        items: [
          "Codigo fuente",
          "GitHub Actions",
          "Imagen versionada en GHCR",
          "Despliegue en Docker host",
          "Traefik + Cloudflare Tunnel",
        ],
      },
      {
        title: "Base de plataforma",
        items: [
          "Proxmox como capa de virtualizacion",
          "Ubuntu Server en VMs separadas por rol",
          "LXC para servicios ligeros",
          "Observabilidad y logging centralizados",
          "k3s como siguiente capa de orquestacion",
        ],
      },
    ],
    sections: {
      projects: {
        eyebrow: "Proyectos seleccionados",
        title: "Solo las piezas que aportan evidencia laboral clara.",
        description:
          "La seleccion prioriza proyectos con valor demostrable: software util, despliegue real, decisiones tecnicas explicables y una historia de evolucion que puedas defender en entrevista.",
        decisionsLabel: "Decisiones tecnicas",
      },
      desktop: {
        eyebrow: "Apps de escritorio",
        title: "ChatLens merece una seccion propia porque cambia la lectura del perfil.",
        description:
          "No se presenta como una app curiosa. Se presenta como software de escritorio tecnicamente exigente, distribuible y construido sobre capacidades nativas de Windows.",
        decisionsLabel: "Decisiones tecnicas",
        valueLabel: "Valor laboral",
        visualSource: "OCR source",
        visualOverlay: "Overlay translation",
        visualLive: "live",
        visualCapture: "capture",
        visualOcr: "ocr",
        visualRuntime: "runtime",
      },
      platform: {
        eyebrow: "Homelab / Proxmox",
        title: "Infraestructura operada en Proxmox, con despliegue, observabilidad y evolucion a k3s.",
        description:
          "La infraestructura se presenta como evidencia de autonomia tecnica: separacion por responsabilidades, observabilidad, logging, acceso seguro, publicacion controlada y una evolucion ya integrada hacia k3s.",
        incidentsTitle: "Incidentes y decisiones que puedes explicar",
        evolutionTitle: "Evolucion tecnica del laboratorio",
        evolutionBody:
          "Kubernetes no aparece como buzzword. Aparece como la siguiente capa logica despues de estabilizar despliegue, observabilidad y operacion en Docker/Compose.",
      },
      about: {
        eyebrow: "Sobre mi",
      },
      contact: {
        eyebrow: "Contacto",
      },
    },
    featuredProjects: [
      {
        name: "ai-models-directory",
        type: "Aplicacion web publica",
        status: "Activo y desplegado",
        summary:
          "Aplicacion web desplegada sobre infraestructura propia para demostrar no solo desarrollo frontend, sino tambien entrega continua, versionado y operacion real.",
        impact:
          "Demuestra un flujo completo de desarrollo + despliegue + observabilidad + exposicion segura sobre una plataforma que controlas end to end.",
        stack: [
          "React 18",
          "Vite",
          "Docker",
          "Nginx",
          "GitHub Actions",
          "GHCR",
          "Traefik",
          "Cloudflare Tunnel",
          "Proxmox",
        ],
        decisions: [
          "Construir imagenes fuera del host para reducir drift y simplificar la repetibilidad del despliegue.",
          "Publicar versiones en GHCR y desplegar por tag para tener rollback claro y trazable.",
          "Exponer el servicio mediante Traefik y Cloudflare Tunnel sin abrir puertos publicos del router.",
        ],
        resources: [
          { label: "Demo publica", href: "https://aimodels.jaenriquez.com" },
          { label: "Relacion con la plataforma", href: "#platform" },
        ],
      },
      {
        name: "ChatLens",
        type: "Aplicacion de escritorio Windows",
        status: "Funcional y portable",
        summary:
          "Traductor universal en tiempo real para juegos, videos y aplicaciones mediante overlay, OCR local y captura moderna de pantalla en Windows.",
        impact:
          "Es la pieza diferencial del portafolio: demuestra desktop avanzado, integracion con APIs nativas, rendimiento cuidado y criterio de distribucion.",
        stack: [
          ".NET 8",
          "C# 12",
          "WPF",
          "Clean Architecture",
          "Windows.Graphics.Capture",
          "Direct3D 11",
          "Windows.Media.Ocr",
        ],
        decisions: [
          "Separar captura, OCR, traduccion y overlay para mantener una arquitectura entendible y extensible.",
          "Usar OCR local para reducir dependencia externa y mejorar la latencia percibida.",
          "Empaquetar como release portable self-contained para facilitar pruebas y distribucion directa.",
        ],
        resources: [
          { label: "Ver detalle desktop", href: "#desktop" },
        ],
      },
      {
        name: "Homelab / Plataforma Proxmox",
        type: "Plataforma operativa",
        status: "Activo y en evolucion",
        summary:
          "Plataforma autoalojada en mini PC con Proxmox, VMs, LXC, observabilidad, logging, CI/CD, exposicion segura y evolucion ya integrada hacia k3s.",
        impact:
          "No se presenta como hobby. Se presenta como evidencia de autonomia tecnica, operaciones reales y decisiones razonadas sobre despliegue, red, acceso y trazabilidad.",
        stack: [
          "Proxmox",
          "Ubuntu Server",
          "Docker",
          "Docker Compose",
          "Traefik",
          "Prometheus",
          "Grafana",
          "Loki",
          "Promtail",
          "WireGuard",
          "Pi-hole",
          "k3s",
        ],
        decisions: [
          "Separar roles por VM para evitar mezclar workloads, observabilidad y componentes de acceso.",
          "Centralizar metricas y logs para hacer troubleshooting de forma mas rigurosa.",
          "Usar WireGuard para administracion privada y Cloudflare Tunnel para publicacion externa segura.",
        ],
        resources: [
          { label: "Ver detalle de plataforma", href: "#platform" },
        ],
      },
    ],
    desktopFocus: {
      eyebrow: "Pieza diferencial",
      title: "ChatLens convierte la parte desktop en una ventaja real, no en una nota al margen.",
      description:
        "La aplicacion resuelve un problema concreto de experiencia de usuario y lo hace con decisiones tecnicas que no suelen aparecer en portfolios genericos: captura moderna de pantalla, OCR local, overlay sobre aplicaciones de terceros y empaquetado portable listo para probar.",
      capabilities: [
        { label: "Stack base", value: ".NET 8, C# 12, WPF, Clean Architecture" },
        {
          label: "Captura y render",
          value: "Windows.Graphics.Capture y Direct3D 11 para integracion moderna con Windows",
        },
        {
          label: "OCR y traduccion",
          value: "Windows.Media.Ocr local con flujo de traduccion asincrono",
        },
        {
          label: "Distribucion",
          value: "Release self-contained single file para pruebas directas sin instalacion compleja",
        },
      ],
      decisions: [
        "Mantener el OCR local reduce latencia y dependencia de terceros en la parte critica del flujo.",
        "El overlay permite conservar el contexto del usuario sin obligarle a cambiar de ventana.",
        "La arquitectura separa concerns tecnicos complejos sin convertir la app en una pieza rigida.",
      ],
      notes: [
        "Demuestra trabajo con APIs nativas de Windows, no solo UI de escritorio.",
        "Demuestra sensibilidad por rendimiento, tiempos de respuesta y experiencia de uso real.",
        "Refuerza una narrativa de software distribuible, util y tecnicamente exigente.",
      ],
    },
    platformSummary: {
      title: "Homelab / Proxmox Lab",
      summary:
        "La plataforma personal se presenta como entorno operativo serio para desplegar y evolucionar servicios, no como una lista de contenedores sin historia. Hay separacion de responsabilidades, pipeline versionado, publicacion segura, observabilidad, logging y una evolucion clara hacia k3s.",
      highlights: [
        "Proxmox como base de virtualizacion",
        "VMs Ubuntu Server y LXC segun tipo de carga",
        "Docker y Compose para despliegue inicial estable",
        "GitHub Actions + GHCR + self-hosted runner para entrega",
        "Prometheus, Grafana, Loki y Promtail para observabilidad",
        "Cloudflare Tunnel y WireGuard para exposicion y acceso seguro",
        "k3s integrado como paso siguiente de madurez operativa",
      ],
      incidents: [
        "Autenticacion con GHCR y credenciales Docker del usuario del host.",
        "404 en publicacion externa al detectar desajuste entre trafico HTTP del tunel y router configurado solo para HTTPS.",
        "Separacion de monitoring y exporters al mover observabilidad a una VM dedicada.",
        "Adaptacion progresiva desde Compose hacia un modelo de orquestacion mas estructurado con k3s.",
      ],
    },
    platformPillars: [
      {
        title: "Base de plataforma",
        summary:
          "Virtualizacion con Proxmox sobre mini PC, VMs Ubuntu Server y LXC diferenciados por rol, con una estructura pensada para crecer sin mezclar responsabilidades.",
        stack: ["Proxmox", "Ubuntu Server", "VMs", "LXC"],
      },
      {
        title: "Entrega y versionado",
        summary:
          "Builds en GitHub Actions, publicacion de imagenes en GHCR, despliegue por version y rollback por tag para evitar dependencias de build local en el servidor.",
        stack: ["GitHub Actions", "GHCR", "Docker", "Self-hosted runner"],
      },
      {
        title: "Observabilidad y logging",
        summary:
          "Metricas y logs centralizados para mirar el entorno como una plataforma operada y no como un conjunto de contenedores aislados.",
        stack: ["Prometheus", "Grafana", "Node Exporter", "cAdvisor", "Loki", "Promtail"],
      },
      {
        title: "Publicacion segura",
        summary:
          "Exposicion externa con Traefik y Cloudflare Tunnel, y administracion privada con WireGuard para reducir superficie publica innecesaria.",
        stack: ["Traefik", "Cloudflare Tunnel", "WireGuard", "Pi-hole"],
      },
      {
        title: "Evolucion a k3s",
        summary:
          "k3s se integra como progresion natural desde un entorno Compose ya estable hacia una capa ligera de orquestacion y platform thinking.",
        stack: ["k3s", "Services", "Ingress", "Cluster workloads"],
      },
    ],
    platformEvolution: [
      {
        phase: "01",
        title: "Base estable de despliegue",
        body: "Primero se consolida una base clara con Proxmox, VMs, Docker, reverse proxy y publicacion segura.",
      },
      {
        phase: "02",
        title: "Observabilidad operativa",
        body: "Despues se separan metricas y logs del workload principal para mejorar troubleshooting y trazabilidad.",
      },
      {
        phase: "03",
        title: "Entrega repetible",
        body: "La build sale del host y pasa a GitHub Actions + GHCR, con despliegues por version y rollback trazable.",
      },
      {
        phase: "04",
        title: "k3s como siguiente capa",
        body: "Una vez establecida la operacion base, k3s entra como paso logico hacia orquestacion ligera.",
      },
    ],
    about: {
      title: "Trabajo bien cuando el software tiene que llegar a un entorno real y seguir funcionando despues del deploy.",
      summary:
        "Cuento con experiencia profesional en desarrollo full stack desde 2018, trabajando con aplicaciones web, APIs y mantenimiento evolutivo sobre stacks como .NET, ASP.NET MVC, .NET Core, Angular, React, SQL Server, PostgreSQL y MariaDB. Actualmente sigo en BcDigital y en el proyecto de OHL con React y .NET. Me interesan equipos donde desarrollo, automatizacion y operacion no estan separados por completo.",
      principles: [
        {
          title: "Base profesional real",
          body: "He trabajado en desarrollo y mantenimiento de aplicaciones web, web services y APIs en entornos de cliente con necesidades de continuidad y evolucion.",
        },
        {
          title: "Experiencia actual",
          body: "Mi trabajo actual sigue conectado a producto real y mantenimiento evolutivo, con foco en React y .NET dentro del proyecto de OHL.",
        },
        {
          title: "Producto y operacion conectados",
          body: "Una app no termina en el ultimo commit. Tambien importa como se publica, se observa y se recupera.",
        },
        {
          title: "Decisiones explicables",
          body: "Me interesa poder argumentar por que un flujo, una topologia o una herramienta tiene sentido para el problema real.",
        },
        {
          title: "Complejidad gradual",
          body: "Prefiero evolucionar la plataforma por capas: primero lo estable, despues lo escalable y por ultimo lo sofisticado.",
        },
      ],
    },
    contact: {
      title: "Disponible para oportunidades donde desarrollo, entrega y operacion formen parte del mismo nivel de exigencia.",
      summary:
        "Puedes revisar mi experiencia, proyectos y forma de trabajo aqui, y ampliar informacion mediante GitHub, LinkedIn o el CV descargable.",
      links: [
        {
          label: "Email",
          href: "mailto:josealbertoenriquezp@gmail.com",
          value: "josealbertoenriquezp@gmail.com",
        },
        {
          label: "GitHub",
          href: "https://github.com/josealbertoenriquezp",
          value: "github.com/josealbertoenriquezp",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/jos%C3%A9-alberto-enriquez-pincay-7b02a8163",
          value: "linkedin.com/in/jose-alberto-enriquez-pincay-7b02a8163",
        },
        {
          label: "Descargar CV",
          href: "/cv-jose-alberto-enriquez.pdf",
          value: "Descargar CV",
          download: true,
        },
        {
          label: "CV web",
          href: "/cv-ja-enriquez.html",
          value: "Ver version detallada web",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Jose Alberto Enriquez | Software, delivery and infrastructure",
      description:
        "Professional portfolio focused on software development, desktop applications, deployment automation and self-operated Proxmox infrastructure with practical k3s experience.",
    },
    a11y: {
      navLabel: "Primary navigation",
      projectResources: "Project resources",
      projectStackPrefix: "Stack for",
      backToTop: "Back to top",
    },
    navigation: [
      { label: "Home", href: "#top" },
      { label: "Projects", href: "#projects" },
      { label: "Desktop", href: "#desktop" },
      { label: "Proxmox Lab", href: "#platform" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    profile: {
      name: "Jose Alberto Enriquez",
      role: "Software, delivery and infrastructure",
      title: "I build useful software and carry it through to production with technical discipline.",
      summary:
        "I build web and desktop applications, automate deployments and run my own Proxmox infrastructure with observability, logging, versioned delivery, secure publishing and practical Kubernetes/k3s experience. My professional background is rooted in full stack development on .NET and Angular since 2018.",
      framing:
        "My profile combines full stack experience, real delivery capability and self-operated infrastructure, with a focus on useful software, clear technical decisions and responsibly deployed systems.",
      location: "Madrid, Spain / remote",
    },
    languageSwitcher: {
      ariaLabel: "Language switcher",
      es: "ES",
      en: "EN",
    },
    primaryActions: [
      {
        label: "GitHub",
        href: "https://github.com/josealbertoenriquezp",
        variant: "primary",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/jos%C3%A9-alberto-enriquez-pincay-7b02a8163",
        variant: "secondary",
      },
      {
        label: "Download CV",
        href: "/cv-jose-alberto-enriquez.pdf",
        variant: "secondary",
        download: true,
      },
      { label: "Contact", href: "#contact", variant: "ghost" },
    ],
    hero: {
      eyebrow: "React, .NET, desktop and infrastructure",
      panelEyebrow: "Delivery and infrastructure",
      panelTitle: "From code to a published service.",
      panelBody:
        "Each important project connects product work, versioned delivery and a real operational layer running on self-managed infrastructure.",
    },
    heroSignals: [
      {
        title: "Versioned delivery",
        body: "GitHub Actions builds, GHCR images and deployments designed around tag-based rollback.",
      },
      {
        title: "Differentiated desktop work",
        body: "ChatLens combines local OCR, overlay rendering and native Windows APIs on .NET 8 and WPF.",
      },
      {
        title: "Owned infrastructure",
        body: "Proxmox, VMs/LXC, Docker, Traefik, observability and secure publishing in an environment I operate myself.",
      },
      {
        title: "Evolution to k3s",
        body: "k3s appears as a natural technical progression from an already stable base of containers and operations.",
      },
    ],
    heroWorkflows: [
      {
        title: "Delivery path",
        items: [
          "Source code",
          "GitHub Actions",
          "Versioned image in GHCR",
          "Deployment on Docker host",
          "Traefik + Cloudflare Tunnel",
        ],
      },
      {
        title: "Platform foundation",
        items: [
          "Proxmox as the virtualization layer",
          "Ubuntu Server VMs split by role",
          "LXC for lightweight services",
          "Centralized observability and logging",
          "k3s as the next orchestration layer",
        ],
      },
    ],
    sections: {
      projects: {
        eyebrow: "Selected work",
        title: "Only the pieces that offer clear hiring value.",
        description:
          "The selection prioritizes evidence-based work: useful software, real deployment, explainable technical decisions and a project story that holds up in interviews.",
        decisionsLabel: "Technical decisions",
      },
      desktop: {
        eyebrow: "Desktop applications",
        title: "ChatLens deserves its own section because it changes how the whole profile is read.",
        description:
          "It is not presented as a curious side app. It is presented as technically demanding, distributable desktop software built on native Windows capabilities.",
        decisionsLabel: "Technical decisions",
        valueLabel: "Hiring value",
        visualSource: "OCR source",
        visualOverlay: "Overlay translation",
        visualLive: "live",
        visualCapture: "capture",
        visualOcr: "ocr",
        visualRuntime: "runtime",
      },
      platform: {
        eyebrow: "Homelab / Proxmox",
        title: "Proxmox-operated infrastructure with deployment, observability and k3s evolution.",
        description:
          "The infrastructure is framed as evidence of technical autonomy: separation by responsibility, observability, logging, secure access, controlled publishing and an already integrated evolution into k3s.",
        incidentsTitle: "Incidents and decisions I can explain",
        evolutionTitle: "Technical evolution of the lab",
        evolutionBody:
          "Kubernetes is not presented as a buzzword. It is presented as the next logical layer after stabilizing deployment, observability and operations on Docker/Compose.",
      },
      about: {
        eyebrow: "About",
      },
      contact: {
        eyebrow: "Contact",
      },
    },
    featuredProjects: [
      {
        name: "ai-models-directory",
        type: "Public web application",
        status: "Active and deployed",
        summary:
          "A publicly deployed web application built on self-operated infrastructure to demonstrate not only frontend work, but also continuous delivery, versioning and real operations.",
        impact:
          "It shows a full development + deployment + observability + secure exposure flow on a platform I control end to end.",
        stack: [
          "React 18",
          "Vite",
          "Docker",
          "Nginx",
          "GitHub Actions",
          "GHCR",
          "Traefik",
          "Cloudflare Tunnel",
          "Proxmox",
        ],
        decisions: [
          "Build images outside the host to reduce drift and improve deployment repeatability.",
          "Publish versions to GHCR and deploy by tag to keep rollback explicit and traceable.",
          "Expose the service through Traefik and Cloudflare Tunnel without opening public router ports.",
        ],
        resources: [
          { label: "Public demo", href: "https://aimodels.jaenriquez.com" },
          { label: "Related platform layer", href: "#platform" },
        ],
      },
      {
        name: "ChatLens",
        type: "Windows desktop application",
        status: "Working and portable",
        summary:
          "A real-time universal translator for games, videos and applications using overlay rendering, local OCR and modern Windows screen capture.",
        impact:
          "This is the differentiating piece of the portfolio: advanced desktop work, native API integration, performance awareness and sensible distribution choices.",
        stack: [
          ".NET 8",
          "C# 12",
          "WPF",
          "Clean Architecture",
          "Windows.Graphics.Capture",
          "Direct3D 11",
          "Windows.Media.Ocr",
        ],
        decisions: [
          "Separate capture, OCR, translation and overlay concerns to keep the architecture extensible and understandable.",
          "Use local OCR to reduce external dependencies and improve perceived latency.",
          "Ship a self-contained portable release to make testing and distribution straightforward.",
        ],
        resources: [
          { label: "See desktop detail", href: "#desktop" },
        ],
      },
      {
        name: "Homelab / Proxmox Platform",
        type: "Operational platform",
        status: "Active and evolving",
        summary:
          "A self-hosted platform on a mini PC with Proxmox, VMs, LXC, observability, logging, CI/CD, secure exposure and an already integrated evolution toward k3s.",
        impact:
          "It is not presented as a hobby. It is presented as evidence of technical autonomy, real operations and reasoned decisions around deployment, networking, access and traceability.",
        stack: [
          "Proxmox",
          "Ubuntu Server",
          "Docker",
          "Docker Compose",
          "Traefik",
          "Prometheus",
          "Grafana",
          "Loki",
          "Promtail",
          "WireGuard",
          "Pi-hole",
          "k3s",
        ],
        decisions: [
          "Split roles by VM to avoid mixing workloads, observability and access components.",
          "Centralize metrics and logs to make troubleshooting more rigorous.",
          "Use WireGuard for private administration and Cloudflare Tunnel for secure public exposure.",
        ],
        resources: [
          { label: "See platform detail", href: "#platform" },
        ],
      },
    ],
    desktopFocus: {
      eyebrow: "Differentiating piece",
      title: "ChatLens turns desktop work into a real advantage, not a side note.",
      description:
        "The application solves a concrete user problem with technical decisions that do not usually appear in generic portfolios: modern screen capture, local OCR, overlay rendering on top of third-party applications and portable packaging ready to test.",
      capabilities: [
        { label: "Core stack", value: ".NET 8, C# 12, WPF, Clean Architecture" },
        {
          label: "Capture and rendering",
          value: "Windows.Graphics.Capture and Direct3D 11 for modern Windows integration",
        },
        {
          label: "OCR and translation",
          value: "Local Windows.Media.Ocr with an asynchronous translation flow",
        },
        {
          label: "Distribution",
          value: "Self-contained single-file release for straightforward testing without complex installation",
        },
      ],
      decisions: [
        "Keeping OCR local reduces latency and third-party dependency on the most critical path.",
        "The overlay preserves user context without forcing window switching.",
        "The architecture separates complex concerns without making the application rigid.",
      ],
      notes: [
        "It demonstrates work with native Windows APIs, not only desktop UI work.",
        "It shows sensitivity to performance, responsiveness and real user experience.",
        "It reinforces a narrative of useful, distributable and technically demanding software.",
      ],
    },
    platformSummary: {
      title: "Homelab / Proxmox Lab",
      summary:
        "The personal platform is presented as a serious operating environment for deploying and evolving services, not as a container list without a story. It includes separation of responsibilities, versioned delivery, secure exposure, observability, logging and a clear evolution toward k3s.",
      highlights: [
        "Proxmox as the virtualization base",
        "Ubuntu Server VMs and LXC depending on workload type",
        "Docker and Compose for a stable first deployment layer",
        "GitHub Actions + GHCR + self-hosted runner for delivery",
        "Prometheus, Grafana, Loki and Promtail for observability",
        "Cloudflare Tunnel and WireGuard for secure exposure and access",
        "k3s integrated as the next maturity step",
      ],
      incidents: [
        "GHCR authentication issues tied to Docker credentials on the host user.",
        "Public 404 during exposure caused by an HTTP tunnel hitting a router configured only for HTTPS.",
        "Separation of monitoring and exporters when moving observability to a dedicated VM.",
        "Progressive adaptation from Compose to a more structured orchestration model with k3s.",
      ],
    },
    platformPillars: [
      {
        title: "Platform foundation",
        summary:
          "Proxmox virtualization on a mini PC, with Ubuntu Server VMs and LXC separated by role, in a structure designed to grow without mixing responsibilities.",
        stack: ["Proxmox", "Ubuntu Server", "VMs", "LXC"],
      },
      {
        title: "Delivery and versioning",
        summary:
          "GitHub Actions builds, GHCR image publishing, version-based deployment and tag rollback to avoid host-local build dependency.",
        stack: ["GitHub Actions", "GHCR", "Docker", "Self-hosted runner"],
      },
      {
        title: "Observability and logging",
        summary:
          "Centralized metrics and logs so the environment can be operated as a platform rather than a collection of isolated containers.",
        stack: ["Prometheus", "Grafana", "Node Exporter", "cAdvisor", "Loki", "Promtail"],
      },
      {
        title: "Secure publishing",
        summary:
          "External exposure through Traefik and Cloudflare Tunnel, with private administration via WireGuard to reduce unnecessary public surface area.",
        stack: ["Traefik", "Cloudflare Tunnel", "WireGuard", "Pi-hole"],
      },
      {
        title: "Evolution to k3s",
        summary:
          "k3s is integrated as a natural progression from an already stable Compose-based environment toward lightweight orchestration and platform thinking.",
        stack: ["k3s", "Services", "Ingress", "Cluster workloads"],
      },
    ],
    platformEvolution: [
      {
        phase: "01",
        title: "Stable deployment base",
        body: "First, a clear base is consolidated with Proxmox, VMs, Docker, reverse proxy and secure publishing.",
      },
      {
        phase: "02",
        title: "Operational observability",
        body: "Then metrics and logs are separated from the primary workload to improve troubleshooting and traceability.",
      },
      {
        phase: "03",
        title: "Repeatable delivery",
        body: "Builds move out of the host into GitHub Actions + GHCR, with version-based deployment and traceable rollback.",
      },
      {
        phase: "04",
        title: "k3s as the next layer",
        body: "Once the operational base is stable, k3s becomes the logical next step toward lightweight orchestration.",
      },
    ],
    about: {
      title: "I work best when software has to reach a real environment and keep working after deployment.",
      summary:
        "I have professional full stack experience since 2018, working on web applications, APIs and evolutionary maintenance across stacks such as .NET, ASP.NET MVC, .NET Core, Angular, React, SQL Server, PostgreSQL and MariaDB. I am currently still at BcDigital and on the OHL project with React and .NET. I am drawn to teams where development, automation and operations are not fully separated.",
      principles: [
        {
          title: "Real professional foundation",
          body: "I have worked on development and maintenance of web applications, web services and APIs in client-facing environments that require continuity and evolution.",
        },
        {
          title: "Current production context",
          body: "My current work remains tied to real products and evolutionary maintenance, with a present-day focus on React and .NET inside the OHL project.",
        },
        {
          title: "Product and operations connected",
          body: "An application does not end at the last commit. How it is published, observed and recovered matters too.",
        },
        {
          title: "Explainable decisions",
          body: "I care about being able to explain why a workflow, topology or tool makes sense for the real problem.",
        },
        {
          title: "Gradual complexity",
          body: "I prefer evolving platforms by layers: first stable, then scalable, and only then more sophisticated.",
        },
      ],
    },
    contact: {
      title: "Available for opportunities where software development, delivery and operations are held to the same standard.",
      summary:
        "You can review my background, projects and working approach here, and continue the conversation through GitHub, LinkedIn or the downloadable CV.",
      links: [
        {
          label: "Email",
          href: "mailto:josealbertoenriquezp@gmail.com",
          value: "josealbertoenriquezp@gmail.com",
        },
        {
          label: "GitHub",
          href: "https://github.com/josealbertoenriquezp",
          value: "github.com/josealbertoenriquezp",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/jos%C3%A9-alberto-enriquez-pincay-7b02a8163",
          value: "linkedin.com/in/jose-alberto-enriquez-pincay-7b02a8163",
        },
        {
          label: "Download CV",
          href: "/cv-jose-alberto-enriquez.pdf",
          value: "Download CV",
          download: true,
        },
        {
          label: "Web CV",
          href: "/cv-ja-enriquez.html",
          value: "Open detailed web version",
        },
      ],
    },
  },
};
