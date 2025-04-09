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
    instance = new Api2CartOpenApi.ProductVariantUpdateBatch();
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

  describe('ProductVariantUpdateBatch', function() {
    it('should create an instance of ProductVariantUpdateBatch', function() {
      // uncomment below and update the code to test ProductVariantUpdateBatch
      //var instance = new Api2CartOpenApi.ProductVariantUpdateBatch();
      //expect(instance).to.be.a(Api2CartOpenApi.ProductVariantUpdateBatch);
    });

    it('should have the property nestedItemsUpdateBehaviour (base name: "nested_items_update_behaviour")', function() {
      // uncomment below and update the code to test the property nestedItemsUpdateBehaviour
      //var instance = new Api2CartOpenApi.ProductVariantUpdateBatch();
      //expect(instance).to.be();
    });

    it('should have the property clearCache (base name: "clear_cache")', function() {
      // uncomment below and update the code to test the property clearCache
      //var instance = new Api2CartOpenApi.ProductVariantUpdateBatch();
      //expect(instance).to.be();
    });

    it('should have the property reindex (base name: "reindex")', function() {
      // uncomment below and update the code to test the property reindex
      //var instance = new Api2CartOpenApi.ProductVariantUpdateBatch();
      //expect(instance).to.be();
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instance = new Api2CartOpenApi.ProductVariantUpdateBatch();
      //expect(instance).to.be();
    });

  });

}));
