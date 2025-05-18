# Api2CartOpenApi.OrderApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderAbandonedList**](OrderApi.md#orderAbandonedList) | **GET** /order.abandoned.list.json | order.abandoned.list
[**orderAdd**](OrderApi.md#orderAdd) | **POST** /order.add.json | order.add
[**orderCount**](OrderApi.md#orderCount) | **GET** /order.count.json | order.count
[**orderFinancialStatusList**](OrderApi.md#orderFinancialStatusList) | **GET** /order.financial_status.list.json | order.financial_status.list
[**orderFind**](OrderApi.md#orderFind) | **GET** /order.find.json | order.find
[**orderFulfillmentStatusList**](OrderApi.md#orderFulfillmentStatusList) | **GET** /order.fulfillment_status.list.json | order.fulfillment_status.list
[**orderInfo**](OrderApi.md#orderInfo) | **GET** /order.info.json | order.info
[**orderList**](OrderApi.md#orderList) | **GET** /order.list.json | order.list
[**orderPreestimateShippingList**](OrderApi.md#orderPreestimateShippingList) | **POST** /order.preestimate_shipping.list.json | order.preestimate_shipping.list
[**orderRefundAdd**](OrderApi.md#orderRefundAdd) | **POST** /order.refund.add.json | order.refund.add
[**orderReturnAdd**](OrderApi.md#orderReturnAdd) | **POST** /order.return.add.json | order.return.add
[**orderReturnDelete**](OrderApi.md#orderReturnDelete) | **DELETE** /order.return.delete.json | order.return.delete
[**orderReturnUpdate**](OrderApi.md#orderReturnUpdate) | **PUT** /order.return.update.json | order.return.update
[**orderShipmentAdd**](OrderApi.md#orderShipmentAdd) | **POST** /order.shipment.add.json | order.shipment.add
[**orderShipmentAddBatch**](OrderApi.md#orderShipmentAddBatch) | **POST** /order.shipment.add.batch.json | order.shipment.add.batch
[**orderShipmentDelete**](OrderApi.md#orderShipmentDelete) | **DELETE** /order.shipment.delete.json | order.shipment.delete
[**orderShipmentInfo**](OrderApi.md#orderShipmentInfo) | **GET** /order.shipment.info.json | order.shipment.info
[**orderShipmentList**](OrderApi.md#orderShipmentList) | **GET** /order.shipment.list.json | order.shipment.list
[**orderShipmentTrackingAdd**](OrderApi.md#orderShipmentTrackingAdd) | **POST** /order.shipment.tracking.add.json | order.shipment.tracking.add
[**orderShipmentUpdate**](OrderApi.md#orderShipmentUpdate) | **PUT** /order.shipment.update.json | order.shipment.update
[**orderStatusList**](OrderApi.md#orderStatusList) | **GET** /order.status.list.json | order.status.list
[**orderTransactionList**](OrderApi.md#orderTransactionList) | **GET** /order.transaction.list.json | order.transaction.list
[**orderUpdate**](OrderApi.md#orderUpdate) | **PUT** /order.update.json | order.update



## orderAbandonedList

> ModelResponseOrderAbandonedList orderAbandonedList(opts)

order.abandoned.list

Get list of orders that were left by customers before completing the order.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'customerId': "5", // String | Retrieves orders specified by customer id
  'customerEmail': "jubari@hannsgroup.com", // String | Retrieves orders specified by customer email
  'storeId': "1", // String | Store Id
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'skipEmptyEmail': true, // Boolean | Filter empty emails
  'responseFields': "{return_code,pagination,result{order{id,customer{email},created_at,totals{total},order_products}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "force_all", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "customer" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.orderAbandonedList(opts, (error, data, response) => {
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
 **customerId** | **String**| Retrieves orders specified by customer id | [optional] 
 **customerEmail** | **String**| Retrieves orders specified by customer email | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **skipEmptyEmail** | **Boolean**| Filter empty emails | [optional] [default to false]
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;customer,totals,items&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseOrderAbandonedList**](ModelResponseOrderAbandonedList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderAdd

> OrderAdd200Response orderAdd(orderAdd)

order.add

Add a new order to the cart.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderAdd = new Api2CartOpenApi.OrderAdd(); // OrderAdd | 
apiInstance.orderAdd(orderAdd, (error, data, response) => {
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
 **orderAdd** | [**OrderAdd**](OrderAdd.md)|  | 

### Return type

[**OrderAdd200Response**](OrderAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderCount

> OrderCount200Response orderCount(opts)

order.count

Count orders in store

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let opts = {
  'orderIds': "24,25", // String | Counts orders specified by order ids
  'ids': "24,25", // String | Counts orders specified by ids
  'customerId': "5", // String | Counts orders quantity specified by customer id
  'storeId': "1", // String | Counts orders quantity specified by store id
  'customerEmail': "jubari@hannsgroup.com", // String | Counts orders quantity specified by customer email
  'orderStatus': "Completed", // String | Counts orders quantity specified by order status
  'orderStatusIds': ["null"], // [String] | Retrieves orders specified by order statuses
  'ebayOrderStatus': "Active", // String | Counts orders quantity specified by order status
  'financialStatus': "paid", // String | Counts orders quantity specified by financial status
  'financialStatusIds': ["null"], // [String] | Retrieves orders count specified by financial status ids
  'fulfillmentChannel': "local", // String | Retrieves order with a fulfillment channel
  'fulfillmentStatus': "fulfilled", // String | Create order with fulfillment status
  'shippingMethod': "flatrate_flatrate", // String | Retrieve entities according to shipping method
  'deliveryMethod': "local", // String | Retrieves order with delivery method
  'tags': "tag1,tag2", // String | Order tags
  'shipNodeType': "SellerFulfilled", // String | Retrieves order with ship node type
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52" // String | Retrieve entities to their modification date
};
apiInstance.orderCount(opts, (error, data, response) => {
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
 **orderIds** | **String**| Counts orders specified by order ids | [optional] 
 **ids** | **String**| Counts orders specified by ids | [optional] 
 **customerId** | **String**| Counts orders quantity specified by customer id | [optional] 
 **storeId** | **String**| Counts orders quantity specified by store id | [optional] 
 **customerEmail** | **String**| Counts orders quantity specified by customer email | [optional] 
 **orderStatus** | **String**| Counts orders quantity specified by order status | [optional] 
 **orderStatusIds** | [**[String]**](String.md)| Retrieves orders specified by order statuses | [optional] 
 **ebayOrderStatus** | **String**| Counts orders quantity specified by order status | [optional] 
 **financialStatus** | **String**| Counts orders quantity specified by financial status | [optional] 
 **financialStatusIds** | [**[String]**](String.md)| Retrieves orders count specified by financial status ids | [optional] 
 **fulfillmentChannel** | **String**| Retrieves order with a fulfillment channel | [optional] 
 **fulfillmentStatus** | **String**| Create order with fulfillment status | [optional] 
 **shippingMethod** | **String**| Retrieve entities according to shipping method | [optional] 
 **deliveryMethod** | **String**| Retrieves order with delivery method | [optional] 
 **tags** | **String**| Order tags | [optional] 
 **shipNodeType** | **String**| Retrieves order with ship node type | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 

### Return type

[**OrderCount200Response**](OrderCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderFinancialStatusList

> OrderFinancialStatusList200Response orderFinancialStatusList()

order.financial_status.list

Retrieve list of financial statuses

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

let apiInstance = new Api2CartOpenApi.OrderApi();
apiInstance.orderFinancialStatusList((error, data, response) => {
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

[**OrderFinancialStatusList200Response**](OrderFinancialStatusList200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderFind

> OrderFind200Response orderFind(opts)

order.find

This method is deprecated and won&#39;t be supported in the future. Please use \&quot;order.list\&quot; instead.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'customerId': "5", // String | Retrieves orders specified by customer id
  'customerEmail': "jubari@hannsgroup.com", // String | Retrieves orders specified by customer email
  'orderStatus': "Completed", // String | Retrieves orders specified by order status
  'financialStatus': "paid", // String | Retrieves orders specified by financial status
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'params': "order_id,totals,status", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "order_id,totals,status" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.orderFind(opts, (error, data, response) => {
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
 **customerId** | **String**| Retrieves orders specified by customer id | [optional] 
 **customerEmail** | **String**| Retrieves orders specified by customer email | [optional] 
 **orderStatus** | **String**| Retrieves orders specified by order status | [optional] 
 **financialStatus** | **String**| Retrieves orders specified by financial status | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;order_id,customer,totals,address,items,bundles,status&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**OrderFind200Response**](OrderFind200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderFulfillmentStatusList

> OrderFulfillmentStatusList200Response orderFulfillmentStatusList(opts)

order.fulfillment_status.list

Retrieve list of fulfillment statuses

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let opts = {
  'action': "add" // String | Available statuses for the specified action.
};
apiInstance.orderFulfillmentStatusList(opts, (error, data, response) => {
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
 **action** | **String**| Available statuses for the specified action. | [optional] 

### Return type

[**OrderFulfillmentStatusList200Response**](OrderFulfillmentStatusList200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderInfo

> OrderInfo200Response orderInfo(opts)

order.info

Info about a specific order by ID

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let opts = {
  'id': "10", // String | Retrieves order info specified by id
  'orderId': "25", // String | Retrieves order’s info specified by order id
  'storeId': "1", // String | Defines store id where the order should be found
  'params': "order_id,totals,status", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'responseFields': "{result{order_id,customer,totals,address,items,bundles,status}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "order_id,totals,status", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'enableCache': true, // Boolean | If the value is 'true' and order exist in our cache, we will return order.info response from cache
  'useLatestApiVersion': true // Boolean | Use the latest platform API version
};
apiInstance.orderInfo(opts, (error, data, response) => {
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
 **id** | **String**| Retrieves order info specified by id | [optional] 
 **orderId** | **String**| Retrieves order’s info specified by order id | [optional] 
 **storeId** | **String**| Defines store id where the order should be found | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;order_id,customer,totals,address,items,bundles,status&#39;]
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **enableCache** | **Boolean**| If the value is &#39;true&#39; and order exist in our cache, we will return order.info response from cache | [optional] [default to false]
 **useLatestApiVersion** | **Boolean**| Use the latest platform API version | [optional] [default to false]

### Return type

[**OrderInfo200Response**](OrderInfo200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderList

> ModelResponseOrderList orderList(opts)

order.list

Get list of orders from store.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve orders via cursor-based pagination (it can't be used with any other filtering parameter)
  'ids': "24,25", // String | Retrieves orders specified by ids
  'orderIds': "24,25", // String | Retrieves orders specified by order ids
  'sinceId': "56", // String | Retrieve entities starting from the specified id.
  'storeId': "1", // String | Store Id
  'customerId': "5", // String | Retrieves orders specified by customer id
  'customerEmail': "jubari@hannsgroup.com", // String | Retrieves orders specified by customer email
  'basketId': "1", // String | Retrieves order’s info specified by basket id.
  'currencyId': "usd", // String | Currency Id
  'phone': "56686868654", // String | Filter orders by customer's phone number
  'orderStatus': "Completed", // String | Retrieves orders specified by order status
  'orderStatusIds': ["null"], // [String] | Retrieves orders specified by order statuses
  'ebayOrderStatus': "Active", // String | Retrieves orders specified by order status
  'financialStatus': "paid", // String | Retrieves orders specified by financial status
  'financialStatusIds': ["null"], // [String] | Retrieves orders specified by financial status ids
  'fulfillmentStatus': "fulfilled", // String | Create order with fulfillment status
  'returnStatus': "RETURNED", // String | Retrieves orders specified by return status
  'fulfillmentChannel': "local", // String | Retrieves order with a fulfillment channel
  'shippingMethod': "flatrate_flatrate", // String | Retrieve entities according to shipping method
  'skipOrderIds': "24,25", // String | Skipped orders by ids
  'isDeleted': true, // Boolean | Filter deleted orders
  'shippingCountryIso3': "DEU", // String | Retrieve entities according to shipping country
  'deliveryMethod': "local", // String | Retrieves order with delivery method
  'shipNodeType': "SellerFulfilled", // String | Retrieves order with ship node type
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'tags': "tag1,tag2", // String | Order tags
  'sortBy': "modified_at", // String | Set field to sort by
  'sortDirection': "asc", // String | Set sorting direction
  'params': "order_id,totals,status", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'responseFields': "{return_code,pagination,result{order{order_id,customer,totals,address,items,bundles,status}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "order_id,totals,status", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'enableCache': true, // Boolean | If the value is 'true', we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add)
  'useLatestApiVersion': true // Boolean | Use the latest platform API version
};
apiInstance.orderList(opts, (error, data, response) => {
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
 **pageCursor** | **String**| Used to retrieve orders via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **ids** | **String**| Retrieves orders specified by ids | [optional] 
 **orderIds** | **String**| Retrieves orders specified by order ids | [optional] 
 **sinceId** | **String**| Retrieve entities starting from the specified id. | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **customerId** | **String**| Retrieves orders specified by customer id | [optional] 
 **customerEmail** | **String**| Retrieves orders specified by customer email | [optional] 
 **basketId** | **String**| Retrieves order’s info specified by basket id. | [optional] 
 **currencyId** | **String**| Currency Id | [optional] 
 **phone** | **String**| Filter orders by customer&#39;s phone number | [optional] 
 **orderStatus** | **String**| Retrieves orders specified by order status | [optional] 
 **orderStatusIds** | [**[String]**](String.md)| Retrieves orders specified by order statuses | [optional] 
 **ebayOrderStatus** | **String**| Retrieves orders specified by order status | [optional] 
 **financialStatus** | **String**| Retrieves orders specified by financial status | [optional] 
 **financialStatusIds** | [**[String]**](String.md)| Retrieves orders specified by financial status ids | [optional] 
 **fulfillmentStatus** | **String**| Create order with fulfillment status | [optional] 
 **returnStatus** | **String**| Retrieves orders specified by return status | [optional] 
 **fulfillmentChannel** | **String**| Retrieves order with a fulfillment channel | [optional] 
 **shippingMethod** | **String**| Retrieve entities according to shipping method | [optional] 
 **skipOrderIds** | **String**| Skipped orders by ids | [optional] 
 **isDeleted** | **Boolean**| Filter deleted orders | [optional] 
 **shippingCountryIso3** | **String**| Retrieve entities according to shipping country | [optional] 
 **deliveryMethod** | **String**| Retrieves order with delivery method | [optional] 
 **shipNodeType** | **String**| Retrieves order with ship node type | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **tags** | **String**| Order tags | [optional] 
 **sortBy** | **String**| Set field to sort by | [optional] [default to &#39;order_id&#39;]
 **sortDirection** | **String**| Set sorting direction | [optional] [default to &#39;asc&#39;]
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;order_id,customer,totals,address,items,bundles,status&#39;]
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **enableCache** | **Boolean**| If the value is &#39;true&#39;, we will cache orders for a 15 minutes in order to increase speed and reduce requests throttling for some methods and shoping platforms (for example order.shipment.add) | [optional] [default to false]
 **useLatestApiVersion** | **Boolean**| Use the latest platform API version | [optional] [default to false]

### Return type

[**ModelResponseOrderList**](ModelResponseOrderList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderPreestimateShippingList

> ModelResponseOrderPreestimateShippingList orderPreestimateShippingList(orderPreestimateShippingList)

order.preestimate_shipping.list

Retrieve list of order preestimated shipping methods

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderPreestimateShippingList = new Api2CartOpenApi.OrderPreestimateShippingList(); // OrderPreestimateShippingList | 
apiInstance.orderPreestimateShippingList(orderPreestimateShippingList, (error, data, response) => {
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
 **orderPreestimateShippingList** | [**OrderPreestimateShippingList**](OrderPreestimateShippingList.md)|  | 

### Return type

[**ModelResponseOrderPreestimateShippingList**](ModelResponseOrderPreestimateShippingList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderRefundAdd

> OrderRefundAdd200Response orderRefundAdd(orderRefundAdd)

order.refund.add

Add a refund to the order.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderRefundAdd = new Api2CartOpenApi.OrderRefundAdd(); // OrderRefundAdd | 
apiInstance.orderRefundAdd(orderRefundAdd, (error, data, response) => {
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
 **orderRefundAdd** | [**OrderRefundAdd**](OrderRefundAdd.md)|  | 

### Return type

[**OrderRefundAdd200Response**](OrderRefundAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderReturnAdd

> OrderReturnAdd200Response orderReturnAdd(orderReturnAdd)

order.return.add

Create new return request.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderReturnAdd = new Api2CartOpenApi.OrderReturnAdd(); // OrderReturnAdd | 
apiInstance.orderReturnAdd(orderReturnAdd, (error, data, response) => {
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
 **orderReturnAdd** | [**OrderReturnAdd**](OrderReturnAdd.md)|  | 

### Return type

[**OrderReturnAdd200Response**](OrderReturnAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderReturnDelete

> AttributeValueDelete200Response orderReturnDelete(returnId, orderId, opts)

order.return.delete

Delete return.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let returnId = "200000002"; // String | Return ID
let orderId = "25"; // String | Defines the order id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.orderReturnDelete(returnId, orderId, opts, (error, data, response) => {
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
 **returnId** | **String**| Return ID | 
 **orderId** | **String**| Defines the order id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeValueDelete200Response**](AttributeValueDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderReturnUpdate

> AccountConfigUpdate200Response orderReturnUpdate(orderReturnUpdate)

order.return.update

Update order&#39;s shipment information.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderReturnUpdate = new Api2CartOpenApi.OrderReturnUpdate(); // OrderReturnUpdate | 
apiInstance.orderReturnUpdate(orderReturnUpdate, (error, data, response) => {
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
 **orderReturnUpdate** | [**OrderReturnUpdate**](OrderReturnUpdate.md)|  | 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderShipmentAdd

> OrderShipmentAdd200Response orderShipmentAdd(orderShipmentAdd)

order.shipment.add

Add a shipment to the order.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderShipmentAdd = new Api2CartOpenApi.OrderShipmentAdd(); // OrderShipmentAdd | 
apiInstance.orderShipmentAdd(orderShipmentAdd, (error, data, response) => {
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
 **orderShipmentAdd** | [**OrderShipmentAdd**](OrderShipmentAdd.md)|  | 

### Return type

[**OrderShipmentAdd200Response**](OrderShipmentAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderShipmentAddBatch

> CategoryAddBatch200Response orderShipmentAddBatch(orderShipmentAddBatch)

order.shipment.add.batch

Add a shipments to the orders.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderShipmentAddBatch = new Api2CartOpenApi.OrderShipmentAddBatch(); // OrderShipmentAddBatch | 
apiInstance.orderShipmentAddBatch(orderShipmentAddBatch, (error, data, response) => {
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
 **orderShipmentAddBatch** | [**OrderShipmentAddBatch**](OrderShipmentAddBatch.md)|  | 

### Return type

[**CategoryAddBatch200Response**](CategoryAddBatch200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderShipmentDelete

> OrderShipmentDelete200Response orderShipmentDelete(shipmentId, orderId, opts)

order.shipment.delete

Delete order&#39;s shipment.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let shipmentId = "200000002"; // String | Shipment id indicates the number of delivery
let orderId = "25"; // String | Defines the order for which the shipment will be deleted
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.orderShipmentDelete(shipmentId, orderId, opts, (error, data, response) => {
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
 **shipmentId** | **String**| Shipment id indicates the number of delivery | 
 **orderId** | **String**| Defines the order for which the shipment will be deleted | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**OrderShipmentDelete200Response**](OrderShipmentDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderShipmentInfo

> OrderShipmentInfo200Response orderShipmentInfo(id, orderId, opts)

order.shipment.info

Get information of shipment.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let id = "10"; // String | Entity id
let orderId = "25"; // String | Defines the order id
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'storeId': "1", // String | Store Id
  'responseFields': "{result{id,order_id,shipment_provider,tracking_numbers{tracking_number},items{product_id,quantity}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.orderShipmentInfo(id, orderId, opts, (error, data, response) => {
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
 **orderId** | **String**| Defines the order id | 
 **start** | **Number**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **storeId** | **String**| Store Id | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,order_id,items,tracking_numbers&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**OrderShipmentInfo200Response**](OrderShipmentInfo200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderShipmentList

> ModelResponseOrderShipmentList orderShipmentList(orderId, opts)

order.shipment.list

Get list of shipments by orders.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderId = "25"; // String | Retrieves shipments specified by order id
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'storeId': "1", // String | Store Id
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'responseFields': "{status_code,pagination,result{shipment{id,order_id,shipment_provider,tracking_numbers{tracking_number},items{product_id,quantity}}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.orderShipmentList(orderId, opts, (error, data, response) => {
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
 **orderId** | **String**| Retrieves shipments specified by order id | 
 **start** | **Number**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,order_id,items,tracking_numbers&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseOrderShipmentList**](ModelResponseOrderShipmentList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderShipmentTrackingAdd

> OrderShipmentTrackingAdd200Response orderShipmentTrackingAdd(orderShipmentTrackingAdd)

order.shipment.tracking.add

Add order shipment&#39;s tracking info.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderShipmentTrackingAdd = new Api2CartOpenApi.OrderShipmentTrackingAdd(); // OrderShipmentTrackingAdd | 
apiInstance.orderShipmentTrackingAdd(orderShipmentTrackingAdd, (error, data, response) => {
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
 **orderShipmentTrackingAdd** | [**OrderShipmentTrackingAdd**](OrderShipmentTrackingAdd.md)|  | 

### Return type

[**OrderShipmentTrackingAdd200Response**](OrderShipmentTrackingAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderShipmentUpdate

> AccountConfigUpdate200Response orderShipmentUpdate(orderShipmentUpdate)

order.shipment.update

Update order&#39;s shipment information.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderShipmentUpdate = new Api2CartOpenApi.OrderShipmentUpdate(); // OrderShipmentUpdate | 
apiInstance.orderShipmentUpdate(orderShipmentUpdate, (error, data, response) => {
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
 **orderShipmentUpdate** | [**OrderShipmentUpdate**](OrderShipmentUpdate.md)|  | 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## orderStatusList

> ModelResponseOrderStatusList orderStatusList(opts)

order.status.list

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let opts = {
  'storeId': "1", // String | Store Id
  'action': "add", // String | Available statuses for the specified action.
  'responseFields': "{return_code,return_message,result}" // String | Set this parameter in order to choose which entity fields you want to retrieve
};
apiInstance.orderStatusList(opts, (error, data, response) => {
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
 **action** | **String**| Available statuses for the specified action. | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**ModelResponseOrderStatusList**](ModelResponseOrderStatusList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderTransactionList

> ModelResponseOrderTransactionList orderTransactionList(orderIds, opts)

order.transaction.list

Retrieve list of order transaction

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderIds = "24,25"; // String | Retrieves order transactions specified by order ids
let opts = {
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'storeId': "1", // String | Store Id
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'responseFields': "{return_code,pagination,result{transactions_count,transactions{id,transaction_id,status,description,settlement_amount,gateway,card_brand,card_last_four}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.orderTransactionList(orderIds, opts, (error, data, response) => {
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
 **orderIds** | **String**| Retrieves order transactions specified by order ids | 
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,order_id,amount,description&#39;]
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseOrderTransactionList**](ModelResponseOrderTransactionList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## orderUpdate

> AccountConfigUpdate200Response orderUpdate(orderId, opts)

order.update

Update existing order.

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

let apiInstance = new Api2CartOpenApi.OrderApi();
let orderId = "25"; // String | Defines the orders specified by order id
let opts = {
  'storeId': "1", // String | Defines store id where the order should be found
  'orderStatus': "Completed", // String | Defines new order's status
  'financialStatus': "paid", // String | Update order financial status to specified
  'fulfillmentStatus': "fulfilled", // String | Create order with fulfillment status
  'cancellationReason': "ORDER_UNPAID", // String | Defines the cancellation reason when the order will be canceled
  'orderPaymentMethod': "PayPal", // String | Defines order payment method.<br/>Setting order_payment_method on Shopify will also change financial_status field value to 'paid'
  'comment': "This coole order", // String | Specifies order comment
  'adminComment': "Test admin comment", // String | Specifies admin's order comment
  'adminPrivateComment': "Test admin private comment", // String | Specifies private admin's order comment
  'invoiceAdminComment': "Test admin comment", // String | Specifies admin's order invoice comment
  'dateModified': "2014-05-05 05:05:00", // String | Specifies order's  modification date
  'dateFinished': "2014-06-05 05:05:00", // String | Specifies order's  finished date
  'sendNotifications': true, // Boolean | Send notifications to customer after order was created
  'createInvoice': true, // Boolean | Determines whether an invoice should be created if it has not already been created
  'origin': "newsletter", // String | The source of the order
  'tags': "tag1,tag2" // String | Order tags
};
apiInstance.orderUpdate(orderId, opts, (error, data, response) => {
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
 **orderId** | **String**| Defines the orders specified by order id | 
 **storeId** | **String**| Defines store id where the order should be found | [optional] 
 **orderStatus** | **String**| Defines new order&#39;s status | [optional] 
 **financialStatus** | **String**| Update order financial status to specified | [optional] 
 **fulfillmentStatus** | **String**| Create order with fulfillment status | [optional] 
 **cancellationReason** | **String**| Defines the cancellation reason when the order will be canceled | [optional] 
 **orderPaymentMethod** | **String**| Defines order payment method.&lt;br/&gt;Setting order_payment_method on Shopify will also change financial_status field value to &#39;paid&#39; | [optional] 
 **comment** | **String**| Specifies order comment | [optional] 
 **adminComment** | **String**| Specifies admin&#39;s order comment | [optional] 
 **adminPrivateComment** | **String**| Specifies private admin&#39;s order comment | [optional] 
 **invoiceAdminComment** | **String**| Specifies admin&#39;s order invoice comment | [optional] 
 **dateModified** | **String**| Specifies order&#39;s  modification date | [optional] 
 **dateFinished** | **String**| Specifies order&#39;s  finished date | [optional] 
 **sendNotifications** | **Boolean**| Send notifications to customer after order was created | [optional] [default to false]
 **createInvoice** | **Boolean**| Determines whether an invoice should be created if it has not already been created | [optional] 
 **origin** | **String**| The source of the order | [optional] 
 **tags** | **String**| Order tags | [optional] 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

