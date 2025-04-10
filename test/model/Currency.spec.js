/**
 * API2Cart OpenAPI
 * API2Cart
 *
 * The version of the OpenAPI document: 1.1
 * Contact: contact@api2cart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Api2CartOpenApi);
  }
}(this, function(expect, Api2CartOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Api2CartOpenApi.Currency();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Currency', function() {
    it('should create an instance of Currency', function() {
      // uncomment below and update the code to test Currency
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be.a(Api2CartOpenApi.Currency);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property iso3 (base name: "iso3")', function() {
      // uncomment below and update the code to test the property iso3
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property symbolLeft (base name: "symbol_left")', function() {
      // uncomment below and update the code to test the property symbolLeft
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property symbolRight (base name: "symbol_right")', function() {
      // uncomment below and update the code to test the property symbolRight
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property rate (base name: "rate")', function() {
      // uncomment below and update the code to test the property rate
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property avail (base name: "avail")', function() {
      // uncomment below and update the code to test the property avail
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "additional_fields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Api2CartOpenApi.Currency();
      //expect(instance).to.be();
    });

  });

}));
