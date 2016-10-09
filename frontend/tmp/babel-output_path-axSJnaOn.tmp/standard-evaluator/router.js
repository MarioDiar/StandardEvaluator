define('standard-evaluator/router', ['exports', 'ember', 'standard-evaluator/config/environment'], function (exports, _ember, _standardEvaluatorConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _standardEvaluatorConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});