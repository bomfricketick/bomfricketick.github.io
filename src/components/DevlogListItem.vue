<script setup>

const props = defineProps({
    devlog: Object
})
</script>

<template>
    <div class="relative">
        <!-- <div class="absolute inset-0 bg-gray-600/25 rounded-lg blur"></div> -->
        <div class="relative dark:bg-gray-900 rounded-lg shadow-md dark:shadow-black/50 text-gray-500">
            <img class="object-cover aspect-square rounded-t-lg" :src="devlog.img" alt="">
    
            <div class="flex flex-col justify-between px-4 py-4 h-52">
                
                <div class="">
                    <p class="text-xs pb-2">
                        {{devlog.date}}
                    </p>
                    <div>
                        <h2 class="text-xl text-gray-400 dark:text-gray-300">
                            {{devlog.title}}
                        </h2>
            
                        <p class="line-clamp-4 text-sm"> 
                            {{devlog.shortText}}
                        </p>
                    </div>
                </div>
                <router-link
                    class="font-semibold text-sm" 
                    :to="{name: 'DevlogDetail', params: {slug: devlog.title}}"
                    >
                    Read more...
                </router-link>
            </div>
        </div>
    </div>

</template>