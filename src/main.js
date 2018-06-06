import Vue from "vue";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    store,    
    render: (h) => h(App)
});
