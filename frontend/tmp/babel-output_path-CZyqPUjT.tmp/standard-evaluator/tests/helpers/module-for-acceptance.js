define('standard-evaluator/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'standard-evaluator/tests/helpers/start-app', 'standard-evaluator/tests/helpers/destroy-app'], function (exports, _qunit, _standardEvaluatorTestsHelpersStartApp, _standardEvaluatorTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _standardEvaluatorTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _standardEvaluatorTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});