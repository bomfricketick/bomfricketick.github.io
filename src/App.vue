<script setup>
import { onMounted } from 'vue';
import { useUIStore } from './store';
import Navbar from './components/Navbar.vue';

const MyStore = useUIStore()

onMounted(() => {
  MyStore.initialiseTheme()
})

</script>

<template>
  <Navbar></Navbar>
  <div class="max-w-6xl mx-auto">
    <router-view></router-view>
  </div>
</template>

