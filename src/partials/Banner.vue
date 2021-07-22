<style>
    .banner-text {
        width: 100%;
        font-size: 1.1em;
        color: #FFF;
        margin: 20px 0;
    }

    .banner-link {
        color: #FFF;
    }

    .banner-link:hover {
        color: #2ecc71;
    }

    /*colours*/
    .blue-bg {
        background-color: #2980b9;
    }
</style>

<template>
    <header role="banner" class="row blue-bg">
        <div class="banner-text align-center">
            Made by
            <Link
                link="https://davidyoung.tech"
                text="https://davidyoung.tech"
            />
        </div>
    </header>
</template>

<script>
import Link from "@/components/Link.vue";

export default {
    name: "Banner",
    components: {
        "Link": Link
    }
};
</script>
