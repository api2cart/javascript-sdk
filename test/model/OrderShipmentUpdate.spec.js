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
    instance = new Api2CartOpenApi.OrderShipmentUpdate();
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

  describe('OrderShipmentUpdate', function() {
    it('should create an instance of OrderShipmentUpdate', function() {
      // uncomment below and update the code to test OrderShipmentUpdate
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be.a(Api2CartOpenApi.OrderShipmentUpdate);
    });

    it('should have the property shipmentId (base name: "shipment_id")', function() {
      // uncomment below and update the code to test the property shipmentId
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "store_id")', function() {
      // uncomment below and update the code to test the property storeId
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property shipmentProvider (base name: "shipment_provider")', function() {
      // uncomment below and update the code to test the property shipmentProvider
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumbers (base name: "tracking_numbers")', function() {
      // uncomment below and update the code to test the property trackingNumbers
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property trackingLink (base name: "tracking_link")', function() {
      // uncomment below and update the code to test the property trackingLink
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property isShipped (base name: "is_shipped")', function() {
      // uncomment below and update the code to test the property isShipped
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property deliveredAt (base name: "delivered_at")', function() {
      // uncomment below and update the code to test the property deliveredAt
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property replace (base name: "replace")', function() {
      // uncomment below and update the code to test the property replace
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property sendNotifications (base name: "send_notifications")', function() {
      // uncomment below and update the code to test the property sendNotifications
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property trackingProvider (base name: "tracking_provider")', function() {
      // uncomment below and update the code to test the property trackingProvider
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new Api2CartOpenApi.OrderShipmentUpdate();
      //expect(instance).to.be();
    });

  });

}));
