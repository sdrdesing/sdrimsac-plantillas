# Dockerización - frontedsdrimsac

Este proyecto está dockerizado para ejecutarse en cualquier dispositivo con Docker instalado.

## Requisitos Previos

- [Docker](https://www.docker.com/products/docker-desktop) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) (generalmente viene incluido con Docker Desktop)

## Opciones de Ejecución

### 1. **Producción** (Recomendado para desplegar)

Construye la imagen y ejecuta el contenedor optimizado para producción:

```bash
# Construir la imagen
docker build -t frontedsdrimsac:latest .

# Ejecutar el contenedor
docker run -p 3000:3000 frontedsdrimsac:latest
```

O usando Docker Compose:

```bash
docker-compose up -d
```

**Acceso:** http://localhost:3000

### 2. **Desarrollo** (Con hot reload)

Para desarrollo con Vite y recarga automática:

```bash
# Usando Docker Compose
docker-compose -f docker-compose.dev.yml up
```

O manualmente:

```bash
# Construir imagen de desarrollo
docker build -f Dockerfile.dev -t frontedsdrimsac:dev .

# Ejecutar con volumen montado
docker run -p 5173:5173 -v %cd%:/app frontedsdrimsac:dev
```

**Acceso:** http://localhost:5173

## Comandos Útiles

### Ver logs del contenedor
```bash
docker-compose logs -f
```

### Detener los contenedores
```bash
docker-compose down
```

### Reconstruir la imagen
```bash
docker-compose up --build
```

### Ejecutar comandos dentro del contenedor
```bash
docker-compose exec frontend npm run build
```

## Estructura de Archivos Docker

- `Dockerfile` - Imagen de producción (multi-stage build)
- `Dockerfile.dev` - Imagen de desarrollo con Vite
- `docker-compose.yml` - Orquestación para producción
- `docker-compose.dev.yml` - Orquestación para desarrollo
- `.dockerignore` - Archivos a ignorar en Docker

## Características

✅ **Multi-stage build** - Optimiza el tamaño de la imagen final
✅ **Alpine Linux** - Base ligera (node:18-alpine)
✅ **Hot Reload** - Desarrollo con cambios automáticos
✅ **Producción lista** - Servido con `serve`
✅ **Portabilidad** - Funciona en Windows, Mac y Linux

## Notas Importantes

- El puerto **3000** se usa para producción
- El puerto **5173** se usa para desarrollo
- Asegúrate de que estos puertos estén disponibles
- En Windows, si usas WSL2, el rendimiento es mucho mejor
