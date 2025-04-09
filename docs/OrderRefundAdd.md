# Api2CartOpenApi.OrderRefundAdd

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **String** | Defines the order for which the refund will be created. | [optional] 
**items** | [**[OrderRefundAddItemsInner]**](OrderRefundAddItemsInner.md) | Defines items in the order that will be refunded | [optional] 
**totalPrice** | **Number** | Defines order refund amount. | [optional] 
**shippingPrice** | **Number** | Defines refund shipping amount. | [optional] 
**feePrice** | **Number** | Specifies refund&#39;s fee price | [optional] 
**message** | **String** | Refund reason, or some else message which assigned to refund. | [optional] 
**itemRestock** | **Boolean** | Boolean, whether or not to add the line items back to the store inventory. | [optional] [default to false]
**sendNotifications** | **Boolean** | Send notifications to customer after refund was created | [optional] [default to false]
**date** | **String** | Specifies an order creation date in format Y-m-d H:i:s | [optional] 
**isOnline** | **Boolean** | Indicates whether refund type is online | [optional] [default to false]


