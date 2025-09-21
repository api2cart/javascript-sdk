# Api2CartOpenApi.AccountCartAdd

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cartId** | **String** | Store’s identifier which you can get from cart_list method | 
**storeUrl** | **String** | A web address of a store that you would like to connect to API2Cart | [optional] 
**bridgeUrl** | **String** | This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) | [optional] 
**storeRoot** | **String** | Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter) | [optional] 
**storeKey** | **String** | Set this parameter if bridge is already uploaded to store | [optional] 
**validateVersion** | **Boolean** | Specify if api2cart should validate cart version | [optional] [default to false]
**verify** | **Boolean** | Enables or disables cart&#39;s verification | [optional] [default to true]
**dbTablesPrefix** | **String** | DB tables prefix | [optional] 
**userAgent** | **String** | This parameter allows you to set your custom user agent, which will be used in requests to the store. Please use it cautiously, as the store&#39;s firewall may block specific values. | [optional] 
**ftpHost** | **String** | FTP connection host | [optional] 
**ftpUser** | **String** | FTP User | [optional] 
**ftpPassword** | **String** | FTP Password | [optional] 
**ftpPort** | **Number** | FTP Port | [optional] 
**ftpStoreDir** | **String** | FTP Store dir | [optional] 
**_3dcartPrivateKey** | **String** | 3DCart Private Key | [optional] 
**_3dcartAccessToken** | **String** | 3DCart Token | [optional] 
**_3dcartapiApiKey** | **String** | 3DCart API Key | [optional] 
**amazonSpClientId** | **String** | Amazon SP API app client id | [optional] 
**amazonSpClientSecret** | **String** | Amazon SP API app client secret | [optional] 
**amazonSpRefreshToken** | **String** | Amazon SP API OAuth refresh token | [optional] 
**amazonSpAwsRegion** | **String** | Amazon AWS Region | [optional] 
**amazonSpApiEnvironment** | **String** | Amazon SP API environment | [optional] [default to &#39;production&#39;]
**amazonSellerId** | **String** | Amazon Seller ID (Merchant token) | [optional] 
**aspdotnetstorefrontApiUser** | **String** | It&#39;s a AspDotNetStorefront account for which API is available | [optional] 
**aspdotnetstorefrontApiPass** | **String** | AspDotNetStorefront API Password | [optional] 
**bigcommerceapiAdminAccount** | **String** | It&#39;s a BigCommerce account for which API is enabled | [optional] 
**bigcommerceapiApiPath** | **String** | BigCommerce API URL | [optional] 
**bigcommerceapiApiKey** | **String** | Bigcommerce API Key | [optional] 
**bigcommerceapiClientId** | **String** | Client ID of the requesting app | [optional] 
**bigcommerceapiAccessToken** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**bigcommerceapiContext** | **String** | API Path section unique to the store | [optional] 
**bolApiKey** | **String** | Bol API Key | [optional] 
**bolApiSecret** | **String** | Bol API Secret | [optional] 
**bolRetailerId** | **Number** | Bol Retailer ID | [optional] 
**bigcartelUserName** | **String** | Subdomain of store | [optional] 
**bigcartelPassword** | **String** | BigCartel account password | [optional] 
**bricklinkConsumerKey** | **String** | Bricklink Consumer Key | [optional] 
**bricklinkConsumerSecret** | **String** | Bricklink Consumer Secret | [optional] 
**bricklinkToken** | **String** | Bricklink Access Token | [optional] 
**bricklinkTokenSecret** | **String** | Bricklink Access Token Secret | [optional] 
**demandwareClientId** | **String** | Demandware client id | [optional] 
**demandwareApiPassword** | **String** | Demandware api password | [optional] 
**demandwareUserName** | **String** | Demandware user name | [optional] 
**demandwareUserPassword** | **String** | Demandware user password | [optional] 
**ebayClientId** | **String** | Application ID (AppID). | [optional] 
**ebayClientSecret** | **String** | Shared Secret from eBay application | [optional] 
**ebayRuname** | **String** | The RuName value that eBay assigns to your application. | [optional] 
**ebayAccessToken** | **String** | Used to authenticate API requests. | [optional] 
**ebayRefreshToken** | **String** | Used to renew the access token. | [optional] 
**ebayEnvironment** | **String** | eBay environment | [optional] [default to &#39;production&#39;]
**ebaySiteId** | **Number** | eBay global ID | [optional] [default to 0]
**walmartClientId** | **String** | Walmart client ID. For the region &#39;ca&#39; use Consumer ID | [optional] 
**walmartClientSecret** | **String** | Walmart client secret. For the region &#39;ca&#39; use Private Key | [optional] 
**walmartEnvironment** | **String** | Walmart environment | [optional] [default to &#39;production&#39;]
**walmartChannelType** | **String** | Walmart WM_CONSUMER.CHANNEL.TYPE header | [optional] 
**walmartRegion** | **String** | Walmart region | [optional] [default to &#39;us&#39;]
**ecwidAcessToken** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**ecwidStoreId** | **String** | Store Id | [optional] 
**lazadaAppId** | **String** | Lazada App ID | [optional] 
**lazadaAppSecret** | **String** | Lazada App Secret | [optional] 
**lazadaRefreshToken** | **String** | Lazada Refresh Token | [optional] 
**lazadaRegion** | **String** | Lazada API endpoint Region | [optional] 
**lightspeedApiKey** | **String** | LightSpeed api key | [optional] 
**lightspeedApiSecret** | **String** | LightSpeed api secret | [optional] 
**etsyKeystring** | **String** | Etsy keystring | [optional] 
**etsySharedSecret** | **String** | Etsy shared secret | [optional] 
**etsyAccessToken** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**etsyTokenSecret** | **String** | Secret token authorizing the app to access resources on behalf of a user | [optional] 
**etsyClientId** | **String** | Etsy Client Id | [optional] 
**etsyRefreshToken** | **String** | Etsy Refresh token | [optional] 
**facebookAppId** | **String** | Facebook App ID | [optional] 
**facebookAppSecret** | **String** | Facebook App Secret | [optional] 
**facebookAccessToken** | **String** | Facebook Access Token | [optional] 
**facebookBusinessId** | **String** | Facebook Business ID | [optional] 
**netoApiKey** | **String** | Neto API Key | [optional] 
**netoApiUsername** | **String** | Neto User Name | [optional] 
**shoplineAccessToken** | **String** | Shopline APP Key | [optional] 
**shoplineAppKey** | **String** | Shopline APP Key | [optional] 
**shoplineAppSecret** | **String** | Shopline App Secret | [optional] 
**shoplineSharedSecret** | **String** | Shopline Shared Secret | [optional] 
**shopifyAccessToken** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**shopifyApiKey** | **String** | Shopify API Key | [optional] 
**shopifyApiPassword** | **String** | Shopify API Password | [optional] 
**shopifySharedSecret** | **String** | Shared secret | [optional] 
**shopeePartnerId** | **String** | Shopee Partner ID | [optional] 
**shopeePartnerKey** | **String** | Shopee Partner Key | [optional] 
**shopeeShopId** | **String** | Shopee SHOP ID | [optional] 
**shopeeRefreshToken** | **String** | Shopee Refresh Token | [optional] 
**shopeeRegion** | **String** | Shopee API endpoint Region. Use for Chinese Mainland or Brazil. | [optional] 
**shopeeEnvironment** | **String** | Shopee Environment | [optional] [default to &#39;production&#39;]
**shoplazzaAccessToken** | **String** | Access token authorizing the app to access resources on behalf of a user | [optional] 
**shoplazzaSharedSecret** | **String** | Shared secret | [optional] 
**shopwareAccessKey** | **String** | Shopware access key | [optional] 
**unasApiKey** | **String** | UNAS API Key | [optional] 
**shopwareApiKey** | **String** | Shopware api key | [optional] 
**shopwareApiSecret** | **String** | Shopware client secret access key | [optional] 
**mivaAccessToken** | **String** | Miva access token | [optional] 
**mivaSignature** | **String** | Miva signature | [optional] 
**tiendanubeUserId** | **Number** | Tiendanube User ID | [optional] 
**tiendanubeAccessToken** | **String** | Tiendanube Access Token | [optional] 
**tiendanubeClientSecret** | **String** | Tiendanube Client Secret | [optional] 
**volusionLogin** | **String** | It&#39;s a Volusion account for which API is enabled | [optional] 
**volusionPassword** | **String** | Volusion API Password | [optional] 
**hybrisClientId** | **String** | Omni Commerce Connector Client ID | [optional] 
**hybrisClientSecret** | **String** | Omni Commerce Connector Client Secret | [optional] 
**hybrisUsername** | **String** | User Name | [optional] 
**hybrisPassword** | **String** | User password | [optional] 
**hybrisWebsites** | [**[AccountCartAddHybrisWebsitesInner]**](AccountCartAddHybrisWebsitesInner.md) | Websites to stores mapping data | [optional] 
**squareClientId** | **String** | Square (Weebly) Client ID | [optional] 
**squareClientSecret** | **String** | Square (Weebly) Client Secret | [optional] 
**squareRefreshToken** | **String** | Square (Weebly) Refresh Token | [optional] 
**squarespaceApiKey** | **String** | Squarespace API Key | [optional] 
**squarespaceClientId** | **String** | Squarespace Connector Client ID | [optional] 
**squarespaceClientSecret** | **String** | Squarespace Connector Client Secret | [optional] 
**squarespaceAccessToken** | **String** | Squarespace access token | [optional] 
**squarespaceRefreshToken** | **String** | Squarespace refresh token | [optional] 
**commercehqApiKey** | **String** | CommerceHQ api key | [optional] 
**commercehqApiPassword** | **String** | CommerceHQ api password | [optional] 
**wcConsumerKey** | **String** | Woocommerce consumer key | [optional] 
**wcConsumerSecret** | **String** | Woocommerce consumer secret | [optional] 
**magentoConsumerKey** | **String** | Magento Consumer Key | [optional] 
**magentoConsumerSecret** | **String** | Magento Consumer Secret | [optional] 
**magentoAccessToken** | **String** | Magento Access Token | [optional] 
**magentoTokenSecret** | **String** | Magento Token Secret | [optional] 
**prestashopWebserviceKey** | **String** | Prestashop webservice key | [optional] 
**wixAppId** | **String** | Wix App ID | [optional] 
**wixAppSecretKey** | **String** | Wix App Secret Key | [optional] 
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
**zohoClientId** | **String** | Zoho Client ID | [optional] 
**zohoClientSecret** | **String** | Zoho Client Secret | [optional] 
**zohoRefreshToken** | **String** | Zoho Refresh Token | [optional] 
**zohoRegion** | **String** | Zoho API endpoint Region | [optional] 
**ottoClientId** | **String** | Otto Client ID | [optional] 
**ottoClientSecret** | **String** | Otto Client Secret | [optional] 
**ottoAppId** | **String** | Otto App ID | [optional] 
**ottoRefreshToken** | **String** | Otto Refresh Token | [optional] 
**ottoEnvironment** | **String** | Otto Environment | [optional] [default to &#39;production&#39;]
**ottoAccessToken** | **String** | Otto Access Token | [optional] 
**tiktokshopAppKey** | **String** | TikTok Shop App Key | [optional] 
**tiktokshopAppSecret** | **String** | TikTok Shop App Secret | [optional] 
**tiktokshopRefreshToken** | **String** | TikTok Shop Refresh Token | [optional] 
**tiktokshopAccessToken** | **String** | TikTok Shop Access Token | [optional] 
**sallaClientId** | **String** | Salla Client ID | [optional] 
**sallaClientSecret** | **String** | Salla Client Secret | [optional] 
**sallaRefreshToken** | **String** | Salla Refresh Token | [optional] 
**sallaAccessToken** | **String** | Salla Access Token | [optional] 
**temuAppKey** | **String** | Temu App Key | [optional] 
**temuAppSecret** | **String** | Temu App Secret | [optional] 
**temuAccessToken** | **String** | Temu Access Token | [optional] 
**temuRegion** | **String** | Temu API endpoint Region. | [optional] 



## Enum: CartIdEnum


* `3DCart` (value: `"3DCart"`)

* `3DCartApi` (value: `"3DCartApi"`)

* `AceShop` (value: `"AceShop"`)

* `AmazonSP` (value: `"AmazonSP"`)

* `AspDotNetStorefront` (value: `"AspDotNetStorefront"`)

* `BigCartel` (value: `"BigCartel"`)

* `Bricklink` (value: `"Bricklink"`)

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

* `Facebook` (value: `"Facebook"`)

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




