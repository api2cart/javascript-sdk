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
    instance = new Api2CartOpenApi.ProductImageAdd();
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

  describe('ProductImageAdd', function() {
    it('should create an instance of ProductImageAdd', function() {
      // uncomment below and update the code to test ProductImageAdd
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be.a(Api2CartOpenApi.ProductImageAdd);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property imageName (base name: "image_name")', function() {
      // uncomment below and update the code to test the property imageName
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property productVariantId (base name: "product_variant_id")', function() {
      // uncomment below and update the code to test the property productVariantId
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property variantIds (base name: "variant_ids")', function() {
      // uncomment below and update the code to test the property variantIds
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property optionValueIds (base name: "option_value_ids")', function() {
      // uncomment below and update the code to test the property optionValueIds
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property storeId (base name: "store_id")', function() {
      // uncomment below and update the code to test the property storeId
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property langId (base name: "lang_id")', function() {
      // uncomment below and update the code to test the property langId
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property mime (base name: "mime")', function() {
      // uncomment below and update the code to test the property mime
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

    it('should have the property useLatestApiVersion (base name: "use_latest_api_version")', function() {
      // uncomment below and update the code to test the property useLatestApiVersion
      //var instance = new Api2CartOpenApi.ProductImageAdd();
      //expect(instance).to.be();
    });

  });

}));
