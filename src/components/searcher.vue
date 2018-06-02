<style>

</style>

<template>
	<main role="main" class="grid-container">
		<div class="row align-center">
			<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1417 1632h-1118v-480h-160v640h1438v-640h-160v480zm-942-524l33-157 783 165-33 156zm103-374l67-146 725 339-67 145zm201-356l102-123 614 513-102 123zm397-378l477 641-128 96-477-641zm-718 1471v-159h800v159h-800z"/></svg>
		</div>
		<div class="row">
			<h1 class="align-center">
				I'm Feeling Stacky
			</h1>
		</div>
		<div class="row">
			<div class="col-8 offset-2">
				<div class="card">
					<h3 class="align-center">
						What do you need to know right now?
					</h3>
					<p class="align-center">
						Do not phrase your query as a question, only include keywords.
					</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-10 offset-1">
				<div class="card">
					<input
						v-model="search"
						type="text"
						maxlength="124"
						placeholder="Just tell me the answer to..">
				</div>
			</div>
		</div>
		<div class="row">
			<div class="card">
				<div class="col-3 offset-3">
					<button
						v-on:click="luckySearch"
						type="button">
						I'm Feeling Stacky
					</button>
				</div>
				<div class="col-3 align-right">
					<button
						v-on:click="seriesSearch"
						type="button">
						I'm Feeling Serious
					</button>
				</div>
			</div>
		</div>
		<div class="row push-down">
			<div class="card">
				<div class="col-10 offset-1 responses">
					<h4 class="response-field push-down">
						{{ getResponseTitle }}
					</h4>
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
	name: "searcher",
	computed: {
		...mapState([
			"searchingFor"
		]),
		...mapGetters([
			"getResponseTitle",
			"getResponseUrl",
			"getResponseField"
		]),
		search: {
			get () {
				return this.searchingFor;
			},
			set (value) {
				this.SET_SEARCHING_FOR(value);
			}
		}
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
