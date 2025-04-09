# Api2CartOpenApi.MarketplaceApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplaceProductFind**](MarketplaceApi.md#marketplaceProductFind) | **GET** /marketplace.product.find.json | marketplace.product.find



## marketplaceProductFind

> ModelResponseMarketplaceProductFind marketplaceProductFind(opts)

marketplace.product.find

Search product in global catalog.

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

let apiInstance = new Api2CartOpenApi.MarketplaceApi();
let opts = {
  'storeId': "1", // String | Store Id
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'pageCursor': "", // String | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter)
  'categoriesIds': "23,56", // String | Defines product add that is specified by comma-separated categories id
  'keyword': "T-shirt", // String | Defines search keyword
  'asin': "97703178470", // String | Amazon Standard Identification Number.
  'ean': "5901234123457", // String | European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.
  'gtin': "12345678912345", // String | Global Trade Item Number. An GTIN is an identifier for trade items.
  'upc': "9770317847001", // String | Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.
  'mpn': "9770317847001", // String | Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.
  'isbn': "9783161484100", // String | International Standard Book Number. An ISBN is a unique identifier for books.
  'params': "id,model,price,images", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "false", // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
  'responseFields': "{result}" // String | Set this parameter in order to choose which entity fields you want to retrieve
};
apiInstance.marketplaceProductFind(opts, (error, data, response) => {
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
 **count** | **Number**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **pageCursor** | **String**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **categoriesIds** | **String**| Defines product add that is specified by comma-separated categories id | [optional] 
 **keyword** | **String**| Defines search keyword | [optional] 
 **asin** | **String**| Amazon Standard Identification Number. | [optional] 
 **ean** | **String**| European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products. | [optional] 
 **gtin** | **String**| Global Trade Item Number. An GTIN is an identifier for trade items. | [optional] 
 **upc** | **String**| Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products. | [optional] 
 **mpn** | **String**| Manufacturer Part Number. A MPN is an identifier of a particular part design or material used. | [optional] 
 **isbn** | **String**| International Standard Book Number. An ISBN is a unique identifier for books. | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **responseFields** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**ModelResponseMarketplaceProductFind**](ModelResponseMarketplaceProductFind.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

