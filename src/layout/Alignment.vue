<style>
    .align-center {
        text-align: center;
    }

    .align-right {
        text-align: right;
    }
</style>

<template>
    <div v-bind:class="alignmentClasses">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Alignment",
    props: {
        alignment: String
    },
    computed: {
        alignmentClasses () {
            return {
                "align-center": this.alignment === "center",
                "align-right": this.alignment === "right"
            };
        }
    }
};
</script>
