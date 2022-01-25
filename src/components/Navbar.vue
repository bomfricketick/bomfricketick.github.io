<script setup>

const nav = [
    { name: "devlog", to: "Devlog" },
    { name: "latest", to: "Latest" },
    { name: "FAQ", to: "FAQ" },
    { name: "about", to: "About" },
]

</script>

<template>
    <div class="max-w-6xl mx-auto py-4">
        <div class="flex justify-between items-center">
            <div class="flex">
                <router-link :to="{name: 'Home'}">
                    <span class="text-4xl font-semibold tracking-widest">BOM</span>
                    <span class="text-4xl font-light tracking-widest">fricketick</span>
                </router-link>
            </div>

            <div class="flex space-x-6 text-gray-400">
                <router-link 
                    v-for="item, idx in nav" 
                    :key="idx" 
                    :to="{ name: item.to}"
                    class="uppercase tracking-wide hover:text-gray-900 transition duration-150">
                    <p>{{ item.name }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>