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
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.ErrorResponse = factory(root.TokenHistoryApi.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The ErrorResponse model module.
     * @class ErrorResponse
     * @version 1.0
     */

    /**
     * Constructs a new <code>ErrorResponse</code>.
     * @alias ErrorResponse
     * @class
     * @param code {Number} KAS error code
     * @param message {String} KAS error message
     * @param requestId {String} ID of the request caused the error
     */
    const ErrorResponse = function(code, message, requestId) {
        this.code = code
        this.message = message
        this.requestId = requestId
    }

    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ErrorResponse} obj Optional instance to populate.
     * @return {ErrorResponse} The populated <code>ErrorResponse</code> instance.
     * @memberof ErrorResponse
     */
    ErrorResponse.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse()
            if (data.hasOwnProperty('code')) obj.code = ApiClient.convertToType(data.code, 'Number')
            if (data.hasOwnProperty('message')) obj.message = ApiClient.convertToType(data.message, 'String')
            if (data.hasOwnProperty('requestId')) obj.requestId = ApiClient.convertToType(data.requestId, 'String')
        }
        return obj
    }

    /**
     * KAS error code
     * @type {Number}
     * @memberof ErrorResponse
     */
    ErrorResponse.prototype.code = undefined

    /**
     * KAS error message
     * @type {String}
     * @memberof ErrorResponse
     */
    ErrorResponse.prototype.message = undefined

    /**
     * ID of the request caused the error
     * @type {String}
     * @memberof ErrorResponse
     */
    ErrorResponse.prototype.requestId = undefined

    return ErrorResponse
})
