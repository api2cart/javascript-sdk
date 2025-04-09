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
    instance = new Api2CartOpenApi.Cart();
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

  describe('Cart', function() {
    it('should create an instance of Cart', function() {
      // uncomment below and update the code to test Cart
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be.a(Api2CartOpenApi.Cart);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

    it('should have the property dbPrefix (base name: "db_prefix")', function() {
      // uncomment below and update the code to test the property dbPrefix
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

    it('should have the property storesInfo (base name: "stores_info")', function() {
      // uncomment below and update the code to test the property storesInfo
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

    it('should have the property warehouses (base name: "warehouses")', function() {
      // uncomment below and update the code to test the property warehouses
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

    it('should have the property shippingZones (base name: "shipping_zones")', function() {
      // uncomment below and update the code to test the property shippingZones
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "additional_fields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Api2CartOpenApi.Cart();
      //expect(instance).to.be();
    });

  });

}));
