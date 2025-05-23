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
import ProductVariantUpdateOptionsInner from './ProductVariantUpdateOptionsInner';

/**
 * The ProductVariantUpdate model module.
 * @module model/ProductVariantUpdate
 * @version 1.1
 */
class ProductVariantUpdate {
    /**
     * Constructs a new <code>ProductVariantUpdate</code>.
     * @alias module:model/ProductVariantUpdate
     */
    constructor() { 
        
        ProductVariantUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['available_for_sale'] = true;
        obj['avail'] = true;
        obj['taxable'] = true;
        obj['is_virtual'] = false;
        obj['increase_quantity'] = 0;
        obj['reduce_quantity'] = 0;
        obj['weight'] = 0;
        obj['reindex'] = true;
        obj['clear_cache'] = true;
    }

    /**
     * Constructs a <code>ProductVariantUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductVariantUpdate} obj Optional instance to populate.
     * @return {module:model/ProductVariantUpdate} The populated <code>ProductVariantUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariantUpdate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('store_id')) {
                obj['store_id'] = ApiClient.convertToType(data['store_id'], 'String');
            }
            if (data.hasOwnProperty('lang_id')) {
                obj['lang_id'] = ApiClient.convertToType(data['lang_id'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ProductVariantUpdateOptionsInner]);
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
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('backorder_status')) {
                obj['backorder_status'] = ApiClient.convertToType(data['backorder_status'], 'String');
            }
            if (data.hasOwnProperty('available_for_sale')) {
                obj['available_for_sale'] = ApiClient.convertToType(data['available_for_sale'], 'Boolean');
            }
            if (data.hasOwnProperty('avail')) {
                obj['avail'] = ApiClient.convertToType(data['avail'], 'Boolean');
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
            if (data.hasOwnProperty('is_free_shipping')) {
                obj['is_free_shipping'] = ApiClient.convertToType(data['is_free_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('taxable')) {
                obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('tax_class_id')) {
                obj['tax_class_id'] = ApiClient.convertToType(data['tax_class_id'], 'String');
            }
            if (data.hasOwnProperty('is_virtual')) {
                obj['is_virtual'] = ApiClient.convertToType(data['is_virtual'], 'Boolean');
            }
            if (data.hasOwnProperty('manage_stock')) {
                obj['manage_stock'] = ApiClient.convertToType(data['manage_stock'], 'Boolean');
            }
            if (data.hasOwnProperty('in_stock')) {
                obj['in_stock'] = ApiClient.convertToType(data['in_stock'], 'Boolean');
            }
            if (data.hasOwnProperty('warehouse_id')) {
                obj['warehouse_id'] = ApiClient.convertToType(data['warehouse_id'], 'String');
            }
            if (data.hasOwnProperty('reserve_quantity')) {
                obj['reserve_quantity'] = ApiClient.convertToType(data['reserve_quantity'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('increase_quantity')) {
                obj['increase_quantity'] = ApiClient.convertToType(data['increase_quantity'], 'Number');
            }
            if (data.hasOwnProperty('reduce_quantity')) {
                obj['reduce_quantity'] = ApiClient.convertToType(data['reduce_quantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('special_price')) {
                obj['special_price'] = ApiClient.convertToType(data['special_price'], 'Number');
            }
            if (data.hasOwnProperty('retail_price')) {
                obj['retail_price'] = ApiClient.convertToType(data['retail_price'], 'Number');
            }
            if (data.hasOwnProperty('old_price')) {
                obj['old_price'] = ApiClient.convertToType(data['old_price'], 'Number');
            }
            if (data.hasOwnProperty('cost_price')) {
                obj['cost_price'] = ApiClient.convertToType(data['cost_price'], 'Number');
            }
            if (data.hasOwnProperty('fixed_cost_shipping_price')) {
                obj['fixed_cost_shipping_price'] = ApiClient.convertToType(data['fixed_cost_shipping_price'], 'Number');
            }
            if (data.hasOwnProperty('sprice_create')) {
                obj['sprice_create'] = ApiClient.convertToType(data['sprice_create'], 'String');
            }
            if (data.hasOwnProperty('sprice_expire')) {
                obj['sprice_expire'] = ApiClient.convertToType(data['sprice_expire'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('weight_unit')) {
                obj['weight_unit'] = ApiClient.convertToType(data['weight_unit'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('gtin')) {
                obj['gtin'] = ApiClient.convertToType(data['gtin'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('mpn')) {
                obj['mpn'] = ApiClient.convertToType(data['mpn'], 'String');
            }
            if (data.hasOwnProperty('ean')) {
                obj['ean'] = ApiClient.convertToType(data['ean'], 'String');
            }
            if (data.hasOwnProperty('isbn')) {
                obj['isbn'] = ApiClient.convertToType(data['isbn'], 'String');
            }
            if (data.hasOwnProperty('harmonized_system_code')) {
                obj['harmonized_system_code'] = ApiClient.convertToType(data['harmonized_system_code'], 'String');
            }
            if (data.hasOwnProperty('country_of_origin')) {
                obj['country_of_origin'] = ApiClient.convertToType(data['country_of_origin'], 'String');
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
            if (data.hasOwnProperty('reindex')) {
                obj['reindex'] = ApiClient.convertToType(data['reindex'], 'Boolean');
            }
            if (data.hasOwnProperty('clear_cache')) {
                obj['clear_cache'] = ApiClient.convertToType(data['clear_cache'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductVariantUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductVariantUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['store_id'] && !(typeof data['store_id'] === 'string' || data['store_id'] instanceof String)) {
            throw new Error("Expected the field `store_id` to be a primitive type in the JSON string but got " + data['store_id']);
        }
        // ensure the json data is a string
        if (data['lang_id'] && !(typeof data['lang_id'] === 'string' || data['lang_id'] instanceof String)) {
            throw new Error("Expected the field `lang_id` to be a primitive type in the JSON string but got " + data['lang_id']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                ProductVariantUpdateOptionsInner.validateJSON(item);
            };
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
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        // ensure the json data is a string
        if (data['visible'] && !(typeof data['visible'] === 'string' || data['visible'] instanceof String)) {
            throw new Error("Expected the field `visible` to be a primitive type in the JSON string but got " + data['visible']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['backorder_status'] && !(typeof data['backorder_status'] === 'string' || data['backorder_status'] instanceof String)) {
            throw new Error("Expected the field `backorder_status` to be a primitive type in the JSON string but got " + data['backorder_status']);
        }
        // ensure the json data is a string
        if (data['tax_class_id'] && !(typeof data['tax_class_id'] === 'string' || data['tax_class_id'] instanceof String)) {
            throw new Error("Expected the field `tax_class_id` to be a primitive type in the JSON string but got " + data['tax_class_id']);
        }
        // ensure the json data is a string
        if (data['warehouse_id'] && !(typeof data['warehouse_id'] === 'string' || data['warehouse_id'] instanceof String)) {
            throw new Error("Expected the field `warehouse_id` to be a primitive type in the JSON string but got " + data['warehouse_id']);
        }
        // ensure the json data is a string
        if (data['sprice_create'] && !(typeof data['sprice_create'] === 'string' || data['sprice_create'] instanceof String)) {
            throw new Error("Expected the field `sprice_create` to be a primitive type in the JSON string but got " + data['sprice_create']);
        }
        // ensure the json data is a string
        if (data['sprice_expire'] && !(typeof data['sprice_expire'] === 'string' || data['sprice_expire'] instanceof String)) {
            throw new Error("Expected the field `sprice_expire` to be a primitive type in the JSON string but got " + data['sprice_expire']);
        }
        // ensure the json data is a string
        if (data['barcode'] && !(typeof data['barcode'] === 'string' || data['barcode'] instanceof String)) {
            throw new Error("Expected the field `barcode` to be a primitive type in the JSON string but got " + data['barcode']);
        }
        // ensure the json data is a string
        if (data['weight_unit'] && !(typeof data['weight_unit'] === 'string' || data['weight_unit'] instanceof String)) {
            throw new Error("Expected the field `weight_unit` to be a primitive type in the JSON string but got " + data['weight_unit']);
        }
        // ensure the json data is a string
        if (data['gtin'] && !(typeof data['gtin'] === 'string' || data['gtin'] instanceof String)) {
            throw new Error("Expected the field `gtin` to be a primitive type in the JSON string but got " + data['gtin']);
        }
        // ensure the json data is a string
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // ensure the json data is a string
        if (data['mpn'] && !(typeof data['mpn'] === 'string' || data['mpn'] instanceof String)) {
            throw new Error("Expected the field `mpn` to be a primitive type in the JSON string but got " + data['mpn']);
        }
        // ensure the json data is a string
        if (data['ean'] && !(typeof data['ean'] === 'string' || data['ean'] instanceof String)) {
            throw new Error("Expected the field `ean` to be a primitive type in the JSON string but got " + data['ean']);
        }
        // ensure the json data is a string
        if (data['isbn'] && !(typeof data['isbn'] === 'string' || data['isbn'] instanceof String)) {
            throw new Error("Expected the field `isbn` to be a primitive type in the JSON string but got " + data['isbn']);
        }
        // ensure the json data is a string
        if (data['harmonized_system_code'] && !(typeof data['harmonized_system_code'] === 'string' || data['harmonized_system_code'] instanceof String)) {
            throw new Error("Expected the field `harmonized_system_code` to be a primitive type in the JSON string but got " + data['harmonized_system_code']);
        }
        // ensure the json data is a string
        if (data['country_of_origin'] && !(typeof data['country_of_origin'] === 'string' || data['country_of_origin'] instanceof String)) {
            throw new Error("Expected the field `country_of_origin` to be a primitive type in the JSON string but got " + data['country_of_origin']);
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

        return true;
    }


}



/**
 * Defines variant update specified by variant id
 * @member {String} id
 */
ProductVariantUpdate.prototype['id'] = undefined;

/**
 * Defines product's id where the variant has to be updated
 * @member {String} product_id
 */
ProductVariantUpdate.prototype['product_id'] = undefined;

/**
 * Defines store id where the variant should be found
 * @member {String} store_id
 */
ProductVariantUpdate.prototype['store_id'] = undefined;

/**
 * Language id
 * @member {String} lang_id
 */
ProductVariantUpdate.prototype['lang_id'] = undefined;

/**
 * Defines variant's options list
 * @member {Array.<module:model/ProductVariantUpdateOptionsInner>} options
 */
ProductVariantUpdate.prototype['options'] = undefined;

/**
 * Defines variant's name that has to be updated
 * @member {String} name
 */
ProductVariantUpdate.prototype['name'] = undefined;

/**
 * Specifies variant's description
 * @member {String} description
 */
ProductVariantUpdate.prototype['description'] = undefined;

/**
 * Defines short description
 * @member {String} short_description
 */
ProductVariantUpdate.prototype['short_description'] = undefined;

/**
 * Specifies variant's model that has to be added
 * @member {String} model
 */
ProductVariantUpdate.prototype['model'] = undefined;

/**
 * Defines new product's variant sku
 * @member {String} sku
 */
ProductVariantUpdate.prototype['sku'] = undefined;

/**
 * Set visibility status
 * @member {String} visible
 */
ProductVariantUpdate.prototype['visible'] = undefined;

/**
 * Defines product variant's status
 * @member {String} status
 */
ProductVariantUpdate.prototype['status'] = undefined;

/**
 * Set backorder status
 * @member {String} backorder_status
 */
ProductVariantUpdate.prototype['backorder_status'] = undefined;

/**
 * Specifies the set of visible/invisible product's variants for sale
 * @member {Boolean} available_for_sale
 * @default true
 */
ProductVariantUpdate.prototype['available_for_sale'] = true;

/**
 * Defines category's visibility status
 * @member {Boolean} avail
 * @default true
 */
ProductVariantUpdate.prototype['avail'] = true;

/**
 * Defines as a default variant
 * @member {Boolean} is_default
 */
ProductVariantUpdate.prototype['is_default'] = undefined;

/**
 * Specifies variant's free shipping flag that has to be added
 * @member {Boolean} is_free_shipping
 */
ProductVariantUpdate.prototype['is_free_shipping'] = undefined;

/**
 * Specifies whether a tax is charged
 * @member {Boolean} taxable
 * @default true
 */
ProductVariantUpdate.prototype['taxable'] = true;

/**
 * Defines tax classes where entity has to be added
 * @member {String} tax_class_id
 */
ProductVariantUpdate.prototype['tax_class_id'] = undefined;

/**
 * Defines whether the product is virtual
 * @member {Boolean} is_virtual
 * @default false
 */
ProductVariantUpdate.prototype['is_virtual'] = false;

/**
 * Defines inventory tracking for product variant
 * @member {Boolean} manage_stock
 */
ProductVariantUpdate.prototype['manage_stock'] = undefined;

/**
 * Set stock status
 * @member {Boolean} in_stock
 */
ProductVariantUpdate.prototype['in_stock'] = undefined;

/**
 * This parameter is used for selecting a warehouse where you need to set/modify a product quantity.
 * @member {String} warehouse_id
 */
ProductVariantUpdate.prototype['warehouse_id'] = undefined;

/**
 * This parameter allows to reserve/unreserve product variants quantity.
 * @member {Number} reserve_quantity
 */
ProductVariantUpdate.prototype['reserve_quantity'] = undefined;

/**
 * Defines new products' variants quantity
 * @member {Number} quantity
 */
ProductVariantUpdate.prototype['quantity'] = undefined;

/**
 * Defines the incremental changes in product quantity
 * @member {Number} increase_quantity
 * @default 0
 */
ProductVariantUpdate.prototype['increase_quantity'] = 0;

/**
 * Defines the decrement changes in product quantity
 * @member {Number} reduce_quantity
 * @default 0
 */
ProductVariantUpdate.prototype['reduce_quantity'] = 0;

/**
 * Defines new product's variant price
 * @member {Number} price
 */
ProductVariantUpdate.prototype['price'] = undefined;

/**
 * Defines new product's variant special price
 * @member {Number} special_price
 */
ProductVariantUpdate.prototype['special_price'] = undefined;

/**
 * Defines new product's retail price
 * @member {Number} retail_price
 */
ProductVariantUpdate.prototype['retail_price'] = undefined;

/**
 * Defines product's old price
 * @member {Number} old_price
 */
ProductVariantUpdate.prototype['old_price'] = undefined;

/**
 * Defines new product's cost price
 * @member {Number} cost_price
 */
ProductVariantUpdate.prototype['cost_price'] = undefined;

/**
 * Specifies fixed cost shipping price
 * @member {Number} fixed_cost_shipping_price
 */
ProductVariantUpdate.prototype['fixed_cost_shipping_price'] = undefined;

/**
 * Defines the date of special price creation
 * @member {String} sprice_create
 */
ProductVariantUpdate.prototype['sprice_create'] = undefined;

/**
 * Defines the term of special price offer duration
 * @member {String} sprice_expire
 */
ProductVariantUpdate.prototype['sprice_expire'] = undefined;

/**
 * Weight
 * @member {Number} weight
 * @default 0
 */
ProductVariantUpdate.prototype['weight'] = 0;

/**
 * A barcode is a unique code composed of numbers used as a product identifier.
 * @member {String} barcode
 */
ProductVariantUpdate.prototype['barcode'] = undefined;

/**
 * Defines product's width
 * @member {Number} width
 */
ProductVariantUpdate.prototype['width'] = undefined;

/**
 * Weight Unit
 * @member {String} weight_unit
 */
ProductVariantUpdate.prototype['weight_unit'] = undefined;

/**
 * Defines product's height
 * @member {Number} height
 */
ProductVariantUpdate.prototype['height'] = undefined;

/**
 * Defines product's length
 * @member {Number} length
 */
ProductVariantUpdate.prototype['length'] = undefined;

/**
 * Global Trade Item Number. An GTIN is an identifier for trade items.
 * @member {String} gtin
 */
ProductVariantUpdate.prototype['gtin'] = undefined;

/**
 * Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products.
 * @member {String} upc
 */
ProductVariantUpdate.prototype['upc'] = undefined;

/**
 * Manufacturer Part Number. A MPN is an identifier of a particular part design or material used.
 * @member {String} mpn
 */
ProductVariantUpdate.prototype['mpn'] = undefined;

/**
 * European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products.
 * @member {String} ean
 */
ProductVariantUpdate.prototype['ean'] = undefined;

/**
 * International Standard Book Number. An ISBN is a unique identifier for books.
 * @member {String} isbn
 */
ProductVariantUpdate.prototype['isbn'] = undefined;

/**
 * Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes
 * @member {String} harmonized_system_code
 */
ProductVariantUpdate.prototype['harmonized_system_code'] = undefined;

/**
 * The country where the inventory item was made
 * @member {String} country_of_origin
 */
ProductVariantUpdate.prototype['country_of_origin'] = undefined;

/**
 * Defines unique meta title for each entity
 * @member {String} meta_title
 */
ProductVariantUpdate.prototype['meta_title'] = undefined;

/**
 * Defines unique meta description of a entity
 * @member {String} meta_description
 */
ProductVariantUpdate.prototype['meta_description'] = undefined;

/**
 * Defines unique meta keywords for each entity
 * @member {String} meta_keywords
 */
ProductVariantUpdate.prototype['meta_keywords'] = undefined;

/**
 * Is reindex required
 * @member {Boolean} reindex
 * @default true
 */
ProductVariantUpdate.prototype['reindex'] = true;

/**
 * Is cache clear required
 * @member {Boolean} clear_cache
 * @default true
 */
ProductVariantUpdate.prototype['clear_cache'] = true;






export default ProductVariantUpdate;

