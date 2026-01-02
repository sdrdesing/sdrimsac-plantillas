<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <svg class="logo-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M 20 5 A 15 15 0 0 1 35 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      
      <div class="navbar-menu">
        <ul>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/profile">Perfil</router-link></li>
          <li><router-link to="/settings">Configuración</router-link></li>
        </ul>
      </div>

      <div class="navbar-right">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MANTENIMIENTO
          </a>
          <ul class="dropdown-menu ">
            <li class=""> Clientes</li>
            <li> categorias</li>
            <li> Marcas</li>
          </ul>
        </li>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #0d3d56 0%, #1a5a7a 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.navbar-logo {
  flex-shrink: 0;
}

.logo-icon {
  width: 40px;
  height: 40px;
  color: white;
}

.navbar-menu {
  flex: 1;
}

.navbar-menu ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.navbar-menu a:hover {
  color: white;
}

.navbar-menu a.router-link-active {
  color: white;
  font-weight: 600;
}

.navbar-right {
  flex-shrink: 0;
}

.maintenance-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.maintenance-text:hover {
  opacity: 0.8;
}

.settings-icon {
  width: 20px;
  height: 20px;
  color: white;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem;
    flex-wrap: wrap;
  }

  .navbar-menu ul {
    gap: 1rem;
  }

  .navbar-menu a {
    font-size: 0.85rem;
  }
}
</style>
