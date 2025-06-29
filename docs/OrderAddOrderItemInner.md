# Api2CartOpenApi.OrderAddOrderItemInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderItemId** | **String** | Defines orders specified by order item id | 
**orderItemName** | **String** | Defines orders specified by order item name | 
**orderItemModel** | **String** | Defines orders specified by order item model | [optional] 
**orderItemPrice** | **Number** | Defines orders specified by order item price | 
**orderItemQuantity** | **Number** | Defines orders specified by order item quantity | 
**orderItemWeight** | **Number** | Defines orders specified by order item weight | [optional] 
**orderItemVariantId** | **String** | Ordered product variant. Where x is order item ID | [optional] 
**orderItemTax** | **Number** | Percentage of tax for product order | [optional] [default to 0]
**orderItemTaxClass** | **String** | Id of the tax class of product. | [optional] 
**orderItemPriceIncludesTax** | **Boolean** | Defines if item price includes tax | [optional] [default to false]
**orderItemParent** | **Number** | Index of the parent grouped/bundle product | [optional] 
**orderItemParentOptionName** | **String** | Option name of the parent grouped/bundle product | [optional] 
**orderItemAllowRefundItemsSeparately** | **Boolean** | Indicates whether subitems of the grouped/bundle product can be refunded separately | [optional] 
**orderItemAllowShipItemsSeparately** | **Boolean** | Indicates whether subitems of the grouped/bundle product can be shipped separately | [optional] 
**orderItemOption** | [**[OrderAddOrderItemInnerOrderItemOptionInner]**](OrderAddOrderItemInnerOrderItemOptionInner.md) |  | [optional] 
**orderItemProperty** | [**[OrderAddOrderItemInnerOrderItemPropertyInner]**](OrderAddOrderItemInnerOrderItemPropertyInner.md) |  | [optional] 


