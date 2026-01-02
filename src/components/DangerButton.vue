<template>
    <button class="danger-button">
        <span class="icon">🗑️</span>
        {{ label }}
    </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.danger-button {
  background-color: #e3342f;
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1em;
}

.danger-button:hover {
  background-color: #cc1f1a;
}

.icon {
  font-size: 1.2em;
}
</style>