define('standard-evaluator/routes/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.peekAll('file');
		}
	});
});