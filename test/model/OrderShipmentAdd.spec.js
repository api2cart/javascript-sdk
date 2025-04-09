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
    instance = new Api2CartOpenApi.OrderShipmentAdd();
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

  describe('OrderShipmentAdd', function() {
    it('should create an instance of OrderShipmentAdd', function() {
      // uncomment below and update the code to test OrderShipmentAdd
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be.a(Api2CartOpenApi.OrderShipmentAdd);
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "store_id")', function() {
      // uncomment below and update the code to test the property storeId
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouse_id")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property shipmentProvider (base name: "shipment_provider")', function() {
      // uncomment below and update the code to test the property shipmentProvider
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippingMethod (base name: "shipping_method")', function() {
      // uncomment below and update the code to test the property shippingMethod
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property sendNotifications (base name: "send_notifications")', function() {
      // uncomment below and update the code to test the property sendNotifications
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumbers (base name: "tracking_numbers")', function() {
      // uncomment below and update the code to test the property trackingNumbers
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property adjustStock (base name: "adjust_stock")', function() {
      // uncomment below and update the code to test the property adjustStock
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property enableCache (base name: "enable_cache")', function() {
      // uncomment below and update the code to test the property enableCache
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property trackingLink (base name: "tracking_link")', function() {
      // uncomment below and update the code to test the property trackingLink
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property isShipped (base name: "is_shipped")', function() {
      // uncomment below and update the code to test the property isShipped
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property checkProcessStatus (base name: "check_process_status")', function() {
      // uncomment below and update the code to test the property checkProcessStatus
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

    it('should have the property useLatestApiVersion (base name: "use_latest_api_version")', function() {
      // uncomment below and update the code to test the property useLatestApiVersion
      //var instance = new Api2CartOpenApi.OrderShipmentAdd();
      //expect(instance).to.be();
    });

  });

}));
