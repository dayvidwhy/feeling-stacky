<style src="./App.css">
</style>

<template>
    <div>
        <Banner />
        <Search />
        <Answer />
        <Credits />
    </div>
</template>

<script>
import Banner from "@/partials/Banner.vue";
import Search from "@/partials/Search.vue";
import Credits from "@/partials/Credits.vue";
import Answer from "@/partials/Answer.vue";

export default {
    name: "app",
    components: {
        "Banner": Banner,
        "Search": Search,
        "Credits": Credits,
        "Answer": Answer
    }
};
</script>
