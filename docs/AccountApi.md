# Api2CartOpenApi.AccountApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountCartAdd**](AccountApi.md#accountCartAdd) | **POST** /account.cart.add.json | account.cart.add
[**accountCartList**](AccountApi.md#accountCartList) | **GET** /account.cart.list.json | account.cart.list
[**accountConfigUpdate**](AccountApi.md#accountConfigUpdate) | **PUT** /account.config.update.json | account.config.update
[**accountFailedWebhooks**](AccountApi.md#accountFailedWebhooks) | **GET** /account.failed_webhooks.json | account.failed_webhooks
[**accountSupportedPlatforms**](AccountApi.md#accountSupportedPlatforms) | **GET** /account.supported_platforms.json | account.supported_platforms



## accountCartAdd

> AccountCartAdd200Response accountCartAdd(accountCartAdd)

account.cart.add

Use this method to automate the process of connecting stores to API2Cart. The list of parameters will vary depending on the platform. To get a list of parameters that are specific to a particular shopping platform, you need to execute the account.supported_platforms.json method.

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.AccountApi();
let accountCartAdd = new Api2CartOpenApi.AccountCartAdd(); // AccountCartAdd | 
apiInstance.accountCartAdd(accountCartAdd, (error, data, response) => {
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
 **accountCartAdd** | [**AccountCartAdd**](AccountCartAdd.md)|  | 

### Return type

[**AccountCartAdd200Response**](AccountCartAdd200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## accountCartList

> AccountCartList200Response accountCartList(opts)

account.cart.list

This method lets you get a list of online stores connected to your API2Cart account. You can get the number of API requests to each store if you specify a period using parameters (request_from_date, request_to_date). The total_calls field is displayed only if there are parameters (request_from_date, request_to_date).

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.AccountApi();
let opts = {
  'storeUrl': "http://mystore.com", // String | A web address of a store
  'storeKey': "ab37fc230bc5df63a5be1b11220949be", // String | Find store by store key
  'requestFromDate': "2010-07-29", // String | Retrieve entities from their creation date
  'requestToDate': "2100-08-29", // String | Retrieve entities to their creation date
  'params': "url,store_key", // String | Set this parameter in order to choose which entity fields you want to retrieve
  'exclude': "url,store_key" // String | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all
};
apiInstance.accountCartList(opts, (error, data, response) => {
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
 **storeUrl** | **String**| A web address of a store | [optional] 
 **storeKey** | **String**| Find store by store key | [optional] 
 **requestFromDate** | **String**| Retrieve entities from their creation date | [optional] 
 **requestToDate** | **String**| Retrieve entities to their creation date | [optional] 
 **params** | **String**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **String**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**AccountCartList200Response**](AccountCartList200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountConfigUpdate

> AccountConfigUpdate200Response accountConfigUpdate(opts)

account.config.update

Use this method to automate the change of credentials used to connect online stores. The list of supported parameters differs depending on the platform.

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

let apiInstance = new Api2CartOpenApi.AccountApi();
let opts = {
  'replaceParameters': true, // Boolean | Identifies if there is a necessity to replace parameters
  'newStoreUrl': "http://mystore.com", // String | The web address of the store you want to update to connect to API2Cart
  'newStoreKey': "b636495648de3086f6f57b1bd4be548f", // String | Update store key
  'bridgeUrl': "https://your-store.com/custom/bridge/path/bridge.php", // String | This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store)
  'storeRoot': "/home/www/stores/magento1922", // String | Absolute path to the store root directory (used with \"bridge_url\" parameter)
  'dbTablesPrefix': "oc_", // String | DB tables prefix
  'userAgent': "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0", // String | This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store's firewall may block specific values.
  '_3dcartPrivateKey': "7dba81f90bdbe25e7000e73214ca51b", // String | 3DCart Private Key
  '_3dcartAccessToken': "4Grr_ZCLNNoSUuhAjesKuchxo9SL", // String | 3DCart Token
  '_3dcartapiApiKey': "82cc921c6a5c67082cc921c6a5c6707e1d6e6862ba3201a", // String | 3DCart API Key
  'amazonSpClientId': "amzn1.application-oa2-client.11e000e1f47d4998aca3733716d3b5a4", // String | Amazon SP API app client id
  'amazonSpClientSecret': "2c987428209f235443221255bde064f4bdf8a65165a80f5d22760a83cb", // String | Amazon SP API app client secret
  'amazonSpRefreshToken': "Atzr|IwEBIPUI-bwRTdDgKNQ_g56C30wGqymtx30c9MdDC7Emwmojhs20k5BBG2hHtJiGZ_7OfG7khd1RuQr6KEst4qyWbo_eXi5S_T_VOxzJUuksG1cFOGFpFK-cnhReNzAeZIpZeJT7_ROy1csEFlQfC8FJS3bsbSkkbTz2ZcTN7_7ey0HVlhyfFizgROeSeOI24Wjs9l_KKzZW0jvi_oC2cxlIcyknnHLK6KMNz2rTXqQJWRtlK9xPJDdbcUa5STA8MQru91cxNBpSkZN_cq9OOELhbsIGKD75y7nZ3yJU4uHQC_9iBQQoFm0biKgi-kEQwOhwws8", // String | Amazon SP API OAuth refresh token
  'amazonSpAwsRegion': "us-east-1", // String | Amazon AWS Region
  'amazonSpApiEnvironment': "sandbox", // String | Amazon SP API environment
  'amazonSellerId': "13P636B2M1N4WR", // String | Amazon Seller ID (Merchant token)
  'aspdotnetstorefrontApiUser': "admin", // String | It's a AspDotNetStorefront account for which API is available
  'aspdotnetstorefrontApiPass': "f6471ef78f72b41849a8b8b67791b0b5", // String | AspDotNetStorefront API Password
  'bigcommerceapiAdminAccount': "admin", // String | It's a BigCommerce account for which API is enabled
  'bigcommerceapiApiPath': "http://mystore.bigcommerce.com/api/v1", // String | BigCommerce API URL
  'bigcommerceapiApiKey': "6b89704cd75738cb0f9f6468d5462aba", // String | Bigcommerce API Key
  'bigcommerceapiClientId': "p1r37bt131z86675nofv9xmhietoe4t", // String | Client ID of the requesting app
  'bigcommerceapiAccessToken': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Access token authorizing the app to access resources on behalf of a user
  'bigcommerceapiContext': "stores/etplnf8o8v", // String | API Path section unique to the store
  'bolApiKey': "51369628-feee-11ed-be56-0242ac120002", // String | Bol API Key
  'bolApiSecret': "8fGzEsbEP5z2MNZubmIil87m-sWzTkj?KDQKrmzmU!fA6aAUNMdKRp7LMWHwE!G37UMfnWByHBGSXJHkAG?QcuYTO2uklv4idIHwUMLHK!OO1yfRlWh!", // String | Bol API Secret
  'bolRetailerId': 145001, // Number | Bol Retailer ID
  'demandwareClientId': "b849eb85-v8b9-1dw8-9fe2-97e1d6ffc7b0", // String | Demandware client id
  'demandwareApiPassword': "testpassword", // String | Demandware api password
  'demandwareUserName': "admin", // String | Demandware user name
  'demandwareUserPassword': "12345", // String | Demandware user password
  'ebayClientId': "a9psel85v1wy5faeyjw03y0r", // String | Application ID (AppID).
  'ebayClientSecret': "gmz3iz45x2", // String | Shared Secret from eBay application
  'ebayRuname': "gmz3iz45x2", // String | The RuName value that eBay assigns to your application.
  'ebayAccessToken': "v^1.1#i ... AjRV4yNjA=", // String | Used to authenticate API requests.
  'ebayRefreshToken': "v^1.1#i ... rAewqVasdA=", // String | Used to renew the access token.
  'ebayEnvironment': "sandbox", // String | eBay environment
  'ebaySiteId': 101, // Number | eBay global ID
  'ecwidAcessToken': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Access token authorizing the app to access resources on behalf of a user
  'ecwidStoreId': "1", // String | Store Id
  'lazadaAppId': "112577", // String | Lazada App ID
  'lazadaAppSecret': "er33raICJ79Q5b0EsR9stmRnjE9XQ2WH", // String | Lazada App Secret
  'lazadaRefreshToken': "EAAPP06rM2n8BO4mZBuMPnu9zS0MaMbN7ue8aUkcxw4zewU337mVVb5br", // String | Lazada Refresh Token
  'lazadaRegion': "Malaysia", // String | Lazada API endpoint Region
  'etsyKeystring': "a9psel85v1wy5faeyjw03y0r", // String | Etsy keystring
  'etsySharedSecret': "gmz3iz45x2", // String | Etsy shared secret
  'etsyAccessToken': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Access token authorizing the app to access resources on behalf of a user
  'etsyTokenSecret': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Secret token authorizing the app to access resources on behalf of a user
  'etsyClientId': "w0fi0igk2w29bjcd7ydr2s35", // String | Etsy Client Id
  'etsyRefreshToken': "223577551.L07_RE-y7unmKf2dox4djsHkVxwpUfs1ikG_uQmHhF-aASEReNn_Qns1Wqn3dDa0ZMxrt9CIael3dgudeDZb31ZUdS", // String | Etsy Refresh token
  'facebookAppId': "6516912365277570", // String | Facebook App ID
  'facebookAppSecret': "737cf6bd2879cb6c7e5a8ff9cd63f3d46b0b5b7b", // String | Facebook App Secret
  'facebookAccessToken': "EAAPP06rM2n8BO4mZBuMPnu9zS0MaMbN7ue8aUAhqbS58clzJwyp1rYRMpP31QJGziqtYbKypdVx3Cs0RpuufoUeLsbfX195XIB8VTlkcxw4zewU337mVVb5br", // String | Facebook Access Token
  'facebookBusinessId': "294042786906655", // String | Facebook Business ID
  'netoApiKey': "bbca57d8ff3c3677128112c15556d9e3", // String | Neto API Key
  'netoApiUsername': "mylogin", // String | Neto User Name
  'shoplineAccessToken': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Shopline APP Key
  'shoplineAppKey': "737cf6bd2879cb6c7e5a8ff9cd63f3d46b0b5b7b", // String | Shopline APP Key
  'shoplineAppSecret': "1701d123bb5cc14cd2732dcaed90638316c0a09", // String | Shopline App Secret
  'shoplineSharedSecret': "1701d123bb5cc14cd2732dcaed90638316c0a09", // String | Shopline Shared Secret
  'shopifyAccessToken': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Access token authorizing the app to access resources on behalf of a user
  'shopifyApiKey': "bbca57d8ff3c3677128112c15556d9e3", // String | Shopify API Key
  'shopifyApiPassword': "860f3a6fc87632301a42cd88e4b5ab3d", // String | Shopify API Password
  'shopifySharedSecret': "gmz3iz45x2", // String | Shared secret
  'shoplazzaAccessToken': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Access token authorizing the app to access resources on behalf of a user
  'shoplazzaSharedSecret': "gmz3iz45x2", // String | Shared secret
  'mivaAccessToken': "227cbe434a1e358d72db0de993x9d9fd", // String | Miva access token
  'mivaSignature': "1hpkrebfdsObGTor/0Gk9XcNBUQohrxrw67Sg9AM9ps=", // String | Miva signature
  'shopwareAccessKey': "SWSCS3O1RJBSRNBYQLFIYJN2ZQ", // String | Shopware access key
  'shopwareApiKey': "SWSCS3O1RJBSRNBYQLFIYJN2ZQ", // String | Shopware api key
  'shopwareApiSecret': "V3NYNWg2b1dZdHBUWDN1cmdKdGhnenp5enVJYlJ0WlJvOFF2bnQ", // String | Shopware client secret access key
  'bigcartelUserName': "subdomain", // String | Subdomain of store
  'bigcartelPassword': "4GrrZCLNNoSUuhAjesKuchxo9SL", // String | BigCartel account password
  'volusionLogin': "admin", // String | It's a Volusion account for which API is enabled
  'volusionPassword': "7943CA5F3990E00D9A4CCF0BD998211F", // String | Volusion API Password
  'walmartClientId': "423f6A24-123z-8654-989u-6fa96478289", // String | Walmart client ID. For the region 'ca' use Consumer ID
  'walmartClientSecret': "1gf85fea-8974-2648-w12w-rt54284tdf54", // String | Walmart client secret. For the region 'ca' use Private Key
  'walmartEnvironment': "production", // String | Walmart environment
  'walmartChannelType': "0f3e4dd4-0514-4346-b39d-af0e00ea066d", // String | Walmart WM_CONSUMER.CHANNEL.TYPE header
  'walmartRegion': "us", // String | Walmart region
  'squareClientId': "sq0idp-qwer_1pvuTYe9cAf1lmxyQ", // String | Square (Weebly) Client ID
  'squareClientSecret': "c8d7077fce7b2b111111111898170695a01473a2ad", // String | Square (Weebly) Client Secret
  'squareRefreshToken': "EQAAlquVXMr6xIcPu7qPkIEAZ0thqChhQuowrvZIqOlwhOwhtmyh4ZRfesdRc434", // String | Square (Weebly) Refresh Token
  'squarespaceApiKey': "8f7849d5-1411-47f2-9722-aa81c2a48d95", // String | Squarespace API Key
  'squarespaceClientId': "9UGbUtS2V96BxRGmfOjsGAhTdsr9Vxxx", // String | Squarespace Connector Client ID
  'squarespaceClientSecret': "GPZkUFkIKWg0KLE6rajsFMMYA9ma0udaaq2bYwBDXXX=", // String | Squarespace Connector Client Secret
  'squarespaceAccessToken': "SWSCS3O1RJBSRNBYQLFIYJN2ZQ", // String | Squarespace access token
  'squarespaceRefreshToken': "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d", // String | Squarespace refresh token
  'hybrisClientId': "api_client_1", // String | Omni Commerce Connector Client ID
  'hybrisClientSecret': "secret_phrase_1", // String | Omni Commerce Connector Client Secret
  'hybrisUsername': "admin", // String | User Name
  'hybrisPassword': "nimda", // String | User password
  'hybrisWebsites': ["null"], // [String] | Websites to stores mapping data
  'lightspeedApiKey': "cf5444729c2abd6b6a5d983691767cb5", // String | LightSpeed api key
  'lightspeedApiSecret': "2620ee52a8bc942f9d5d3a575f4d363e", // String | LightSpeed api secret
  'commercehqApiKey': "sJrD-LM0eddhe63rfgfva0dDydXfre4", // String | CommerceHQ api key
  'commercehqApiPassword': "4Grr_ZCLNNoSUuhAjesKuchxo9SL", // String | CommerceHQ api password
  'wcConsumerKey': "ck_26d8e2ad604f3917e429df6961722282bdcf109d", // String | Woocommerce consumer key
  'wcConsumerSecret': "cs_931ced666118a15c5f7b4a33a15gf5589cbeba55", // String | Woocommerce consumer secret
  'magentoConsumerKey': "ktv4n9rgrj0evjuy2t6p2xlb1f8u5pmy", // String | Magento Consumer Key
  'magentoConsumerSecret': "a46abc3kxyinlbggy06i9g975xqo6gjq", // String | Magento Consumer Secret
  'magentoAccessToken': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Magento Access Token
  'magentoTokenSecret': "igse8e4rdmzkxdi937qe69d59en1imw", // String | Magento Token Secret
  'prestashopWebserviceKey': "CKJ1ZEWRJWRLTPVBQJ9FGGRORD4AGS96", // String | Prestashop webservice key
  'wixAppId': "6b0b5b7b-7d87-45b5-bf34-ac6b438e63da", // String | Wix App ID
  'wixAppSecretKey': "316c0a09-f195-42be-74f6-a02cebb9cae6", // String | Wix App Secret Key
  'wixInstanceId': "58b893a4-6b16-5c2f-qt78-qa3r61t32rt8", // String | Wix Instance ID
  'wixRefreshToken': "         OAUTH2.eyJraWQiOiJkZ0x3cjNRMCIsImFsZyI6IkhTMjU2In0.         eyJkYXRhIjoie1wiaWRcIjpcImJlZjM3MmRmLTUyNGItNDI3NS05M2RkL         Tg4NDBlOTU3ZWU2OFwifSIsImlhdCI6MTY0ODA0NTEyNiwiZXhwIjoxNzExMTE3MTI2fQ.         VRR2lGSbcTVmaArtmyyhy6o4WRDwTn-nlDCQpZ97eYw       ", // String | Wix refresh token
  'mercadoLibreAppId': "211188015100135", // String | Mercado Libre App ID
  'mercadoLibreAppSecretKey': "e2qoG2zklLlfP7cEngEJ94YjhkejkjAm", // String | Mercado Libre App Secret Key
  'mercadoLibreRefreshToken': "TG-63h13529vb5464110188d2x9-703754376", // String | Mercado Libre Refresh Token
  'zidClientId': 1234, // Number | Zid Client ID
  'zidClientSecret': "nl5l1lE0vxgv6cV111fHsdlOOIfb0Ms5IR7l4Igs", // String | Zid Client Secret
  'zidAccessToken': "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d", // String | Zid Access Token
  'zidAuthorization': "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d", // String | Zid Authorization
  'zidRefreshToken': "def50eyfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe657e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65d7e64a0cfe9fe65de64a0c865d", // String | Zid refresh token
  'flipkartClientId': "19414773883a13a850b6a52350b7246499a24", // String | Flipkart Client ID
  'flipkartClientSecret': "nl5l1lE0vxgv6cV111fHsdlOOIfb0Ms5IR7l4Igs", // String | Flipkart Client Secret
  'allegroClientId': "2915e189ce3d23d23d2327d204ae6a0bd", // String | Allegro Client ID
  'allegroClientSecret': "DNHtqdL2WPIefeUhQWYgtXPS23fgbfgasdsGHHJGhg3RTFDQWFGZmVoFRT5IfkQj1E7eR5", // String | Allegro Client Secret
  'allegroAccessToken': "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI", // String | Allegro Access Token
  'allegroRefreshToken': "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI", // String | Allegro Refresh Token
  'allegroEnvironment': "sandbox", // String | Allegro Environment
  'zohoClientId': "1000.FLCHGI2LS1111111TOR4OGB697W4IX", // String | Zoho Client ID
  'zohoClientSecret': "c8d7077fce7b2b111111111898170695a01473a2ad", // String | Zoho Client Secret
  'zohoRefreshToken': "1000.11111111111111111111111111111111.1b3ca6f054341a111118abf928beb33b", // String | Zoho Refresh Token
  'zohoRegion': "Europe", // String | Zoho API endpoint Region
  'tiendanubeUserId': 1234, // Number | Tiendanube User ID
  'tiendanubeAccessToken': "75bde7bb0b437475423e7e87c142c06052f80199", // String | Tiendanube Access Token
  'tiendanubeClientSecret': "5e3588f514a5ae0d0fa063d1b556531e25c83fa7e47472ed", // String | Tiendanube Client Secret
  'ottoClientId': "911a3dbf-d261-4763-cc81-052876465b55", // String | Otto Client ID
  'ottoClientSecret': "9887a82a-2879-421e-a6wc-54e986b3458c", // String | Otto Client Secret
  'ottoAppId': "6eaef6a3-822e-425b-8mc9-53750063e34d", // String | Otto App ID
  'ottoRefreshToken': "eyJhbGciOiJSUzI1NiIsInR5cCI6IsfddfdfdeyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI", // String | Otto Refresh Token
  'ottoEnvironment': "sandbox", // String | Otto Environment
  'ottoAccessToken': "eyJhbGciOiJS34535f45f54f5656deyJ1c2VyX25hbWUiOiI5NDUxMzE1MSIsInNjb3BlIjpbImFsbGVncm86YXBpOm9yZGVyczpyZWFkIiwiYWxsZWdybzphcGk6cHJvZmlsZTp3cml0ZSIsImFsbGVncm86YXBpOnNhbGU6b2ZmZXJzOndyaXRlIiwiYWxsZWdybzphcGk6YmlsbGluZzpyZWFkIiwiYWxsZWdybzphcGk6Y2FtcGFpZ25zIiwiYWxsZWdybzphcGk6ZGlzcHV0ZXMiLCJhbGxlZ3JvOmFwaTpzYWxlOm9mZmVyczpyZWFkIiwiYWxsZWdybzphcGk6YmlkcyIsImFsbGVncm86YXBpOm9yZGVyczp3cml0ZSIsImFsbGVncm86YXBpOnBheW1lbnRzOndyaXRlIiwiYWxsZWdybzphcGk6c2FsZTpzZXR0aW5nczp3cml0ZSIsImFsbGVncm86YXBpOnByb2ZpbGU6cmVhZCIsImFsbGVncm86YXBpOnJhdGluZ3MiLCJhbGxlZ3JvOmFwaTpzYWxlOnNldHRpbmdzOnJlYWQiLCJhbGxlZ3JvOmFwaTpwYXltZW50czpyZWFkIiwiYWxsZWdybzphcGk6bWVzc2FnaW5nIl0sI", // String | Otto Access Token
  'tiktokshopAppKey': "6arbhkzno8nbv", // String | TikTok Shop App Key
  'tiktokshopAppSecret': "d95820a05a0cd54fb394fcd26fgat63999b183bc", // String | TikTok Shop App Secret
  'tiktokshopRefreshToken': "TTP_NTUxZTNhYTQ2ZDk2YmRmZWNmYWY2YWY12345NGYwNjQ3YjkzYTllYjA0YmNlMw", // String | TikTok Shop Refresh Token
  'tiktokshopAccessToken': "TTP_Fw8r12345kW03FYd09DG-9INtpw361hWthei12345iPJ5AUv99fLSCYD9-Uu12345TgNRzKZxi5-tfFMtdWqglEt5_iCk", // String | TikTok Shop Access Token
  'sallaClientId': "1bxxxcf9-5xx4-xxx-bxxf-929b8xxxxe11", // String | Salla Client ID
  'sallaClientSecret': "8x88axxxc25e1fxxxa1c06fxxx150xx5", // String | Salla Client Secret
  'sallaRefreshToken': "oxy_rt_zxxxxiY2xxZWWxxxxlU-tROxxxxx2JzS2fwzxxxxxkU.p3xxxkCIyFexxxxP50WwZYfhw5_wg1xxxxV5F-8xxXc", // String | Salla Refresh Token
  'sallaAccessToken': "oxy_rt_zxxxxiY2xxZWWxxxxlU-tROxxxxx2JzS2fwzxxxxxkU.p3xxxkCIyFexxxxP50WwZYfhw5_wg1xxxxV5F-8xxXc" // String | Salla Access Token
};
apiInstance.accountConfigUpdate(opts, (error, data, response) => {
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
 **replaceParameters** | **Boolean**| Identifies if there is a necessity to replace parameters | [optional] 
 **newStoreUrl** | **String**| The web address of the store you want to update to connect to API2Cart | [optional] 
 **newStoreKey** | **String**| Update store key | [optional] 
 **bridgeUrl** | **String**| This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) | [optional] 
 **storeRoot** | **String**| Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter) | [optional] 
 **dbTablesPrefix** | **String**| DB tables prefix | [optional] 
 **userAgent** | **String**| This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store&#39;s firewall may block specific values. | [optional] 
 **_3dcartPrivateKey** | **String**| 3DCart Private Key | [optional] 
 **_3dcartAccessToken** | **String**| 3DCart Token | [optional] 
 **_3dcartapiApiKey** | **String**| 3DCart API Key | [optional] 
 **amazonSpClientId** | **String**| Amazon SP API app client id | [optional] 
 **amazonSpClientSecret** | **String**| Amazon SP API app client secret | [optional] 
 **amazonSpRefreshToken** | **String**| Amazon SP API OAuth refresh token | [optional] 
 **amazonSpAwsRegion** | **String**| Amazon AWS Region | [optional] 
 **amazonSpApiEnvironment** | **String**| Amazon SP API environment | [optional] [default to &#39;production&#39;]
 **amazonSellerId** | **String**| Amazon Seller ID (Merchant token) | [optional] 
 **aspdotnetstorefrontApiUser** | **String**| It&#39;s a AspDotNetStorefront account for which API is available | [optional] 
 **aspdotnetstorefrontApiPass** | **String**| AspDotNetStorefront API Password | [optional] 
 **bigcommerceapiAdminAccount** | **String**| It&#39;s a BigCommerce account for which API is enabled | [optional] 
 **bigcommerceapiApiPath** | **String**| BigCommerce API URL | [optional] 
 **bigcommerceapiApiKey** | **String**| Bigcommerce API Key | [optional] 
 **bigcommerceapiClientId** | **String**| Client ID of the requesting app | [optional] 
 **bigcommerceapiAccessToken** | **String**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **bigcommerceapiContext** | **String**| API Path section unique to the store | [optional] 
 **bolApiKey** | **String**| Bol API Key | [optional] 
 **bolApiSecret** | **String**| Bol API Secret | [optional] 
 **bolRetailerId** | **Number**| Bol Retailer ID | [optional] 
 **demandwareClientId** | **String**| Demandware client id | [optional] 
 **demandwareApiPassword** | **String**| Demandware api password | [optional] 
 **demandwareUserName** | **String**| Demandware user name | [optional] 
 **demandwareUserPassword** | **String**| Demandware user password | [optional] 
 **ebayClientId** | **String**| Application ID (AppID). | [optional] 
 **ebayClientSecret** | **String**| Shared Secret from eBay application | [optional] 
 **ebayRuname** | **String**| The RuName value that eBay assigns to your application. | [optional] 
 **ebayAccessToken** | **String**| Used to authenticate API requests. | [optional] 
 **ebayRefreshToken** | **String**| Used to renew the access token. | [optional] 
 **ebayEnvironment** | **String**| eBay environment | [optional] 
 **ebaySiteId** | **Number**| eBay global ID | [optional] [default to 0]
 **ecwidAcessToken** | **String**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **ecwidStoreId** | **String**| Store Id | [optional] 
 **lazadaAppId** | **String**| Lazada App ID | [optional] 
 **lazadaAppSecret** | **String**| Lazada App Secret | [optional] 
 **lazadaRefreshToken** | **String**| Lazada Refresh Token | [optional] 
 **lazadaRegion** | **String**| Lazada API endpoint Region | [optional] 
 **etsyKeystring** | **String**| Etsy keystring | [optional] 
 **etsySharedSecret** | **String**| Etsy shared secret | [optional] 
 **etsyAccessToken** | **String**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **etsyTokenSecret** | **String**| Secret token authorizing the app to access resources on behalf of a user | [optional] 
 **etsyClientId** | **String**| Etsy Client Id | [optional] 
 **etsyRefreshToken** | **String**| Etsy Refresh token | [optional] 
 **facebookAppId** | **String**| Facebook App ID | [optional] 
 **facebookAppSecret** | **String**| Facebook App Secret | [optional] 
 **facebookAccessToken** | **String**| Facebook Access Token | [optional] 
 **facebookBusinessId** | **String**| Facebook Business ID | [optional] 
 **netoApiKey** | **String**| Neto API Key | [optional] 
 **netoApiUsername** | **String**| Neto User Name | [optional] 
 **shoplineAccessToken** | **String**| Shopline APP Key | [optional] 
 **shoplineAppKey** | **String**| Shopline APP Key | [optional] 
 **shoplineAppSecret** | **String**| Shopline App Secret | [optional] 
 **shoplineSharedSecret** | **String**| Shopline Shared Secret | [optional] 
 **shopifyAccessToken** | **String**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **shopifyApiKey** | **String**| Shopify API Key | [optional] 
 **shopifyApiPassword** | **String**| Shopify API Password | [optional] 
 **shopifySharedSecret** | **String**| Shared secret | [optional] 
 **shoplazzaAccessToken** | **String**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **shoplazzaSharedSecret** | **String**| Shared secret | [optional] 
 **mivaAccessToken** | **String**| Miva access token | [optional] 
 **mivaSignature** | **String**| Miva signature | [optional] 
 **shopwareAccessKey** | **String**| Shopware access key | [optional] 
 **shopwareApiKey** | **String**| Shopware api key | [optional] 
 **shopwareApiSecret** | **String**| Shopware client secret access key | [optional] 
 **bigcartelUserName** | **String**| Subdomain of store | [optional] 
 **bigcartelPassword** | **String**| BigCartel account password | [optional] 
 **volusionLogin** | **String**| It&#39;s a Volusion account for which API is enabled | [optional] 
 **volusionPassword** | **String**| Volusion API Password | [optional] 
 **walmartClientId** | **String**| Walmart client ID. For the region &#39;ca&#39; use Consumer ID | [optional] 
 **walmartClientSecret** | **String**| Walmart client secret. For the region &#39;ca&#39; use Private Key | [optional] 
 **walmartEnvironment** | **String**| Walmart environment | [optional] [default to &#39;production&#39;]
 **walmartChannelType** | **String**| Walmart WM_CONSUMER.CHANNEL.TYPE header | [optional] 
 **walmartRegion** | **String**| Walmart region | [optional] [default to &#39;us&#39;]
 **squareClientId** | **String**| Square (Weebly) Client ID | [optional] 
 **squareClientSecret** | **String**| Square (Weebly) Client Secret | [optional] 
 **squareRefreshToken** | **String**| Square (Weebly) Refresh Token | [optional] 
 **squarespaceApiKey** | **String**| Squarespace API Key | [optional] 
 **squarespaceClientId** | **String**| Squarespace Connector Client ID | [optional] 
 **squarespaceClientSecret** | **String**| Squarespace Connector Client Secret | [optional] 
 **squarespaceAccessToken** | **String**| Squarespace access token | [optional] 
 **squarespaceRefreshToken** | **String**| Squarespace refresh token | [optional] 
 **hybrisClientId** | **String**| Omni Commerce Connector Client ID | [optional] 
 **hybrisClientSecret** | **String**| Omni Commerce Connector Client Secret | [optional] 
 **hybrisUsername** | **String**| User Name | [optional] 
 **hybrisPassword** | **String**| User password | [optional] 
 **hybrisWebsites** | [**[String]**](String.md)| Websites to stores mapping data | [optional] 
 **lightspeedApiKey** | **String**| LightSpeed api key | [optional] 
 **lightspeedApiSecret** | **String**| LightSpeed api secret | [optional] 
 **commercehqApiKey** | **String**| CommerceHQ api key | [optional] 
 **commercehqApiPassword** | **String**| CommerceHQ api password | [optional] 
 **wcConsumerKey** | **String**| Woocommerce consumer key | [optional] 
 **wcConsumerSecret** | **String**| Woocommerce consumer secret | [optional] 
 **magentoConsumerKey** | **String**| Magento Consumer Key | [optional] 
 **magentoConsumerSecret** | **String**| Magento Consumer Secret | [optional] 
 **magentoAccessToken** | **String**| Magento Access Token | [optional] 
 **magentoTokenSecret** | **String**| Magento Token Secret | [optional] 
 **prestashopWebserviceKey** | **String**| Prestashop webservice key | [optional] 
 **wixAppId** | **String**| Wix App ID | [optional] 
 **wixAppSecretKey** | **String**| Wix App Secret Key | [optional] 
 **wixInstanceId** | **String**| Wix Instance ID | [optional] 
 **wixRefreshToken** | **String**| Wix refresh token | [optional] 
 **mercadoLibreAppId** | **String**| Mercado Libre App ID | [optional] 
 **mercadoLibreAppSecretKey** | **String**| Mercado Libre App Secret Key | [optional] 
 **mercadoLibreRefreshToken** | **String**| Mercado Libre Refresh Token | [optional] 
 **zidClientId** | **Number**| Zid Client ID | [optional] 
 **zidClientSecret** | **String**| Zid Client Secret | [optional] 
 **zidAccessToken** | **String**| Zid Access Token | [optional] 
 **zidAuthorization** | **String**| Zid Authorization | [optional] 
 **zidRefreshToken** | **String**| Zid refresh token | [optional] 
 **flipkartClientId** | **String**| Flipkart Client ID | [optional] 
 **flipkartClientSecret** | **String**| Flipkart Client Secret | [optional] 
 **allegroClientId** | **String**| Allegro Client ID | [optional] 
 **allegroClientSecret** | **String**| Allegro Client Secret | [optional] 
 **allegroAccessToken** | **String**| Allegro Access Token | [optional] 
 **allegroRefreshToken** | **String**| Allegro Refresh Token | [optional] 
 **allegroEnvironment** | **String**| Allegro Environment | [optional] [default to &#39;production&#39;]
 **zohoClientId** | **String**| Zoho Client ID | [optional] 
 **zohoClientSecret** | **String**| Zoho Client Secret | [optional] 
 **zohoRefreshToken** | **String**| Zoho Refresh Token | [optional] 
 **zohoRegion** | **String**| Zoho API endpoint Region | [optional] 
 **tiendanubeUserId** | **Number**| Tiendanube User ID | [optional] 
 **tiendanubeAccessToken** | **String**| Tiendanube Access Token | [optional] 
 **tiendanubeClientSecret** | **String**| Tiendanube Client Secret | [optional] 
 **ottoClientId** | **String**| Otto Client ID | [optional] 
 **ottoClientSecret** | **String**| Otto Client Secret | [optional] 
 **ottoAppId** | **String**| Otto App ID | [optional] 
 **ottoRefreshToken** | **String**| Otto Refresh Token | [optional] 
 **ottoEnvironment** | **String**| Otto Environment | [optional] 
 **ottoAccessToken** | **String**| Otto Access Token | [optional] 
 **tiktokshopAppKey** | **String**| TikTok Shop App Key | [optional] 
 **tiktokshopAppSecret** | **String**| TikTok Shop App Secret | [optional] 
 **tiktokshopRefreshToken** | **String**| TikTok Shop Refresh Token | [optional] 
 **tiktokshopAccessToken** | **String**| TikTok Shop Access Token | [optional] 
 **sallaClientId** | **String**| Salla Client ID | [optional] 
 **sallaClientSecret** | **String**| Salla Client Secret | [optional] 
 **sallaRefreshToken** | **String**| Salla Refresh Token | [optional] 
 **sallaAccessToken** | **String**| Salla Access Token | [optional] 

### Return type

[**AccountConfigUpdate200Response**](AccountConfigUpdate200Response.md)

### Authorization

[StoreKeyAuth](../README.md#StoreKeyAuth), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountFailedWebhooks

> AccountFailedWebhooks200Response accountFailedWebhooks(opts)

account.failed_webhooks

If the callback of your service for some reason could not accept webhooks from API2Cart, then with the help of this method you can get a list of missed webhooks to perform synchronization again using entity_id. Please note that we keep such records for 24 hours.

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.AccountApi();
let opts = {
  'start': 0, // Number | This parameter sets the number from which you want to get entities
  'count': 20, // Number | This parameter sets the entity amount that has to be retrieved. Max allowed count=250
  'ids': "3,14,25" // String | List of сomma-separated webhook ids
};
apiInstance.accountFailedWebhooks(opts, (error, data, response) => {
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
 **ids** | **String**| List of сomma-separated webhook ids | [optional] 

### Return type

[**AccountFailedWebhooks200Response**](AccountFailedWebhooks200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountSupportedPlatforms

> AccountSupportedPlatforms200Response accountSupportedPlatforms()

account.supported_platforms

Use this method to retrieve a list of supported platforms and the sets of parameters required for connecting to each of them. Note: some platforms may have multiple connection methods so that the response will contain multiple sets of parameters.

### Example

```javascript
import Api2CartOpenApi from 'api2_cart_open_api';
let defaultClient = Api2CartOpenApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Api2CartOpenApi.AccountApi();
apiInstance.accountSupportedPlatforms((error, data, response) => {
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

[**AccountSupportedPlatforms200Response**](AccountSupportedPlatforms200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

