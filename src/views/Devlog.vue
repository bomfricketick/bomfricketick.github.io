<script setup>
import DevlogList from '../components/DevlogList.vue';
import DevlogListItem from '../components/DevlogListItem.vue';

const devlog = [
    {
        id: 1,
        title: "this is the first title",
        img: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
        imgAlt: "",
        shortText: "",
        fullText: ""
    },
    {
        id: 1,
        title: "this is the second title",
        img: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
        imgAlt: "",
        shortText: "",
        fullText: ""
    },
    {
        id: 1,
        title: "this is the third title",
        img: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
        imgAlt: "",
        shortText: "",
        fullText: ""
    },
]
</script>

<template>

    <div>
        <h1 class="uppercase text-gray-500 dark:text-gray-400 text-3xl text-center">
            devlog
        </h1>

        <div class="mt-6">
            <DevlogList>
                <DevlogListItem v-for="item in devlog" :key="item.id" :devlog="item"/>
            </DevlogList>
        </div>
    </div>

</template>