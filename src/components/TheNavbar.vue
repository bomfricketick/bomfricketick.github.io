<script setup>
import { useUIStore } from '../store';
import { LightBulbIcon, MoonIcon } from '@heroicons/vue/outline';
const uiStore = useUIStore()


</script>

<template>
    <div>
        <div class="flex justify-between items-center xl:max-w-6xl mx-auto py-4 px-4 xl:px-0">
            <div class="flex dark:text-gray-300">
                <router-link :to="{ name: 'Home' }">
                    <span class="text-4xl font-semibold tracking-widest">bom</span>
                    <span class="text-4xl font-light tracking-widest">fricketick</span>
                </router-link>
            </div>

            <div class="flex space-x-6 text-gray-400 dark:text-gray-500">
                <router-link
                    v-for="item, idx in uiStore.navigation"
                    :key="idx"
                    :to="{ name: item.to }"
                    class="uppercase tracking-wide hover:text-gray-900 dark:hover:text-gray-300 transition duration-150"
                >
                    <p>{{ item.name }}</p>
                </router-link>

                <div>
                    <button
                        v-if="uiStore.getTheme === 'dark'"
                        @click="uiStore.updateTheme('light')"
                    >
                        <LightBulbIcon
                            class="h-6 w-6 hover:text-gray-900 dark:hover:text-gray-300"
                        />
                    </button>

                    <button
                        v-if="uiStore.getTheme === 'light'"
                        @click="uiStore.updateTheme('dark')"
                    >
                        <MoonIcon class="h-6 w-6 hover:text-gray-900 dark:hover:text-gray-300" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>