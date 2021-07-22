<style>
    button {
        width: 98%;
        background-color: inherit;
        color: black;
        padding: 14px 20px;
        font-size: 1em;
        border: solid 1px #2980b9;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 10px;
        transition: all 0.2s ease-in-out;
    }

    button:hover {
        background-color: #3498db;
        color: #FFF;
    }

    button:focus {
        outline: 0;
    }

    @media screen and (max-width: 550px){
        button{width: 100%;}
    }
</style>

<template>
    <button
        v-on:click="clicked"
        type="button">
        Feeling Stacky
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        "text": String
    },
    methods: {
        clicked () {
            this.$emit("clicked");
        }
    }
}
</script>
