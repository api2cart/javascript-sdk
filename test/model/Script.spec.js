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
    instance = new Api2CartOpenApi.Script();
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

  describe('Script', function() {
    it('should create an instance of Script', function() {
      // uncomment below and update the code to test Script
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be.a(Api2CartOpenApi.Script);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property src (base name: "src")', function() {
      // uncomment below and update the code to test the property src
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property loadMethod (base name: "load_method")', function() {
      // uncomment below and update the code to test the property loadMethod
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property html (base name: "html")', function() {
      // uncomment below and update the code to test the property html
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "created_time")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property modifiedTime (base name: "modified_time")', function() {
      // uncomment below and update the code to test the property modifiedTime
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "additional_fields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Api2CartOpenApi.Script();
      //expect(instance).to.be();
    });

  });

}));
