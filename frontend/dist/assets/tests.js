'use strict';

define('standard-evaluator/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('standard-evaluator/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('standard-evaluator/tests/components/file-picker.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/file-picker.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/file-picker.js should pass jshint.\ncomponents/file-picker.js: line 14, col 17, \'filesJSON\' is defined but never used.\ncomponents/file-picker.js: line 22, col 48, \'e\' is defined but never used.\n\n2 errors');
  });
});
define('standard-evaluator/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('standard-evaluator/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('standard-evaluator/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
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
define('standard-evaluator/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('standard-evaluator/tests/helpers/resolver', ['exports', 'standard-evaluator/resolver', 'standard-evaluator/config/environment'], function (exports, _standardEvaluatorResolver, _standardEvaluatorConfigEnvironment) {

  var resolver = _standardEvaluatorResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _standardEvaluatorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _standardEvaluatorConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('standard-evaluator/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
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
define('standard-evaluator/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('standard-evaluator/tests/models/file.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/file.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/file.js should pass jshint.');
  });
});
define('standard-evaluator/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('standard-evaluator/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('standard-evaluator/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('standard-evaluator/tests/test-helper', ['exports', 'standard-evaluator/tests/helpers/resolver', 'ember-qunit'], function (exports, _standardEvaluatorTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_standardEvaluatorTestsHelpersResolver['default']);
});
define('standard-evaluator/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('standard-evaluator/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map