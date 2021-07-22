<style src="./App.css">
</style>

<template>
    <div>
        <Banner />
        <Search />
        <Credits />
    </div>
</template>

<script>
import Banner from "@/partials/Banner.vue";
import Search from "@/partials/Search.vue";
import Credits from "@/partials/Credits.vue";

export default {
    name: "app",
    components: {
        "Banner": Banner,
        "Search": Search,
        "Credits": Credits
    }
};
</script>
