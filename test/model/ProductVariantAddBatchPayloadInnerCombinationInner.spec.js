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
    instance = new Api2CartOpenApi.ProductVariantAddBatchPayloadInnerCombinationInner();
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

  describe('ProductVariantAddBatchPayloadInnerCombinationInner', function() {
    it('should create an instance of ProductVariantAddBatchPayloadInnerCombinationInner', function() {
      // uncomment below and update the code to test ProductVariantAddBatchPayloadInnerCombinationInner
      //var instance = new Api2CartOpenApi.ProductVariantAddBatchPayloadInnerCombinationInner();
      //expect(instance).to.be.a(Api2CartOpenApi.ProductVariantAddBatchPayloadInnerCombinationInner);
    });

    it('should have the property optionName (base name: "option_name")', function() {
      // uncomment below and update the code to test the property optionName
      //var instance = new Api2CartOpenApi.ProductVariantAddBatchPayloadInnerCombinationInner();
      //expect(instance).to.be();
    });

    it('should have the property optionValueName (base name: "option_value_name")', function() {
      // uncomment below and update the code to test the property optionValueName
      //var instance = new Api2CartOpenApi.ProductVariantAddBatchPayloadInnerCombinationInner();
      //expect(instance).to.be();
    });

  });

}));
