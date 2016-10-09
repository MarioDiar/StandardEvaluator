define('standard-evaluator/tests/models/file.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/file.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/file.js should pass jshint.');
  });
});