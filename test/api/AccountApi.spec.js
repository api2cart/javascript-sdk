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
    instance = new Api2CartOpenApi.AccountApi();
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

  describe('AccountApi', function() {
    describe('accountCartAdd', function() {
      it('should call accountCartAdd successfully', function(done) {
        //uncomment below and update the code to test accountCartAdd
        //instance.accountCartAdd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountCartList', function() {
      it('should call accountCartList successfully', function(done) {
        //uncomment below and update the code to test accountCartList
        //instance.accountCartList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountConfigUpdate', function() {
      it('should call accountConfigUpdate successfully', function(done) {
        //uncomment below and update the code to test accountConfigUpdate
        //instance.accountConfigUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountFailedWebhooks', function() {
      it('should call accountFailedWebhooks successfully', function(done) {
        //uncomment below and update the code to test accountFailedWebhooks
        //instance.accountFailedWebhooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountSupportedPlatforms', function() {
      it('should call accountSupportedPlatforms successfully', function(done) {
        //uncomment below and update the code to test accountSupportedPlatforms
        //instance.accountSupportedPlatforms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
