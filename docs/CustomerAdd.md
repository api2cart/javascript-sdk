# Api2CartOpenApi.CustomerAdd

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Defines customer&#39;s email | 
**firstName** | **String** | Defines customer&#39;s first name | [optional] 
**lastName** | **String** | Defines customer&#39;s last name | [optional] 
**password** | **String** | Defines customer&#39;s unique password | [optional] 
**group** | **String** | Defines the group where the customer | [optional] 
**groupIds** | **String** | Groups that will be assigned to a customer | [optional] 
**status** | **String** | Defines customer&#39;s status | [optional] [default to &#39;enabled&#39;]
**createdTime** | **String** | Entity&#39;s date creation | [optional] 
**modifiedTime** | **String** | Entity&#39;s date modification | [optional] 
**login** | **String** | Specifies customer&#39;s login name | [optional] 
**lastLogin** | **String** | Defines customer&#39;s last login time | [optional] 
**birthDay** | **String** | Defines customer&#39;s birthday | [optional] 
**newsLetterSubscription** | **Boolean** | Defines whether the newsletter subscription is available for the user | [optional] 
**consents** | [**[CustomerAddConsentsInner]**](CustomerAddConsentsInner.md) | Defines consents to notifications | [optional] 
**gender** | **String** | Defines customer&#39;s gender | [optional] 
**website** | **String** | Link to customer website | [optional] 
**fax** | **String** | Defines customer&#39;s fax | [optional] 
**company** | **String** | Defines customer&#39;s company | [optional] 
**phone** | **String** | Defines customer&#39;s phone number | [optional] 
**note** | **String** | The customer note. | [optional] 
**country** | **String** | Specifies ISO code or name of country | [optional] 
**storeId** | **String** | Store Id | [optional] 
**address** | [**[CustomerAddAddressInner]**](CustomerAddAddressInner.md) |  | [optional] 


