# Api2CartOpenApi.ReturnApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**returnActionList**](ReturnApi.md#returnActionList) | **GET** /return.action.list.json | return.action.list
[**returnCount**](ReturnApi.md#returnCount) | **GET** /return.count.json | return.count
[**returnInfo**](ReturnApi.md#returnInfo) | **GET** /return.info.json | return.info
[**returnList**](ReturnApi.md#returnList) | **GET** /return.list.json | return.list
[**returnReasonList**](ReturnApi.md#returnReasonList) | **GET** /return.reason.list.json | return.reason.list
[**returnStatusList**](ReturnApi.md#returnStatusList) | **GET** /return.status.list.json | return.status.list



## returnActionList

> ReturnActionList200Response returnActionList()

return.action.list

Retrieve list of return actions

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

let apiInstance = new Api2CartOpenApi.ReturnApi();
apiInstance.returnActionList((error, data, response) => {
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

[**ReturnActionList200Response**](ReturnActionList200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## returnCount

> ReturnCount200Response returnCount(opts)

return.count

Count returns in store

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

let apiInstance = new Api2CartOpenApi.ReturnApi();
let opts = {
  'orderIds': "24,25", // String | Counts return requests specified by order ids
  'customerId': "5", // String | Counts return requests quantity specified by customer id
  'storeId': "1", // String | Store Id
  'status': "disabled", // String | Defines status
  'returnType': "FBA", // String | Retrieves returns specified by return type
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'reportRequestId': "105245017661", // String | Report request id
  'disableReportCache': false // Boolean | Disable report cache for current request
};
apiInstance.returnCount(opts, (error, data, response) => {
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
 **orderIds** | **String**| Counts return requests specified by order ids | [optional] 
 **customerId** | **String**| Counts return requests quantity specified by customer id | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **status** | **String**| Defines status | [optional] 
 **returnType** | **String**| Retrieves returns specified by return type | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **reportRequestId** | **String**| Report request id | [optional] 
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]

### Return type

[**ReturnCount200Response**](ReturnCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## returnInfo

> ReturnInfo200Response returnInfo(id, opts)

return.info

Retrieve return information.

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

let apiInstance = new Api2CartOpenApi.ReturnApi();
let id = "10"; // String | Entity id
let opts = {
  'orderId': "25", // String | Defines the order id
  'storeId': "1", // String | Store Id
  'params': "id,order_products", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "id,order_id", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'responseFields': "{return_code,return_message,result}" // String | Set this parameter in order to choose which entity fields you want to retrieve
};
apiInstance.returnInfo(id, opts, (error, data, response) => {
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
 **orderId** | **String**| Defines the order id | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,order_products&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**ReturnInfo200Response**](ReturnInfo200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## returnList

> ModelResponseReturnList returnList(opts)

return.list

Get list of return requests from store.

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

let apiInstance = new Api2CartOpenApi.ReturnApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'params': "id,order_products", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "id,order_id", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'responseFields': "{return_code,return_message,pagination,result}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'orderId': "25", // String | Defines the order id
  'orderIds': "24,25", // String | Retrieves return requests specified by order ids
  'customerId': "5", // String | Retrieves return requests specified by customer id
  'storeId': "1", // String | Store Id
  'status': "disabled", // String | Defines status
  'returnType': "FBA", // String | Retrieves returns specified by return type
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'reportRequestId': "105245017661", // String | Report request id
  'disableReportCache': false // Boolean | Disable report cache for current request
};
apiInstance.returnList(opts, (error, data, response) => {
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
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,order_products&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **orderId** | **String**| Defines the order id | [optional] 
 **orderIds** | **String**| Retrieves return requests specified by order ids | [optional] 
 **customerId** | **String**| Retrieves return requests specified by customer id | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **status** | **String**| Defines status | [optional] 
 **returnType** | **String**| Retrieves returns specified by return type | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **reportRequestId** | **String**| Report request id | [optional] 
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]

### Return type

[**ModelResponseReturnList**](ModelResponseReturnList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## returnReasonList

> ReturnReasonList200Response returnReasonList(opts)

return.reason.list

Retrieve list of return reasons

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

let apiInstance = new Api2CartOpenApi.ReturnApi();
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.returnReasonList(opts, (error, data, response) => {
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
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**ReturnReasonList200Response**](ReturnReasonList200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## returnStatusList

> ReturnStatusList200Response returnStatusList()

return.status.list

Retrieve list of statuses

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

let apiInstance = new Api2CartOpenApi.ReturnApi();
apiInstance.returnStatusList((error, data, response) => {
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

[**ReturnStatusList200Response**](ReturnStatusList200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

