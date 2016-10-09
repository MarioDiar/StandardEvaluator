define('standard-evaluator/app', ['exports', 'ember', 'standard-evaluator/resolver', 'ember-load-initializers', 'standard-evaluator/config/environment'], function (exports, _ember, _standardEvaluatorResolver, _emberLoadInitializers, _standardEvaluatorConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _standardEvaluatorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _standardEvaluatorConfigEnvironment['default'].podModulePrefix,
    Resolver: _standardEvaluatorResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _standardEvaluatorConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});