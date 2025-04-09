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
import A2CDateTime from './A2CDateTime';
import Discount from './Discount';
import Image from './Image';
import ProductAdvancedPrice from './ProductAdvancedPrice';
import ProductChildItemCombination from './ProductChildItemCombination';
import ProductInventory from './ProductInventory';

/**
 * The Child model module.
 * @module model/Child
 * @version 1.1
 */
class Child {
    /**
     * Constructs a new <code>Child</code>.
     * @alias module:model/Child
     */
    constructor() { 
        
        Child.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Child</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Child} obj Optional instance to populate.
     * @return {module:model/Child} The populated <code>Child</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Child();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('ean')) {
                obj['ean'] = ApiClient.convertToType(data['ean'], 'String');
            }
            if (data.hasOwnProperty('mpn')) {
                obj['mpn'] = ApiClient.convertToType(data['mpn'], 'String');
            }
            if (data.hasOwnProperty('gtin')) {
                obj['gtin'] = ApiClient.convertToType(data['gtin'], 'String');
            }
            if (data.hasOwnProperty('isbn')) {
                obj['isbn'] = ApiClient.convertToType(data['isbn'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('seo_url')) {
                obj['seo_url'] = ApiClient.convertToType(data['seo_url'], 'String');
            }
            if (data.hasOwnProperty('sort_order')) {
                obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = A2CDateTime.constructFromObject(data['created_time']);
            }
            if (data.hasOwnProperty('modified_time')) {
                obj['modified_time'] = A2CDateTime.constructFromObject(data['modified_time']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
            }
            if (data.hasOwnProperty('full_description')) {
                obj['full_description'] = ApiClient.convertToType(data['full_description'], 'String');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [Image]);
            }
            if (data.hasOwnProperty('combination')) {
                obj['combination'] = ApiClient.convertToType(data['combination'], [ProductChildItemCombination]);
            }
            if (data.hasOwnProperty('default_price')) {
                obj['default_price'] = ApiClient.convertToType(data['default_price'], 'Number');
            }
            if (data.hasOwnProperty('cost_price')) {
                obj['cost_price'] = ApiClient.convertToType(data['cost_price'], 'Number');
            }
            if (data.hasOwnProperty('list_price')) {
                obj['list_price'] = ApiClient.convertToType(data['list_price'], 'Number');
            }
            if (data.hasOwnProperty('wholesale_price')) {
                obj['wholesale_price'] = ApiClient.convertToType(data['wholesale_price'], 'Number');
            }
            if (data.hasOwnProperty('advanced_price')) {
                obj['advanced_price'] = ApiClient.convertToType(data['advanced_price'], [ProductAdvancedPrice]);
            }
            if (data.hasOwnProperty('tax_class_id')) {
                obj['tax_class_id'] = ApiClient.convertToType(data['tax_class_id'], 'String');
            }
            if (data.hasOwnProperty('avail_for_sale')) {
                obj['avail_for_sale'] = ApiClient.convertToType(data['avail_for_sale'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_backorders')) {
                obj['allow_backorders'] = ApiClient.convertToType(data['allow_backorders'], 'Boolean');
            }
            if (data.hasOwnProperty('in_stock')) {
                obj['in_stock'] = ApiClient.convertToType(data['in_stock'], 'Boolean');
            }
            if (data.hasOwnProperty('manage_stock')) {
                obj['manage_stock'] = ApiClient.convertToType(data['manage_stock'], 'Boolean');
            }
            if (data.hasOwnProperty('inventory_level')) {
                obj['inventory_level'] = ApiClient.convertToType(data['inventory_level'], 'Number');
            }
            if (data.hasOwnProperty('inventory')) {
                obj['inventory'] = ApiClient.convertToType(data['inventory'], [ProductInventory]);
            }
            if (data.hasOwnProperty('min_quantity')) {
                obj['min_quantity'] = ApiClient.convertToType(data['min_quantity'], 'Number');
            }
            if (data.hasOwnProperty('default_qty_in_pack')) {
                obj['default_qty_in_pack'] = ApiClient.convertToType(data['default_qty_in_pack'], 'Number');
            }
            if (data.hasOwnProperty('is_qty_in_pack_fixed')) {
                obj['is_qty_in_pack_fixed'] = ApiClient.convertToType(data['is_qty_in_pack_fixed'], 'Boolean');
            }
            if (data.hasOwnProperty('weight_unit')) {
                obj['weight_unit'] = ApiClient.convertToType(data['weight_unit'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('dimensions_unit')) {
                obj['dimensions_unit'] = ApiClient.convertToType(data['dimensions_unit'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('meta_title')) {
                obj['meta_title'] = ApiClient.convertToType(data['meta_title'], 'String');
            }
            if (data.hasOwnProperty('meta_description')) {
                obj['meta_description'] = ApiClient.convertToType(data['meta_description'], 'String');
            }
            if (data.hasOwnProperty('meta_keywords')) {
                obj['meta_keywords'] = ApiClient.convertToType(data['meta_keywords'], 'String');
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [Discount]);
            }
            if (data.hasOwnProperty('is_virtual')) {
                obj['is_virtual'] = ApiClient.convertToType(data['is_virtual'], 'Boolean');
            }
            if (data.hasOwnProperty('additional_fields')) {
                obj['additional_fields'] = ApiClient.convertToType(data['additional_fields'], Object);
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Child</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Child</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['parent_id'] && !(typeof data['parent_id'] === 'string' || data['parent_id'] instanceof String)) {
            throw new Error("Expected the field `parent_id` to be a primitive type in the JSON string but got " + data['parent_id']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        // ensure the json data is a string
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // ensure the json data is a string
        if (data['ean'] && !(typeof data['ean'] === 'string' || data['ean'] instanceof String)) {
            throw new Error("Expected the field `ean` to be a primitive type in the JSON string but got " + data['ean']);
        }
        // ensure the json data is a string
        if (data['mpn'] && !(typeof data['mpn'] === 'string' || data['mpn'] instanceof String)) {
            throw new Error("Expected the field `mpn` to be a primitive type in the JSON string but got " + data['mpn']);
        }
        // ensure the json data is a string
        if (data['gtin'] && !(typeof data['gtin'] === 'string' || data['gtin'] instanceof String)) {
            throw new Error("Expected the field `gtin` to be a primitive type in the JSON string but got " + data['gtin']);
        }
        // ensure the json data is a string
        if (data['isbn'] && !(typeof data['isbn'] === 'string' || data['isbn'] instanceof String)) {
            throw new Error("Expected the field `isbn` to be a primitive type in the JSON string but got " + data['isbn']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['seo_url'] && !(typeof data['seo_url'] === 'string' || data['seo_url'] instanceof String)) {
            throw new Error("Expected the field `seo_url` to be a primitive type in the JSON string but got " + data['seo_url']);
        }
        // validate the optional field `created_time`
        if (data['created_time']) { // data not null
          A2CDateTime.validateJSON(data['created_time']);
        }
        // validate the optional field `modified_time`
        if (data['modified_time']) { // data not null
          A2CDateTime.validateJSON(data['modified_time']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['short_description'] && !(typeof data['short_description'] === 'string' || data['short_description'] instanceof String)) {
            throw new Error("Expected the field `short_description` to be a primitive type in the JSON string but got " + data['short_description']);
        }
        // ensure the json data is a string
        if (data['full_description'] && !(typeof data['full_description'] === 'string' || data['full_description'] instanceof String)) {
            throw new Error("Expected the field `full_description` to be a primitive type in the JSON string but got " + data['full_description']);
        }
        if (data['images']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['images'])) {
                throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
            }
            // validate the optional field `images` (array)
            for (const item of data['images']) {
                Image.validateJSON(item);
            };
        }
        if (data['combination']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['combination'])) {
                throw new Error("Expected the field `combination` to be an array in the JSON data but got " + data['combination']);
            }
            // validate the optional field `combination` (array)
            for (const item of data['combination']) {
                ProductChildItemCombination.validateJSON(item);
            };
        }
        if (data['advanced_price']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['advanced_price'])) {
                throw new Error("Expected the field `advanced_price` to be an array in the JSON data but got " + data['advanced_price']);
            }
            // validate the optional field `advanced_price` (array)
            for (const item of data['advanced_price']) {
                ProductAdvancedPrice.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['tax_class_id'] && !(typeof data['tax_class_id'] === 'string' || data['tax_class_id'] instanceof String)) {
            throw new Error("Expected the field `tax_class_id` to be a primitive type in the JSON string but got " + data['tax_class_id']);
        }
        if (data['inventory']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['inventory'])) {
                throw new Error("Expected the field `inventory` to be an array in the JSON data but got " + data['inventory']);
            }
            // validate the optional field `inventory` (array)
            for (const item of data['inventory']) {
                ProductInventory.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['weight_unit'] && !(typeof data['weight_unit'] === 'string' || data['weight_unit'] instanceof String)) {
            throw new Error("Expected the field `weight_unit` to be a primitive type in the JSON string but got " + data['weight_unit']);
        }
        // ensure the json data is a string
        if (data['dimensions_unit'] && !(typeof data['dimensions_unit'] === 'string' || data['dimensions_unit'] instanceof String)) {
            throw new Error("Expected the field `dimensions_unit` to be a primitive type in the JSON string but got " + data['dimensions_unit']);
        }
        // ensure the json data is a string
        if (data['meta_title'] && !(typeof data['meta_title'] === 'string' || data['meta_title'] instanceof String)) {
            throw new Error("Expected the field `meta_title` to be a primitive type in the JSON string but got " + data['meta_title']);
        }
        // ensure the json data is a string
        if (data['meta_description'] && !(typeof data['meta_description'] === 'string' || data['meta_description'] instanceof String)) {
            throw new Error("Expected the field `meta_description` to be a primitive type in the JSON string but got " + data['meta_description']);
        }
        // ensure the json data is a string
        if (data['meta_keywords'] && !(typeof data['meta_keywords'] === 'string' || data['meta_keywords'] instanceof String)) {
            throw new Error("Expected the field `meta_keywords` to be a primitive type in the JSON string but got " + data['meta_keywords']);
        }
        if (data['discounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['discounts'])) {
                throw new Error("Expected the field `discounts` to be an array in the JSON data but got " + data['discounts']);
            }
            // validate the optional field `discounts` (array)
            for (const item of data['discounts']) {
                Discount.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Child.prototype['id'] = undefined;

/**
 * @member {String} parent_id
 */
Child.prototype['parent_id'] = undefined;

/**
 * @member {String} sku
 */
Child.prototype['sku'] = undefined;

/**
 * @member {String} upc
 */
Child.prototype['upc'] = undefined;

/**
 * @member {String} ean
 */
Child.prototype['ean'] = undefined;

/**
 * @member {String} mpn
 */
Child.prototype['mpn'] = undefined;

/**
 * @member {String} gtin
 */
Child.prototype['gtin'] = undefined;

/**
 * @member {String} isbn
 */
Child.prototype['isbn'] = undefined;

/**
 * @member {String} url
 */
Child.prototype['url'] = undefined;

/**
 * @member {String} seo_url
 */
Child.prototype['seo_url'] = undefined;

/**
 * @member {Number} sort_order
 */
Child.prototype['sort_order'] = undefined;

/**
 * @member {module:model/A2CDateTime} created_time
 */
Child.prototype['created_time'] = undefined;

/**
 * @member {module:model/A2CDateTime} modified_time
 */
Child.prototype['modified_time'] = undefined;

/**
 * @member {String} name
 */
Child.prototype['name'] = undefined;

/**
 * @member {String} short_description
 */
Child.prototype['short_description'] = undefined;

/**
 * @member {String} full_description
 */
Child.prototype['full_description'] = undefined;

/**
 * @member {Array.<module:model/Image>} images
 */
Child.prototype['images'] = undefined;

/**
 * @member {Array.<module:model/ProductChildItemCombination>} combination
 */
Child.prototype['combination'] = undefined;

/**
 * @member {Number} default_price
 */
Child.prototype['default_price'] = undefined;

/**
 * @member {Number} cost_price
 */
Child.prototype['cost_price'] = undefined;

/**
 * @member {Number} list_price
 */
Child.prototype['list_price'] = undefined;

/**
 * @member {Number} wholesale_price
 */
Child.prototype['wholesale_price'] = undefined;

/**
 * @member {Array.<module:model/ProductAdvancedPrice>} advanced_price
 */
Child.prototype['advanced_price'] = undefined;

/**
 * @member {String} tax_class_id
 */
Child.prototype['tax_class_id'] = undefined;

/**
 * @member {Boolean} avail_for_sale
 */
Child.prototype['avail_for_sale'] = undefined;

/**
 * @member {Boolean} allow_backorders
 */
Child.prototype['allow_backorders'] = undefined;

/**
 * @member {Boolean} in_stock
 */
Child.prototype['in_stock'] = undefined;

/**
 * @member {Boolean} manage_stock
 */
Child.prototype['manage_stock'] = undefined;

/**
 * @member {Number} inventory_level
 */
Child.prototype['inventory_level'] = undefined;

/**
 * @member {Array.<module:model/ProductInventory>} inventory
 */
Child.prototype['inventory'] = undefined;

/**
 * @member {Number} min_quantity
 */
Child.prototype['min_quantity'] = undefined;

/**
 * @member {Number} default_qty_in_pack
 */
Child.prototype['default_qty_in_pack'] = undefined;

/**
 * @member {Boolean} is_qty_in_pack_fixed
 */
Child.prototype['is_qty_in_pack_fixed'] = undefined;

/**
 * @member {String} weight_unit
 */
Child.prototype['weight_unit'] = undefined;

/**
 * @member {Number} weight
 */
Child.prototype['weight'] = undefined;

/**
 * @member {String} dimensions_unit
 */
Child.prototype['dimensions_unit'] = undefined;

/**
 * @member {Number} width
 */
Child.prototype['width'] = undefined;

/**
 * @member {Number} height
 */
Child.prototype['height'] = undefined;

/**
 * @member {Number} length
 */
Child.prototype['length'] = undefined;

/**
 * @member {String} meta_title
 */
Child.prototype['meta_title'] = undefined;

/**
 * @member {String} meta_description
 */
Child.prototype['meta_description'] = undefined;

/**
 * @member {String} meta_keywords
 */
Child.prototype['meta_keywords'] = undefined;

/**
 * @member {Array.<module:model/Discount>} discounts
 */
Child.prototype['discounts'] = undefined;

/**
 * @member {Boolean} is_virtual
 */
Child.prototype['is_virtual'] = undefined;

/**
 * @member {Object} additional_fields
 */
Child.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
Child.prototype['custom_fields'] = undefined;






export default Child;

