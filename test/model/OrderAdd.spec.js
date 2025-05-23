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
    instance = new Api2CartOpenApi.OrderAdd();
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

  describe('OrderAdd', function() {
    it('should create an instance of OrderAdd', function() {
      // uncomment below and update the code to test OrderAdd
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be.a(Api2CartOpenApi.OrderAdd);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "store_id")', function() {
      // uncomment below and update the code to test the property storeId
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property channelId (base name: "channel_id")', function() {
      // uncomment below and update the code to test the property channelId
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property orderStatus (base name: "order_status")', function() {
      // uncomment below and update the code to test the property orderStatus
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentStatus (base name: "fulfillment_status")', function() {
      // uncomment below and update the code to test the property fulfillmentStatus
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property financialStatus (base name: "financial_status")', function() {
      // uncomment below and update the code to test the property financialStatus
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property customerEmail (base name: "customer_email")', function() {
      // uncomment below and update the code to test the property customerEmail
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property customerFirstName (base name: "customer_first_name")', function() {
      // uncomment below and update the code to test the property customerFirstName
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property customerLastName (base name: "customer_last_name")', function() {
      // uncomment below and update the code to test the property customerLastName
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property customerPhone (base name: "customer_phone")', function() {
      // uncomment below and update the code to test the property customerPhone
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property customerCountry (base name: "customer_country")', function() {
      // uncomment below and update the code to test the property customerCountry
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property customerBirthday (base name: "customer_birthday")', function() {
      // uncomment below and update the code to test the property customerBirthday
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property customerFax (base name: "customer_fax")', function() {
      // uncomment below and update the code to test the property customerFax
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property orderPaymentMethod (base name: "order_payment_method")', function() {
      // uncomment below and update the code to test the property orderPaymentMethod
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transaction_id")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property dateModified (base name: "date_modified")', function() {
      // uncomment below and update the code to test the property dateModified
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property dateFinished (base name: "date_finished")', function() {
      // uncomment below and update the code to test the property dateFinished
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billFirstName (base name: "bill_first_name")', function() {
      // uncomment below and update the code to test the property billFirstName
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billLastName (base name: "bill_last_name")', function() {
      // uncomment below and update the code to test the property billLastName
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billAddress1 (base name: "bill_address_1")', function() {
      // uncomment below and update the code to test the property billAddress1
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billAddress2 (base name: "bill_address_2")', function() {
      // uncomment below and update the code to test the property billAddress2
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billCity (base name: "bill_city")', function() {
      // uncomment below and update the code to test the property billCity
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billPostcode (base name: "bill_postcode")', function() {
      // uncomment below and update the code to test the property billPostcode
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billState (base name: "bill_state")', function() {
      // uncomment below and update the code to test the property billState
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billCountry (base name: "bill_country")', function() {
      // uncomment below and update the code to test the property billCountry
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billCompany (base name: "bill_company")', function() {
      // uncomment below and update the code to test the property billCompany
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billPhone (base name: "bill_phone")', function() {
      // uncomment below and update the code to test the property billPhone
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property billFax (base name: "bill_fax")', function() {
      // uncomment below and update the code to test the property billFax
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippFirstName (base name: "shipp_first_name")', function() {
      // uncomment below and update the code to test the property shippFirstName
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippLastName (base name: "shipp_last_name")', function() {
      // uncomment below and update the code to test the property shippLastName
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippAddress1 (base name: "shipp_address_1")', function() {
      // uncomment below and update the code to test the property shippAddress1
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippAddress2 (base name: "shipp_address_2")', function() {
      // uncomment below and update the code to test the property shippAddress2
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippCity (base name: "shipp_city")', function() {
      // uncomment below and update the code to test the property shippCity
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippPostcode (base name: "shipp_postcode")', function() {
      // uncomment below and update the code to test the property shippPostcode
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippState (base name: "shipp_state")', function() {
      // uncomment below and update the code to test the property shippState
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippCountry (base name: "shipp_country")', function() {
      // uncomment below and update the code to test the property shippCountry
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippCompany (base name: "shipp_company")', function() {
      // uncomment below and update the code to test the property shippCompany
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippPhone (base name: "shipp_phone")', function() {
      // uncomment below and update the code to test the property shippPhone
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippFax (base name: "shipp_fax")', function() {
      // uncomment below and update the code to test the property shippFax
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property subtotalPrice (base name: "subtotal_price")', function() {
      // uncomment below and update the code to test the property subtotalPrice
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property taxPrice (base name: "tax_price")', function() {
      // uncomment below and update the code to test the property taxPrice
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property totalPrice (base name: "total_price")', function() {
      // uncomment below and update the code to test the property totalPrice
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property totalPaid (base name: "total_paid")', function() {
      // uncomment below and update the code to test the property totalPaid
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property totalWeight (base name: "total_weight")', function() {
      // uncomment below and update the code to test the property totalWeight
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property pricesIncTax (base name: "prices_inc_tax")', function() {
      // uncomment below and update the code to test the property pricesIncTax
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippingPrice (base name: "shipping_price")', function() {
      // uncomment below and update the code to test the property shippingPrice
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property shippingTax (base name: "shipping_tax")', function() {
      // uncomment below and update the code to test the property shippingTax
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property discount (base name: "discount")', function() {
      // uncomment below and update the code to test the property discount
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property couponDiscount (base name: "coupon_discount")', function() {
      // uncomment below and update the code to test the property couponDiscount
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property giftCertificateDiscount (base name: "gift_certificate_discount")', function() {
      // uncomment below and update the code to test the property giftCertificateDiscount
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property orderShippingMethod (base name: "order_shipping_method")', function() {
      // uncomment below and update the code to test the property orderShippingMethod
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property carrierId (base name: "carrier_id")', function() {
      // uncomment below and update the code to test the property carrierId
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property warehouseId (base name: "warehouse_id")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property coupons (base name: "coupons")', function() {
      // uncomment below and update the code to test the property coupons
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property adminComment (base name: "admin_comment")', function() {
      // uncomment below and update the code to test the property adminComment
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property adminPrivateComment (base name: "admin_private_comment")', function() {
      // uncomment below and update the code to test the property adminPrivateComment
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property sendNotifications (base name: "send_notifications")', function() {
      // uncomment below and update the code to test the property sendNotifications
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property sendAdminNotifications (base name: "send_admin_notifications")', function() {
      // uncomment below and update the code to test the property sendAdminNotifications
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property externalSource (base name: "external_source")', function() {
      // uncomment below and update the code to test the property externalSource
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property inventoryBehaviour (base name: "inventory_behaviour")', function() {
      // uncomment below and update the code to test the property inventoryBehaviour
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property createInvoice (base name: "create_invoice")', function() {
      // uncomment below and update the code to test the property createInvoice
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property noteAttributes (base name: "note_attributes")', function() {
      // uncomment below and update the code to test the property noteAttributes
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property clearCache (base name: "clear_cache")', function() {
      // uncomment below and update the code to test the property clearCache
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

    it('should have the property orderItem (base name: "order_item")', function() {
      // uncomment below and update the code to test the property orderItem
      //var instance = new Api2CartOpenApi.OrderAdd();
      //expect(instance).to.be();
    });

  });

}));
