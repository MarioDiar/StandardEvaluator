define('standard-evaluator/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'standard-evaluator/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _standardEvaluatorConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_standardEvaluatorConfigEnvironment['default'].APP.name, _standardEvaluatorConfigEnvironment['default'].APP.version)
  };
});