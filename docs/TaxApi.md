# Api2CartOpenApi.TaxApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxClassInfo**](TaxApi.md#taxClassInfo) | **GET** /tax.class.info.json | tax.class.info
[**taxClassList**](TaxApi.md#taxClassList) | **GET** /tax.class.list.json | tax.class.list



## taxClassInfo

> ModelResponseTaxClassInfo taxClassInfo(taxClassId, opts)

tax.class.info

Use this method to get information about a tax class and its rates. It allows you to calculate the tax percentage for a specific customer&#39;s address. This information contains relatively static data that rarely changes, so API2Cart may cache certain data to reduce the load on the store and speed up request execution. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, use the cart.validate method.

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

let apiInstance = new Api2CartOpenApi.TaxApi();
let taxClassId = "9"; // String | Retrieves taxes specified by class id
let opts = {
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'params': "tax_class_id,tax", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'responseFields': "{result{id,name,tax,tax_rates{id,countries{id,name,states},cities,address,zip_codes{is_range,range,fields}}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "tax_class_id,tax" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.taxClassInfo(taxClassId, opts, (error, data, response) => {
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
 **taxClassId** | **String**| Retrieves taxes specified by class id | 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;tax_class_id,name,avail&#39;]
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseTaxClassInfo**](ModelResponseTaxClassInfo.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taxClassList

> ModelResponseTaxClassList taxClassList(opts)

tax.class.list

Get list of tax classes from your store.

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

let apiInstance = new Api2CartOpenApi.TaxApi();
let opts = {
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'findValue': "tax", // String | Entity search that is specified by some value
  'findWhere': "name", // String | Tax class search that is specified by field
  'storeId': "1", // String | Store Id
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'responseFields': "{result}" // String | Set this parameter in order to choose which entity fields you want to retrieve
};
apiInstance.taxClassList(opts, (error, data, response) => {
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
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **findValue** | **String**| Entity search that is specified by some value | [optional] 
 **findWhere** | **String**| Tax class search that is specified by field | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;{return_code,return_message,pagination,result}&#39;]

### Return type

[**ModelResponseTaxClassList**](ModelResponseTaxClassList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

