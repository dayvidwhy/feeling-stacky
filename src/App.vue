<style src="./App.css">
</style>

<template>
    <div id="app">
        <banner />
        <searcher />
        <credits />
    </div>
</template>

<script>
import banner from "./components/banner.vue";
import searcher from "./components/searcher.vue";
import credits from "./components/credits.vue";

export default {
    name: "app",
    components: {
        "banner": banner,
        "searcher": searcher,
        "credits": credits
    }
};
</script>
