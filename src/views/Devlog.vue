<script setup>
import DevlogList from '../components/DevlogList.vue';
import DevlogListItem from '../components/DevlogListItem.vue';

const devlog = [
    {
        id: 1,
        date: "January 5, 2022",
        title: "this is the first title",
        img: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
        imgAlt: "",
        shortText: "Id eiusmod laboris irure ex. Aliquip laborum culpa quis id laboris magna. Ea nulla consectetur minim cillum esse. Labore eiusmod do mollit minim fugiat adipisicing id do mollit do.",
        fullText: "",
        to: ""
    },
    {
        id: 2,
        date: "January 5, 2022",
        title: "this is the second title",
        img: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        imgAlt: "",
        shortText: "Cillum occaecat consequat labore occaecat qui incididunt tempor esse magna.",
        fullText: "",
        to: ""
    },
    {
        id: 3,
        date: "January 5, 2022",
        title: "this is the third title",
        img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        imgAlt: "",
        shortText: "Quis do eiusmod enim do pariatur minim commodo quis magna eu ipsum nostrud sint. Fugiat duis sit sit culpa sunt quis et laboris laborum velit do. Esse eiusmod laborum consectetur laboris ullamco. Quis cillum dolor Lorem aute aliquip reprehenderit enim laborum aliquip fugiat exercitation. Laborum ut consectetur eiusmod dolor duis elit cillum commodo cillum. Minim excepteur dolore nostrud cupidatat magna magna reprehenderit veniam dolore. Mollit dolore cillum ad mollit officia tempor adipisicing cupidatat.",
        fullText: "",
        to: ""
    },
    {
        id: 3,
        date: "January 5, 2022",
        title: "this is the third title",
        img: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        imgAlt: "",
        shortText: "Quis do eiusmod enim do pariatur minim commodo quis magna eu ipsum nostrud sint. Fugiat duis sit sit culpa sunt quis et laboris laborum velit do. Esse eiusmod laborum consectetur laboris ullamco. Quis cillum dolor Lorem aute aliquip reprehenderit enim laborum aliquip fugiat exercitation. Laborum ut consectetur eiusmod dolor duis elit cillum commodo cillum. Minim excepteur dolore nostrud cupidatat magna magna reprehenderit veniam dolore. Mollit dolore cillum ad mollit officia tempor adipisicing cupidatat.",
        fullText: "",
        to: ""
    },
]
</script>

<template>

    <div class="px-4 xl:px-0 xl:max-w-6xl mx-auto ">
        <h1 class="uppercase font-light text-gray-400 dark:text-gray-300 text-3xl text-center">
            devlog
        </h1>

        <div class="mt-6">
            <DevlogList>
                <DevlogListItem v-for="item in devlog" :key="item.id" :devlog="item"/>
            </DevlogList>
        </div>

        <router-view/>
    </div>

</template>