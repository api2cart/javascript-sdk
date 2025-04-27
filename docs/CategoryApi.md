# Api2CartOpenApi.CategoryApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryAdd**](CategoryApi.md#categoryAdd) | **POST** /category.add.json | category.add
[**categoryAddBatch**](CategoryApi.md#categoryAddBatch) | **POST** /category.add.batch.json | category.add.batch
[**categoryAssign**](CategoryApi.md#categoryAssign) | **POST** /category.assign.json | category.assign
[**categoryCount**](CategoryApi.md#categoryCount) | **GET** /category.count.json | category.count
[**categoryDelete**](CategoryApi.md#categoryDelete) | **DELETE** /category.delete.json | category.delete
[**categoryFind**](CategoryApi.md#categoryFind) | **GET** /category.find.json | category.find
[**categoryImageAdd**](CategoryApi.md#categoryImageAdd) | **POST** /category.image.add.json | category.image.add
[**categoryImageDelete**](CategoryApi.md#categoryImageDelete) | **DELETE** /category.image.delete.json | category.image.delete
[**categoryInfo**](CategoryApi.md#categoryInfo) | **GET** /category.info.json | category.info
[**categoryList**](CategoryApi.md#categoryList) | **GET** /category.list.json | category.list
[**categoryUnassign**](CategoryApi.md#categoryUnassign) | **POST** /category.unassign.json | category.unassign
[**categoryUpdate**](CategoryApi.md#categoryUpdate) | **PUT** /category.update.json | category.update



## categoryAdd

> CategoryAdd200Response categoryAdd(name, opts)

category.add

Add new category in store

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let name = "Shoes"; // String | Defines category's name that has to be added
let opts = {
  'description': "Test category", // String | Defines category's description
  'shortDescription': "Short description. This is very short description", // String | Defines short description
  'parentId': "6", // String | Adds categories specified by parent id
  'avail': false, // Boolean | Defines category's visibility status
  'createdTime': "2014-01-30 15:58:41", // String | Entity's date creation
  'modifiedTime': "2014-07-30 15:58:41", // String | Entity's date modification
  'sortOrder': 2, // Number | Sort number in the list
  'metaTitle': "category,test", // String | Defines unique meta title for each entity
  'metaDescription': "category,test", // String | Defines unique meta description of a entity
  'metaKeywords': "category,test", // String | Defines unique meta keywords for each entity
  'seoUrl': "category,test", // String | Defines unique category's URL for SEO
  'storeId': "1", // String | Store Id
  'storesIds': "1,2", // String | Create category in the stores that is specified by comma-separated stores' id
  'langId': "3" // String | Language id
};
apiInstance.categoryAdd(name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Defines category&#39;s name that has to be added | 
 **description** | **String**| Defines category&#39;s description | [optional] 
 **shortDescription** | **String**| Defines short description | [optional] 
 **parentId** | **String**| Adds categories specified by parent id | [optional] 
 **avail** | **Boolean**| Defines category&#39;s visibility status | [optional] [default to true]
 **createdTime** | **String**| Entity&#39;s date creation | [optional] 
 **modifiedTime** | **String**| Entity&#39;s date modification | [optional] 
 **sortOrder** | **Number**| Sort number in the list | [optional] [default to 0]
 **metaTitle** | **String**| Defines unique meta title for each entity | [optional] 
 **metaDescription** | **String**| Defines unique meta description of a entity | [optional] 
 **metaKeywords** | **String**| Defines unique meta keywords for each entity | [optional] 
 **seoUrl** | **String**| Defines unique category&#39;s URL for SEO | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **storesIds** | **String**| Create category in the stores that is specified by comma-separated stores&#39; id | [optional] 
 **langId** | **String**| Language id | [optional] 

### Return type

[**CategoryAdd200Response**](CategoryAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryAddBatch

> CategoryAddBatch200Response categoryAddBatch(categoryAddBatch)

category.add.batch

Add new categories to the store.

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let categoryAddBatch = new Api2CartOpenApi.CategoryAddBatch(); // CategoryAddBatch | 
apiInstance.categoryAddBatch(categoryAddBatch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryAddBatch** | [**CategoryAddBatch**](CategoryAddBatch.md)|  | 

### Return type

[**CategoryAddBatch200Response**](CategoryAddBatch200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## categoryAssign

> CartConfigUpdate200Response categoryAssign(categoryId, productId, opts)

category.assign

Assign category to product

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let categoryId = "6"; // String | Defines category assign, specified by category id
let productId = "10"; // String | Defines category assign to the product, specified by product id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.categoryAssign(categoryId, productId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| Defines category assign, specified by category id | 
 **productId** | **String**| Defines category assign to the product, specified by product id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**CartConfigUpdate200Response**](CartConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryCount

> CategoryCount200Response categoryCount(opts)

category.count

Count categories in store.

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let opts = {
  'parentId': "6", // String | Counts categories specified by parent id
  'storeId': "1", // String | Counts category specified by store id
  'langId': "3", // String | Counts category specified by language id
  'avail': false, // Boolean | Defines category's visibility status
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'productType': "BICYCLE", // String | A categorization for the product
  'findValue': "Demo category 1", // String | Entity search that is specified by some value
  'findWhere': "email", // String | Counts categories that are searched specified by field
  'reportRequestId': "105245017661", // String | Report request id
  'disableReportCache': false // Boolean | Disable report cache for current request
};
apiInstance.categoryCount(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| Counts categories specified by parent id | [optional] 
 **storeId** | **String**| Counts category specified by store id | [optional] 
 **langId** | **String**| Counts category specified by language id | [optional] 
 **avail** | **Boolean**| Defines category&#39;s visibility status | [optional] [default to true]
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **productType** | **String**| A categorization for the product | [optional] 
 **findValue** | **String**| Entity search that is specified by some value | [optional] 
 **findWhere** | **String**| Counts categories that are searched specified by field | [optional] 
 **reportRequestId** | **String**| Report request id | [optional] 
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]

### Return type

[**CategoryCount200Response**](CategoryCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryDelete

> CategoryDelete200Response categoryDelete(id, opts)

category.delete

Delete category in store

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let id = "10"; // String | Defines category removal, specified by category id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.categoryDelete(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Defines category removal, specified by category id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**CategoryDelete200Response**](CategoryDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryFind

> CategoryFind200Response categoryFind(findValue, opts)

category.find

Search category in store. \&quot;Laptop\&quot; is specified here by default.

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let findValue = "Demo category 1"; // String | Entity search that is specified by some value
let opts = {
  'findWhere': "name", // String | Entity search that is specified by the comma-separated unique fields
  'findParams': "regex", // String | Entity search that is specified by comma-separated parameters
  'storeId': "1", // String | Store Id
  'langId': "3" // String | Language id
};
apiInstance.categoryFind(findValue, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **findValue** | **String**| Entity search that is specified by some value | 
 **findWhere** | **String**| Entity search that is specified by the comma-separated unique fields | [optional] [default to &#39;name&#39;]
 **findParams** | **String**| Entity search that is specified by comma-separated parameters | [optional] [default to &#39;whole_words&#39;]
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 

### Return type

[**CategoryFind200Response**](CategoryFind200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryImageAdd

> CategoryImageAdd200Response categoryImageAdd(categoryId, imageName, url, type, opts)

category.image.add

Add image to category

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let categoryId = "6"; // String | Defines category id where the image should be added
let imageName = "bag-gray.png"; // String | Defines image's name
let url = "http://docs.api2cart.com/img/logo.png"; // String | Defines URL of the image that has to be added
let type = "base"; // String | Defines image's types that are specified by comma-separated list
let opts = {
  'storeId': "1", // String | Store Id
  'label': "This cool image", // String | Defines alternative text that has to be attached to the picture
  'mime': "image/jpeg", // String | Mime type of image http://en.wikipedia.org/wiki/Internet_media_type.
  'position': 5 // Number | Defines image’s position in the list
};
apiInstance.categoryImageAdd(categoryId, imageName, url, type, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| Defines category id where the image should be added | 
 **imageName** | **String**| Defines image&#39;s name | 
 **url** | **String**| Defines URL of the image that has to be added | 
 **type** | **String**| Defines image&#39;s types that are specified by comma-separated list | 
 **storeId** | **String**| Store Id | [optional] 
 **label** | **String**| Defines alternative text that has to be attached to the picture | [optional] 
 **mime** | **String**| Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. | [optional] 
 **position** | **Number**| Defines image’s position in the list | [optional] [default to 0]

### Return type

[**CategoryImageAdd200Response**](CategoryImageAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryImageDelete

> AttributeDelete200Response categoryImageDelete(categoryId, imageId, opts)

category.image.delete

Delete image

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let categoryId = "6"; // String | Defines category id where the image should be deleted
let imageId = "82950b84f468edff480680f99cedbe0d"; // String | Define image id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.categoryImageDelete(categoryId, imageId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| Defines category id where the image should be deleted | 
 **imageId** | **String**| Define image id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryInfo

> CategoryInfo200Response categoryInfo(id, opts)

category.info

Get category info about category ID*** or specify other category ID.

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let id = "10"; // String | Retrieves category's info specified by category id
let opts = {
  'storeId': "1", // String | Retrieves category info  specified by store id
  'langId': "3", // String | Retrieves category info  specified by language id
  'schemaType': "LISTING", // String | The name of the requirements set for the provided schema.
  'responseFields': "{result{id,name,parent_id,modified_at{value},images}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,parent_id,name", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "id,parent_id,name", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'reportRequestId': "105245017661", // String | Report request id
  'disableReportCache': false // Boolean | Disable report cache for current request
};
apiInstance.categoryInfo(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Retrieves category&#39;s info specified by category id | 
 **storeId** | **String**| Retrieves category info  specified by store id | [optional] 
 **langId** | **String**| Retrieves category info  specified by language id | [optional] 
 **schemaType** | **String**| The name of the requirements set for the provided schema. | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,parent_id,name,description&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **reportRequestId** | **String**| Report request id | [optional] 
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]

### Return type

[**CategoryInfo200Response**](CategoryInfo200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryList

> ModelResponseCategoryList categoryList(opts)

category.list

Get list of categories from store.

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'storeId': "1", // String | Retrieves categories specified by store id
  'langId': "3", // String | Retrieves categorys specified by language id
  'parentId': "6", // String | Retrieves categories specified by parent id
  'avail': false, // Boolean | Defines category's visibility status
  'productType': "BICYCLE", // String | A categorization for the product
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'findValue': "Demo category 1", // String | Entity search that is specified by some value
  'findWhere': "name", // String | Category search that is specified by field
  'responseFields': "{result{categories_count,category{id,parent_id,modified_at{value},images}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,parent_id,name", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "id,parent_id,name", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'reportRequestId': "105245017661", // String | Report request id
  'disableReportCache': false, // Boolean | Disable report cache for current request
  'disableCache': false // Boolean | Disable cache for current request
};
apiInstance.categoryList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **storeId** | **String**| Retrieves categories specified by store id | [optional] 
 **langId** | **String**| Retrieves categorys specified by language id | [optional] 
 **parentId** | **String**| Retrieves categories specified by parent id | [optional] 
 **avail** | **Boolean**| Defines category&#39;s visibility status | [optional] [default to true]
 **productType** | **String**| A categorization for the product | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **findValue** | **String**| Entity search that is specified by some value | [optional] 
 **findWhere** | **String**| Category search that is specified by field | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,parent_id,name,description&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **reportRequestId** | **String**| Report request id | [optional] 
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]
 **disableCache** | **Boolean**| Disable cache for current request | [optional] [default to false]

### Return type

[**ModelResponseCategoryList**](ModelResponseCategoryList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryUnassign

> CartConfigUpdate200Response categoryUnassign(categoryId, productId, opts)

category.unassign

Unassign category to product

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let categoryId = "6"; // String | Defines category unassign, specified by category id
let productId = "10"; // String | Defines category unassign to the product, specified by product id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.categoryUnassign(categoryId, productId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| Defines category unassign, specified by category id | 
 **productId** | **String**| Defines category unassign to the product, specified by product id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**CartConfigUpdate200Response**](CartConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoryUpdate

> AccountConfigUpdate200Response categoryUpdate(id, opts)

category.update

Update category in store

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: StoreKeyAuth
let StoreKeyAuth = defaultClient.authentications['StoreKeyAuth'];
StoreKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//StoreKeyAuth.apiKeyPrefix = 'Token';
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CategoryApi();
let id = "10"; // String | Defines category update specified by category id
let opts = {
  'name': "NEW Shoes", // String | Defines new category’s name
  'description': "New test category", // String | Defines new category's description
  'shortDescription': "Short description. This is very short description", // String | Defines short description
  'parentId': "6", // String | Defines new parent category id
  'avail': false, // Boolean | Defines category's visibility status
  'sortOrder': 2, // Number | Sort number in the list
  'modifiedTime': "2014-07-30 15:58:41", // String | Entity's date modification
  'metaTitle': "category,test", // String | Defines unique meta title for each entity
  'metaDescription': "category,test", // String | Defines unique meta description of a entity
  'metaKeywords': "category,test", // String | Defines unique meta keywords for each entity
  'seoUrl': "category,test", // String | Defines unique category's URL for SEO
  'storeId': "1", // String | Store Id
  'storesIds': "1,2", // String | Update category in the stores that is specified by comma-separated stores' id
  'langId': "3" // String | Language id
};
apiInstance.categoryUpdate(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Defines category update specified by category id | 
 **name** | **String**| Defines new category’s name | [optional] 
 **description** | **String**| Defines new category&#39;s description | [optional] 
 **shortDescription** | **String**| Defines short description | [optional] 
 **parentId** | **String**| Defines new parent category id | [optional] 
 **avail** | **Boolean**| Defines category&#39;s visibility status | [optional] 
 **sortOrder** | **Number**| Sort number in the list | [optional] 
 **modifiedTime** | **String**| Entity&#39;s date modification | [optional] 
 **metaTitle** | **String**| Defines unique meta title for each entity | [optional] 
 **metaDescription** | **String**| Defines unique meta description of a entity | [optional] 
 **metaKeywords** | **String**| Defines unique meta keywords for each entity | [optional] 
 **seoUrl** | **String**| Defines unique category&#39;s URL for SEO | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **storesIds** | **String**| Update category in the stores that is specified by comma-separated stores&#39; id | [optional] 
 **langId** | **String**| Language id | [optional] 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

