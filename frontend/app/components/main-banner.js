import Ember from 'ember';

export default Ember.Component.extend({
	tempValue: 0,

	didInsertElement() {
		$(".code-text").typed({
    		strings: ["<span class='code-block-object'>teacher</span>.evaluate([<span class='code-block-string'>'Juan'</span>,<span class='code-block-string'>'Mario'</span>]).byCriteria(<span class='code-block-int'>100</span>,<span class='code-block-string'>'Vars'</span>);"],
    		typeSpeed: 40
		});
	},

	actions: {
		openCriteria() {
			this.set('openCriteriaPicker', true);
		}
	}
});

// <span class="code-block-object">teacher</span>.evaluate([<span class="code-block-string">'Juan'</span>,<span class="code-block-string">'Mario'</span>]).byCriteria(<span class="code-block-int">100</span>,<span class="code-block-string">'Vars'</span>);
