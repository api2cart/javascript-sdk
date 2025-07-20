# Api2CartOpenApi.AttributeApi

All URIs are relative to *https://api.api2cart.local.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attributeAdd**](AttributeApi.md#attributeAdd) | **POST** /attribute.add.json | attribute.add
[**attributeAssignGroup**](AttributeApi.md#attributeAssignGroup) | **POST** /attribute.assign.group.json | attribute.assign.group
[**attributeAssignSet**](AttributeApi.md#attributeAssignSet) | **POST** /attribute.assign.set.json | attribute.assign.set
[**attributeAttributesetList**](AttributeApi.md#attributeAttributesetList) | **GET** /attribute.attributeset.list.json | attribute.attributeset.list
[**attributeCount**](AttributeApi.md#attributeCount) | **GET** /attribute.count.json | attribute.count
[**attributeDelete**](AttributeApi.md#attributeDelete) | **DELETE** /attribute.delete.json | attribute.delete
[**attributeGroupList**](AttributeApi.md#attributeGroupList) | **GET** /attribute.group.list.json | attribute.group.list
[**attributeInfo**](AttributeApi.md#attributeInfo) | **GET** /attribute.info.json | attribute.info
[**attributeList**](AttributeApi.md#attributeList) | **GET** /attribute.list.json | attribute.list
[**attributeTypeList**](AttributeApi.md#attributeTypeList) | **GET** /attribute.type.list.json | attribute.type.list
[**attributeUnassignGroup**](AttributeApi.md#attributeUnassignGroup) | **POST** /attribute.unassign.group.json | attribute.unassign.group
[**attributeUnassignSet**](AttributeApi.md#attributeUnassignSet) | **POST** /attribute.unassign.set.json | attribute.unassign.set
[**attributeUpdate**](AttributeApi.md#attributeUpdate) | **PUT** /attribute.update.json | attribute.update
[**attributeValueAdd**](AttributeApi.md#attributeValueAdd) | **POST** /attribute.value.add.json | attribute.value.add
[**attributeValueDelete**](AttributeApi.md#attributeValueDelete) | **DELETE** /attribute.value.delete.json | attribute.value.delete
[**attributeValueUpdate**](AttributeApi.md#attributeValueUpdate) | **PUT** /attribute.value.update.json | attribute.value.update



## attributeAdd

> AttributeAdd200Response attributeAdd(type, name, opts)

attribute.add

Add new attribute

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let type = "text"; // String | Defines attribute's type
let name = "Specification"; // String | Defines attributes's name
let opts = {
  'code': "code", // String | Entity code
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'visible': true, // Boolean | Set visibility status
  'required': true, // Boolean | Defines if the option is required
  'position': 5, // Number | Attribute`s position
  'attributeGroupId': "202", // String | Filter by attribute_group_id
  'isGlobal': "Global", // String | Attribute saving scope
  'isSearchable': false, // Boolean | Use attribute in Quick Search
  'isFilterable': "No", // String | Use In Layered Navigation
  'isComparable': true, // Boolean | Comparable on Front-end
  'isHtmlAllowedOnFront': true, // Boolean | Allow HTML Tags on Frontend
  'isFilterableInSearch': true, // Boolean | Use In Search Results Layered Navigation
  'isConfigurable': true, // Boolean | Use To Create Configurable Product
  'isVisibleInAdvancedSearch': true, // Boolean | Use in Advanced Search
  'isUsedForPromoRules': true, // Boolean | Use for Promo Rule Conditions
  'usedInProductListing': true, // Boolean | Used in Product Listing
  'usedForSortBy': true, // Boolean | Used for Sorting in Product Listing
  'applyTo': "Global" // String | Types of products which can have this attribute
};
apiInstance.attributeAdd(type, name, opts, (error, data, response) => {
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
 **type** | **String**| Defines attribute&#39;s type | 
 **name** | **String**| Defines attributes&#39;s name | 
 **code** | **String**| Entity code | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **visible** | **Boolean**| Set visibility status | [optional] [default to false]
 **required** | **Boolean**| Defines if the option is required | [optional] [default to false]
 **position** | **Number**| Attribute&#x60;s position | [optional] [default to 0]
 **attributeGroupId** | **String**| Filter by attribute_group_id | [optional] 
 **isGlobal** | **String**| Attribute saving scope | [optional] [default to &#39;Store&#39;]
 **isSearchable** | **Boolean**| Use attribute in Quick Search | [optional] [default to false]
 **isFilterable** | **String**| Use In Layered Navigation | [optional] [default to &#39;No&#39;]
 **isComparable** | **Boolean**| Comparable on Front-end | [optional] [default to false]
 **isHtmlAllowedOnFront** | **Boolean**| Allow HTML Tags on Frontend | [optional] [default to false]
 **isFilterableInSearch** | **Boolean**| Use In Search Results Layered Navigation | [optional] [default to false]
 **isConfigurable** | **Boolean**| Use To Create Configurable Product | [optional] [default to false]
 **isVisibleInAdvancedSearch** | **Boolean**| Use in Advanced Search | [optional] [default to false]
 **isUsedForPromoRules** | **Boolean**| Use for Promo Rule Conditions | [optional] [default to false]
 **usedInProductListing** | **Boolean**| Used in Product Listing | [optional] [default to false]
 **usedForSortBy** | **Boolean**| Used for Sorting in Product Listing | [optional] [default to false]
 **applyTo** | **String**| Types of products which can have this attribute | [optional] [default to &#39;all_types&#39;]

### Return type

[**AttributeAdd200Response**](AttributeAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeAssignGroup

> AttributeAssignGroup200Response attributeAssignGroup(id, groupId, opts)

attribute.assign.group

Assign attribute to the group

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Entity id
let groupId = "3"; // String | Attribute group_id
let opts = {
  'attributeSetId': "4" // String | Attribute set id
};
apiInstance.attributeAssignGroup(id, groupId, opts, (error, data, response) => {
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
 **id** | **String**| Entity id | 
 **groupId** | **String**| Attribute group_id | 
 **attributeSetId** | **String**| Attribute set id | [optional] 

### Return type

[**AttributeAssignGroup200Response**](AttributeAssignGroup200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeAssignSet

> AttributeAssignGroup200Response attributeAssignSet(id, attributeSetId, opts)

attribute.assign.set

Assign attribute to the attribute set

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Entity id
let attributeSetId = "4"; // String | Attribute set id
let opts = {
  'groupId': "3" // String | Attribute group_id
};
apiInstance.attributeAssignSet(id, attributeSetId, opts, (error, data, response) => {
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
 **id** | **String**| Entity id | 
 **attributeSetId** | **String**| Attribute set id | 
 **groupId** | **String**| Attribute group_id | [optional] 

### Return type

[**AttributeAssignGroup200Response**](AttributeAssignGroup200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeAttributesetList

> ModelResponseAttributeAttributesetList attributeAttributesetList(opts)

attribute.attributeset.list

Get attribute_set list

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'responseFields': "{result}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,name", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "id,name" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.attributeAttributesetList(opts, (error, data, response) => {
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
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseAttributeAttributesetList**](ModelResponseAttributeAttributesetList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeCount

> AttributeCount200Response attributeCount(opts)

attribute.count

Get attributes count

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let opts = {
  'type': "text", // String | Defines attribute's type
  'attributeSetId': "4", // String | Filter items by attribute set id
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'visible': true, // Boolean | Filter items by visibility status
  'required': true, // Boolean | Defines if the option is required
  'system': false // Boolean | True if attribute is system
};
apiInstance.attributeCount(opts, (error, data, response) => {
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
 **type** | **String**| Defines attribute&#39;s type | [optional] 
 **attributeSetId** | **String**| Filter items by attribute set id | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **visible** | **Boolean**| Filter items by visibility status | [optional] 
 **required** | **Boolean**| Defines if the option is required | [optional] 
 **system** | **Boolean**| True if attribute is system | [optional] 

### Return type

[**AttributeCount200Response**](AttributeCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeDelete

> AttributeDelete200Response attributeDelete(id, opts)

attribute.delete

Delete attribute from store

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Entity id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.attributeDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| Entity id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeGroupList

> ModelResponseAttributeGroupList attributeGroupList(opts)

attribute.group.list

Get attribute group list

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'attributeSetId': "4", // String | Attribute set id
  'langId': "3", // String | Language id
  'responseFields': "{result}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,name", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "id,name" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.attributeGroupList(opts, (error, data, response) => {
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
 **attributeSetId** | **String**| Attribute set id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseAttributeGroupList**](ModelResponseAttributeGroupList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeInfo

> AttributeInfo200Response attributeInfo(id, opts)

attribute.info

Get information about a specific global attribute by its ID.

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Entity id
let opts = {
  'attributeSetId': "4", // String | Attribute set id
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'responseFields': "{result}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "force_all", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "name" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.attributeInfo(id, opts, (error, data, response) => {
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
 **id** | **String**| Entity id | 
 **attributeSetId** | **String**| Attribute set id | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**AttributeInfo200Response**](AttributeInfo200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeList

> ModelResponseAttributeList attributeList(opts)

attribute.list

Get a list of global attributes.

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'attributeIds': "1,2,3", // String | Filter attributes by ids
  'attributeSetId': "4", // String | Filter items by attribute set id
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Retrieves attributes on specified language id
  'type': "text", // String | Defines attribute's type
  'visible': true, // Boolean | Filter items by visibility status
  'required': true, // Boolean | Defines if the option is required
  'system': false, // Boolean | True if attribute is system
  'responseFields': "{return_code,return_message,pagination,result}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,name", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "id,name" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.attributeList(opts, (error, data, response) => {
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
 **attributeIds** | **String**| Filter attributes by ids | [optional] 
 **attributeSetId** | **String**| Filter items by attribute set id | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Retrieves attributes on specified language id | [optional] 
 **type** | **String**| Defines attribute&#39;s type | [optional] 
 **visible** | **Boolean**| Filter items by visibility status | [optional] 
 **required** | **Boolean**| Defines if the option is required | [optional] 
 **system** | **Boolean**| True if attribute is system | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,code,type&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseAttributeList**](ModelResponseAttributeList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeTypeList

> AttributeTypeList200Response attributeTypeList()

attribute.type.list

Get list of supported attributes types

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
apiInstance.attributeTypeList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AttributeTypeList200Response**](AttributeTypeList200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeUnassignGroup

> AttributeUnassignGroup200Response attributeUnassignGroup(id, groupId)

attribute.unassign.group

Unassign attribute from group

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Entity id
let groupId = "3"; // String | Customer group_id
apiInstance.attributeUnassignGroup(id, groupId, (error, data, response) => {
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
 **id** | **String**| Entity id | 
 **groupId** | **String**| Customer group_id | 

### Return type

[**AttributeUnassignGroup200Response**](AttributeUnassignGroup200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeUnassignSet

> AttributeUnassignGroup200Response attributeUnassignSet(id, attributeSetId)

attribute.unassign.set

Unassign attribute from attribute set

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Entity id
let attributeSetId = "4"; // String | Attribute set id
apiInstance.attributeUnassignSet(id, attributeSetId, (error, data, response) => {
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
 **id** | **String**| Entity id | 
 **attributeSetId** | **String**| Attribute set id | 

### Return type

[**AttributeUnassignGroup200Response**](AttributeUnassignGroup200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeUpdate

> AttributeUpdate200Response attributeUpdate(id, name, opts)

attribute.update

Update attribute data

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Entity id
let name = "Test name"; // String | Defines new attributes's name
let opts = {
  'storeId': "1", // String | Store Id
  'langId': "3" // String | Language id
};
apiInstance.attributeUpdate(id, name, opts, (error, data, response) => {
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
 **id** | **String**| Entity id | 
 **name** | **String**| Defines new attributes&#39;s name | 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 

### Return type

[**AttributeUpdate200Response**](AttributeUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeValueAdd

> AttributeAdd200Response attributeValueAdd(attributeId, name, opts)

attribute.value.add

Add new value to attribute.

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let attributeId = "156"; // String | Attribute Id
let name = "Test name"; // String | Defines attribute value's name
let opts = {
  'code': "code", // String | Entity code
  'description': "Test value", // String | Defines attribute value's description
  'storeId': "1", // String | Store Id
  'langId': "3" // String | Language id
};
apiInstance.attributeValueAdd(attributeId, name, opts, (error, data, response) => {
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
 **attributeId** | **String**| Attribute Id | 
 **name** | **String**| Defines attribute value&#39;s name | 
 **code** | **String**| Entity code | [optional] 
 **description** | **String**| Defines attribute value&#39;s description | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 

### Return type

[**AttributeAdd200Response**](AttributeAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeValueDelete

> AttributeValueDelete200Response attributeValueDelete(id, attributeId, opts)

attribute.value.delete

Delete attribute value.

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Entity id
let attributeId = "156"; // String | Attribute Id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.attributeValueDelete(id, attributeId, opts, (error, data, response) => {
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
 **id** | **String**| Entity id | 
 **attributeId** | **String**| Attribute Id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeValueDelete200Response**](AttributeValueDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attributeValueUpdate

> AttributeUpdate200Response attributeValueUpdate(id, attributeId, opts)

attribute.value.update

Update attribute value.

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

let apiInstance = new Api2CartOpenApi.AttributeApi();
let id = "10"; // String | Defines attribute value's id
let attributeId = "156"; // String | Attribute Id
let opts = {
  'name': "Test name", // String | Defines attribute value's name
  'description': "Test value", // String | Defines new attribute value's description
  'code': "code", // String | Entity code
  'storeId': "1", // String | Store Id
  'langId': "3" // String | Language id
};
apiInstance.attributeValueUpdate(id, attributeId, opts, (error, data, response) => {
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
 **id** | **String**| Defines attribute value&#39;s id | 
 **attributeId** | **String**| Attribute Id | 
 **name** | **String**| Defines attribute value&#39;s name | [optional] 
 **description** | **String**| Defines new attribute value&#39;s description | [optional] 
 **code** | **String**| Entity code | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 

### Return type

[**AttributeUpdate200Response**](AttributeUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

