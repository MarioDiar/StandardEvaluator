define('standard-evaluator/initializers/export-application-global', ['exports', 'ember', 'standard-evaluator/config/environment'], function (exports, _ember, _standardEvaluatorConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_standardEvaluatorConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _standardEvaluatorConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_standardEvaluatorConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});