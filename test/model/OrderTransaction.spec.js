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
    instance = new Api2CartOpenApi.OrderTransaction();
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

  describe('OrderTransaction', function() {
    it('should create an instance of OrderTransaction', function() {
      // uncomment below and update the code to test OrderTransaction
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be.a(Api2CartOpenApi.OrderTransaction);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transaction_id")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parent_id")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property gateway (base name: "gateway")', function() {
      // uncomment below and update the code to test the property gateway
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "reference_number")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "created_time")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property settlementCurrency (base name: "settlement_currency")', function() {
      // uncomment below and update the code to test the property settlementCurrency
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property settlementAmount (base name: "settlement_amount")', function() {
      // uncomment below and update the code to test the property settlementAmount
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property settlementCreatedTime (base name: "settlement_created_time")', function() {
      // uncomment below and update the code to test the property settlementCreatedTime
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property cardBrand (base name: "card_brand")', function() {
      // uncomment below and update the code to test the property cardBrand
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property cardBin (base name: "card_bin")', function() {
      // uncomment below and update the code to test the property cardBin
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property cardLastFour (base name: "card_last_four")', function() {
      // uncomment below and update the code to test the property cardLastFour
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property avsStreetRespCode (base name: "avs_street_resp_code")', function() {
      // uncomment below and update the code to test the property avsStreetRespCode
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property avsPostalRespCode (base name: "avs_postal_resp_code")', function() {
      // uncomment below and update the code to test the property avsPostalRespCode
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property avsMessage (base name: "avs_message")', function() {
      // uncomment below and update the code to test the property avsMessage
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property cvvCode (base name: "cvv_code")', function() {
      // uncomment below and update the code to test the property cvvCode
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property cvvMessage (base name: "cvv_message")', function() {
      // uncomment below and update the code to test the property cvvMessage
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property isTestMode (base name: "is_test_mode")', function() {
      // uncomment below and update the code to test the property isTestMode
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property additionalFields (base name: "additional_fields")', function() {
      // uncomment below and update the code to test the property additionalFields
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new Api2CartOpenApi.OrderTransaction();
      //expect(instance).to.be();
    });

  });

}));
