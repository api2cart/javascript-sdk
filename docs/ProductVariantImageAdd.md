# Api2CartOpenApi.ProductVariantImageAdd

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **String** | Defines product id where the variant image has to be added | [optional] 
**productVariantId** | **String** | Defines product&#39;s variants specified by variant id | 
**storeId** | **String** | Store Id | [optional] 
**imageName** | **String** | Defines image&#39;s name | 
**type** | **String** | Defines image&#39;s types that are specified by comma-separated list | [default to &#39;base&#39;]
**url** | **String** | Defines URL of the image that has to be added | [optional] 
**content** | **String** | Content(body) encoded in base64 of image file | [optional] 
**label** | **String** | Defines alternative text that has to be attached to the picture | [optional] 
**mime** | **String** | Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. | [optional] 
**position** | **Number** | Defines image’s position in the list | [optional] [default to 0]
**optionId** | **String** | Defines option id of the product variant for which the image will be added | [optional] 



## Enum: TypeEnum


* `small` (value: `"small"`)

* `base` (value: `"base"`)

* `additional` (value: `"additional"`)

* `thumbnail` (value: `"thumbnail"`)




