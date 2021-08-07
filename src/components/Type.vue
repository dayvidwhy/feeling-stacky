<style>
    h1,h2,h3,h4,h5 {
        font-weight: 400;
    }

    h1 {
        font-size: 3rem;
        margin: 1rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
        margin-top: 0;
    }

    h4 {
        font-size: 1.8rem;
    }

    h5 {
        font-size: 1.6rem;
    }

    .text {
        width: 100%;
        font-size: 1.2em;
        color: #FFF;
        display: inline-block;
    }

    @media screen and (max-width: 768px) {
        h1 {font-size: 2rem;}
        h2 {font-size: 1.7rem;}
        h3 {font-size: 1.5rem;}
        h4 {font-size: 1.3rem;}
        h5 {font-size: 1.2rem;}
    }
</style>

<template>
    <h1 v-if="element === 'h1'" 
        v-bind:class="classes">
        {{ text }}
    </h1>
    <h3 v-else-if="element === 'h3'" 
        v-bind:class="classes">
        {{ text }}
    </h3>
    <h4 v-else-if="element === 'h4'" 
        v-bind:class="classes">
        {{ text }}
    </h4>
    <p v-else-if="element === 'p'" 
        v-bind:class="classes">
        {{ text }}
    </p>
</template>

<script>
export default {
    name: "Type",
    props: {
        "text": String,
        "alignment": String,
        "element": String
    },
    computed: {
        classes () {
            return {
                "align-center": this.alignment === "center"
            }
        }
    }
};
</script>
