// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angular-admin.config', [])
    .value('angular-admin.config', {
        debug: true
    });

// Modules
angular.module('angular-admin.directives', []);
angular.module('angular-admin.filters', []);
angular.module('angular-admin.services', []);
angular.module('angular-admin',
    [
        'angular-admin.config',
        'angular-admin.directives',
        'angular-admin.filters',
        'angular-admin.services',
        'ngResource',
        'ngCookies',
        'ngSanitize'
    ]);
