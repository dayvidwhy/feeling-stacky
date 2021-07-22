<style>
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
