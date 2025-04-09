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


import ApiClient from "../ApiClient";
import AccountConfigUpdate200Response from '../model/AccountConfigUpdate200Response';
import AttributeDelete200Response from '../model/AttributeDelete200Response';
import CartConfigUpdate200Response from '../model/CartConfigUpdate200Response';
import CategoryAdd200Response from '../model/CategoryAdd200Response';
import CategoryAddBatch from '../model/CategoryAddBatch';
import CategoryAddBatch200Response from '../model/CategoryAddBatch200Response';
import CategoryCount200Response from '../model/CategoryCount200Response';
import CategoryDelete200Response from '../model/CategoryDelete200Response';
import CategoryFind200Response from '../model/CategoryFind200Response';
import CategoryImageAdd200Response from '../model/CategoryImageAdd200Response';
import CategoryInfo200Response from '../model/CategoryInfo200Response';
import ModelResponseCategoryList from '../model/ModelResponseCategoryList';

/**
* Category service.
* @module api/CategoryApi
* @version 1.1
*/
export default class CategoryApi {

    /**
    * Constructs a new CategoryApi. 
    * @alias module:api/CategoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the categoryAdd operation.
     * @callback module:api/CategoryApi~categoryAddCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryAdd200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.add
     * Add new category in store
     * @param {String} name Defines category's name that has to be added
     * @param {Object} opts Optional parameters
     * @param {String} [parentId] Adds categories specified by parent id
     * @param {String} [storesIds] Create category in the stores that is specified by comma-separated stores' id
     * @param {String} [storeId] Store Id
     * @param {String} [langId] Language id
     * @param {Boolean} [avail = true)] Defines category's visibility status
     * @param {Number} [sortOrder = 0)] Sort number in the list
     * @param {String} [createdTime] Entity's date creation
     * @param {String} [modifiedTime] Entity's date modification
     * @param {String} [description] Defines category's description
     * @param {String} [shortDescription] Defines short description
     * @param {String} [metaTitle] Defines unique meta title for each entity
     * @param {String} [metaDescription] Defines unique meta description of a entity
     * @param {String} [metaKeywords] Defines unique meta keywords for each entity
     * @param {String} [seoUrl] Defines unique category's URL for SEO
     * @param {module:api/CategoryApi~categoryAddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryAdd200Response}
     */
    categoryAdd(name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling categoryAdd");
      }

