# Api2CartOpenApi.CartCouponAdd

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Coupon code | 
**actionType** | **String** | Coupon discount type | 
**actionApplyTo** | **String** | Defines where discount should be applied | 
**actionScope** | **String** | Specify how discount should be applied. If scope&#x3D;matching_items, then discount will be applied to each of the items that match action conditions. Scope order means that discount will be applied once. | 
**actionAmount** | **Number** | Defines the discount amount value. | 
**codes** | **[String]** | Entity codes | [optional] 
**name** | **String** | Coupon name | [optional] 
**dateStart** | **String** | Date start | [optional] [default to &#39;now&#39;]
**dateEnd** | **String** | Defines when discount code will be expired. | [optional] 
**usageLimit** | **Number** | Usage limit for coupon. | [optional] 
**usageLimitPerCustomer** | **Number** | Usage limit per customer. | [optional] 
**actionConditionEntity** | **String** | Defines entity for action condition. | [optional] 
**actionConditionKey** | **String** | Defines entity attribute code for action condition. | [optional] 
**actionConditionOperator** | **String** | Defines condition operator. | [optional] 
**actionConditionValue** | **String** | Defines condition attribute value/s. Can be comma separated string. | [optional] 
**includeTax** | **Boolean** | Indicates whether to apply a discount for taxes. | [optional] [default to false]
**storeId** | **String** | Store Id | [optional] 
**freeCashOnDelivery** | **Boolean** | Defines whether the coupon provides free cash on delivery | [optional] 



## Enum: ActionTypeEnum


* `percent` (value: `"percent"`)

* `fixed` (value: `"fixed"`)





## Enum: ActionApplyToEnum


* `order_total` (value: `"order_total"`)

* `item_price` (value: `"item_price"`)

* `shipping` (value: `"shipping"`)





## Enum: ActionScopeEnum


* `order` (value: `"order"`)

* `matching_items` (value: `"matching_items"`)




