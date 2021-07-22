<style>
    /* hack for IE */
    main {
        display: block;
    }
</style>

<template>
    <main role="main" class="grid-container">
        <Row>
            <Alignment
                alignment="center"
            >
                <SVGImage />
            </Alignment>
        </Row>
        <Row>
            <Type
                text="Feeling Stacky"
                element="h1"
                alignment="center"
            />
        </Row>
        <Row>
            <Column
                width="8"
                offset="2"
            >
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
            </Column>
        </Row>
        <Row>
            <Column
                width="10"
                offset="1"
            >
                <Entry
                    :searchingFor="searchingFor"
                    v-on:entered="entered"
                    placeholder="Just tell me the answer to.."
                />
            </Column>
        </Row>
        <Row>
            <Column
                width="3"
                offset="3"
            >
                <Button
                    v-on:clicked="luckySearch"
                    text="Feeling Stacky"
                />
            </Column>
            <Column
                width="3"
            >
                <Button
                    v-on:clicked="seriesSearch"
                    text="Feeling Serious"
                />
            </Column>
        </Row>
    </main>
</template>

<script>
// components
import SVGImage from "@/components/SVGImage.vue";
import Button from "@/components/Button.vue";
import Entry from "@/components/Entry.vue";
import Type from "@/components/Type.vue";

import Row from "@/layout/Row.vue";
import Column from "@/layout/Column.vue";
import Alignment from "@/layout/Alignment.vue";

// vuex imports
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "Searcher",
    components: {
        "SVGImage": SVGImage,
        "Button": Button,
        "Entry": Entry,
        "Type": Type,
        "Row": Row,
        "Column": Column,
        "Alignment": Alignment
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
