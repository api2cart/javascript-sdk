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
    instance = new Api2CartOpenApi.Shipment();
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

  describe('Shipment', function() {
    it('should create an instance of Shipment', function() {
      // uncomment below and update the code to test Shipment
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be.a(Api2CartOpenApi.Shipment);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouse_id")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property shipmentProvider (base name: "shipment_provider")', function() {
      // uncomment below and update the code to test the property shipmentProvider
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumbers (base name: "tracking_numbers")', function() {
      // uncomment below and update the code to test the property trackingNumbers
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property modifiedTime (base name: "modified_time")', function() {
      // uncomment below and update the code to test the property modifiedTime
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property isShipped (base name: "is_shipped")', function() {
      // uncomment below and update the code to test the property isShipped
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property deliveredAt (base name: "delivered_at")', function() {
      // uncomment below and update the code to test the property deliveredAt
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "additional_fields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Api2CartOpenApi.Shipment();
      //expect(instance).to.be();
    });

  });

}));
