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
    instance = new Api2CartOpenApi.OrderTotal();
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

  describe('OrderTotal', function() {
    it('should create an instance of OrderTotal', function() {
      // uncomment below and update the code to test OrderTotal
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be.a(Api2CartOpenApi.OrderTotal);
    });

    it('should have the property subtotalExTax (base name: "subtotal_ex_tax")', function() {
      // uncomment below and update the code to test the property subtotalExTax
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

    it('should have the property wrappingExTax (base name: "wrapping_ex_tax")', function() {
      // uncomment below and update the code to test the property wrappingExTax
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

    it('should have the property shippingExTax (base name: "shipping_ex_tax")', function() {
      // uncomment below and update the code to test the property shippingExTax
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscount (base name: "total_discount")', function() {
      // uncomment below and update the code to test the property totalDiscount
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

    it('should have the property totalTax (base name: "total_tax")', function() {
      // uncomment below and update the code to test the property totalTax
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

    it('should have the property totalPaid (base name: "total_paid")', function() {
      // uncomment below and update the code to test the property totalPaid
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "additional_fields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Api2CartOpenApi.OrderTotal();
      //expect(instance).to.be();
    });

  });

}));
