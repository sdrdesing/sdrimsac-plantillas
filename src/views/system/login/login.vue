<template>
    <div>
        <h2>Login </h2>
        <form>
        <div>
            <label for="username">CONTRASEÑA:</label>
            <input type="text" id="username" name="username" />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
        </div>
        <button @click="login">Login</button>
        </form>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const router = useRouter()

function login() {
    Swal.fire({
        title: 'Éxito',
        text: 'Has iniciado sesión correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    //pobar alerta 

    router.push('/dashboard')
}

</script>
<style scoped="">
div {
    margin-bottom: 1em;
}
label {
    display: block;
    margin-bottom: 0.5em;
}
input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}
button {
    padding: 0.5em 1em;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
}
button:hover {
    background-color: #369870;
}

</style>