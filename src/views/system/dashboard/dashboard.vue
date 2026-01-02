<template>
  <div>
    <NavBar />
    <Header />
    <main>
      <h2>Bienvenido al Dashboard</h2>
      <div>
        hola mundo
      </div>
      <DangerButton/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import DangerButton from '@/components/DangerButton.vue';

export default {
  name: 'Dashboard',
  components: {
    NavBar,
    Header,
    Footer,
    DangerButton
  }
}
</script>

<style scoped>
main {
  margin-bottom: 100px;
  padding: 20px;
}
</style>
