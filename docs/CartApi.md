# Api2CartOpenApi.CartApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartBridge**](CartApi.md#cartBridge) | **GET** /cart.bridge.json | cart.bridge
[**cartCatalogPriceRulesCount**](CartApi.md#cartCatalogPriceRulesCount) | **GET** /cart.catalog_price_rules.count.json | cart.catalog_price_rules.count
[**cartCatalogPriceRulesList**](CartApi.md#cartCatalogPriceRulesList) | **GET** /cart.catalog_price_rules.list.json | cart.catalog_price_rules.list
[**cartClearCache**](CartApi.md#cartClearCache) | **POST** /cart.clear_cache.json | cart.clear_cache
[**cartConfig**](CartApi.md#cartConfig) | **GET** /cart.config.json | cart.config
[**cartConfigUpdate**](CartApi.md#cartConfigUpdate) | **PUT** /cart.config.update.json | cart.config.update
[**cartCouponAdd**](CartApi.md#cartCouponAdd) | **POST** /cart.coupon.add.json | cart.coupon.add
[**cartCouponConditionAdd**](CartApi.md#cartCouponConditionAdd) | **POST** /cart.coupon.condition.add.json | cart.coupon.condition.add
[**cartCouponCount**](CartApi.md#cartCouponCount) | **GET** /cart.coupon.count.json | cart.coupon.count
[**cartCouponDelete**](CartApi.md#cartCouponDelete) | **DELETE** /cart.coupon.delete.json | cart.coupon.delete
[**cartCouponList**](CartApi.md#cartCouponList) | **GET** /cart.coupon.list.json | cart.coupon.list
[**cartCreate**](CartApi.md#cartCreate) | **POST** /cart.create.json | cart.create
[**cartDelete**](CartApi.md#cartDelete) | **DELETE** /cart.delete.json | cart.delete
[**cartDisconnect**](CartApi.md#cartDisconnect) | **GET** /cart.disconnect.json | cart.disconnect
[**cartGiftcardAdd**](CartApi.md#cartGiftcardAdd) | **POST** /cart.giftcard.add.json | cart.giftcard.add
[**cartGiftcardCount**](CartApi.md#cartGiftcardCount) | **GET** /cart.giftcard.count.json | cart.giftcard.count
[**cartGiftcardDelete**](CartApi.md#cartGiftcardDelete) | **DELETE** /cart.giftcard.delete.json | cart.giftcard.delete
[**cartGiftcardList**](CartApi.md#cartGiftcardList) | **GET** /cart.giftcard.list.json | cart.giftcard.list
[**cartInfo**](CartApi.md#cartInfo) | **GET** /cart.info.json | cart.info
[**cartList**](CartApi.md#cartList) | **GET** /cart.list.json | cart.list
[**cartMetaDataList**](CartApi.md#cartMetaDataList) | **GET** /cart.meta_data.list.json | cart.meta_data.list
[**cartMetaDataSet**](CartApi.md#cartMetaDataSet) | **POST** /cart.meta_data.set.json | cart.meta_data.set
[**cartMetaDataUnset**](CartApi.md#cartMetaDataUnset) | **DELETE** /cart.meta_data.unset.json | cart.meta_data.unset
[**cartMethods**](CartApi.md#cartMethods) | **GET** /cart.methods.json | cart.methods
[**cartPluginList**](CartApi.md#cartPluginList) | **GET** /cart.plugin.list.json | cart.plugin.list
[**cartScriptAdd**](CartApi.md#cartScriptAdd) | **POST** /cart.script.add.json | cart.script.add
[**cartScriptDelete**](CartApi.md#cartScriptDelete) | **DELETE** /cart.script.delete.json | cart.script.delete
[**cartScriptList**](CartApi.md#cartScriptList) | **GET** /cart.script.list.json | cart.script.list
[**cartShippingZonesList**](CartApi.md#cartShippingZonesList) | **GET** /cart.shipping_zones.list.json | cart.shipping_zones.list
[**cartValidate**](CartApi.md#cartValidate) | **GET** /cart.validate.json | cart.validate



## cartBridge

> CartBridge200Response cartBridge()

cart.bridge

Get bridge key and store key

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CartApi();
apiInstance.cartBridge((error, data, response) => {
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

[**CartBridge200Response**](CartBridge200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartCatalogPriceRulesCount

> CartCatalogPriceRulesCount200Response cartCatalogPriceRulesCount()

cart.catalog_price_rules.count

Get count of cart catalog price rules discounts.

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

let apiInstance = new Api2CartOpenApi.CartApi();
apiInstance.cartCatalogPriceRulesCount((error, data, response) => {
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

[**CartCatalogPriceRulesCount200Response**](CartCatalogPriceRulesCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartCatalogPriceRulesList

> ModelResponseCartCatalogPriceRulesList cartCatalogPriceRulesList(opts)

cart.catalog_price_rules.list

Get cart catalog price rules discounts.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'ids': "24,25", // String | Retrieves  catalog_price_rules by ids
  'responseFields': "{result{catalog_price_rules_count,catalog_price_rules{id,type,name,avail,usage_count,actions,conditions}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.cartCatalogPriceRulesList(opts, (error, data, response) => {
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
 **ids** | **String**| Retrieves  catalog_price_rules by ids | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartCatalogPriceRulesList**](ModelResponseCartCatalogPriceRulesList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartClearCache

> CartClearCache200Response cartClearCache(cacheType)

cart.clear_cache

Clear cache on store.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let cacheType = "storage_cache"; // String | Defines which cache should be cleared.
apiInstance.cartClearCache(cacheType, (error, data, response) => {
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
 **cacheType** | **String**| Defines which cache should be cleared. | 

### Return type

[**CartClearCache200Response**](CartClearCache200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartConfig

> CartConfig200Response cartConfig(opts)

cart.config

Get list of cart configs

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'params': "store_name,store_url,db_prefix", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "store_name,store_url,db_prefix" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.cartConfig(opts, (error, data, response) => {
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
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;store_name,store_url,db_prefix&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**CartConfig200Response**](CartConfig200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartConfigUpdate

> CartConfigUpdate200Response cartConfigUpdate(cartConfigUpdate)

cart.config.update

Use this API method to update custom data in client database.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let cartConfigUpdate = new Api2CartOpenApi.CartConfigUpdate(); // CartConfigUpdate | 
apiInstance.cartConfigUpdate(cartConfigUpdate, (error, data, response) => {
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
 **cartConfigUpdate** | [**CartConfigUpdate**](CartConfigUpdate.md)|  | 

### Return type

[**CartConfigUpdate200Response**](CartConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cartCouponAdd

> CartCouponAdd200Response cartCouponAdd(cartCouponAdd)

cart.coupon.add

Use this method to create a coupon with specified conditions.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let cartCouponAdd = new Api2CartOpenApi.CartCouponAdd(); // CartCouponAdd | 
apiInstance.cartCouponAdd(cartCouponAdd, (error, data, response) => {
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
 **cartCouponAdd** | [**CartCouponAdd**](CartCouponAdd.md)|  | 

### Return type

[**CartCouponAdd200Response**](CartCouponAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cartCouponConditionAdd

> BasketLiveShippingServiceDelete200Response cartCouponConditionAdd(couponId, entity, key, operator, value, opts)

cart.coupon.condition.add

Use this method to add additional conditions for coupon application.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let couponId = "45845"; // String | Coupon Id
let entity = "order"; // String | Defines condition entity type
let key = "subtotal"; // String | Defines condition entity attribute key
let operator = "=="; // String | Defines condition operator
let value = "2"; // String | Defines condition value, can be comma separated according to the operator.
let opts = {
  'target': "coupon_action", // String | Defines condition operator
  'includeTax': true, // Boolean | Indicates whether to apply a discount for taxes.
  'includeShipping': true, // Boolean | Indicates whether to apply a discount for shipping.
  'storeId': "1" // String | Store Id
};
apiInstance.cartCouponConditionAdd(couponId, entity, key, operator, value, opts, (error, data, response) => {
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
 **couponId** | **String**| Coupon Id | 
 **entity** | **String**| Defines condition entity type | 
 **key** | **String**| Defines condition entity attribute key | 
 **operator** | **String**| Defines condition operator | 
 **value** | **String**| Defines condition value, can be comma separated according to the operator. | 
 **target** | **String**| Defines condition operator | [optional] [default to &#39;coupon_prerequisite&#39;]
 **includeTax** | **Boolean**| Indicates whether to apply a discount for taxes. | [optional] [default to false]
 **includeShipping** | **Boolean**| Indicates whether to apply a discount for shipping. | [optional] [default to false]
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**BasketLiveShippingServiceDelete200Response**](BasketLiveShippingServiceDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartCouponCount

> CartCouponCount200Response cartCouponCount(opts)

cart.coupon.count

This method allows you to get the number of coupons. On some platforms, you can filter the coupons by the date they were active.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'storeId': "1", // String | Store Id
  'avail': false, // Boolean | Defines category's visibility status
  'dateStartFrom': "2016-12-29 16:44:30", // String | Filter entity by date_start (greater or equal)
  'dateStartTo': "2016-12-29 16:44:30", // String | Filter entity by date_start (less or equal)
  'dateEndFrom': "2016-12-29 16:44:30", // String | Filter entity by date_end (greater or equal)
  'dateEndTo': "2016-12-29 16:44:30" // String | Filter entity by date_end (less or equal)
};
apiInstance.cartCouponCount(opts, (error, data, response) => {
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
 **avail** | **Boolean**| Defines category&#39;s visibility status | [optional] [default to true]
 **dateStartFrom** | **String**| Filter entity by date_start (greater or equal) | [optional] 
 **dateStartTo** | **String**| Filter entity by date_start (less or equal) | [optional] 
 **dateEndFrom** | **String**| Filter entity by date_end (greater or equal) | [optional] 
 **dateEndTo** | **String**| Filter entity by date_end (less or equal) | [optional] 

### Return type

[**CartCouponCount200Response**](CartCouponCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartCouponDelete

> AttributeDelete200Response cartCouponDelete(id, opts)

cart.coupon.delete

Delete coupon

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

let apiInstance = new Api2CartOpenApi.CartApi();
let id = "10"; // String | Entity id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.cartCouponDelete(id, opts, (error, data, response) => {
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


## cartCouponList

> ModelResponseCartCouponList cartCouponList(opts)

cart.coupon.list

Get cart coupon discounts.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'couponsIds': "1,2,3", // String | Filter coupons by ids
  'storeId': "1", // String | Filter coupons by store id
  'langId': "3", // String | Language id
  'avail': false, // Boolean | Filter coupons by avail status
  'dateStartFrom': "2016-12-29 16:44:30", // String | Filter entity by date_start (greater or equal)
  'dateStartTo': "2016-12-29 16:44:30", // String | Filter entity by date_start (less or equal)
  'dateEndFrom': "2016-12-29 16:44:30", // String | Filter entity by date_end (greater or equal)
  'dateEndTo': "2016-12-29 16:44:30", // String | Filter entity by date_end (less or equal)
  'responseFields': "{pagination,result{coupon_count,coupon{id,code,name,conditions,actions{scope,amount,conditions{id,value,sub-conditions}},date_start,avail}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,code,type,amount", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "usage_history,type" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.cartCouponList(opts, (error, data, response) => {
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
 **couponsIds** | **String**| Filter coupons by ids | [optional] 
 **storeId** | **String**| Filter coupons by store id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **avail** | **Boolean**| Filter coupons by avail status | [optional] 
 **dateStartFrom** | **String**| Filter entity by date_start (greater or equal) | [optional] 
 **dateStartTo** | **String**| Filter entity by date_start (less or equal) | [optional] 
 **dateEndFrom** | **String**| Filter entity by date_end (greater or equal) | [optional] 
 **dateEndTo** | **String**| Filter entity by date_end (less or equal) | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,code,name,description&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartCouponList**](ModelResponseCartCouponList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartCreate

> AccountCartAdd200Response cartCreate(cartCreate)

cart.create

Add store to the account

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CartApi();
let cartCreate = new Api2CartOpenApi.CartCreate(); // CartCreate | 
apiInstance.cartCreate(cartCreate, (error, data, response) => {
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
 **cartCreate** | [**CartCreate**](CartCreate.md)|  | 

### Return type

[**AccountCartAdd200Response**](AccountCartAdd200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cartDelete

> CartDelete200Response cartDelete(opts)

cart.delete

Remove store from API2Cart

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'deleteBridge': true // Boolean | Identifies if there is a necessity to delete bridge
};
apiInstance.cartDelete(opts, (error, data, response) => {
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
 **deleteBridge** | **Boolean**| Identifies if there is a necessity to delete bridge | [optional] [default to true]

### Return type

[**CartDelete200Response**](CartDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartDisconnect

> CartDisconnect200Response cartDisconnect(opts)

cart.disconnect

Disconnect with the store and clear store session data.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'deleteBridge': true // Boolean | Identifies if there is a necessity to delete bridge
};
apiInstance.cartDisconnect(opts, (error, data, response) => {
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
 **deleteBridge** | **Boolean**| Identifies if there is a necessity to delete bridge | [optional] [default to false]

### Return type

[**CartDisconnect200Response**](CartDisconnect200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartGiftcardAdd

> CartGiftcardAdd200Response cartGiftcardAdd(amount, opts)

cart.giftcard.add

Use this method to create a gift card for a specified amount.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let amount = 15.5; // Number | Defines the gift card amount value.
let opts = {
  'code': "GFT1 A4S5 AA11 RD61", // String | Gift card code
  'ownerEmail': "jubari@hannsgroup.com", // String | Gift card owner email
  'recipientEmail': "jubari@hannsgroup.com", // String | Gift card recipient email
  'recipientName': "John Doe", // String | Gift card recipient name
  'ownerName': "John Doe" // String | Gift card owner name
};
apiInstance.cartGiftcardAdd(amount, opts, (error, data, response) => {
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
 **amount** | **Number**| Defines the gift card amount value. | 
 **code** | **String**| Gift card code | [optional] 
 **ownerEmail** | **String**| Gift card owner email | [optional] 
 **recipientEmail** | **String**| Gift card recipient email | [optional] 
 **recipientName** | **String**| Gift card recipient name | [optional] 
 **ownerName** | **String**| Gift card owner name | [optional] 

### Return type

[**CartGiftcardAdd200Response**](CartGiftcardAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartGiftcardCount

> CartGiftcardCount200Response cartGiftcardCount(opts)

cart.giftcard.count

Get gift cards count.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.cartGiftcardCount(opts, (error, data, response) => {
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

[**CartGiftcardCount200Response**](CartGiftcardCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartGiftcardDelete

> AttributeDelete200Response cartGiftcardDelete(id)

cart.giftcard.delete

Delete giftcard

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

let apiInstance = new Api2CartOpenApi.CartApi();
let id = "10"; // String | Entity id
apiInstance.cartGiftcardDelete(id, (error, data, response) => {
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

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartGiftcardList

> ModelResponseCartGiftCardList cartGiftcardList(opts)

cart.giftcard.list

Get gift cards list.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'storeId': "1", // String | Store Id
  'responseFields': "{pagination,result{gift_card{id,code,amount,status}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.cartGiftcardList(opts, (error, data, response) => {
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
 **storeId** | **String**| Store Id | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,code,name&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartGiftCardList**](ModelResponseCartGiftCardList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartInfo

> CartInfo200Response cartInfo(opts)

cart.info

This method allows you to get various information about the store, including a list of stores (in the case of a multistore configuration), a list of supported languages, currencies, carriers, warehouses, and many other information. This information contains data that is relatively stable and rarely changes, so API2Cart can cache certain data to reduce the load on the store and speed up the execution of the request. We also recommend that you cache the response of this method on your side to save requests. If you need to clear the cache for a specific store, then use the cart.validate method.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'storeId': "1", // String | Store Id
  'responseFields': "{result{name,url,stores_info{store_id,name,currency{id,iso3},store_owner_info}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "name,url", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "name,url" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.cartInfo(opts, (error, data, response) => {
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
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;store_name,store_url,db_prefix&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**CartInfo200Response**](CartInfo200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartList

> CartList200Response cartList()

cart.list

Get list of supported carts

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.CartApi();
apiInstance.cartList((error, data, response) => {
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

[**CartList200Response**](CartList200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartMetaDataList

> ModelResponseCartMetaDataList cartMetaDataList(entityId, opts)

cart.meta_data.list

Using this method, you can get a list of metadata for various entities (products, options, customers, orders). Usually this is data created by third-party plugins.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let entityId = "1"; // String | Entity Id
let opts = {
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'entity': "order", // String | Entity
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'key': "subtotal", // String | Key
  'responseFields': "{result{items{key,value}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.cartMetaDataList(entityId, opts, (error, data, response) => {
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
 **entityId** | **String**| Entity Id | 
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **entity** | **String**| Entity | [optional] [default to &#39;product&#39;]
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **key** | **String**| Key | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;key,value&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartMetaDataList**](ModelResponseCartMetaDataList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartMetaDataSet

> AttributeAdd200Response cartMetaDataSet(entityId, key, value, namespace, opts)

cart.meta_data.set

Set meta data for a specific entity

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

let apiInstance = new Api2CartOpenApi.CartApi();
let entityId = "1"; // String | Entity Id
let key = "subtotal"; // String | Key
let value = "2"; // String | Value
let namespace = "order"; // String | Metafield namespace
let opts = {
  'entity': "order", // String | Entity
  'storeId': "1", // String | Store Id
  'langId': "3" // String | Language id
};
apiInstance.cartMetaDataSet(entityId, key, value, namespace, opts, (error, data, response) => {
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
 **entityId** | **String**| Entity Id | 
 **key** | **String**| Key | 
 **value** | **String**| Value | 
 **namespace** | **String**| Metafield namespace | 
 **entity** | **String**| Entity | [optional] [default to &#39;product&#39;]
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 

### Return type

[**AttributeAdd200Response**](AttributeAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartMetaDataUnset

> BasketLiveShippingServiceDelete200Response cartMetaDataUnset(entityId, key, id, opts)

cart.meta_data.unset

Unset meta data for a specific entity

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

let apiInstance = new Api2CartOpenApi.CartApi();
let entityId = "1"; // String | Entity Id
let key = "subtotal"; // String | Key
let id = "10"; // String | Entity id
let opts = {
  'entity': "order", // String | Entity
  'storeId': "1" // String | Store Id
};
apiInstance.cartMetaDataUnset(entityId, key, id, opts, (error, data, response) => {
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
 **entityId** | **String**| Entity Id | 
 **key** | **String**| Key | 
 **id** | **String**| Entity id | 
 **entity** | **String**| Entity | [optional] [default to &#39;product&#39;]
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**BasketLiveShippingServiceDelete200Response**](BasketLiveShippingServiceDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartMethods

> CartMethods200Response cartMethods()

cart.methods

Returns a list of supported API methods.

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

let apiInstance = new Api2CartOpenApi.CartApi();
apiInstance.cartMethods((error, data, response) => {
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

[**CartMethods200Response**](CartMethods200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartPluginList

> CartPluginList200Response cartPluginList(opts)

cart.plugin.list

Get a list of third-party plugins installed on the store.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'storeId': "1" // String | Store Id
};
apiInstance.cartPluginList(opts, (error, data, response) => {
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
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**CartPluginList200Response**](CartPluginList200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartScriptAdd

> CartScriptAdd200Response cartScriptAdd(opts)

cart.script.add

Add new script to the storefront

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'name': "jQuery Minimized", // String | The user-friendly script name
  'description': "The Write Less, Do More, JavaScript Library", // String | The user-friendly description
  'html': "&#x3C;script&#x3E;alert(&#x27;foo&#x27;)&#x3C;/script&#x3E;", // String | An html string containing exactly one `script` tag.
  'src': "https://js-aplenty.com/foo.js", // String | The URL of the remote script
  'loadMethod': "async", // String | The load method to use for the script
  'scope': "all", // String | The page or pages on the online store where the script should be included
  'events': "purchase_event", // String | Event for run scripts
  'storeId': "1" // String | Store Id
};
apiInstance.cartScriptAdd(opts, (error, data, response) => {
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
 **name** | **String**| The user-friendly script name | [optional] 
 **description** | **String**| The user-friendly description | [optional] 
 **html** | **String**| An html string containing exactly one &#x60;script&#x60; tag. | [optional] 
 **src** | **String**| The URL of the remote script | [optional] 
 **loadMethod** | **String**| The load method to use for the script | [optional] 
 **scope** | **String**| The page or pages on the online store where the script should be included | [optional] [default to &#39;storefront&#39;]
 **events** | **String**| Event for run scripts | [optional] 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**CartScriptAdd200Response**](CartScriptAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartScriptDelete

> AttributeDelete200Response cartScriptDelete(id, opts)

cart.script.delete

Remove script from the storefront

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

let apiInstance = new Api2CartOpenApi.CartApi();
let id = "10"; // String | Entity id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.cartScriptDelete(id, opts, (error, data, response) => {
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


## cartScriptList

> ModelResponseCartScriptList cartScriptList(opts)

cart.script.list

Get scripts installed to the storefront

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'scriptIds': "34023324,34024032", // String | Retrieves only scripts with specific ids
  'storeId': "1", // String | Store Id
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'responseFields': "{pagination,result{total_count,scripts{id,name,src,created_time{value}}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.cartScriptList(opts, (error, data, response) => {
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
 **scriptIds** | **String**| Retrieves only scripts with specific ids | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartScriptList**](ModelResponseCartScriptList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartShippingZonesList

> ModelResponseCartShippingZonesList cartShippingZonesList(opts)

cart.shipping_zones.list

Get list of shipping zones

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'storeId': "1", // String | Store Id
  'responseFields': "{result{id,name,enabled,countries,shipping_methods{name,rates}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.cartShippingZonesList(opts, (error, data, response) => {
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
 **storeId** | **String**| Store Id | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,enabled&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartShippingZonesList**](ModelResponseCartShippingZonesList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cartValidate

> CartValidate200Response cartValidate(opts)

cart.validate

This method clears the cache in API2Cart for a particular store and checks whether the connection to the store is available. Use this method if there have been any changes in the settings on the storе, for example, if a new plugin has been installed or removed.

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

let apiInstance = new Api2CartOpenApi.CartApi();
let opts = {
  'validateVersion': true // Boolean | Specify if api2cart should validate cart version
};
apiInstance.cartValidate(opts, (error, data, response) => {
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
 **validateVersion** | **Boolean**| Specify if api2cart should validate cart version | [optional] [default to false]

### Return type

[**CartValidate200Response**](CartValidate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

