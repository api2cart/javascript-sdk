# Api2CartOpenApi.OrderReturnAdd

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **String** | Defines the order id | [optional] 
**storeId** | **String** | Store Id | [optional] 
**returnStatusId** | **String** | Defines return request status | 
**returnActionId** | **String** | Defines return request action | 
**returnReasonId** | **String** | Defines return request reason | 
**returnReason** | **String** | Defines return request reason | [optional] 
**itemRestock** | **Boolean** | Boolean, whether or not to add the line items back to the store inventory. | [optional] [default to false]
**staffNote** | **String** | Specifies staff note | [optional] 
**comment** | **String** | Specifies return comment | [optional] 
**sendNotifications** | **Boolean** | Send notifications to customer after order was created | [optional] [default to false]
**rejectReason** | **String** | Defines return reject reason | [optional] 
**orderProducts** | [**[OrderReturnAddOrderProductsInner]**](OrderReturnAddOrderProductsInner.md) |  | 


