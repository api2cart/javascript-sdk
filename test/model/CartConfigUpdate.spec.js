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
    instance = new Api2CartOpenApi.CartConfigUpdate();
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

  describe('CartConfigUpdate', function() {
    it('should create an instance of CartConfigUpdate', function() {
      // uncomment below and update the code to test CartConfigUpdate
      //var instance = new Api2CartOpenApi.CartConfigUpdate();
      //expect(instance).to.be.a(Api2CartOpenApi.CartConfigUpdate);
    });

    it('should have the property dbTablesPrefix (base name: "db_tables_prefix")', function() {
      // uncomment below and update the code to test the property dbTablesPrefix
      //var instance = new Api2CartOpenApi.CartConfigUpdate();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Api2CartOpenApi.CartConfigUpdate();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "store_id")', function() {
      // uncomment below and update the code to test the property storeId
      //var instance = new Api2CartOpenApi.CartConfigUpdate();
      //expect(instance).to.be();
    });

    it('should have the property userAgent (base name: "user_agent")', function() {
      // uncomment below and update the code to test the property userAgent
      //var instance = new Api2CartOpenApi.CartConfigUpdate();
      //expect(instance).to.be();
    });

  });

}));
