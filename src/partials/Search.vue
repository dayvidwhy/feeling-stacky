<style>

</style>

<template>
    <main role="main" class="grid-container">
        <div class="row align-center">
            <SVGImage />
        </div>
        <div class="row">
            <Type
                text="Feeling Stacky"
                element="h1"
                alignment="center"
            />
        </div>
        <div class="row">
            <div class="col-8 offset-2">
                <Type
                    text="What do you need to know right now?"
                    element="h3"
                    alignment="center"
                />
                <Type
                    text="Do not phrase your query as a question, only include keywords."
                    element="p"
                    alignment="center"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1">
                <Entry
                    :searchingFor="searchingFor"
                    v-on:entered="entered"
                    placeholder="Just tell me the answer to.."
                />
            </div>
        </div>
        <div class="row">
            <div class="col-3 offset-3">
                <Button
                    v-on:clicked="luckySearch"
                    text="Feeling Stacky"
                />
            </div>
            <div class="col-3 align-right">
                <Button
                    v-on:clicked="seriesSearch"
                    text="Feeling Serious"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1">
                <div class="responses">
                    <Type
                        :text="getResponseTitle"
                        element="h4"
                        alignment="left"
                    />
                    <div class="response-field">
                        <a name="response" :href="getResponseUrl">{{ getResponseUrl }}</a>
                    </div>
                    <div class="response-field"
                        v-html="getResponseField">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
// components
import SVGImage from "@/components/SVGImage.vue";
import Button from "@/components/Button.vue";
import Entry from "@/components/Entry.vue";
import Type from "@/components/Type.vue";

// vuex imports
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "Searcher",
    components: {
        "SVGImage": SVGImage,
        "Button": Button,
        "Entry": Entry,
        "Type": Type
    },
    computed: {
        ...mapState([
            "searchingFor"
        ]),
        ...mapGetters([
            "getResponseTitle",
            "getResponseUrl",
            "getResponseField"
        ])
    },
    methods: {
        ...mapMutations([
            "SET_LUCKY_SEARCH",
            "RESET_OUTPUT",
            "SET_SERIOUS_SEARCH",
            "SET_SEARCHING_FOR"
        ]),
        ...mapActions([
            "QUERY_SERVICE"
        ]),
        entered (value) {
            this.SET_SEARCHING_FOR(value);
        },
        luckySearch () {
            this.SET_LUCKY_SEARCH();
            this.RESET_OUTPUT();
            this.QUERY_SERVICE();
        },
        seriesSearch () {
            this.SET_SERIOUS_SEARCH();
            this.RESET_OUTPUT();
            this.QUERY_SERVICE();
        }
    }
};
</script>
