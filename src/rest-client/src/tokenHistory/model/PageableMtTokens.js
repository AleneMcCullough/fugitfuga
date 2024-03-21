/*
 * Token History API
 * # Introduction  Token History API allows users to search for information and transfer records on KLAY, FT (KIP-7, Labeled ERC-20), and NFT (KIP-17, Labeled ERC-721) tokens. You can use Token History API to check the records of a specific EOA transferring KLAY, retrieve NFT information, or other purposes.  For more details on Token History API, refer to our [tutorial](https://klaytn.com).  For any questions regarding this document or KAS, visit [the developer forum](https://forum.klaytn.com/).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient', '../model/MtToken'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./MtToken'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.PageableMtTokens = factory(root.TokenHistoryApi.ApiClient, root.TokenHistoryApi.MtToken)
    }
})(this, function(ApiClient, MtToken) {
    /**
     * The PageableMtTokens model module.
     * @class PageableMtTokens
     * @version 1.0
     */

    /**
     * Constructs a new <code>PageableMtTokens</code>.
     * @alias PageableMtTokens
     * @class
     * @param items {Array.<MtToken>}
     * @param cursor {String} Next page cursor
     */
    const PageableMtTokens = function(items, cursor) {
        this.items = items
        this.cursor = cursor
    }

    /**
     * Constructs a <code>PageableMtTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PageableMtTokens} obj Optional instance to populate.
     * @return {PageableMtTokens} The populated <code>PageableMtTokens</code> instance.
     * @memberof PageableMtTokens
     */
    PageableMtTokens.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new PageableMtTokens()
            if (data.hasOwnProperty('items')) obj.items = ApiClient.convertToType(data.items, [MtToken])
            if (data.hasOwnProperty('cursor')) obj.cursor = ApiClient.convertToType(data.cursor, 'String')
        }
        return obj
    }

    /**
     * @type {Array.<MtToken>}
     * @memberof PageableMtTokens
     */
    PageableMtTokens.prototype.items = undefined

    /**
     * Next page cursor
     * @type {String}
     * @memberof PageableMtTokens
     */
    PageableMtTokens.prototype.cursor = undefined

    return PageableMtTokens
})
