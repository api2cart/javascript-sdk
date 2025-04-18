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
    instance = new Api2CartOpenApi.OrderReturnUpdateOrderProductsInner();
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

  describe('OrderReturnUpdateOrderProductsInner', function() {
    it('should create an instance of OrderReturnUpdateOrderProductsInner', function() {
      // uncomment below and update the code to test OrderReturnUpdateOrderProductsInner
      //var instance = new Api2CartOpenApi.OrderReturnUpdateOrderProductsInner();
      //expect(instance).to.be.a(Api2CartOpenApi.OrderReturnUpdateOrderProductsInner);
    });

    it('should have the property orderProductId (base name: "order_product_id")', function() {
      // uncomment below and update the code to test the property orderProductId
      //var instance = new Api2CartOpenApi.OrderReturnUpdateOrderProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property orderProductQuantity (base name: "order_product_quantity")', function() {
      // uncomment below and update the code to test the property orderProductQuantity
      //var instance = new Api2CartOpenApi.OrderReturnUpdateOrderProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property orderProductStatus (base name: "order_product_status")', function() {
      // uncomment below and update the code to test the property orderProductStatus
      //var instance = new Api2CartOpenApi.OrderReturnUpdateOrderProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property orderProductActionId (base name: "order_product_action_id")', function() {
      // uncomment below and update the code to test the property orderProductActionId
      //var instance = new Api2CartOpenApi.OrderReturnUpdateOrderProductsInner();
      //expect(instance).to.be();
    });

  });

}));
