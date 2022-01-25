<script setup>

const props = defineProps({
    devlog: Object
})
</script>

<template>

    <div>
        {{devlog.title}}
    </div>

</template>