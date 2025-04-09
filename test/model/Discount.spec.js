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
    instance = new Api2CartOpenApi.Discount();
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

  describe('Discount', function() {
    it('should create an instance of Discount', function() {
      // uncomment below and update the code to test Discount
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be.a(Api2CartOpenApi.Discount);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property modifierType (base name: "modifier_type")', function() {
      // uncomment below and update the code to test the property modifierType
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property fromTime (base name: "from_time")', function() {
      // uncomment below and update the code to test the property fromTime
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property toTime (base name: "to_time")', function() {
      // uncomment below and update the code to test the property toTime
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property customerGroupIds (base name: "customer_group_ids")', function() {
      // uncomment below and update the code to test the property customerGroupIds
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property sortOrder (base name: "sort_order")', function() {
      // uncomment below and update the code to test the property sortOrder
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "additional_fields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Api2CartOpenApi.Discount();
      //expect(instance).to.be();
    });

  });

}));
