define('standard-evaluator/adapters/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
	exports['default'] = _activeModelAdapter['default'].extend({
		namespace: 'api'
	});
});