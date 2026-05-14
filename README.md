# Jose Alberto Enriquez Portfolio

Portfolio profesional construido con `React`, `Vite` y `TypeScript` para presentar experiencia en desarrollo web, aplicaciones de escritorio, automatizacion de despliegues e infraestructura operada sobre `Proxmox`.

El objetivo del sitio es mostrar un perfil tecnico capaz de:

- construir software util
- desplegarlo con criterio
- operar infraestructura propia
- explicar decisiones tecnicas con claridad

## Enfoque

Este portfolio posiciona un perfil mixto entre desarrollo, entrega e infraestructura.

La narrativa principal del sitio gira alrededor de tres bloques:

1. Aplicaciones web publicadas con flujo real de despliegue
2. Software de escritorio diferencial, con `ChatLens` como pieza destacada
3. Plataforma autoalojada en `Proxmox` con observabilidad, logging y evolucion hacia `k3s`

## Caracteristicas

- Diseño sobrio y responsive para escritorio y movil
- Soporte bilingue `es/en`
- Deteccion automatica del idioma del navegador
- Selector manual de idioma con persistencia local
- Boton flotante para volver al inicio
- Descarga directa del CV en PDF
- Secciones orientadas a un contexto profesional
- Configuracion base para headers y rate limit en `Traefik`

## Secciones del sitio

- `Inicio`: resumen profesional, CTA y narrativa principal
- `Proyectos`: seleccion de proyectos con impacto y decisiones tecnicas
- `Desktop`: foco especifico en `ChatLens`
- `Homelab / Proxmox`: plataforma personal tratada como bloque tecnico serio
- `Sobre mi`: forma de trabajo y posicionamiento profesional
- `Contacto`: GitHub, LinkedIn, email y CV

## Stack

### Frontend

- React 18
- Vite
- TypeScript
- CSS vanilla

### Contenido y UX

- Internacionalizacion simple sin librerias externas
- Persistencia de idioma en `localStorage`
- Metadatos dinamicos por idioma

### Infraestructura relacionada al contenido del portfolio

- Proxmox
- Docker / Docker Compose
- Traefik
- GitHub Actions
- GHCR
- Cloudflare Tunnel
- Prometheus / Grafana
- Loki / Promtail
- WireGuard
- k3s

## Ejecucion local

### Requisitos

- Node.js 20+
- npm

### Instalacion

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

En PowerShell, si `npm` esta bloqueado por la policy del sistema, usa:

```powershell
npm.cmd install
npm.cmd run dev
```

### Build de produccion

```bash
npm run build
```

### Preview local

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev`: inicia el entorno de desarrollo con Vite
- `npm run build`: genera la build de produccion
- `npm run preview`: sirve localmente la build generada

## Estructura del proyecto

```text
.
├─ public/
│  ├─ cv-ja-enriquez.html
│  ├─ cv-jose-alberto-enriquez.pdf
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  ├─ content/
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ styles.css
├─ deploy/
│  └─ traefik/
├─ CV_MEJORADO.md
├─ package.json
└─ vite.config.ts
```

## Contenido destacado

### ai-models-directory

Aplicacion web desplegada publicamente con un flujo real de:

- build en `GitHub Actions`
- publicacion de imagenes en `GHCR`
- despliegue versionado
- exposicion segura
- operacion sobre infraestructura propia

### ChatLens

Aplicacion de escritorio para Windows desarrollada con:

- `.NET 8`
- `C# 12`
- `WPF`
- `Windows.Graphics.Capture`
- `Direct3D 11`
- `Windows.Media.Ocr`

Es la pieza diferencial del portfolio en el area desktop.

### Homelab / Plataforma Proxmox

Entorno autoalojado presentado como evidencia de:

- virtualizacion
- despliegue y operacion
- observabilidad
- logging centralizado
- acceso remoto seguro
- evolucion progresiva hacia `k3s`

## Internacionalizacion

El sitio soporta `espanol` e `ingles`.

Comportamiento:

- si el navegador del usuario esta en ingles, el sitio carga en ingles
- si no, carga en espanol
- el usuario puede cambiar manualmente el idioma
- la eleccion se guarda en el navegador

## Despliegue con Traefik

Si vas a publicar el portfolio detras de `Traefik`, el repo incluye una configuracion base reutilizable en:

- [deploy/traefik/portfolio-security.yml](./deploy/traefik/portfolio-security.yml)
- [deploy/traefik/README.md](./deploy/traefik/README.md)

Incluye:

- `rate limit`
- headers HTTP de seguridad
- una cadena de middlewares lista para asociar al router del portfolio

No es necesaria para desarrollo local ni para subir el codigo a GitHub, pero si aporta valor cuando el sitio se publica detras de tu propia infraestructura.

## Personalizacion

La mayor parte del contenido editable del portfolio vive en:

- [src/content/portfolio.ts](./src/content/portfolio.ts)

Desde ahi puedes ajustar:

- copy en ambos idiomas
- enlaces principales
- proyectos destacados
- textos de contacto
- contenido del hero y secciones

## Estado

Version funcional del portfolio con:

- estructura completa
- CV descargable
- soporte bilingue
- copy profesional base
- build validada

## Contacto

- GitHub: [github.com/josealbertoenriquezp](https://github.com/josealbertoenriquezp)
- LinkedIn: [linkedin.com/in/jose-alberto-enriquez-pincay-7b02a8163](https://linkedin.com/in/jos%C3%A9-alberto-enriquez-pincay-7b02a8163)
- Email: [josealbertoenriquezp@gmail.com](mailto:josealbertoenriquezp@gmail.com)
