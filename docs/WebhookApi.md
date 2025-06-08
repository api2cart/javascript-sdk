# Api2CartOpenApi.WebhookApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookCount**](WebhookApi.md#webhookCount) | **GET** /webhook.count.json | webhook.count
[**webhookCreate**](WebhookApi.md#webhookCreate) | **POST** /webhook.create.json | webhook.create
[**webhookDelete**](WebhookApi.md#webhookDelete) | **DELETE** /webhook.delete.json | webhook.delete
[**webhookEvents**](WebhookApi.md#webhookEvents) | **GET** /webhook.events.json | webhook.events
[**webhookList**](WebhookApi.md#webhookList) | **GET** /webhook.list.json | webhook.list
[**webhookUpdate**](WebhookApi.md#webhookUpdate) | **PUT** /webhook.update.json | webhook.update



## webhookCount

> WebhookCount200Response webhookCount(opts)

webhook.count

Count registered webhooks on the store.

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

let apiInstance = new Api2CartOpenApi.WebhookApi();
let opts = {
  'entity': "product", // String | The entity you want to filter webhooks by (e.g. order or product)
  'action': "add", // String | The action you want to filter webhooks by (e.g. order or product)
  'active': true // Boolean | The webhook status you want to filter webhooks by
};
apiInstance.webhookCount(opts, (error, data, response) => {
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
 **entity** | **String**| The entity you want to filter webhooks by (e.g. order or product) | [optional] 
 **action** | **String**| The action you want to filter webhooks by (e.g. order or product) | [optional] 
 **active** | **Boolean**| The webhook status you want to filter webhooks by | [optional] 

### Return type

[**WebhookCount200Response**](WebhookCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookCreate

> BasketLiveShippingServiceCreate200Response webhookCreate(entity, action, opts)

webhook.create

Create webhook on the store and subscribe to it.

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

let apiInstance = new Api2CartOpenApi.WebhookApi();
let entity = "product"; // String | Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
let action = "add"; // String | Specify what action (event) will trigger the webhook (e.g add, delete, or update)
let opts = {
  'callback': "https://example.com/callback", // String | Callback url that returns shipping rates. It should be able to accept POST requests with json data.
  'label': "Super webhook", // String | The name you give to the webhook
  'fields': "id, name, description", // String | Fields the webhook should send
  'active': true, // Boolean | Webhook status
  'langId': "3", // String | Language id
  'storeId': "1" // String | Defines store id where the webhook should be assigned
};
apiInstance.webhookCreate(entity, action, opts, (error, data, response) => {
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
 **entity** | **String**| Specify the entity that you want to enable webhooks for (e.g product, order, customer, category) | 
 **action** | **String**| Specify what action (event) will trigger the webhook (e.g add, delete, or update) | 
 **callback** | **String**| Callback url that returns shipping rates. It should be able to accept POST requests with json data. | [optional] 
 **label** | **String**| The name you give to the webhook | [optional] 
 **fields** | **String**| Fields the webhook should send | [optional] [default to &#39;force_all&#39;]
 **active** | **Boolean**| Webhook status | [optional] [default to true]
 **langId** | **String**| Language id | [optional] 
 **storeId** | **String**| Defines store id where the webhook should be assigned | [optional] 

### Return type

[**BasketLiveShippingServiceCreate200Response**](BasketLiveShippingServiceCreate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookDelete

> AttributeDelete200Response webhookDelete(id)

webhook.delete

Delete registered webhook on the store.

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

let apiInstance = new Api2CartOpenApi.WebhookApi();
let id = "25"; // String | Webhook id
apiInstance.webhookDelete(id, (error, data, response) => {
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
 **id** | **String**| Webhook id | 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookEvents

> WebhookEvents200Response webhookEvents()

webhook.events

List all Webhooks that are available on this store.

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

let apiInstance = new Api2CartOpenApi.WebhookApi();
apiInstance.webhookEvents((error, data, response) => {
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

[**WebhookEvents200Response**](WebhookEvents200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookList

> WebhookList200Response webhookList(opts)

webhook.list

List registered webhook on the store.

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

let apiInstance = new Api2CartOpenApi.WebhookApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'entity': "product", // String | The entity you want to filter webhooks by (e.g. order or product)
  'action': "add", // String | The action you want to filter webhooks by (e.g. add, update, or delete)
  'active': true, // Boolean | The webhook status you want to filter webhooks by
  'ids': "3,14,25", // String | List of сomma-separated webhook ids
  'params': "id,entity,callback,fields" // String | Set this parameter in order to choose which entity fields you want to retrieve
};
apiInstance.webhookList(opts, (error, data, response) => {
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
 **entity** | **String**| The entity you want to filter webhooks by (e.g. order or product) | [optional] 
 **action** | **String**| The action you want to filter webhooks by (e.g. add, update, or delete) | [optional] 
 **active** | **Boolean**| The webhook status you want to filter webhooks by | [optional] 
 **ids** | **String**| List of сomma-separated webhook ids | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,entity,action,callback&#39;]

### Return type

[**WebhookList200Response**](WebhookList200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookUpdate

> ProductImageUpdate200Response webhookUpdate(id, opts)

webhook.update

Update Webhooks parameters.

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

let apiInstance = new Api2CartOpenApi.WebhookApi();
let id = "25"; // String | Webhook id
let opts = {
  'callback': "https://example.com/callback", // String | Callback url that returns shipping rates. It should be able to accept POST requests with json data.
  'label': "Super webhook", // String | The name you give to the webhook
  'fields': "id, name, description", // String | Fields the webhook should send
  'active': true, // Boolean | Webhook status
  'langId': "3" // String | Language id
};
apiInstance.webhookUpdate(id, opts, (error, data, response) => {
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
 **id** | **String**| Webhook id | 
 **callback** | **String**| Callback url that returns shipping rates. It should be able to accept POST requests with json data. | [optional] 
 **label** | **String**| The name you give to the webhook | [optional] 
 **fields** | **String**| Fields the webhook should send | [optional] 
 **active** | **Boolean**| Webhook status | [optional] 
 **langId** | **String**| Language id | [optional] 

### Return type

[**ProductImageUpdate200Response**](ProductImageUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

