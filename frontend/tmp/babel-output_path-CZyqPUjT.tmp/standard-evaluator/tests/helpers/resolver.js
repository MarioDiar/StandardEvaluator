define('standard-evaluator/tests/helpers/resolver', ['exports', 'standard-evaluator/resolver', 'standard-evaluator/config/environment'], function (exports, _standardEvaluatorResolver, _standardEvaluatorConfigEnvironment) {

  var resolver = _standardEvaluatorResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _standardEvaluatorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _standardEvaluatorConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});