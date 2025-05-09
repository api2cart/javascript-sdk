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
import ProductGroupItem from './ProductGroupItem';
import ProductGroupPrice from './ProductGroupPrice';
import ProductInventory from './ProductInventory';
import ProductOption from './ProductOption';
import ProductTierPrice from './ProductTierPrice';
import SpecialPrice from './SpecialPrice';

/**
 * The Product model module.
 * @module model/Product
 * @version 1.1
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     */
    constructor() { 
        
        Product.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('u_model')) {
                obj['u_model'] = ApiClient.convertToType(data['u_model'], 'String');
            }
            if (data.hasOwnProperty('u_sku')) {
                obj['u_sku'] = ApiClient.convertToType(data['u_sku'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('advanced_price')) {
                obj['advanced_price'] = ApiClient.convertToType(data['advanced_price'], [ProductAdvancedPrice]);
            }
            if (data.hasOwnProperty('cost_price')) {
                obj['cost_price'] = ApiClient.convertToType(data['cost_price'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('inventory')) {
                obj['inventory'] = ApiClient.convertToType(data['inventory'], [ProductInventory]);
            }
            if (data.hasOwnProperty('group_items')) {
                obj['group_items'] = ApiClient.convertToType(data['group_items'], [ProductGroupItem]);
            }
            if (data.hasOwnProperty('u_brand_id')) {
                obj['u_brand_id'] = ApiClient.convertToType(data['u_brand_id'], 'String');
            }
            if (data.hasOwnProperty('u_brand')) {
                obj['u_brand'] = ApiClient.convertToType(data['u_brand'], 'String');
            }
            if (data.hasOwnProperty('categories_ids')) {
                obj['categories_ids'] = ApiClient.convertToType(data['categories_ids'], ['String']);
            }
            if (data.hasOwnProperty('stores_ids')) {
                obj['stores_ids'] = ApiClient.convertToType(data['stores_ids'], ['String']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('seo_url')) {
                obj['seo_url'] = ApiClient.convertToType(data['seo_url'], 'String');
            }
            if (data.hasOwnProperty('meta_title')) {
                obj['meta_title'] = ApiClient.convertToType(data['meta_title'], 'String');
            }
            if (data.hasOwnProperty('meta_keywords')) {
                obj['meta_keywords'] = ApiClient.convertToType(data['meta_keywords'], 'String');
            }
            if (data.hasOwnProperty('meta_description')) {
                obj['meta_description'] = ApiClient.convertToType(data['meta_description'], 'String');
            }
            if (data.hasOwnProperty('avail_sale')) {
                obj['avail_sale'] = ApiClient.convertToType(data['avail_sale'], 'Boolean');
            }
            if (data.hasOwnProperty('avail_view')) {
                obj['avail_view'] = ApiClient.convertToType(data['avail_view'], 'Boolean');
            }
            if (data.hasOwnProperty('is_virtual')) {
                obj['is_virtual'] = ApiClient.convertToType(data['is_virtual'], 'Boolean');
            }
            if (data.hasOwnProperty('is_downloadable')) {
                obj['is_downloadable'] = ApiClient.convertToType(data['is_downloadable'], 'Boolean');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('weight_unit')) {
                obj['weight_unit'] = ApiClient.convertToType(data['weight_unit'], 'String');
            }
            if (data.hasOwnProperty('sort_order')) {
                obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
            }
            if (data.hasOwnProperty('in_stock')) {
                obj['in_stock'] = ApiClient.convertToType(data['in_stock'], 'Boolean');
            }
            if (data.hasOwnProperty('on_sale')) {
                obj['on_sale'] = ApiClient.convertToType(data['on_sale'], 'Boolean');
            }
            if (data.hasOwnProperty('backorders')) {
                obj['backorders'] = ApiClient.convertToType(data['backorders'], 'String');
            }
            if (data.hasOwnProperty('manage_stock')) {
                obj['manage_stock'] = ApiClient.convertToType(data['manage_stock'], 'String');
            }
            if (data.hasOwnProperty('is_stock_managed')) {
                obj['is_stock_managed'] = ApiClient.convertToType(data['is_stock_managed'], 'Boolean');
            }
            if (data.hasOwnProperty('create_at')) {
                obj['create_at'] = A2CDateTime.constructFromObject(data['create_at']);
            }
            if (data.hasOwnProperty('modified_at')) {
                obj['modified_at'] = A2CDateTime.constructFromObject(data['modified_at']);
            }
            if (data.hasOwnProperty('tax_class_id')) {
                obj['tax_class_id'] = ApiClient.convertToType(data['tax_class_id'], 'String');
            }
            if (data.hasOwnProperty('special_price')) {
                obj['special_price'] = SpecialPrice.constructFromObject(data['special_price']);
            }
            if (data.hasOwnProperty('tier_price')) {
                obj['tier_price'] = ApiClient.convertToType(data['tier_price'], [ProductTierPrice]);
            }
            if (data.hasOwnProperty('group_price')) {
                obj['group_price'] = ApiClient.convertToType(data['group_price'], [ProductGroupPrice]);
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [Image]);
            }
            if (data.hasOwnProperty('product_options')) {
                obj['product_options'] = ApiClient.convertToType(data['product_options'], [ProductOption]);
            }
            if (data.hasOwnProperty('u_upc')) {
                obj['u_upc'] = ApiClient.convertToType(data['u_upc'], 'String');
            }
            if (data.hasOwnProperty('u_mpn')) {
                obj['u_mpn'] = ApiClient.convertToType(data['u_mpn'], 'String');
            }
            if (data.hasOwnProperty('u_gtin')) {
                obj['u_gtin'] = ApiClient.convertToType(data['u_gtin'], 'String');
            }
            if (data.hasOwnProperty('u_isbn')) {
                obj['u_isbn'] = ApiClient.convertToType(data['u_isbn'], 'String');
            }
            if (data.hasOwnProperty('u_ean')) {
                obj['u_ean'] = ApiClient.convertToType(data['u_ean'], 'String');
            }
            if (data.hasOwnProperty('related_products_ids')) {
                obj['related_products_ids'] = ApiClient.convertToType(data['related_products_ids'], ['String']);
            }
            if (data.hasOwnProperty('up_sell_products_ids')) {
                obj['up_sell_products_ids'] = ApiClient.convertToType(data['up_sell_products_ids'], ['String']);
            }
            if (data.hasOwnProperty('cross_sell_products_ids')) {
                obj['cross_sell_products_ids'] = ApiClient.convertToType(data['cross_sell_products_ids'], ['String']);
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
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [Discount]);
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
     * Validates the JSON data with respect to <code>Product</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Product</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['u_model'] && !(typeof data['u_model'] === 'string' || data['u_model'] instanceof String)) {
            throw new Error("Expected the field `u_model` to be a primitive type in the JSON string but got " + data['u_model']);
        }
        // ensure the json data is a string
        if (data['u_sku'] && !(typeof data['u_sku'] === 'string' || data['u_sku'] instanceof String)) {
            throw new Error("Expected the field `u_sku` to be a primitive type in the JSON string but got " + data['u_sku']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['short_description'] && !(typeof data['short_description'] === 'string' || data['short_description'] instanceof String)) {
            throw new Error("Expected the field `short_description` to be a primitive type in the JSON string but got " + data['short_description']);
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
        if (data['group_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['group_items'])) {
                throw new Error("Expected the field `group_items` to be an array in the JSON data but got " + data['group_items']);
            }
            // validate the optional field `group_items` (array)
            for (const item of data['group_items']) {
                ProductGroupItem.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['u_brand_id'] && !(typeof data['u_brand_id'] === 'string' || data['u_brand_id'] instanceof String)) {
            throw new Error("Expected the field `u_brand_id` to be a primitive type in the JSON string but got " + data['u_brand_id']);
        }
        // ensure the json data is a string
        if (data['u_brand'] && !(typeof data['u_brand'] === 'string' || data['u_brand'] instanceof String)) {
            throw new Error("Expected the field `u_brand` to be a primitive type in the JSON string but got " + data['u_brand']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['categories_ids'])) {
            throw new Error("Expected the field `categories_ids` to be an array in the JSON data but got " + data['categories_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['stores_ids'])) {
            throw new Error("Expected the field `stores_ids` to be an array in the JSON data but got " + data['stores_ids']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['seo_url'] && !(typeof data['seo_url'] === 'string' || data['seo_url'] instanceof String)) {
            throw new Error("Expected the field `seo_url` to be a primitive type in the JSON string but got " + data['seo_url']);
        }
        // ensure the json data is a string
        if (data['meta_title'] && !(typeof data['meta_title'] === 'string' || data['meta_title'] instanceof String)) {
            throw new Error("Expected the field `meta_title` to be a primitive type in the JSON string but got " + data['meta_title']);
        }
        // ensure the json data is a string
        if (data['meta_keywords'] && !(typeof data['meta_keywords'] === 'string' || data['meta_keywords'] instanceof String)) {
            throw new Error("Expected the field `meta_keywords` to be a primitive type in the JSON string but got " + data['meta_keywords']);
        }
        // ensure the json data is a string
        if (data['meta_description'] && !(typeof data['meta_description'] === 'string' || data['meta_description'] instanceof String)) {
            throw new Error("Expected the field `meta_description` to be a primitive type in the JSON string but got " + data['meta_description']);
        }
        // ensure the json data is a string
        if (data['weight_unit'] && !(typeof data['weight_unit'] === 'string' || data['weight_unit'] instanceof String)) {
            throw new Error("Expected the field `weight_unit` to be a primitive type in the JSON string but got " + data['weight_unit']);
        }
        // ensure the json data is a string
        if (data['backorders'] && !(typeof data['backorders'] === 'string' || data['backorders'] instanceof String)) {
            throw new Error("Expected the field `backorders` to be a primitive type in the JSON string but got " + data['backorders']);
        }
        // ensure the json data is a string
        if (data['manage_stock'] && !(typeof data['manage_stock'] === 'string' || data['manage_stock'] instanceof String)) {
            throw new Error("Expected the field `manage_stock` to be a primitive type in the JSON string but got " + data['manage_stock']);
        }
        // validate the optional field `create_at`
        if (data['create_at']) { // data not null
          A2CDateTime.validateJSON(data['create_at']);
        }
        // validate the optional field `modified_at`
        if (data['modified_at']) { // data not null
          A2CDateTime.validateJSON(data['modified_at']);
        }
        // ensure the json data is a string
        if (data['tax_class_id'] && !(typeof data['tax_class_id'] === 'string' || data['tax_class_id'] instanceof String)) {
            throw new Error("Expected the field `tax_class_id` to be a primitive type in the JSON string but got " + data['tax_class_id']);
        }
        // validate the optional field `special_price`
        if (data['special_price']) { // data not null
          SpecialPrice.validateJSON(data['special_price']);
        }
        if (data['tier_price']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tier_price'])) {
                throw new Error("Expected the field `tier_price` to be an array in the JSON data but got " + data['tier_price']);
            }
            // validate the optional field `tier_price` (array)
            for (const item of data['tier_price']) {
                ProductTierPrice.validateJSON(item);
            };
        }
        if (data['group_price']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['group_price'])) {
                throw new Error("Expected the field `group_price` to be an array in the JSON data but got " + data['group_price']);
            }
            // validate the optional field `group_price` (array)
            for (const item of data['group_price']) {
                ProductGroupPrice.validateJSON(item);
            };
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
        if (data['product_options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['product_options'])) {
                throw new Error("Expected the field `product_options` to be an array in the JSON data but got " + data['product_options']);
            }
            // validate the optional field `product_options` (array)
            for (const item of data['product_options']) {
                ProductOption.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['u_upc'] && !(typeof data['u_upc'] === 'string' || data['u_upc'] instanceof String)) {
            throw new Error("Expected the field `u_upc` to be a primitive type in the JSON string but got " + data['u_upc']);
        }
        // ensure the json data is a string
        if (data['u_mpn'] && !(typeof data['u_mpn'] === 'string' || data['u_mpn'] instanceof String)) {
            throw new Error("Expected the field `u_mpn` to be a primitive type in the JSON string but got " + data['u_mpn']);
        }
        // ensure the json data is a string
        if (data['u_gtin'] && !(typeof data['u_gtin'] === 'string' || data['u_gtin'] instanceof String)) {
            throw new Error("Expected the field `u_gtin` to be a primitive type in the JSON string but got " + data['u_gtin']);
        }
        // ensure the json data is a string
        if (data['u_isbn'] && !(typeof data['u_isbn'] === 'string' || data['u_isbn'] instanceof String)) {
            throw new Error("Expected the field `u_isbn` to be a primitive type in the JSON string but got " + data['u_isbn']);
        }
        // ensure the json data is a string
        if (data['u_ean'] && !(typeof data['u_ean'] === 'string' || data['u_ean'] instanceof String)) {
            throw new Error("Expected the field `u_ean` to be a primitive type in the JSON string but got " + data['u_ean']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['related_products_ids'])) {
            throw new Error("Expected the field `related_products_ids` to be an array in the JSON data but got " + data['related_products_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['up_sell_products_ids'])) {
            throw new Error("Expected the field `up_sell_products_ids` to be an array in the JSON data but got " + data['up_sell_products_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cross_sell_products_ids'])) {
            throw new Error("Expected the field `cross_sell_products_ids` to be an array in the JSON data but got " + data['cross_sell_products_ids']);
        }
        // ensure the json data is a string
        if (data['dimensions_unit'] && !(typeof data['dimensions_unit'] === 'string' || data['dimensions_unit'] instanceof String)) {
            throw new Error("Expected the field `dimensions_unit` to be a primitive type in the JSON string but got " + data['dimensions_unit']);
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
Product.prototype['id'] = undefined;

/**
 * @member {String} type
 */
Product.prototype['type'] = undefined;

/**
 * @member {String} u_model
 */
Product.prototype['u_model'] = undefined;

/**
 * @member {String} u_sku
 */
Product.prototype['u_sku'] = undefined;

/**
 * @member {String} name
 */
Product.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Product.prototype['description'] = undefined;

/**
 * @member {String} short_description
 */
Product.prototype['short_description'] = undefined;

/**
 * @member {Number} price
 */
Product.prototype['price'] = undefined;

/**
 * @member {Array.<module:model/ProductAdvancedPrice>} advanced_price
 */
Product.prototype['advanced_price'] = undefined;

/**
 * @member {Number} cost_price
 */
Product.prototype['cost_price'] = undefined;

/**
 * @member {Number} quantity
 */
Product.prototype['quantity'] = undefined;

/**
 * @member {Array.<module:model/ProductInventory>} inventory
 */
Product.prototype['inventory'] = undefined;

/**
 * @member {Array.<module:model/ProductGroupItem>} group_items
 */
Product.prototype['group_items'] = undefined;

/**
 * @member {String} u_brand_id
 */
Product.prototype['u_brand_id'] = undefined;

/**
 * @member {String} u_brand
 */
Product.prototype['u_brand'] = undefined;

/**
 * @member {Array.<String>} categories_ids
 */
Product.prototype['categories_ids'] = undefined;

/**
 * @member {Array.<String>} stores_ids
 */
Product.prototype['stores_ids'] = undefined;

/**
 * @member {String} url
 */
Product.prototype['url'] = undefined;

/**
 * @member {String} seo_url
 */
Product.prototype['seo_url'] = undefined;

/**
 * @member {String} meta_title
 */
Product.prototype['meta_title'] = undefined;

/**
 * @member {String} meta_keywords
 */
Product.prototype['meta_keywords'] = undefined;

/**
 * @member {String} meta_description
 */
Product.prototype['meta_description'] = undefined;

/**
 * @member {Boolean} avail_sale
 */
Product.prototype['avail_sale'] = undefined;

/**
 * @member {Boolean} avail_view
 */
Product.prototype['avail_view'] = undefined;

/**
 * @member {Boolean} is_virtual
 */
Product.prototype['is_virtual'] = undefined;

/**
 * @member {Boolean} is_downloadable
 */
Product.prototype['is_downloadable'] = undefined;

/**
 * @member {Number} weight
 */
Product.prototype['weight'] = undefined;

/**
 * @member {String} weight_unit
 */
Product.prototype['weight_unit'] = undefined;

/**
 * @member {Number} sort_order
 */
Product.prototype['sort_order'] = undefined;

/**
 * @member {Boolean} in_stock
 */
Product.prototype['in_stock'] = undefined;

/**
 * @member {Boolean} on_sale
 */
Product.prototype['on_sale'] = undefined;

/**
 * @member {String} backorders
 */
Product.prototype['backorders'] = undefined;

/**
 * @member {String} manage_stock
 */
Product.prototype['manage_stock'] = undefined;

/**
 * @member {Boolean} is_stock_managed
 */
Product.prototype['is_stock_managed'] = undefined;

/**
 * @member {module:model/A2CDateTime} create_at
 */
Product.prototype['create_at'] = undefined;

/**
 * @member {module:model/A2CDateTime} modified_at
 */
Product.prototype['modified_at'] = undefined;

/**
 * @member {String} tax_class_id
 */
Product.prototype['tax_class_id'] = undefined;

/**
 * @member {module:model/SpecialPrice} special_price
 */
Product.prototype['special_price'] = undefined;

/**
 * @member {Array.<module:model/ProductTierPrice>} tier_price
 */
Product.prototype['tier_price'] = undefined;

/**
 * @member {Array.<module:model/ProductGroupPrice>} group_price
 */
Product.prototype['group_price'] = undefined;

/**
 * @member {Array.<module:model/Image>} images
 */
Product.prototype['images'] = undefined;

/**
 * @member {Array.<module:model/ProductOption>} product_options
 */
Product.prototype['product_options'] = undefined;

/**
 * @member {String} u_upc
 */
Product.prototype['u_upc'] = undefined;

/**
 * @member {String} u_mpn
 */
Product.prototype['u_mpn'] = undefined;

/**
 * @member {String} u_gtin
 */
Product.prototype['u_gtin'] = undefined;

/**
 * @member {String} u_isbn
 */
Product.prototype['u_isbn'] = undefined;

/**
 * @member {String} u_ean
 */
Product.prototype['u_ean'] = undefined;

/**
 * @member {Array.<String>} related_products_ids
 */
Product.prototype['related_products_ids'] = undefined;

/**
 * @member {Array.<String>} up_sell_products_ids
 */
Product.prototype['up_sell_products_ids'] = undefined;

/**
 * @member {Array.<String>} cross_sell_products_ids
 */
Product.prototype['cross_sell_products_ids'] = undefined;

/**
 * @member {String} dimensions_unit
 */
Product.prototype['dimensions_unit'] = undefined;

/**
 * @member {Number} width
 */
Product.prototype['width'] = undefined;

/**
 * @member {Number} height
 */
Product.prototype['height'] = undefined;

/**
 * @member {Number} length
 */
Product.prototype['length'] = undefined;

/**
 * @member {Array.<module:model/Discount>} discounts
 */
Product.prototype['discounts'] = undefined;

/**
 * @member {Object} additional_fields
 */
Product.prototype['additional_fields'] = undefined;

/**
 * @member {Object} custom_fields
 */
Product.prototype['custom_fields'] = undefined;






export default Product;

