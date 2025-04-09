# Api2CartOpenApi.BatchApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchJobList**](BatchApi.md#batchJobList) | **GET** /batch.job.list.json | batch.job.list
[**batchJobResult**](BatchApi.md#batchJobResult) | **GET** /batch.job.result.json | batch.job.result



## batchJobList

> ModelResponseBatchJobList batchJobList(opts)

batch.job.list

Get list of recent jobs

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

let apiInstance = new Api2CartOpenApi.BatchApi();
let opts = {
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'processedFrom': "2100-08-29 13:45:52", // String | Retrieve entities according to their processing datetime
  'processedTo': "2100-08-29 13:45:52", // String | Retrieve entities according to their processing datetime
  'ids': "24,25", // String | Filter batch jobs by ids
  'responseFields': "{result}" // String | Set this parameter in order to choose which entity fields you want to retrieve
};
apiInstance.batchJobList(opts, (error, data, response) => {
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
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **processedFrom** | **String**| Retrieve entities according to their processing datetime | [optional] 
 **processedTo** | **String**| Retrieve entities according to their processing datetime | [optional] 
 **ids** | **String**| Filter batch jobs by ids | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;{return_code,return_message,pagination,result}&#39;]

### Return type

[**ModelResponseBatchJobList**](ModelResponseBatchJobList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## batchJobResult

> ResponseBatchJobResult batchJobResult(id)

batch.job.result

Get job result data

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

let apiInstance = new Api2CartOpenApi.BatchApi();
let id = "10"; // String | Entity id
apiInstance.batchJobResult(id, (error, data, response) => {
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

### Return type

[**ResponseBatchJobResult**](ResponseBatchJobResult.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

