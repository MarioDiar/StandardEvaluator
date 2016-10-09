define('standard-evaluator/tests/components/file-picker.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/file-picker.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/file-picker.js should pass jshint.\ncomponents/file-picker.js: line 14, col 17, \'filesJSON\' is defined but never used.\ncomponents/file-picker.js: line 22, col 48, \'e\' is defined but never used.\n\n2 errors');
  });
});