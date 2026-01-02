# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Instalar servidor HTTP simple
RUN npm install -g serve

# Copiar archivos construidos desde el stage anterior
COPY --from=builder /app/dist ./dist

# Exponer puerto
EXPOSE 3000

# Comando para servir la aplicación
CMD ["serve", "-s", "dist", "-l", "3000"]
