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
    },
    data () {
        return {

        };
    },
    mounted () {
        (function(d,a,y,o,u,n,g){d['GoogleAnalyticsObject']=u;d[u]=d[u]||function(){
            (d[u].q=d[u].q||[]).push(arguments)},d[u].l=1*new Date();n=a.createElement(y),
            g=a.getElementsByTagName(y)[0];n.async=1;n.src=o;g.parentNode.insertBefore(n,g)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-90329277-1', 'auto');
        ga('send', 'pageview');
    }
};
</script>
