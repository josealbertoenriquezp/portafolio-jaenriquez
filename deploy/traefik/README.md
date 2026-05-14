# Traefik deployment notes

Este directorio contiene una base opcional para publicar el portfolio detras de `Traefik`.

## Que aporta

- `rate limit` para reducir abuso automatizado
- headers HTTP de seguridad
- una cadena de middlewares reutilizable para el router del portfolio

## Cuando tiene sentido

Conviene mantenerlo si:

- publicas el portfolio en tu propia infraestructura
- usas `Traefik` como reverse proxy
- quieres mostrar una capa minima de endurecimiento operativa

No es necesario para:

- desarrollo local
- build de frontend
- subir el repositorio a GitHub

## Middleware incluido

El archivo [`portfolio-security.yml`](./portfolio-security.yml) define:

- `portfolio-rate-limit`
- `portfolio-security-headers`
- `portfolio-chain`

## Ejemplo de uso con labels

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.portfolio.rule=Host(`tu-dominio.com`)"
  - "traefik.http.routers.portfolio.entrypoints=websecure"
  - "traefik.http.routers.portfolio.tls=true"
  - "traefik.http.routers.portfolio.middlewares=portfolio-chain@file"
```

## Nota

Toma esto como base inicial. Los valores de `rate limit` y algunas cabeceras pueden ajustarse segun como publiques el sitio y el resto de tu stack.
