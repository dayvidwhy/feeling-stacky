<style>
    footer {
        margin-top: 12px;
    }
</style>

<template>
    <footer class="row">
        <div class="card">
            <Type
                text="This site is not affiliated with stackexchange or any of its relevant websites."
                element="p"
                alignment="center"
            />
            <Link
                link="https://github.com/dayvidwhy/feeling-stacky"
                text="Source on github"
            />
        </div>
    </footer>
</template>

<script>
import Link from "@/components/Link.vue";
import Type from "@/components/Type.vue";

export default {
    name: "Credits",
    components: {
        "Link": Link,
        "Type": Type
    }
};
</script>
