/**
 * API2Cart OpenAPI
 * API2Cart
 *
 * The version of the OpenAPI document: 1.1
 * Contact: contact@api2cart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OrderShipmentAddBatchPayloadInner from './OrderShipmentAddBatchPayloadInner';

/**
 * The OrderShipmentAddBatch model module.
 * @module model/OrderShipmentAddBatch
 * @version 1.1
 */
class OrderShipmentAddBatch {
    /**
     * Constructs a new <code>OrderShipmentAddBatch</code>.
     * @alias module:model/OrderShipmentAddBatch
     * @param payload {Array.<module:model/OrderShipmentAddBatchPayloadInner>} Contains an array of order shipment objects. The list of properties may vary depending on the specific platform.
     */
    constructor(payload) { 
        
        OrderShipmentAddBatch.initialize(this, payload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, payload) { 
        obj['payload'] = payload;
    }

    /**
     * Constructs a <code>OrderShipmentAddBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderShipmentAddBatch} obj Optional instance to populate.
     * @return {module:model/OrderShipmentAddBatch} The populated <code>OrderShipmentAddBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderShipmentAddBatch();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], [OrderShipmentAddBatchPayloadInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderShipmentAddBatch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderShipmentAddBatch</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderShipmentAddBatch.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['payload']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['payload'])) {
                throw new Error("Expected the field `payload` to be an array in the JSON data but got " + data['payload']);
            }
            // validate the optional field `payload` (array)
            for (const item of data['payload']) {
                OrderShipmentAddBatchPayloadInner.validateJSON(item);
            };
        }

        return true;
    }


}

OrderShipmentAddBatch.RequiredProperties = ["payload"];

/**
 * Contains an array of order shipment objects. The list of properties may vary depending on the specific platform.
 * @member {Array.<module:model/OrderShipmentAddBatchPayloadInner>} payload
 */
OrderShipmentAddBatch.prototype['payload'] = undefined;






export default OrderShipmentAddBatch;

