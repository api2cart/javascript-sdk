# Api2CartOpenApi.ProductApi

All URIs are relative to *https://api.api2cart.local.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productAdd**](ProductApi.md#productAdd) | **POST** /product.add.json | product.add
[**productAddBatch**](ProductApi.md#productAddBatch) | **POST** /product.add.batch.json | product.add.batch
[**productAttributeList**](ProductApi.md#productAttributeList) | **GET** /product.attribute.list.json | product.attribute.list
[**productAttributeValueSet**](ProductApi.md#productAttributeValueSet) | **POST** /product.attribute.value.set.json | product.attribute.value.set
[**productAttributeValueUnset**](ProductApi.md#productAttributeValueUnset) | **POST** /product.attribute.value.unset.json | product.attribute.value.unset
[**productBrandList**](ProductApi.md#productBrandList) | **GET** /product.brand.list.json | product.brand.list
[**productChildItemFind**](ProductApi.md#productChildItemFind) | **GET** /product.child_item.find.json | product.child_item.find
[**productChildItemInfo**](ProductApi.md#productChildItemInfo) | **GET** /product.child_item.info.json | product.child_item.info
[**productChildItemList**](ProductApi.md#productChildItemList) | **GET** /product.child_item.list.json | product.child_item.list
[**productCount**](ProductApi.md#productCount) | **GET** /product.count.json | product.count
[**productCurrencyAdd**](ProductApi.md#productCurrencyAdd) | **POST** /product.currency.add.json | product.currency.add
[**productCurrencyList**](ProductApi.md#productCurrencyList) | **GET** /product.currency.list.json | product.currency.list
[**productDelete**](ProductApi.md#productDelete) | **DELETE** /product.delete.json | product.delete
[**productDeleteBatch**](ProductApi.md#productDeleteBatch) | **POST** /product.delete.batch.json | product.delete.batch
[**productFind**](ProductApi.md#productFind) | **GET** /product.find.json | product.find
[**productImageAdd**](ProductApi.md#productImageAdd) | **POST** /product.image.add.json | product.image.add
[**productImageDelete**](ProductApi.md#productImageDelete) | **DELETE** /product.image.delete.json | product.image.delete
[**productImageUpdate**](ProductApi.md#productImageUpdate) | **PUT** /product.image.update.json | product.image.update
[**productInfo**](ProductApi.md#productInfo) | **GET** /product.info.json | product.info
[**productList**](ProductApi.md#productList) | **GET** /product.list.json | product.list
[**productManufacturerAdd**](ProductApi.md#productManufacturerAdd) | **POST** /product.manufacturer.add.json | product.manufacturer.add
[**productOptionAdd**](ProductApi.md#productOptionAdd) | **POST** /product.option.add.json | product.option.add
[**productOptionAssign**](ProductApi.md#productOptionAssign) | **POST** /product.option.assign.json | product.option.assign
[**productOptionDelete**](ProductApi.md#productOptionDelete) | **DELETE** /product.option.delete.json | product.option.delete
[**productOptionList**](ProductApi.md#productOptionList) | **GET** /product.option.list.json | product.option.list
[**productOptionValueAdd**](ProductApi.md#productOptionValueAdd) | **POST** /product.option.value.add.json | product.option.value.add
[**productOptionValueAssign**](ProductApi.md#productOptionValueAssign) | **POST** /product.option.value.assign.json | product.option.value.assign
[**productOptionValueDelete**](ProductApi.md#productOptionValueDelete) | **DELETE** /product.option.value.delete.json | product.option.value.delete
[**productOptionValueUpdate**](ProductApi.md#productOptionValueUpdate) | **PUT** /product.option.value.update.json | product.option.value.update
[**productPriceAdd**](ProductApi.md#productPriceAdd) | **POST** /product.price.add.json | product.price.add
[**productPriceDelete**](ProductApi.md#productPriceDelete) | **DELETE** /product.price.delete.json | product.price.delete
[**productPriceUpdate**](ProductApi.md#productPriceUpdate) | **PUT** /product.price.update.json | product.price.update
[**productReviewList**](ProductApi.md#productReviewList) | **GET** /product.review.list.json | product.review.list
[**productStoreAssign**](ProductApi.md#productStoreAssign) | **POST** /product.store.assign.json | product.store.assign
[**productTaxAdd**](ProductApi.md#productTaxAdd) | **POST** /product.tax.add.json | product.tax.add
[**productUpdate**](ProductApi.md#productUpdate) | **PUT** /product.update.json | product.update
[**productUpdateBatch**](ProductApi.md#productUpdateBatch) | **POST** /product.update.batch.json | product.update.batch
[**productVariantAdd**](ProductApi.md#productVariantAdd) | **POST** /product.variant.add.json | product.variant.add
[**productVariantAddBatch**](ProductApi.md#productVariantAddBatch) | **POST** /product.variant.add.batch.json | product.variant.add.batch
[**productVariantDelete**](ProductApi.md#productVariantDelete) | **DELETE** /product.variant.delete.json | product.variant.delete
[**productVariantDeleteBatch**](ProductApi.md#productVariantDeleteBatch) | **POST** /product.variant.delete.batch.json | product.variant.delete.batch
[**productVariantImageAdd**](ProductApi.md#productVariantImageAdd) | **POST** /product.variant.image.add.json | product.variant.image.add
[**productVariantImageDelete**](ProductApi.md#productVariantImageDelete) | **DELETE** /product.variant.image.delete.json | product.variant.image.delete
[**productVariantPriceAdd**](ProductApi.md#productVariantPriceAdd) | **POST** /product.variant.price.add.json | product.variant.price.add
[**productVariantPriceDelete**](ProductApi.md#productVariantPriceDelete) | **DELETE** /product.variant.price.delete.json | product.variant.price.delete
[**productVariantPriceUpdate**](ProductApi.md#productVariantPriceUpdate) | **PUT** /product.variant.price.update.json | product.variant.price.update
[**productVariantUpdate**](ProductApi.md#productVariantUpdate) | **PUT** /product.variant.update.json | product.variant.update
[**productVariantUpdateBatch**](ProductApi.md#productVariantUpdateBatch) | **POST** /product.variant.update.batch.json | product.variant.update.batch



## productAdd

> ProductAdd200Response productAdd(productAdd)

product.add

Add new product to store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productAdd = new Api2CartOpenApi.ProductAdd(); // ProductAdd | 
apiInstance.productAdd(productAdd, (error, data, response) => {
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
 **productAdd** | [**ProductAdd**](ProductAdd.md)|  | 

### Return type

[**ProductAdd200Response**](ProductAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productAddBatch

> CategoryAddBatch200Response productAddBatch(productAddBatch)

product.add.batch

Add new products to the store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productAddBatch = new Api2CartOpenApi.ProductAddBatch(); // ProductAddBatch | 
apiInstance.productAddBatch(productAddBatch, (error, data, response) => {
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
 **productAddBatch** | [**ProductAddBatch**](ProductAddBatch.md)|  | 

### Return type

[**CategoryAddBatch200Response**](CategoryAddBatch200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productAttributeList

> ModelResponseProductAttributeList productAttributeList(productId, opts)

product.attribute.list

Get list of attributes and values.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Retrieves attributes specified by product id
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'attributeId': "156", // String | Retrieves info for specified attribute_id
  'variantId': "45", // String | Defines product's variants specified by variant id
  'attributeGroupId': "202", // String | Filter by attribute_group_id
  'langId': "3", // String | Retrieves attributes specified by language id
  'storeId': "1", // String | Retrieves attributes specified by store id
  'setName': "Shoes", // String | Retrieves attributes specified by set_name in Magento
  'sortBy': "value", // String | Set field to sort by
  'sortDirection': "asc", // String | Set sorting direction
  'responseFields': "{pagination,result{attribute}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "attribute_id,name", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "attribute_id,name" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.productAttributeList(productId, opts, (error, data, response) => {
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
 **productId** | **String**| Retrieves attributes specified by product id | 
 **start** | **Number**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **attributeId** | **String**| Retrieves info for specified attribute_id | [optional] 
 **variantId** | **String**| Defines product&#39;s variants specified by variant id | [optional] 
 **attributeGroupId** | **String**| Filter by attribute_group_id | [optional] 
 **langId** | **String**| Retrieves attributes specified by language id | [optional] 
 **storeId** | **String**| Retrieves attributes specified by store id | [optional] 
 **setName** | **String**| Retrieves attributes specified by set_name in Magento | [optional] 
 **sortBy** | **String**| Set field to sort by | [optional] [default to &#39;attribute_id&#39;]
 **sortDirection** | **String**| Set sorting direction | [optional] [default to &#39;asc&#39;]
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;attribute_id,name&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseProductAttributeList**](ModelResponseProductAttributeList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productAttributeValueSet

> ProductAttributeValueSet200Response productAttributeValueSet(productId, opts)

product.attribute.value.set

Set attribute value to product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines product id where the attribute should be added
let opts = {
  'attributeId': "156", // String | Filter by attribute_id
  'attributeGroupId': "202", // String | Filter by attribute_group_id
  'attributeName': "Color", // String | Define attribute name
  'value': "Red", // String | Define attribute value
  'valueId': 22, // Number | Define attribute value id
  'langId': "3", // String | Language id
  'storeId': "1" // String | Store Id
};
apiInstance.productAttributeValueSet(productId, opts, (error, data, response) => {
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
 **productId** | **String**| Defines product id where the attribute should be added | 
 **attributeId** | **String**| Filter by attribute_id | [optional] 
 **attributeGroupId** | **String**| Filter by attribute_group_id | [optional] 
 **attributeName** | **String**| Define attribute name | [optional] 
 **value** | **String**| Define attribute value | [optional] 
 **valueId** | **Number**| Define attribute value id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**ProductAttributeValueSet200Response**](ProductAttributeValueSet200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productAttributeValueUnset

> ProductAttributeValueUnset200Response productAttributeValueUnset(productId, attributeId, opts)

product.attribute.value.unset

Removes attribute value for a product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Product id
let attributeId = "156"; // String | Attribute Id
let opts = {
  'storeId': "1", // String | Store Id
  'includeDefault': true, // Boolean | Boolean, whether or not to unset default value of the attribute, if applicable
  'reindex': false, // Boolean | Is reindex required
  'clearCache': false // Boolean | Is cache clear required
};
apiInstance.productAttributeValueUnset(productId, attributeId, opts, (error, data, response) => {
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
 **productId** | **String**| Product id | 
 **attributeId** | **String**| Attribute Id | 
 **storeId** | **String**| Store Id | [optional] 
 **includeDefault** | **Boolean**| Boolean, whether or not to unset default value of the attribute, if applicable | [optional] [default to false]
 **reindex** | **Boolean**| Is reindex required | [optional] [default to true]
 **clearCache** | **Boolean**| Is cache clear required | [optional] [default to true]

### Return type

[**ProductAttributeValueUnset200Response**](ProductAttributeValueUnset200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productBrandList

> ModelResponseProductBrandList productBrandList(opts)

product.brand.list

Get list of brands from your store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'brandIds': "4,5", // String | Retrieves brands specified by brand ids
  'categoryId': "6", // String | Retrieves product brands specified by category id
  'parentId': "6", // String | Retrieves brands specified by parent id
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'findWhere': "name", // String | Entity search that is specified by the comma-separated unique fields
  'findValue': "Phone", // String | Entity search that is specified by some value
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'responseFields': "{return_code,return_message,pagination,result}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.productBrandList(opts, (error, data, response) => {
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
 **brandIds** | **String**| Retrieves brands specified by brand ids | [optional] 
 **categoryId** | **String**| Retrieves product brands specified by category id | [optional] 
 **parentId** | **String**| Retrieves brands specified by parent id | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **findWhere** | **String**| Entity search that is specified by the comma-separated unique fields | [optional] 
 **findValue** | **String**| Entity search that is specified by some value | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,short_description,active,url&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseProductBrandList**](ModelResponseProductBrandList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productChildItemFind

> ProductChildItemFind200Response productChildItemFind(opts)

product.child_item.find

Search product child item (bundled item or configurable product variant) in store catalog.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let opts = {
  'findValue': "bundled-item-123-", // String | Entity search that is specified by some value
  'findWhere': "sku", // String | Entity search that is specified by the comma-separated unique fields
  'findParams': "regex", // String | Entity search that is specified by comma-separated parameters
  'storeId': "1" // String | Store Id
};
apiInstance.productChildItemFind(opts, (error, data, response) => {
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
 **findValue** | **String**| Entity search that is specified by some value | [optional] 
 **findWhere** | **String**| Entity search that is specified by the comma-separated unique fields | [optional] 
 **findParams** | **String**| Entity search that is specified by comma-separated parameters | [optional] [default to &#39;whole_words&#39;]
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**ProductChildItemFind200Response**](ProductChildItemFind200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productChildItemInfo

> ProductChildItemInfo200Response productChildItemInfo(productId, id, opts)

product.child_item.info

Get child for specific product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Filter by parent product id
let id = "10"; // String | Entity id
let opts = {
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'currencyId': "usd", // String | Currency Id
  'responseFields': "{result{id,parent_id,sku,upc,images,combination}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'useLatestApiVersion': true // Boolean | Use the latest platform API version
};
apiInstance.productChildItemInfo(productId, id, opts, (error, data, response) => {
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
 **productId** | **String**| Filter by parent product id | 
 **id** | **String**| Entity id | 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **currencyId** | **String**| Currency Id | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **useLatestApiVersion** | **Boolean**| Use the latest platform API version | [optional] [default to false]

### Return type

[**ProductChildItemInfo200Response**](ProductChildItemInfo200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productChildItemList

> ModelResponseProductChildItemList productChildItemList(opts)

product.child_item.list

Get a list of a product&#39;s child items, such as variants or bundle components. The total_count field in the response indicates the total number of items in the context of the current filter.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve products child items via cursor-based pagination (it can't be used with any other filtering parameter)
  'productId': "10", // String | Filter by parent product id
  'productIds': "4,5", // String | Filter by parent product ids
  'sku': "bag_01", // String | Filter by products variant's sku
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'currencyId': "usd", // String | Currency Id
  'availSale': false, // Boolean | Specifies the set of available/not available products for sale
  'findValue': "bundled-item-123-", // String | Entity search that is specified by some value
  'findWhere': "sku", // String | Child products search that is specified by field
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'returnGlobal': false, // Boolean | Determines the type of products to be returned. If set to 'true', only global products will be returned; if set to 'false', only local products will be returned.
  'responseFields': "{result{children{id,parent_id,sku,upc,images,combination}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'reportRequestId': "105245017661", // String | Report request id
  'disableReportCache': false, // Boolean | Disable report cache for current request
  'useLatestApiVersion': true // Boolean | Use the latest platform API version
};
apiInstance.productChildItemList(opts, (error, data, response) => {
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
 **pageCursor** | **String**| Used to retrieve products child items via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **productId** | **String**| Filter by parent product id | [optional] 
 **productIds** | **String**| Filter by parent product ids | [optional] 
 **sku** | **String**| Filter by products variant&#39;s sku | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **currencyId** | **String**| Currency Id | [optional] 
 **availSale** | **Boolean**| Specifies the set of available/not available products for sale | [optional] 
 **findValue** | **String**| Entity search that is specified by some value | [optional] 
 **findWhere** | **String**| Child products search that is specified by field | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **returnGlobal** | **Boolean**| Determines the type of products to be returned. If set to &#39;true&#39;, only global products will be returned; if set to &#39;false&#39;, only local products will be returned. | [optional] [default to false]
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **reportRequestId** | **String**| Report request id | [optional] 
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]
 **useLatestApiVersion** | **Boolean**| Use the latest platform API version | [optional] [default to false]

### Return type

[**ModelResponseProductChildItemList**](ModelResponseProductChildItemList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productCount

> ProductCount200Response productCount(opts)

product.count

Count products in store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let opts = {
  'productIds': "4,5", // String | Counts products specified by product ids
  'sinceId': "56", // String | Retrieve entities starting from the specified id.
  'categoriesIds': "23,56", // String | Defines product add that is specified by comma-separated categories id
  'categoryId': "6", // String | Counts products specified by category id
  'storeId': "1", // String | Counts products specified by store id
  'langId': "3", // String | Counts products specified by language id
  'availView': true, // Boolean | Specifies the set of visible/invisible products
  'availSale': false, // Boolean | Specifies the set of available/not available products for sale
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'brandName': "Abidas", // String | Retrieves brands specified by brand name
  'productAttributes': ["null"], // [String] | Defines product attributes
  'status': "disabled", // String | Defines product's status
  'type': "simple", // String | Defines products's type
  'visible': "everywhere", // String | Filter items by visibility status
  'findValue': "Phone", // String | Entity search that is specified by some value
  'findWhere': "name", // String | Counts products that are searched specified by field
  'reportRequestId': "105245017661", // String | Report request id
  'returnGlobal': false, // Boolean | Determines the type of products to be returned. If set to 'true', only global products will be returned; if set to 'false', only local products will be returned.
  'disableReportCache': false, // Boolean | Disable report cache for current request
  'useLatestApiVersion': true // Boolean | Use the latest platform API version
};
apiInstance.productCount(opts, (error, data, response) => {
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
 **productIds** | **String**| Counts products specified by product ids | [optional] 
 **sinceId** | **String**| Retrieve entities starting from the specified id. | [optional] 
 **categoriesIds** | **String**| Defines product add that is specified by comma-separated categories id | [optional] 
 **categoryId** | **String**| Counts products specified by category id | [optional] 
 **storeId** | **String**| Counts products specified by store id | [optional] 
 **langId** | **String**| Counts products specified by language id | [optional] 
 **availView** | **Boolean**| Specifies the set of visible/invisible products | [optional] 
 **availSale** | **Boolean**| Specifies the set of available/not available products for sale | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **brandName** | **String**| Retrieves brands specified by brand name | [optional] 
 **productAttributes** | [**[String]**](String.md)| Defines product attributes | [optional] 
 **status** | **String**| Defines product&#39;s status | [optional] 
 **type** | **String**| Defines products&#39;s type | [optional] 
 **visible** | **String**| Filter items by visibility status | [optional] [default to &#39;everywhere&#39;]
 **findValue** | **String**| Entity search that is specified by some value | [optional] 
 **findWhere** | **String**| Counts products that are searched specified by field | [optional] 
 **reportRequestId** | **String**| Report request id | [optional] 
 **returnGlobal** | **Boolean**| Determines the type of products to be returned. If set to &#39;true&#39;, only global products will be returned; if set to &#39;false&#39;, only local products will be returned. | [optional] [default to false]
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]
 **useLatestApiVersion** | **Boolean**| Use the latest platform API version | [optional] [default to false]

### Return type

[**ProductCount200Response**](ProductCount200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productCurrencyAdd

> ProductCurrencyAdd200Response productCurrencyAdd(iso3, rate, opts)

product.currency.add

Add currency and/or set default in store

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let iso3 = "USD"; // String | Specifies standardized currency code
let rate = 1; // Number | Defines the numerical identifier against to the major currency
let opts = {
  'name': "US Dollar", // String | Defines currency's name
  'avail': false, // Boolean | Specifies whether the currency is available
  'symbolLeft': "$", // String | Defines the symbol that is located before the currency
  'symbolRight': "грн", // String | Defines the symbol that is located after the currency
  '_default': true // Boolean | Specifies currency's default meaning
};
apiInstance.productCurrencyAdd(iso3, rate, opts, (error, data, response) => {
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
 **iso3** | **String**| Specifies standardized currency code | 
 **rate** | **Number**| Defines the numerical identifier against to the major currency | 
 **name** | **String**| Defines currency&#39;s name | [optional] 
 **avail** | **Boolean**| Specifies whether the currency is available | [optional] [default to true]
 **symbolLeft** | **String**| Defines the symbol that is located before the currency | [optional] 
 **symbolRight** | **String**| Defines the symbol that is located after the currency | [optional] 
 **_default** | **Boolean**| Specifies currency&#39;s default meaning | [optional] [default to false]

### Return type

[**ProductCurrencyAdd200Response**](ProductCurrencyAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productCurrencyList

> ModelResponseProductCurrencyList productCurrencyList(opts)

product.currency.list

Get list of currencies

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  '_default': true, // Boolean | Specifies the set of default/not default currencies
  'avail': false, // Boolean | Specifies the set of available/not available currencies
  'responseFields': "{return_message,pagination,result{currency}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "name,iso3,default,avail", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "name,iso3,default,avail" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.productCurrencyList(opts, (error, data, response) => {
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
 **_default** | **Boolean**| Specifies the set of default/not default currencies | [optional] 
 **avail** | **Boolean**| Specifies the set of available/not available currencies | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;name,iso3,default,avail&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseProductCurrencyList**](ModelResponseProductCurrencyList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productDelete

> CustomerDelete200Response productDelete(id, opts)

product.delete

Product delete

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let id = "10"; // String | Product id that will be removed
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.productDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| Product id that will be removed | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**CustomerDelete200Response**](CustomerDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productDeleteBatch

> CategoryAddBatch200Response productDeleteBatch(productDeleteBatch)

product.delete.batch

Remove product from the store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productDeleteBatch = new Api2CartOpenApi.ProductDeleteBatch(); // ProductDeleteBatch | 
apiInstance.productDeleteBatch(productDeleteBatch, (error, data, response) => {
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
 **productDeleteBatch** | [**ProductDeleteBatch**](ProductDeleteBatch.md)|  | 

### Return type

[**CategoryAddBatch200Response**](CategoryAddBatch200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productFind

> ProductFind200Response productFind(findValue, opts)

product.find

Search product in store catalog. \&quot;Apple\&quot; is specified here by default.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let findValue = "Simple"; // String | Entity search that is specified by some value
let opts = {
  'findWhere': "name", // String | Entity search that is specified by the comma-separated unique fields
  'findParams': "regex", // String | Entity search that is specified by comma-separated parameters
  'findWhat': "each", // String | Parameter's value specifies the entity that has to be found
  'langId': "3", // String | Search products specified by language id
  'storeId': "1" // String | Store Id
};
apiInstance.productFind(findValue, opts, (error, data, response) => {
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
 **findWhat** | **String**| Parameter&#39;s value specifies the entity that has to be found | [optional] [default to &#39;product&#39;]
 **langId** | **String**| Search products specified by language id | [optional] 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**ProductFind200Response**](ProductFind200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productImageAdd

> ProductImageAdd200Response productImageAdd(productImageAdd)

product.image.add

Add image to product

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productImageAdd = new Api2CartOpenApi.ProductImageAdd(); // ProductImageAdd | 
apiInstance.productImageAdd(productImageAdd, (error, data, response) => {
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
 **productImageAdd** | [**ProductImageAdd**](ProductImageAdd.md)|  | 

### Return type

[**ProductImageAdd200Response**](ProductImageAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productImageDelete

> AttributeDelete200Response productImageDelete(productId, id, opts)

product.image.delete

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines product id where the image should be deleted
let id = "10"; // String | Entity id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.productImageDelete(productId, id, opts, (error, data, response) => {
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
 **productId** | **String**| Defines product id where the image should be deleted | 
 **id** | **String**| Entity id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productImageUpdate

> ProductImageUpdate200Response productImageUpdate(productId, id, opts)

product.image.update

Update details of image

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines product id where the image should be updated
let id = "10"; // String | Defines image update specified by image id
let opts = {
  'variantIds': "1,2,3,4,5", // String | Defines product's variants ids
  'storeId': "1", // String | Store Id
  'langId': "3", // String | Language id
  'imageName': "data/product/main/product_69_bag-gray.png", // String | Defines image's name
  'type': "thumbnail", // String | Defines image's types that are specified by comma-separated list
  'label': "This cool image", // String | Defines alternative text that has to be attached to the picture
  'position': 5, // Number | Defines image’s position in the list
  'hidden': true // Boolean | Define is hide image
};
apiInstance.productImageUpdate(productId, id, opts, (error, data, response) => {
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
 **productId** | **String**| Defines product id where the image should be updated | 
 **id** | **String**| Defines image update specified by image id | 
 **variantIds** | **String**| Defines product&#39;s variants ids | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **imageName** | **String**| Defines image&#39;s name | [optional] 
 **type** | **String**| Defines image&#39;s types that are specified by comma-separated list | [optional] [default to &#39;additional&#39;]
 **label** | **String**| Defines alternative text that has to be attached to the picture | [optional] 
 **position** | **Number**| Defines image’s position in the list | [optional] 
 **hidden** | **Boolean**| Define is hide image | [optional] 

### Return type

[**ProductImageUpdate200Response**](ProductImageUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productInfo

> ProductInfo200Response productInfo(id, opts)

product.info

Get information about a specific product by its ID. In the case of a multistore configuration, use the store_id filter to get a response in the context of a specific store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let id = "10"; // String | Retrieves product's info specified by product id
let opts = {
  'storeId': "1", // String | Retrieves product info specified by store id
  'langId': "3", // String | Retrieves product info specified by language id
  'currencyId': "usd", // String | Currency Id
  'responseFields': "{result{id,name,price,images}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'reportRequestId': "105245017661", // String | Report request id
  'disableReportCache': false, // Boolean | Disable report cache for current request
  'useLatestApiVersion': true // Boolean | Use the latest platform API version
};
apiInstance.productInfo(id, opts, (error, data, response) => {
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
 **id** | **String**| Retrieves product&#39;s info specified by product id | 
 **storeId** | **String**| Retrieves product info specified by store id | [optional] 
 **langId** | **String**| Retrieves product info specified by language id | [optional] 
 **currencyId** | **String**| Currency Id | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description,price,categories_ids&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **reportRequestId** | **String**| Report request id | [optional] 
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]
 **useLatestApiVersion** | **Boolean**| Use the latest platform API version | [optional] [default to false]

### Return type

[**ProductInfo200Response**](ProductInfo200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productList

> ModelResponseProductList productList(opts)

product.list

Get list of products from your store. Returns 10 products by default.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve products via cursor-based pagination (it can't be used with any other filtering parameter)
  'productIds': "4,5", // String | Retrieves products specified by product ids
  'sinceId': "56", // String | Retrieve entities starting from the specified id.
  'categoriesIds': "23,56", // String | Retrieves products specified by categories ids
  'categoryId': "6", // String | Retrieves products specified by category id
  'storeId': "1", // String | Retrieves products specified by store id
  'langId': "3", // String | Retrieves products specified by language id
  'currencyId': "usd", // String | Currency Id
  'availView': true, // Boolean | Specifies the set of visible/invisible products
  'availSale': false, // Boolean | Specifies the set of available/not available products for sale
  'createdFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their creation date
  'createdTo': "2100-08-29 13:45:52", // String | Retrieve entities to their creation date
  'modifiedFrom': "2010-07-29 13:45:52", // String | Retrieve entities from their modification date
  'modifiedTo': "2100-08-29 13:45:52", // String | Retrieve entities to their modification date
  'sku': "bag_01", // String | Filter by product's sku
  'brandName': "Abidas", // String | Retrieves brands specified by brand name
  'productAttributes': ["null"], // [String] | Defines product attributes
  'status': "disabled", // String | Defines product's status
  'type': "simple", // String | Defines products's type
  'visible': "everywhere", // String | Filter items by visibility status
  'findValue': "Phone", // String | Entity search that is specified by some value
  'findWhere': "name", // String | Product search that is specified by field
  'returnGlobal': false, // Boolean | Determines the type of products to be returned. If set to 'true', only global products will be returned; if set to 'false', only local products will be returned.
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'responseFields': "{return_code,pagination,result{product{id,name,price,images}}}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'sortBy': "value_id", // String | Set field to sort by
  'sortDirection': "asc", // String | Set sorting direction
  'reportRequestId': "105245017661", // String | Report request id
  'disableCache': false, // Boolean | Disable cache for current request
  'disableReportCache': false, // Boolean | Disable report cache for current request
  'useLatestApiVersion': true, // Boolean | Use the latest platform API version
  'productType': "BICYCLE" // String | A categorization for the product
};
apiInstance.productList(opts, (error, data, response) => {
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
 **pageCursor** | **String**| Used to retrieve products via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **productIds** | **String**| Retrieves products specified by product ids | [optional] 
 **sinceId** | **String**| Retrieve entities starting from the specified id. | [optional] 
 **categoriesIds** | **String**| Retrieves products specified by categories ids | [optional] 
 **categoryId** | **String**| Retrieves products specified by category id | [optional] 
 **storeId** | **String**| Retrieves products specified by store id | [optional] 
 **langId** | **String**| Retrieves products specified by language id | [optional] 
 **currencyId** | **String**| Currency Id | [optional] 
 **availView** | **Boolean**| Specifies the set of visible/invisible products | [optional] 
 **availSale** | **Boolean**| Specifies the set of available/not available products for sale | [optional] 
 **createdFrom** | **String**| Retrieve entities from their creation date | [optional] 
 **createdTo** | **String**| Retrieve entities to their creation date | [optional] 
 **modifiedFrom** | **String**| Retrieve entities from their modification date | [optional] 
 **modifiedTo** | **String**| Retrieve entities to their modification date | [optional] 
 **sku** | **String**| Filter by product&#39;s sku | [optional] 
 **brandName** | **String**| Retrieves brands specified by brand name | [optional] 
 **productAttributes** | [**[String]**](String.md)| Defines product attributes | [optional] 
 **status** | **String**| Defines product&#39;s status | [optional] 
 **type** | **String**| Defines products&#39;s type | [optional] 
 **visible** | **String**| Filter items by visibility status | [optional] [default to &#39;everywhere&#39;]
 **findValue** | **String**| Entity search that is specified by some value | [optional] 
 **findWhere** | **String**| Product search that is specified by field | [optional] 
 **returnGlobal** | **Boolean**| Determines the type of products to be returned. If set to &#39;true&#39;, only global products will be returned; if set to &#39;false&#39;, only local products will be returned. | [optional] [default to false]
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description,price,categories_ids&#39;]
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **sortBy** | **String**| Set field to sort by | [optional] [default to &#39;id&#39;]
 **sortDirection** | **String**| Set sorting direction | [optional] [default to &#39;asc&#39;]
 **reportRequestId** | **String**| Report request id | [optional] 
 **disableCache** | **Boolean**| Disable cache for current request | [optional] [default to false]
 **disableReportCache** | **Boolean**| Disable report cache for current request | [optional] [default to false]
 **useLatestApiVersion** | **Boolean**| Use the latest platform API version | [optional] [default to false]
 **productType** | **String**| A categorization for the product | [optional] 

### Return type

[**ModelResponseProductList**](ModelResponseProductList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productManufacturerAdd

> ProductManufacturerAdd200Response productManufacturerAdd(productId, manufacturer, opts)

product.manufacturer.add

Add manufacturer to store and assign to product

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines products specified by product id
let manufacturer = "Samsung"; // String | Defines product’s manufacturer's name
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.productManufacturerAdd(productId, manufacturer, opts, (error, data, response) => {
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
 **productId** | **String**| Defines products specified by product id | 
 **manufacturer** | **String**| Defines product’s manufacturer&#39;s name | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**ProductManufacturerAdd200Response**](ProductManufacturerAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productOptionAdd

> ProductOptionAdd200Response productOptionAdd(productOptionAdd)

product.option.add

Add product option from store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productOptionAdd = new Api2CartOpenApi.ProductOptionAdd(); // ProductOptionAdd | 
apiInstance.productOptionAdd(productOptionAdd, (error, data, response) => {
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
 **productOptionAdd** | [**ProductOptionAdd**](ProductOptionAdd.md)|  | 

### Return type

[**ProductOptionAdd200Response**](ProductOptionAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productOptionAssign

> ProductOptionAssign200Response productOptionAssign(productId, optionId, opts)

product.option.assign

Assign option from product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines product id where the option should be assigned
let optionId = "5"; // String | Defines option id which has to be assigned
let opts = {
  'required': true, // Boolean | Defines if the option is required
  'sortOrder': 2, // Number | Sort number in the list
  'optionValues': "green,black,yellow", // String | Defines option values that has to be assigned
  'clearCache': false // Boolean | Is cache clear required
};
apiInstance.productOptionAssign(productId, optionId, opts, (error, data, response) => {
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
 **productId** | **String**| Defines product id where the option should be assigned | 
 **optionId** | **String**| Defines option id which has to be assigned | 
 **required** | **Boolean**| Defines if the option is required | [optional] [default to false]
 **sortOrder** | **Number**| Sort number in the list | [optional] [default to 0]
 **optionValues** | **String**| Defines option values that has to be assigned | [optional] 
 **clearCache** | **Boolean**| Is cache clear required | [optional] [default to true]

### Return type

[**ProductOptionAssign200Response**](ProductOptionAssign200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productOptionDelete

> AttributeDelete200Response productOptionDelete(optionId, productId, opts)

product.option.delete

Product option delete.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let optionId = "5"; // String | Defines option id that should be deleted
let productId = "10"; // String | Defines product id where the option should be deleted
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.productOptionDelete(optionId, productId, opts, (error, data, response) => {
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
 **optionId** | **String**| Defines option id that should be deleted | 
 **productId** | **String**| Defines product id where the option should be deleted | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productOptionList

> ModelResponseProductOptionList productOptionList(opts)

product.option.list

Get list of options.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'productId': "10", // String | Retrieves products' options specified by product id
  'langId': "3", // String | Language id
  'storeId': "1", // String | Store Id
  'responseFields': "{return_code,return_message,pagination,result}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,name,sort_order", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "id,name,sort_order" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.productOptionList(opts, (error, data, response) => {
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
 **productId** | **String**| Retrieves products&#39; options specified by product id | [optional] 
 **langId** | **String**| Language id | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseProductOptionList**](ModelResponseProductOptionList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productOptionValueAdd

> ProductOptionValueAdd200Response productOptionValueAdd(productId, optionId, opts)

product.option.value.add

Add product option item from option.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines product id where the option value should be added
let optionId = "5"; // String | Defines option id where the value has to be added
let opts = {
  'optionValue': "green", // String | Defines option value that has to be added
  'sortOrder': 2, // Number | Sort number in the list
  'displayValue': "value", // String | Defines the value that will be displayed for the option value
  'isDefault': true, // Boolean | Defines as a default
  'clearCache': false // Boolean | Is cache clear required
};
apiInstance.productOptionValueAdd(productId, optionId, opts, (error, data, response) => {
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
 **productId** | **String**| Defines product id where the option value should be added | 
 **optionId** | **String**| Defines option id where the value has to be added | 
 **optionValue** | **String**| Defines option value that has to be added | [optional] 
 **sortOrder** | **Number**| Sort number in the list | [optional] [default to 0]
 **displayValue** | **String**| Defines the value that will be displayed for the option value | [optional] 
 **isDefault** | **Boolean**| Defines as a default | [optional] 
 **clearCache** | **Boolean**| Is cache clear required | [optional] [default to true]

### Return type

[**ProductOptionValueAdd200Response**](ProductOptionValueAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productOptionValueAssign

> ProductOptionValueAssign200Response productOptionValueAssign(productOptionId, optionValueId, opts)

product.option.value.assign

Assign product option item from product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productOptionId = 5; // Number | Defines product's option id where the value has to be assigned
let optionValueId = "45"; // String | Defines value id that has to be assigned
let opts = {
  'clearCache': false // Boolean | Is cache clear required
};
apiInstance.productOptionValueAssign(productOptionId, optionValueId, opts, (error, data, response) => {
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
 **productOptionId** | **Number**| Defines product&#39;s option id where the value has to be assigned | 
 **optionValueId** | **String**| Defines value id that has to be assigned | 
 **clearCache** | **Boolean**| Is cache clear required | [optional] [default to true]

### Return type

[**ProductOptionValueAssign200Response**](ProductOptionValueAssign200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productOptionValueDelete

> AttributeDelete200Response productOptionValueDelete(optionId, optionValueId, productId, opts)

product.option.value.delete

Product option value delete.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let optionId = "5"; // String | Defines option id where the value should be deleted
let optionValueId = "45"; // String | Defines option value id that should be deleted
let productId = "10"; // String | Defines product id where the option value should be deleted
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.productOptionValueDelete(optionId, optionValueId, productId, opts, (error, data, response) => {
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
 **optionId** | **String**| Defines option id where the value should be deleted | 
 **optionValueId** | **String**| Defines option value id that should be deleted | 
 **productId** | **String**| Defines product id where the option value should be deleted | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productOptionValueUpdate

> AccountConfigUpdate200Response productOptionValueUpdate(productId, optionId, optionValueId, opts)

product.option.value.update

Update product option item from option.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines product id where the option value should be updated
let optionId = "5"; // String | Defines option id where the value has to be updated
let optionValueId = "45"; // String | Defines value id that has to be assigned
let opts = {
  'optionValue': "green", // String | Defines option value that has to be added
  'price': 99.9, // Number | Defines new product option price
  'quantity': 6, // Number | Defines new products' options quantity
  'displayValue': "value", // String | Defines the value that will be displayed for the option value
  'clearCache': false // Boolean | Is cache clear required
};
apiInstance.productOptionValueUpdate(productId, optionId, optionValueId, opts, (error, data, response) => {
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
 **productId** | **String**| Defines product id where the option value should be updated | 
 **optionId** | **String**| Defines option id where the value has to be updated | 
 **optionValueId** | **String**| Defines value id that has to be assigned | 
 **optionValue** | **String**| Defines option value that has to be added | [optional] 
 **price** | **Number**| Defines new product option price | [optional] 
 **quantity** | **Number**| Defines new products&#39; options quantity | [optional] 
 **displayValue** | **String**| Defines the value that will be displayed for the option value | [optional] 
 **clearCache** | **Boolean**| Is cache clear required | [optional] [default to true]

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productPriceAdd

> CartValidate200Response productPriceAdd(productPriceAdd)

product.price.add

Add some prices to the product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productPriceAdd = new Api2CartOpenApi.ProductPriceAdd(); // ProductPriceAdd | 
apiInstance.productPriceAdd(productPriceAdd, (error, data, response) => {
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
 **productPriceAdd** | [**ProductPriceAdd**](ProductPriceAdd.md)|  | 

### Return type

[**CartValidate200Response**](CartValidate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productPriceDelete

> AttributeDelete200Response productPriceDelete(productId, opts)

product.price.delete

Delete some prices of the product

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines the product where the price has to be deleted
let opts = {
  'groupPrices': "group_prices=5,8,9", // String | Defines product's group prices
  'storeId': "1" // String | Store Id
};
apiInstance.productPriceDelete(productId, opts, (error, data, response) => {
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
 **productId** | **String**| Defines the product where the price has to be deleted | 
 **groupPrices** | **String**| Defines product&#39;s group prices | [optional] 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productPriceUpdate

> AccountConfigUpdate200Response productPriceUpdate(productPriceUpdate)

product.price.update

Update some prices of the product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productPriceUpdate = new Api2CartOpenApi.ProductPriceUpdate(); // ProductPriceUpdate | 
apiInstance.productPriceUpdate(productPriceUpdate, (error, data, response) => {
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
 **productPriceUpdate** | [**ProductPriceUpdate**](ProductPriceUpdate.md)|  | 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productReviewList

> ModelResponseProductReviewList productReviewList(productId, opts)

product.review.list

Get reviews of a specific product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Product id
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'ids': "24,25", // String | Retrieves reviews specified by ids
  'storeId': "1", // String | Store Id
  'status': "disabled", // String | Defines status
  'responseFields': "{return_code,return_message,pagination,result}", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.productReviewList(productId, opts, (error, data, response) => {
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
 **productId** | **String**| Product id | 
 **start** | **Number**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **ids** | **String**| Retrieves reviews specified by ids | [optional] 
 **storeId** | **String**| Store Id | [optional] 
 **status** | **String**| Defines status | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,customer_id,email,message,status,product_id,nick_name,summary,rating,ratings,status,created_time&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseProductReviewList**](ModelResponseProductReviewList.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productStoreAssign

> AccountConfigUpdate200Response productStoreAssign(productId, storeId)

product.store.assign

Assign product to store

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines id of the product which should be assigned to a store
let storeId = "1"; // String | Defines id of the store product should be assigned to
apiInstance.productStoreAssign(productId, storeId, (error, data, response) => {
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
 **productId** | **String**| Defines id of the product which should be assigned to a store | 
 **storeId** | **String**| Defines id of the store product should be assigned to | 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productTaxAdd

> ProductTaxAdd200Response productTaxAdd(productTaxAdd)

product.tax.add

Add tax class and tax rate to store and assign to product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productTaxAdd = new Api2CartOpenApi.ProductTaxAdd(); // ProductTaxAdd | 
apiInstance.productTaxAdd(productTaxAdd, (error, data, response) => {
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
 **productTaxAdd** | [**ProductTaxAdd**](ProductTaxAdd.md)|  | 

### Return type

[**ProductTaxAdd200Response**](ProductTaxAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productUpdate

> AccountConfigUpdate200Response productUpdate(productUpdate)

product.update

This method can be used to update certain product data. The list of supported parameters depends on the specific platform. Please transmit only those parameters that are supported by the particular platform. Please note that to update the product quantity, it is recommended to use relative parameters (increase_quantity or reduce_quantity) to avoid unexpected overwrites on heavily loaded stores.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productUpdate = new Api2CartOpenApi.ProductUpdate(); // ProductUpdate | 
apiInstance.productUpdate(productUpdate, (error, data, response) => {
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
 **productUpdate** | [**ProductUpdate**](ProductUpdate.md)|  | 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productUpdateBatch

> CategoryAddBatch200Response productUpdateBatch(productUpdateBatch)

product.update.batch

Update products on the store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productUpdateBatch = new Api2CartOpenApi.ProductUpdateBatch(); // ProductUpdateBatch | 
apiInstance.productUpdateBatch(productUpdateBatch, (error, data, response) => {
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
 **productUpdateBatch** | [**ProductUpdateBatch**](ProductUpdateBatch.md)|  | 

### Return type

[**CategoryAddBatch200Response**](CategoryAddBatch200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productVariantAdd

> ProductVariantAdd200Response productVariantAdd(productVariantAdd)

product.variant.add

Add variant to product.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productVariantAdd = new Api2CartOpenApi.ProductVariantAdd(); // ProductVariantAdd | 
apiInstance.productVariantAdd(productVariantAdd, (error, data, response) => {
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
 **productVariantAdd** | [**ProductVariantAdd**](ProductVariantAdd.md)|  | 

### Return type

[**ProductVariantAdd200Response**](ProductVariantAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productVariantAddBatch

> CategoryAddBatch200Response productVariantAddBatch(productVariantAddBatch)

product.variant.add.batch

Add new product variants to the store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productVariantAddBatch = new Api2CartOpenApi.ProductVariantAddBatch(); // ProductVariantAddBatch | 
apiInstance.productVariantAddBatch(productVariantAddBatch, (error, data, response) => {
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
 **productVariantAddBatch** | [**ProductVariantAddBatch**](ProductVariantAddBatch.md)|  | 

### Return type

[**CategoryAddBatch200Response**](CategoryAddBatch200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productVariantDelete

> AttributeValueDelete200Response productVariantDelete(id, productId, opts)

product.variant.delete

Delete variant.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let id = "10"; // String | Defines variant removal, specified by variant id
let productId = "10"; // String | Defines product's id where the variant has to be deleted
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.productVariantDelete(id, productId, opts, (error, data, response) => {
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
 **id** | **String**| Defines variant removal, specified by variant id | 
 **productId** | **String**| Defines product&#39;s id where the variant has to be deleted | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeValueDelete200Response**](AttributeValueDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productVariantDeleteBatch

> CategoryAddBatch200Response productVariantDeleteBatch(productVariantDeleteBatch)

product.variant.delete.batch

Remove product variants from the store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productVariantDeleteBatch = new Api2CartOpenApi.ProductVariantDeleteBatch(); // ProductVariantDeleteBatch | 
apiInstance.productVariantDeleteBatch(productVariantDeleteBatch, (error, data, response) => {
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
 **productVariantDeleteBatch** | [**ProductVariantDeleteBatch**](ProductVariantDeleteBatch.md)|  | 

### Return type

[**CategoryAddBatch200Response**](CategoryAddBatch200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productVariantImageAdd

> ProductVariantImageAdd200Response productVariantImageAdd(productVariantImageAdd)

product.variant.image.add

Add image to product

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productVariantImageAdd = new Api2CartOpenApi.ProductVariantImageAdd(); // ProductVariantImageAdd | 
apiInstance.productVariantImageAdd(productVariantImageAdd, (error, data, response) => {
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
 **productVariantImageAdd** | [**ProductVariantImageAdd**](ProductVariantImageAdd.md)|  | 

### Return type

[**ProductVariantImageAdd200Response**](ProductVariantImageAdd200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productVariantImageDelete

> AttributeDelete200Response productVariantImageDelete(productId, productVariantId, id, opts)

product.variant.image.delete

Delete  image to product

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productId = "10"; // String | Defines product id where the variant image should be deleted
let productVariantId = "45"; // String | Defines product's variants specified by variant id
let id = "10"; // String | Entity id
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.productVariantImageDelete(productId, productVariantId, id, opts, (error, data, response) => {
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
 **productId** | **String**| Defines product id where the variant image should be deleted | 
 **productVariantId** | **String**| Defines product&#39;s variants specified by variant id | 
 **id** | **String**| Entity id | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productVariantPriceAdd

> CartValidate200Response productVariantPriceAdd(productVariantPriceAdd)

product.variant.price.add

Add some prices to the product variant.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productVariantPriceAdd = new Api2CartOpenApi.ProductVariantPriceAdd(); // ProductVariantPriceAdd | 
apiInstance.productVariantPriceAdd(productVariantPriceAdd, (error, data, response) => {
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
 **productVariantPriceAdd** | [**ProductVariantPriceAdd**](ProductVariantPriceAdd.md)|  | 

### Return type

[**CartValidate200Response**](CartValidate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productVariantPriceDelete

> AttributeDelete200Response productVariantPriceDelete(id, productId, groupPrices, opts)

product.variant.price.delete

Delete some prices of the product variant.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let id = "10"; // String | Defines the variant where the price has to be deleted
let productId = "10"; // String | Product id
let groupPrices = "group_prices=6,8,9"; // String | Defines variants's group prices
let opts = {
  'storeId': "1" // String | Store Id
};
apiInstance.productVariantPriceDelete(id, productId, groupPrices, opts, (error, data, response) => {
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
 **id** | **String**| Defines the variant where the price has to be deleted | 
 **productId** | **String**| Product id | 
 **groupPrices** | **String**| Defines variants&#39;s group prices | 
 **storeId** | **String**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productVariantPriceUpdate

> AccountConfigUpdate200Response productVariantPriceUpdate(productVariantPriceUpdate)

product.variant.price.update

Update some prices of the product variant.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productVariantPriceUpdate = new Api2CartOpenApi.ProductVariantPriceUpdate(); // ProductVariantPriceUpdate | 
apiInstance.productVariantPriceUpdate(productVariantPriceUpdate, (error, data, response) => {
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
 **productVariantPriceUpdate** | [**ProductVariantPriceUpdate**](ProductVariantPriceUpdate.md)|  | 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productVariantUpdate

> AccountConfigUpdate200Response productVariantUpdate(productVariantUpdate)

product.variant.update

Update variant.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productVariantUpdate = new Api2CartOpenApi.ProductVariantUpdate(); // ProductVariantUpdate | 
apiInstance.productVariantUpdate(productVariantUpdate, (error, data, response) => {
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
 **productVariantUpdate** | [**ProductVariantUpdate**](ProductVariantUpdate.md)|  | 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productVariantUpdateBatch

> CategoryAddBatch200Response productVariantUpdateBatch(productVariantUpdateBatch)

product.variant.update.batch

Update products variants on the store.

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

let apiInstance = new Api2CartOpenApi.ProductApi();
let productVariantUpdateBatch = new Api2CartOpenApi.ProductVariantUpdateBatch(); // ProductVariantUpdateBatch | 
apiInstance.productVariantUpdateBatch(productVariantUpdateBatch, (error, data, response) => {
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
 **productVariantUpdateBatch** | [**ProductVariantUpdateBatch**](ProductVariantUpdateBatch.md)|  | 

### Return type

[**CategoryAddBatch200Response**](CategoryAddBatch200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

