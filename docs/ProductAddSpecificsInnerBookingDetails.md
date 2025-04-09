# Api2CartOpenApi.ProductAddSpecificsInnerBookingDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **String** |  | 
**type** | **String** |  | 
**sessionDuration** | **Number** |  | [optional] 
**sessionGap** | **Number** |  | [optional] 
**sessionsCount** | **Number** |  | 
**timeStrictValue** | **Number** |  | 
**timeStrictType** | **String** |  | [default to &#39;days&#39;]
**availabilities** | [**[ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner]**](ProductAddSpecificsInnerBookingDetailsAvailabilitiesInner.md) |  | 
**overrides** | [**[ProductAddSpecificsInnerBookingDetailsOverridesInner]**](ProductAddSpecificsInnerBookingDetailsOverridesInner.md) |  | [optional] 



## Enum: TypeEnum


* `date` (value: `"date"`)

* `date_time` (value: `"date_time"`)





## Enum: TimeStrictTypeEnum


* `days` (value: `"days"`)

* `hours` (value: `"hours"`)

* `minutes` (value: `"minutes"`)




