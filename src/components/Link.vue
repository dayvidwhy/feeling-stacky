<style>
    .link {
        color: #FFF;
    }

    .link:hover {
        color: #2ecc71;
    }
</style>

<template>
    <a class="link" :href="link">
        {{ text }}
    </a>
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
