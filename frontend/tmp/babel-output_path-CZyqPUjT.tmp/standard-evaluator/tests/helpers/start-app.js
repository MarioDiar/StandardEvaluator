define('standard-evaluator/tests/helpers/start-app', ['exports', 'ember', 'standard-evaluator/app', 'standard-evaluator/config/environment'], function (exports, _ember, _standardEvaluatorApp, _standardEvaluatorConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _standardEvaluatorConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _standardEvaluatorApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});