# Api2CartOpenApi.ProductImageAdd

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Defines image&#39;s types that are specified by comma-separated list | 
**imageName** | **String** | Defines image&#39;s name | 
**productId** | **String** | Defines product id where the image should be added | [optional] 
**productVariantId** | **String** | Defines product&#39;s variants specified by variant id | [optional] 
**variantIds** | **String** | Defines product&#39;s variants ids | [optional] 
**optionValueIds** | **String** | Defines product&#39;s option values ids | [optional] 
**storeId** | **String** | Store Id | [optional] 
**langId** | **String** | Add product image on specified language id | [optional] 
**url** | **String** | Defines URL of the image that has to be added | [optional] 
**content** | **String** | Content(body) encoded in base64 of image file | [optional] 
**label** | **String** | Defines alternative text that has to be attached to the picture | [optional] 
**mime** | **String** | Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. | [optional] 
**position** | **Number** | Defines image’s position in the list | [optional] [default to 0]
**useLatestApiVersion** | **Boolean** | Use the latest platform API version | [optional] [default to false]



## Enum: TypeEnum


* `small` (value: `"small"`)

* `base` (value: `"base"`)

* `additional` (value: `"additional"`)

* `thumbnail` (value: `"thumbnail"`)




