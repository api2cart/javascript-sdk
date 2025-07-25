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
    instance = new Api2CartOpenApi.CartCouponAdd();
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

  describe('CartCouponAdd', function() {
    it('should create an instance of CartCouponAdd', function() {
      // uncomment below and update the code to test CartCouponAdd
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be.a(Api2CartOpenApi.CartCouponAdd);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property actionType (base name: "action_type")', function() {
      // uncomment below and update the code to test the property actionType
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property actionApplyTo (base name: "action_apply_to")', function() {
      // uncomment below and update the code to test the property actionApplyTo
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property actionScope (base name: "action_scope")', function() {
      // uncomment below and update the code to test the property actionScope
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property actionAmount (base name: "action_amount")', function() {
      // uncomment below and update the code to test the property actionAmount
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property codes (base name: "codes")', function() {
      // uncomment below and update the code to test the property codes
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property dateStart (base name: "date_start")', function() {
      // uncomment below and update the code to test the property dateStart
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property dateEnd (base name: "date_end")', function() {
      // uncomment below and update the code to test the property dateEnd
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property usageLimit (base name: "usage_limit")', function() {
      // uncomment below and update the code to test the property usageLimit
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property usageLimitPerCustomer (base name: "usage_limit_per_customer")', function() {
      // uncomment below and update the code to test the property usageLimitPerCustomer
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property actionConditionEntity (base name: "action_condition_entity")', function() {
      // uncomment below and update the code to test the property actionConditionEntity
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property actionConditionKey (base name: "action_condition_key")', function() {
      // uncomment below and update the code to test the property actionConditionKey
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property actionConditionOperator (base name: "action_condition_operator")', function() {
      // uncomment below and update the code to test the property actionConditionOperator
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property actionConditionValue (base name: "action_condition_value")', function() {
      // uncomment below and update the code to test the property actionConditionValue
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property includeTax (base name: "include_tax")', function() {
      // uncomment below and update the code to test the property includeTax
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "store_id")', function() {
      // uncomment below and update the code to test the property storeId
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

    it('should have the property freeCashOnDelivery (base name: "free_cash_on_delivery")', function() {
      // uncomment below and update the code to test the property freeCashOnDelivery
      //var instance = new Api2CartOpenApi.CartCouponAdd();
      //expect(instance).to.be();
    });

  });

}));
