"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('gaq-api-interaction/adapters/contact-person', ['exports', 'gaq-api-interaction/adapters/gaq'], function (exports, _gaqApiInteractionAdaptersGaq) {
  exports['default'] = _gaqApiInteractionAdaptersGaq['default'].extend({
    pathForType: function pathForType() {
      return 'heartbeat';
    }
  });
});
define("gaq-api-interaction/adapters/gaq", ["exports", "ember-data"], function (exports, _emberData) {
  exports["default"] = _emberData["default"].RESTAdapter.extend({
    headers: {
      // "cid":"bd92b290-7c19-4667-b73d-a78e51e43798",
      "cid": "cbdcfa43-dd67-4c38-b418-83572a936fca",
      "Content-Type": "application/json"
    },
    host: 'https://193.67.163.141',
    namespace: 'api/secure'
  });
});
define('gaq-api-interaction/app', ['exports', 'ember', 'gaq-api-interaction/resolver', 'ember-load-initializers', 'gaq-api-interaction/config/environment'], function (exports, _ember, _gaqApiInteractionResolver, _emberLoadInitializers, _gaqApiInteractionConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _gaqApiInteractionConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gaqApiInteractionConfigEnvironment['default'].podModulePrefix,
    Resolver: _gaqApiInteractionResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _gaqApiInteractionConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('gaq-api-interaction/helpers/app-version', ['exports', 'ember', 'gaq-api-interaction/config/environment'], function (exports, _ember, _gaqApiInteractionConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _gaqApiInteractionConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('gaq-api-interaction/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('gaq-api-interaction/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('gaq-api-interaction/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'gaq-api-interaction/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _gaqApiInteractionConfigEnvironment) {
  var _config$APP = _gaqApiInteractionConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('gaq-api-interaction/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('gaq-api-interaction/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

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
define('gaq-api-interaction/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

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
  
    App.PostsController = Ember.Controller.extend({
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
define('gaq-api-interaction/initializers/export-application-global', ['exports', 'ember', 'gaq-api-interaction/config/environment'], function (exports, _ember, _gaqApiInteractionConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_gaqApiInteractionConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _gaqApiInteractionConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_gaqApiInteractionConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
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
define('gaq-api-interaction/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

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
define('gaq-api-interaction/initializers/store', ['exports', 'ember'], function (exports, _ember) {

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
define('gaq-api-interaction/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

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
define("gaq-api-interaction/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('gaq-api-interaction/models/contact-person', ['exports', 'ember-data/model', 'ember-data'], function (exports, _emberDataModel, _emberData) {
  var attr = _emberData['default'].attr;
  exports['default'] = _emberDataModel['default'].extend({
    heartbeat: attr()
  });
});
define('gaq-api-interaction/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('gaq-api-interaction/router', ['exports', 'ember', 'gaq-api-interaction/config/environment'], function (exports, _ember, _gaqApiInteractionConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _gaqApiInteractionConfigEnvironment['default'].locationType,
    rootURL: _gaqApiInteractionConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('contact-person');
  });

  exports['default'] = Router;
});
define('gaq-api-interaction/routes/contact-person', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      //var x =  this.store.createRecord('contact-person',{title:'test',emai:'test'});
      //x.save();
      return this.store.findAll('contact-person');
    }
  });
});
define('gaq-api-interaction/serializers/contact-person', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      payload = { contactPerson: payload };
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});
define('gaq-api-interaction/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("gaq-api-interaction/templates/contact-person", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "gaq-api-interaction/templates/contact-person.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Test");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('gaq-api-interaction/config/environment', ['ember'], function(Ember) {
  var prefix = 'gaq-api-interaction';
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
  require("gaq-api-interaction/app")["default"].create({"name":"gaq-api-interaction","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=gaq-api-interaction.map
