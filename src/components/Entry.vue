<style>
    /*forms*/
    input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        font-size: 1.3em;
        border: 1px solid #ccc;
        font-weight: 400;
        box-sizing: border-box;
    }

    input[type=submit]:hover {
        background-color: blue;
    }
</style>

<template>
    <input
        v-model="search"
        label="searcher"
        type="text"
        maxlength="124"
        :placeholder="placeholder"
    >
</template>

<script>
export default {
    name: "Entry",
    props: {
        placeholder: String,
        searchingFor: String
    },
    computed: {
        search: {
            get () {
                return this.searchingFor;
            },
            set (value) {
                this.$emit("entered", value);
            }
        }
    }
};
</script>
