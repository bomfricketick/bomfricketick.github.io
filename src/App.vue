<script setup>
import { onMounted } from 'vue';
import { useUIStore } from './store';
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

const MyStore = useUIStore()

onMounted(() => {
  MyStore.initialiseTheme()
})

</script>

<template>
  <TheNavbar/>
  <main class="flex-grow h-full">
    <router-view></router-view>
  </main>
  <TheFooter/>
</template>

