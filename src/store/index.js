import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchingFor: "",
        searchType: "q",
        response: {
            title: "",
            url: "",
            field: ""
        }
    },
    getters: {
        getResponseTitle: (state) => state.response.title,
        getResponseUrl: (state) => state.response.url,
        getResponseField: (state) => state.response.field
    },
    mutations: {
        // as the user types in the input
        SET_SEARCHING_FOR: (state, value) => {
            state.searchingFor = value;
        },

        // change outputs back to blanks
        RESET_OUTPUT: (state) => {
            state.response.title = "";
            state.response.field = "";
            state.response.url = "";
        },

        // assign the title response
        SET_TITLE: (state, title) => {
            state.response.title = title;
        },

        // assign the field response
        SET_FIELD: (state, field) => {
            state.response.field = field;
        },

        // assign the url response
        SET_URL: (state, url) => {
            state.response.url = url;
        },

        // set specific search type
        SET_LUCKY_SEARCH: (state) => {
            state.searchType = "q";
        },

        // set specific search type
        SET_SERIOUS_SEARCH: (state) => {
            state.searchType = "title";
        }
    },
    actions: {
        // query stack exchange api
        QUERY_SERVICE: ({ state, commit }) => {
            // check if empty search
            if (state.searchingFor === "") {
                state.response.title = "You should ask me something.";
                return;
            }
            // get from stackexchange
            let query = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&"
                + state.searchType
                + "="
                + state.searchingFor
                + "&accepted=True&site=stackoverflow";
            axios.get(query)
                .then((response) => {
                    // were there any responses
                    if (response.data.items.length <= 0) {
                        commit("SET_TITLE", "There was no answer to this question :(");
                        return;
                    }
                   
                    // take top answer
                    let answer = response.data.items[0];
                    commit("SET_TITLE", answer.title);
                    commit("SET_URL", answer.link);

                    let answerBodyUrl = "https://api.stackexchange.com/2.2/answers/"
                        + answer.accepted_answer_id
                        + "?order=desc&sort=activity&site=stackoverflow&filter=withbody";
                    axios.get(answerBodyUrl)
                        .then((response) => {
                            commit("SET_FIELD", response.data.items[0].body);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});
