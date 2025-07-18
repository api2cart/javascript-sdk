# Api2CartOpenApi.CartCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cartId** | **String** | Store’s identifier which you can get from cart_list method | 
**storeUrl** | **String** | A web address of a store that you would like to connect to API2Cart | [optional] 
**bridgeUrl** | **String** | This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) | [optional] 
**storeRoot** | **String** | Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter) | [optional] 
**storeKey** | **String** | Set this parameter if bridge is already uploaded to store | [optional] 
**sharedSecret** | **String** | Shared secret | [optional] 
**validateVersion** | **Boolean** | Specify if api2cart should validate cart version | [optional] [default to false]
**verify** | **Boolean** | Enables or disables cart&#39;s verification | [optional] [default to true]
**dbTablesPrefix** | **String** | DB tables prefix | [optional] 
**userAgent** | **String** | This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store&#39;s firewall may block specific values. | [optional] 
**ftpHost** | **String** | FTP connection host | [optional] 
**ftpUser** | **String** | FTP User | [optional] 
**ftpPassword** | **String** | FTP Password | [optional] 
**ftpPort** | **Number** | FTP Port | [optional] 
**ftpStoreDir** | **String** | FTP Store dir | [optional] 
**apiKey3dcart** | **String** | 3DCart API Key | [optional] 
**adminAccount** | **String** | It&#39;s a BigCommerce account for which API is enabled | [optional] 
**apiPath** | **String** | BigCommerce API URL | [optional] 
**apiKeyBigcommerce** | **String** | Bigcommerce API Key | [optional] 
**clientId** | **String** | Client ID of the requesting app | [optional] 
**accessToken** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**context** | **String** | API Path section unique to the store | [optional] 
**accessToken** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**apiKeyShopify** | **String** | Shopify API Key | [optional] 
**apiPassword** | **String** | Shopify API Password | [optional] 
**accessTokenShopify** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**apiKey** | **String** | Neto API Key | [optional] 
**apiUsername** | **String** | Neto User Name | [optional] 
**encryptedPassword** | **String** | Volusion API Password | [optional] 
**login** | **String** | It&#39;s a Volusion account for which API is enabled | [optional] 
**apiUserAdnsf** | **String** | It&#39;s a AspDotNetStorefront account for which API is available | [optional] 
**apiPass** | **String** | AspDotNetStorefront API Password | [optional] 
**privateKey** | **String** | 3DCart Application Private Key | [optional] 
**appToken** | **String** | 3DCart Token from Application | [optional] 
**etsyKeystring** | **String** | Etsy keystring | [optional] 
**etsySharedSecret** | **String** | Etsy shared secret | [optional] 
**tokenSecret** | **String** | Secret token authorizing the app to access resources on behalf of a user | [optional] 
**etsyClientId** | **String** | Etsy Client Id | [optional] 
**etsyRefreshToken** | **String** | Etsy Refresh token | [optional] 
**ebayClientId** | **String** | Application ID (AppID). | [optional] 
**ebayClientSecret** | **String** | Shared Secret from eBay application | [optional] 
**ebayRuname** | **String** | The RuName value that eBay assigns to your application. | [optional] 
**ebayAccessToken** | **String** | Used to authenticate API requests. | [optional] 
**ebayRefreshToken** | **String** | Used to renew the access token. | [optional] 
**ebayEnvironment** | **String** | eBay environment | [optional] [default to &#39;production&#39;]
**ebaySiteId** | **Number** | eBay global ID | [optional] [default to 0]
**dwClientId** | **String** | Demandware client id | [optional] 
**dwApiPass** | **String** | Demandware api password | [optional] 
**demandwareUserName** | **String** | Demandware user name | [optional] 
**demandwareUserPassword** | **String** | Demandware user password | [optional] 
**storeId** | **String** | Store Id | 
**sellerId** | **String** | Seller Id | [optional] 
**environment** | **String** |  | [optional] [default to &#39;production&#39;]
**hybrisClientId** | **String** | Omni Commerce Connector Client ID | [optional] 
**hybrisClientSecret** | **String** | Omni Commerce Connector Client Secret | [optional] 
**hybrisUsername** | **String** | User Name | [optional] 
**hybrisPassword** | **String** | User password | [optional] 
**hybrisWebsites** | [**[AccountCartAddHybrisWebsitesInner]**](AccountCartAddHybrisWebsitesInner.md) | Websites to stores mapping data | [optional] 
**walmartClientId** | **String** | Walmart client ID. For the region &#39;ca&#39; use Consumer ID | [optional] 
**walmartClientSecret** | **String** | Walmart client secret. For the region &#39;ca&#39; use Private Key | [optional] 
**walmartEnvironment** | **String** | Walmart environment | [optional] [default to &#39;production&#39;]
**walmartChannelType** | **String** | Walmart WM_CONSUMER.CHANNEL.TYPE header | [optional] 
**walmartRegion** | **String** | Walmart region | [optional] [default to &#39;us&#39;]
**lightspeedApiKey** | **String** | LightSpeed api key | [optional] 
**lightspeedApiSecret** | **String** | LightSpeed api secret | [optional] 
**shoplazzaAccessToken** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**shoplazzaSharedSecret** | **String** | Shared secret | [optional] 
**shopwareAccessKey** | **String** | Shopware access key | [optional] 
**shopwareApiKey** | **String** | Shopware api key | [optional] 
**shopwareApiSecret** | **String** | Shopware client secret access key | [optional] 
**commercehqApiKey** | **String** | CommerceHQ api key | [optional] 
**commercehqApiPassword** | **String** | CommerceHQ api password | [optional] 
**_3dcartPrivateKey** | **String** | 3DCart Private Key | [optional] 
**_3dcartAccessToken** | **String** | 3DCart Token | [optional] 
**wcConsumerKey** | **String** | Woocommerce consumer key | [optional] 
**wcConsumerSecret** | **String** | Woocommerce consumer secret | [optional] 
**magentoConsumerKey** | **String** | Magento Consumer Key | [optional] 
**magentoConsumerSecret** | **String** | Magento Consumer Secret | [optional] 
**magentoAccessToken** | **String** | Magento Access Token | [optional] 
**magentoTokenSecret** | **String** | Magento Token Secret | [optional] 
**prestashopWebserviceKey** | **String** | Prestashop webservice key | [optional] 
**wixAppId** | **String** | Wix App ID | 
**wixAppSecretKey** | **String** | Wix App Secret Key | 
**wixInstanceId** | **String** | Wix Instance ID | [optional] 
**wixRefreshToken** | **String** | Wix refresh token | [optional] 
**mercadoLibreAppId** | **String** | Mercado Libre App ID | [optional] 
**mercadoLibreAppSecretKey** | **String** | Mercado Libre App Secret Key | [optional] 
**mercadoLibreRefreshToken** | **String** | Mercado Libre Refresh Token | [optional] 
**zidClientId** | **Number** | Zid Client ID | [optional] 
**zidClientSecret** | **String** | Zid Client Secret | [optional] 
**zidAccessToken** | **String** | Zid Access Token | [optional] 
**zidAuthorization** | **String** | Zid Authorization | [optional] 
**zidRefreshToken** | **String** | Zid refresh token | [optional] 
**flipkartClientId** | **String** | Flipkart Client ID | [optional] 
**flipkartClientSecret** | **String** | Flipkart Client Secret | [optional] 
**allegroClientId** | **String** | Allegro Client ID | [optional] 
**allegroClientSecret** | **String** | Allegro Client Secret | [optional] 
**allegroAccessToken** | **String** | Allegro Access Token | [optional] 
**allegroRefreshToken** | **String** | Allegro Refresh Token | [optional] 
**allegroEnvironment** | **String** | Allegro Environment | [optional] [default to &#39;production&#39;]



## Enum: CartIdEnum


* `3DCart` (value: `"3DCart"`)

* `3DCartApi` (value: `"3DCartApi"`)

* `AceShop` (value: `"AceShop"`)

* `AmazonSP` (value: `"AmazonSP"`)

* `AspDotNetStorefront` (value: `"AspDotNetStorefront"`)

* `BigCartel` (value: `"BigCartel"`)

* `BigcommerceApi` (value: `"BigcommerceApi"`)

* `Bol` (value: `"Bol"`)

* `CommerceHQ` (value: `"CommerceHQ"`)

* `Creloaded` (value: `"Creloaded"`)

* `Cscart` (value: `"Cscart"`)

* `Cubecart` (value: `"Cubecart"`)

* `Demandware` (value: `"Demandware"`)

* `EBay` (value: `"EBay"`)

* `Ecwid` (value: `"Ecwid"`)

* `EtsyAPIv3` (value: `"EtsyAPIv3"`)

* `Flipkart` (value: `"Flipkart"`)

* `Gambio` (value: `"Gambio"`)

* `Hybris` (value: `"Hybris"`)

* `JooCart` (value: `"JooCart"`)

* `Lazada` (value: `"Lazada"`)

* `LightSpeed` (value: `"LightSpeed"`)

* `Magento1212` (value: `"Magento1212"`)

* `Magento2Api` (value: `"Magento2Api"`)

* `MercadoLibre` (value: `"MercadoLibre"`)

* `MijoShop` (value: `"MijoShop"`)

* `Miva` (value: `"Miva"`)

* `Neto` (value: `"Neto"`)

* `Opencart14` (value: `"Opencart14"`)

* `Oscmax2` (value: `"Oscmax2"`)

* `Oscommerce22ms2` (value: `"Oscommerce22ms2"`)

* `Otto` (value: `"Otto"`)

* `Oxid` (value: `"Oxid"`)

* `Pinnacle` (value: `"Pinnacle"`)

* `Prestashop` (value: `"Prestashop"`)

* `PrestashopApi` (value: `"PrestashopApi"`)

* `SSPremium` (value: `"SSPremium"`)

* `Salla` (value: `"Salla"`)

* `Shopify` (value: `"Shopify"`)

* `Shopee` (value: `"Shopee"`)

* `Shoplazza` (value: `"Shoplazza"`)

* `Shopline` (value: `"Shopline"`)

* `Shopware` (value: `"Shopware"`)

* `ShopwareApi` (value: `"ShopwareApi"`)

* `Square` (value: `"Square"`)

* `Squarespace` (value: `"Squarespace"`)

* `Temu` (value: `"Temu"`)

* `Tiendanube` (value: `"Tiendanube"`)

* `TikTokShop` (value: `"TikTokShop"`)

* `Tomatocart` (value: `"Tomatocart"`)

* `Ubercart` (value: `"Ubercart"`)

* `Virtuemart` (value: `"Virtuemart"`)

* `Volusion` (value: `"Volusion"`)

* `WPecommerce` (value: `"WPecommerce"`)

* `Walmart` (value: `"Walmart"`)

* `WebAsyst` (value: `"WebAsyst"`)

* `Wix` (value: `"Wix"`)

* `Woocommerce` (value: `"Woocommerce"`)

* `WoocommerceApi` (value: `"WoocommerceApi"`)

* `Xcart` (value: `"Xcart"`)

* `Xtcommerce` (value: `"Xtcommerce"`)

* `XtcommerceVeyton` (value: `"XtcommerceVeyton"`)

* `Zencart137` (value: `"Zencart137"`)

* `Zid` (value: `"Zid"`)

* `Zoey` (value: `"Zoey"`)

* `Zoho` (value: `"Zoho"`)




