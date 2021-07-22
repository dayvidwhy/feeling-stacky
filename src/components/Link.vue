<style>

</style>

<template>
    <a class="banner-link" :href="link">{{ text }}</a>
</template>

<script>
export default {
    name: "Link",
    props: {
        link: String,
        text: String
    }
}
</script>
