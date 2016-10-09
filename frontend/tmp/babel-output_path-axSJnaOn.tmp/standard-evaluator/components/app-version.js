define('standard-evaluator/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'standard-evaluator/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _standardEvaluatorConfigEnvironment) {

  var name = _standardEvaluatorConfigEnvironment['default'].APP.name;
  var version = _standardEvaluatorConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});