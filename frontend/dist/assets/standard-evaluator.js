"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('standard-evaluator/adapters/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
	exports['default'] = _activeModelAdapter['default'].extend({
		namespace: 'api'
	});
});
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
define('standard-evaluator/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'standard-evaluator/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _standardEvaluatorConfigEnvironment) {

  var name = _standardEvaluatorConfigEnvironment['default'].APP.name;
  var version = _standardEvaluatorConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define("standard-evaluator/components/file-picker", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({
        store: _ember["default"].inject.service(),
        files: [],

        didInsertElement: function didInsertElement() {
            var _this = this;

            var multipleInput = document.getElementById("file-multiple-button");
            var singleInput = document.getElementById("file-single-button");
            var file = null;

            multipleInput.addEventListener("change", function (e) {
                var files = e.target.files;
                var filesJSON = { files: [] };

                for (var i = 1, len = files.length; i < len; i++) {
                    file = { id: i + 1, fileName: files[i].name };
                    _this.get('files').pushObject(file);
                }
            }, false);

            singleInput.addEventListener("change", function (e) {
                file = { id: _this.get('files').length + 1, fileName: singleInput.files[0].name };
                _this.get('files').pushObject(file);
            }, false);
        },

        actions: {
            removeFile: function removeFile(file) {
                this.get('files').removeObject(file);
            },

            openSingleFileSelector: function openSingleFileSelector() {
                _ember["default"].$('#file-single-button').trigger('click');
            },

            openMultipleFileSelector: function openMultipleFileSelector() {
                _ember["default"].$('#file-multiple-button').trigger('click');
            }
        }
    });

    // <script>
    //     $(document).on('ready', function() {
    //         var files,
    //             file,
    //             extension,
    //             input = document.getElementById("fileURL"),
    //             output = document.getElementById("fileOutput");

    //         input.addEventListener("change", function(e) {
    //             files = e.target.files;
    //             output.innerHTML = "";

    //             for (var i = 0, len = files.length; i < len; i++) {
    //                 file = files[i];
    //                 extension = file.name.split(".").pop();
    //                 if(extension == "cpp"){
    //                     output.innerHTML += "<li class='type-" + extension + "'>" + "<input type='checkbox'>" + file.name + "</li>";
    //                 }

    //             }
    //         }, false);
    //     });
    // </script>
});
define('standard-evaluator/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('standard-evaluator/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('standard-evaluator/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('standard-evaluator/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('standard-evaluator/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("standard-evaluator/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('standard-evaluator/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'standard-evaluator/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _standardEvaluatorConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_standardEvaluatorConfigEnvironment['default'].APP.name, _standardEvaluatorConfigEnvironment['default'].APP.version)
  };
});
define('standard-evaluator/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('standard-evaluator/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('standard-evaluator/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
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
define('standard-evaluator/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('standard-evaluator/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('standard-evaluator/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("standard-evaluator/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('standard-evaluator/models/file', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		fileName: _emberData['default'].attr('string')
	});
});
define('standard-evaluator/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('standard-evaluator/router', ['exports', 'ember', 'standard-evaluator/config/environment'], function (exports, _ember, _standardEvaluatorConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _standardEvaluatorConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('standard-evaluator/routes/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.peekAll('file');
		}
	});
});
define('standard-evaluator/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("standard-evaluator/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "standard-evaluator/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["content", "file-picker", ["loc", [null, [2, 1], [2, 16]]], 0, 0, 0, 0], ["content", "outlet", ["loc", [null, [4, 1], [4, 11]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("standard-evaluator/templates/components/file-picker", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 2
            },
            "end": {
              "line": 15,
              "column": 2
            }
          },
          "moduleName": "standard-evaluator/templates/components/file-picker.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "file-container");
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "fa fa-close file-icon");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["content", "file.fileName", ["loc", [null, [12, 4], [12, 21]]], 0, 0, 0, 0], ["element", "action", ["removeFile", ["get", "file", ["loc", [null, [13, 59], [13, 63]]], 0, 0, 0, 0]], [], ["loc", [null, [13, 37], [13, 65]]], 0, 0]],
        locals: ["file"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "standard-evaluator/templates/components/file-picker.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6 col-sm-offset-3");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "id", "file-multiple-button");
        dom.setAttribute(el3, "class", "hidden");
        dom.setAttribute(el3, "type", "file");
        dom.setAttribute(el3, "title", "Select a file");
        dom.setAttribute(el3, "multiple", "");
        dom.setAttribute(el3, "webkitdirectory", "");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "id", "file-single-button");
        dom.setAttribute(el3, "class", "hidden");
        dom.setAttribute(el3, "type", "file");
        dom.setAttribute(el3, "title", "Select a file");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row file-buttons-container");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "select-multiplefile-button");
        var el5 = dom.createTextNode("Select Folder");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "select-singlefile-button");
        var el5 = dom.createTextNode("Single File");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0, 1]);
        var element3 = dom.childAt(element2, [5]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element4);
        morphs[1] = dom.createElementMorph(element5);
        morphs[2] = dom.createMorphAt(element2, 7, 7);
        return morphs;
      },
      statements: [["element", "action", ["openMultipleFileSelector"], [], ["loc", [null, [7, 43], [7, 80]]], 0, 0], ["element", "action", ["openSingleFileSelector"], [], ["loc", [null, [8, 41], [8, 76]]], 0, 0], ["block", "each", [["get", "files", ["loc", [null, [10, 10], [10, 15]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [10, 2], [15, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('standard-evaluator/config/environment', ['ember'], function(Ember) {
  var prefix = 'standard-evaluator';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("standard-evaluator/app")["default"].create({"name":"standard-evaluator","version":"0.0.0+1bf1d8c1"});
}

/* jshint ignore:end */
//# sourceMappingURL=standard-evaluator.map