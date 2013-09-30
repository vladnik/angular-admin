'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('angular-admin', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('angular-admin');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('angular-admin.config')).toBeTruthy();
    });

    
    it('should load filters module', function() {
        expect(hasModule('angular-admin.filters')).toBeTruthy();
    });
    

    
    it('should load directives module', function() {
        expect(hasModule('angular-admin.directives')).toBeTruthy();
    });
    

    
    it('should load services module', function() {
        expect(hasModule('angular-admin.services')).toBeTruthy();
    });
    

});
