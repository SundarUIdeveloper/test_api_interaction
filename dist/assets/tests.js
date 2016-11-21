'use strict';

define('gaq-api-interaction/tests/adapters/contact-person.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/contact-person.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/contact-person.js should pass jshint.\nadapters/contact-person.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/contact-person.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nadapters/contact-person.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('gaq-api-interaction/tests/adapters/gaq.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/gaq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/gaq.js should pass jshint.\nadapters/gaq.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/gaq.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('gaq-api-interaction/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('gaq-api-interaction/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('gaq-api-interaction/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'gaq-api-interaction/tests/helpers/start-app', 'gaq-api-interaction/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _gaqApiInteractionTestsHelpersStartApp, _gaqApiInteractionTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _gaqApiInteractionTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _gaqApiInteractionTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('gaq-api-interaction/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/helpers/resolver', ['exports', 'gaq-api-interaction/resolver', 'gaq-api-interaction/config/environment'], function (exports, _gaqApiInteractionResolver, _gaqApiInteractionConfigEnvironment) {

  var resolver = _gaqApiInteractionResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _gaqApiInteractionConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gaqApiInteractionConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('gaq-api-interaction/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/helpers/start-app', ['exports', 'ember', 'gaq-api-interaction/app', 'gaq-api-interaction/config/environment'], function (exports, _ember, _gaqApiInteractionApp, _gaqApiInteractionConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _gaqApiInteractionConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _gaqApiInteractionApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('gaq-api-interaction/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/models/contact-person.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/contact-person.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/contact-person.js should pass jshint.\nmodels/contact-person.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/contact-person.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/contact-person.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/contact-person.js: line 4, col 1, \'destructuring binding\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/contact-person.js: line 6, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n5 errors');
  });
});
define('gaq-api-interaction/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('gaq-api-interaction/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 13, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('gaq-api-interaction/tests/routes/contact-person.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contact-person.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contact-person.js should pass jshint.\nroutes/contact-person.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/contact-person.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/contact-person.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('gaq-api-interaction/tests/serializers/contact-person.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/contact-person.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/contact-person.js should pass jshint.\nserializers/contact-person.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nserializers/contact-person.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nserializers/contact-person.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('gaq-api-interaction/tests/test-helper', ['exports', 'gaq-api-interaction/tests/helpers/resolver', 'ember-qunit'], function (exports, _gaqApiInteractionTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_gaqApiInteractionTestsHelpersResolver['default']);
});
define('gaq-api-interaction/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/unit/adapters/contact-person-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:contact-person', 'Unit | Adapter | contact person', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('gaq-api-interaction/tests/unit/adapters/contact-person-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/contact-person-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/contact-person-test.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/unit/adapters/gaq-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:gaq', 'Unit | Adapter | gaq', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('gaq-api-interaction/tests/unit/adapters/gaq-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/gaq-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/gaq-test.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/unit/models/contact-person-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('contact-person', 'Unit | Model | contact person', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('gaq-api-interaction/tests/unit/models/contact-person-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/contact-person-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contact-person-test.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/unit/routes/contact-person-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact-person', 'Unit | Route | contact person', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('gaq-api-interaction/tests/unit/routes/contact-person-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/contact-person-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-person-test.js should pass jshint.');
  });
});
define('gaq-api-interaction/tests/unit/serializers/contact-person-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('contact-person', 'Unit | Serializer | contact person', {
    // Specify the other units that are required for this test.
    needs: ['serializer:contact-person']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('gaq-api-interaction/tests/unit/serializers/contact-person-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/serializers/contact-person-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/contact-person-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('gaq-api-interaction/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
