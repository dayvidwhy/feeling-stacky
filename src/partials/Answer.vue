<style>
    .responses {
        background-color: #ecf0f1;
        box-sizing: border-box;
        padding: 20px;
    }

    pre, code {
        box-sizing: border-box;
        white-space: pre-wrap;
    }
</style>

<template>
    <div class="grid-container responses">
        <Type
            :text="getResponseTitle"
            element="h4"
            alignment="left" />
        <div class="response-field">
            <a name="response" :href="getResponseUrl">
                {{ getResponseUrl }}
            </a>
        </div>
        <div class="response-field"
            v-html="getResponseField">
        </div>
    </div>
</template>

<script>
import Type from "@/components/Type.vue";

// vuex imports
import { mapGetters } from "vuex";

export default {
    name: "Answer",
    components: {
        "Type": Type
    },
    computed: {
        ...mapGetters([
            "getResponseTitle",
            "getResponseUrl",
            "getResponseField"
        ])
    }
};
</script>