      let pathParams = {
      };
      let queryParams = {
        'name': name,
        'parent_id': opts['parentId'],
        'stores_ids': opts['storesIds'],
        'store_id': opts['storeId'],
        'lang_id': opts['langId'],
        'avail': opts['avail'],
        'sort_order': opts['sortOrder'],
        'created_time': opts['createdTime'],
        'modified_time': opts['modifiedTime'],
        'description': opts['description'],
        'short_description': opts['shortDescription'],
        'meta_title': opts['metaTitle'],
        'meta_description': opts['metaDescription'],
        'meta_keywords': opts['metaKeywords'],
        'seo_url': opts['seoUrl']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryAdd200Response;
      return this.apiClient.callApi(
        '/category.add.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryAddBatch operation.
     * @callback module:api/CategoryApi~categoryAddBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryAddBatch200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.add.batch
     * Add new categories to the store.
     * @param {module:model/CategoryAddBatch} categoryAddBatch 
     * @param {module:api/CategoryApi~categoryAddBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryAddBatch200Response}
     */
    categoryAddBatch(categoryAddBatch, callback) {
      let postBody = categoryAddBatch;
      // verify the required parameter 'categoryAddBatch' is set
      if (categoryAddBatch === undefined || categoryAddBatch === null) {
        throw new Error("Missing the required parameter 'categoryAddBatch' when calling categoryAddBatch");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CategoryAddBatch200Response;
      return this.apiClient.callApi(
        '/category.add.batch.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryAssign operation.
     * @callback module:api/CategoryApi~categoryAssignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartConfigUpdate200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.assign
     * Assign category to product
     * @param {String} productId Defines category assign to the product, specified by product id
     * @param {String} categoryId Defines category assign, specified by category id
     * @param {Object} opts Optional parameters
     * @param {String} [storeId] Store Id
     * @param {module:api/CategoryApi~categoryAssignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CartConfigUpdate200Response}
     */
    categoryAssign(productId, categoryId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling categoryAssign");
      }
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling categoryAssign");
      }

      let pathParams = {
      };
      let queryParams = {
        'product_id': productId,
        'category_id': categoryId,
        'store_id': opts['storeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CartConfigUpdate200Response;
      return this.apiClient.callApi(
        '/category.assign.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryCount operation.
     * @callback module:api/CategoryApi~categoryCountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryCount200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.count
     * Count categories in store.
     * @param {Object} opts Optional parameters
     * @param {String} [parentId] Counts categories specified by parent id
     * @param {String} [storeId] Counts category specified by store id
     * @param {String} [langId] Counts category specified by language id
     * @param {String} [createdFrom] Retrieve entities from their creation date
     * @param {String} [createdTo] Retrieve entities to their creation date
     * @param {String} [modifiedFrom] Retrieve entities from their modification date
     * @param {String} [modifiedTo] Retrieve entities to their modification date
     * @param {Boolean} [avail = true)] Defines category's visibility status
     * @param {String} [productType] A categorization for the product
     * @param {String} [findValue] Entity search that is specified by some value
     * @param {String} [findWhere] Counts categories that are searched specified by field
     * @param {String} [reportRequestId] Report request id
     * @param {Boolean} [disableReportCache = false)] Disable report cache for current request
     * @param {module:api/CategoryApi~categoryCountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryCount200Response}
     */
    categoryCount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'parent_id': opts['parentId'],
        'store_id': opts['storeId'],
        'lang_id': opts['langId'],
        'created_from': opts['createdFrom'],
        'created_to': opts['createdTo'],
        'modified_from': opts['modifiedFrom'],
        'modified_to': opts['modifiedTo'],
        'avail': opts['avail'],
        'product_type': opts['productType'],
        'find_value': opts['findValue'],
        'find_where': opts['findWhere'],
        'report_request_id': opts['reportRequestId'],
        'disable_report_cache': opts['disableReportCache']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryCount200Response;
      return this.apiClient.callApi(
        '/category.count.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryDelete operation.
     * @callback module:api/CategoryApi~categoryDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryDelete200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.delete
     * Delete category in store
     * @param {String} id Defines category removal, specified by category id
     * @param {Object} opts Optional parameters
     * @param {String} [storeId] Store Id
     * @param {module:api/CategoryApi~categoryDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryDelete200Response}
     */
    categoryDelete(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling categoryDelete");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'store_id': opts['storeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryDelete200Response;
      return this.apiClient.callApi(
        '/category.delete.json', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryFind operation.
     * @callback module:api/CategoryApi~categoryFindCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryFind200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.find
     * Search category in store. \"Laptop\" is specified here by default.
     * @param {String} findValue Entity search that is specified by some value
     * @param {Object} opts Optional parameters
     * @param {String} [findWhere = 'name')] Entity search that is specified by the comma-separated unique fields
     * @param {String} [findParams = 'whole_words')] Entity search that is specified by comma-separated parameters
     * @param {String} [storeId] Store Id
     * @param {String} [langId] Language id
     * @param {module:api/CategoryApi~categoryFindCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryFind200Response}
     */
    categoryFind(findValue, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'findValue' is set
      if (findValue === undefined || findValue === null) {
        throw new Error("Missing the required parameter 'findValue' when calling categoryFind");
      }

      let pathParams = {
      };
      let queryParams = {
        'find_value': findValue,
        'find_where': opts['findWhere'],
        'find_params': opts['findParams'],
        'store_id': opts['storeId'],
        'lang_id': opts['langId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryFind200Response;
      return this.apiClient.callApi(
        '/category.find.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryImageAdd operation.
     * @callback module:api/CategoryApi~categoryImageAddCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryImageAdd200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.image.add
     * Add image to category
     * @param {String} categoryId Defines category id where the image should be added
     * @param {String} imageName Defines image's name
     * @param {String} url Defines URL of the image that has to be added
     * @param {module:model/String} type Defines image's types that are specified by comma-separated list
     * @param {Object} opts Optional parameters
     * @param {String} [label] Defines alternative text that has to be attached to the picture
     * @param {String} [mime] Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
     * @param {Number} [position = 0)] Defines image’s position in the list
     * @param {String} [storeId] Store Id
     * @param {module:api/CategoryApi~categoryImageAddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryImageAdd200Response}
     */
    categoryImageAdd(categoryId, imageName, url, type, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling categoryImageAdd");
      }
      // verify the required parameter 'imageName' is set
      if (imageName === undefined || imageName === null) {
        throw new Error("Missing the required parameter 'imageName' when calling categoryImageAdd");
      }
      // verify the required parameter 'url' is set
      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling categoryImageAdd");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling categoryImageAdd");
      }

      let pathParams = {
      };
      let queryParams = {
        'category_id': categoryId,
        'image_name': imageName,
        'url': url,
        'label': opts['label'],
        'mime': opts['mime'],
        'type': type,
        'position': opts['position'],
        'store_id': opts['storeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryImageAdd200Response;
      return this.apiClient.callApi(
        '/category.image.add.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryImageDelete operation.
     * @callback module:api/CategoryApi~categoryImageDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttributeDelete200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.image.delete
     * Delete image
     * @param {String} categoryId Defines category id where the image should be deleted
     * @param {String} imageId Define image id
     * @param {Object} opts Optional parameters
     * @param {String} [storeId] Store Id
     * @param {module:api/CategoryApi~categoryImageDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttributeDelete200Response}
     */
    categoryImageDelete(categoryId, imageId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling categoryImageDelete");
      }
      // verify the required parameter 'imageId' is set
      if (imageId === undefined || imageId === null) {
        throw new Error("Missing the required parameter 'imageId' when calling categoryImageDelete");
      }

      let pathParams = {
      };
      let queryParams = {
        'category_id': categoryId,
        'image_id': imageId,
        'store_id': opts['storeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AttributeDelete200Response;
      return this.apiClient.callApi(
        '/category.image.delete.json', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryInfo operation.
     * @callback module:api/CategoryApi~categoryInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryInfo200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.info
     * Get category info about category ID*** or specify other category ID.
     * @param {String} id Retrieves category's info specified by category id
     * @param {Object} opts Optional parameters
     * @param {String} [params = 'id,parent_id,name,description')] Set this parameter in order to choose which entity fields you want to retrieve
     * @param {String} [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param {String} [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
     * @param {String} [storeId] Retrieves category info  specified by store id
     * @param {String} [langId] Retrieves category info  specified by language id
     * @param {String} [schemaType] The name of the requirements set for the provided schema.
     * @param {String} [reportRequestId] Report request id
     * @param {Boolean} [disableReportCache = false)] Disable report cache for current request
     * @param {module:api/CategoryApi~categoryInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryInfo200Response}
     */
    categoryInfo(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling categoryInfo");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'params': opts['params'],
        'response_fields': opts['responseFields'],
        'exclude': opts['exclude'],
        'store_id': opts['storeId'],
        'lang_id': opts['langId'],
        'schema_type': opts['schemaType'],
        'report_request_id': opts['reportRequestId'],
        'disable_report_cache': opts['disableReportCache']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryInfo200Response;
      return this.apiClient.callApi(
        '/category.info.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryList operation.
     * @callback module:api/CategoryApi~categoryListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelResponseCategoryList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.list
     * Get list of categories from store.
     * @param {Object} opts Optional parameters
     * @param {Number} [start = 0)] This parameter sets the number from which you want to get entities
     * @param {Number} [count = 10)] This parameter sets the entity amount that has to be retrieved. Max allowed count=250
     * @param {String} [pageCursor] Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
     * @param {String} [parentId] Retrieves categories specified by parent id
     * @param {String} [params = 'id,parent_id,name,description')] Set this parameter in order to choose which entity fields you want to retrieve
     * @param {String} [responseFields] Set this parameter in order to choose which entity fields you want to retrieve
     * @param {String} [exclude] Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
     * @param {String} [storeId] Retrieves categories specified by store id
     * @param {String} [langId] Retrieves categorys specified by language id
     * @param {String} [createdFrom] Retrieve entities from their creation date
     * @param {String} [createdTo] Retrieve entities to their creation date
     * @param {String} [modifiedFrom] Retrieve entities from their modification date
     * @param {String} [modifiedTo] Retrieve entities to their modification date
     * @param {Boolean} [avail = true)] Defines category's visibility status
     * @param {String} [productType] A categorization for the product
     * @param {String} [findValue] Entity search that is specified by some value
     * @param {String} [findWhere] Category search that is specified by field
     * @param {String} [reportRequestId] Report request id
     * @param {Boolean} [disableReportCache = false)] Disable report cache for current request
     * @param {Boolean} [disableCache = false)] Disable cache for current request
     * @param {module:api/CategoryApi~categoryListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelResponseCategoryList}
     */
    categoryList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'],
        'count': opts['count'],
        'page_cursor': opts['pageCursor'],
        'parent_id': opts['parentId'],
        'params': opts['params'],
        'response_fields': opts['responseFields'],
        'exclude': opts['exclude'],
        'store_id': opts['storeId'],
        'lang_id': opts['langId'],
        'created_from': opts['createdFrom'],
        'created_to': opts['createdTo'],
        'modified_from': opts['modifiedFrom'],
        'modified_to': opts['modifiedTo'],
        'avail': opts['avail'],
        'product_type': opts['productType'],
        'find_value': opts['findValue'],
        'find_where': opts['findWhere'],
        'report_request_id': opts['reportRequestId'],
        'disable_report_cache': opts['disableReportCache'],
        'disable_cache': opts['disableCache']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelResponseCategoryList;
      return this.apiClient.callApi(
        '/category.list.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryUnassign operation.
     * @callback module:api/CategoryApi~categoryUnassignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartConfigUpdate200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.unassign
     * Unassign category to product
     * @param {String} categoryId Defines category unassign, specified by category id
     * @param {String} productId Defines category unassign to the product, specified by product id
     * @param {Object} opts Optional parameters
     * @param {String} [storeId] Store Id
     * @param {module:api/CategoryApi~categoryUnassignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CartConfigUpdate200Response}
     */
    categoryUnassign(categoryId, productId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling categoryUnassign");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling categoryUnassign");
      }

      let pathParams = {
      };
      let queryParams = {
        'category_id': categoryId,
        'product_id': productId,
        'store_id': opts['storeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CartConfigUpdate200Response;
      return this.apiClient.callApi(
        '/category.unassign.json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoryUpdate operation.
     * @callback module:api/CategoryApi~categoryUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccountConfigUpdate200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * category.update
     * Update category in store
     * @param {String} id Defines category update specified by category id
     * @param {Object} opts Optional parameters
     * @param {String} [name] Defines new category’s name
     * @param {String} [parentId] Defines new parent category id
     * @param {String} [storesIds] Update category in the stores that is specified by comma-separated stores' id
     * @param {Boolean} [avail] Defines category's visibility status
     * @param {Number} [sortOrder] Sort number in the list
     * @param {String} [modifiedTime] Entity's date modification
     * @param {String} [description] Defines new category's description
     * @param {String} [shortDescription] Defines short description
     * @param {String} [metaTitle] Defines unique meta title for each entity
     * @param {String} [metaDescription] Defines unique meta description of a entity
     * @param {String} [metaKeywords] Defines unique meta keywords for each entity
     * @param {String} [seoUrl] Defines unique category's URL for SEO
     * @param {String} [langId] Language id
     * @param {String} [storeId] Store Id
     * @param {module:api/CategoryApi~categoryUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccountConfigUpdate200Response}
     */
    categoryUpdate(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling categoryUpdate");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'name': opts['name'],
        'parent_id': opts['parentId'],
        'stores_ids': opts['storesIds'],
        'avail': opts['avail'],
        'sort_order': opts['sortOrder'],
        'modified_time': opts['modifiedTime'],
        'description': opts['description'],
        'short_description': opts['shortDescription'],
        'meta_title': opts['metaTitle'],
        'meta_description': opts['metaDescription'],
        'meta_keywords': opts['metaKeywords'],
        'seo_url': opts['seoUrl'],
        'lang_id': opts['langId'],
        'store_id': opts['storeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['StoreKeyAuth', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AccountConfigUpdate200Response;
      return this.apiClient.callApi(
        '/category.update.json', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
