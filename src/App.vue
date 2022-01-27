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
  <div class="flex-grow">
    <router-view></router-view>
  </div>
  <TheFooter/>
</template>

