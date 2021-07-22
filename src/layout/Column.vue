<style>
    .col-10 {
        width: 83.33333%;
        float: left;
    }

    .col-8 {
        width: 66.66664%;
        float: left;
    }

    .col-6 {
        width: 50%;
        float: left;
    }

    .col-3 {
        width: 25%;
        float: left;
    }

    .offset-3 {
        margin-left: 25%;
    }

    .offset-2 {
        margin-left: 16.666666%;
    }

    .offset-1 {
        margin-left: 8.333333%;
    }

    /*typical media query for phones*/
    @media screen and (max-width: 768px) {
        .col-3 {width: 50%;}
        .col-6 {width: 100%;}
        .col-8 {width: 100%;}
        .col-10 {width: 100%;}
        .offset-1 {margin-left: 0}
        .offset-2 {margin-left: 0}
        .offset-3 {margin-left: 0}
    }
</style>

<template>
    <div v-bind:class="columnClasses">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Column",
    props: {
        width: String,
        offset: String
    },
    computed: {
        columnClasses () {
            return [
                this.width && `col-${this.width}`,
                this.offset && `offset-${this.offset}`
            ];
        }
    } 
};
</script>
