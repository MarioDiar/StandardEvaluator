define('standard-evaluator/models/file', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		fileName: _emberData['default'].attr('string')
	});
});