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
    instance = new Api2CartOpenApi.ProductVariantAddAttributesInner();
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

  describe('ProductVariantAddAttributesInner', function() {
    it('should create an instance of ProductVariantAddAttributesInner', function() {
      // uncomment below and update the code to test ProductVariantAddAttributesInner
      //var instance = new Api2CartOpenApi.ProductVariantAddAttributesInner();
      //expect(instance).to.be.a(Api2CartOpenApi.ProductVariantAddAttributesInner);
    });

    it('should have the property attributeName (base name: "attribute_name")', function() {
      // uncomment below and update the code to test the property attributeName
      //var instance = new Api2CartOpenApi.ProductVariantAddAttributesInner();
      //expect(instance).to.be();
    });

    it('should have the property attributeValue (base name: "attribute_value")', function() {
      // uncomment below and update the code to test the property attributeValue
      //var instance = new Api2CartOpenApi.ProductVariantAddAttributesInner();
      //expect(instance).to.be();
    });

    it('should have the property attributePrice (base name: "attribute_price")', function() {
      // uncomment below and update the code to test the property attributePrice
      //var instance = new Api2CartOpenApi.ProductVariantAddAttributesInner();
      //expect(instance).to.be();
    });

  });

}));
