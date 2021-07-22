<style>

</style>

<template>
    <footer class="row">
        <div class="card">
            <div class="tiny-text">
                This site is not affiliated with stackexchange or any of its relevant websites.
            </div>
            <div class="tiny-text">
                <Link
                    link="https://github.com/dayvidwhy/feeling-stacky"
                    text="Source on github"
                />
            </div>
        </div>
    </footer>
</template>

<script>
import Link from "@/components/Link.vue";

export default {
    name: "Credits",
    components: {
        "Link": Link
    }
};
</script>
