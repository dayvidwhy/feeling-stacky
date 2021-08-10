<style>
    *, *:after, *:before {
        box-sizing: inherit;
    }

    html {
        font-family: sans-serif;
        background-color: #FFF;
        box-sizing: border-box;
    }

    /*reset body css*/
    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
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
