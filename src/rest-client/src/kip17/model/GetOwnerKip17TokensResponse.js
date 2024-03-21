/*
 * KIP-17 API
 *   # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1100050 | incorrect request 1100101 | data don't exist 1100251 | its value is out of range; size 1104401 | failed to get an account |   ## 404: Not Found   | Code | Messages |   | --- | --- |   | 1104404 | Token not found |   ## 409: Conflict   | Code | Messages |   | --- | --- |   | 1104400 | Duplicate alias - test |
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
        define(['../../ApiClient', '../model/GetOwnerKip17TokensResponseItem'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./GetOwnerKip17TokensResponseItem'))
    } else {
        // Browser globals (root is window)
        if (!root.Kip17Api) {
            root.Kip17Api = {}
        }
        root.Kip17Api.GetOwnerKip17TokensResponse = factory(root.Kip17Api.ApiClient, root.Kip17Api.GetOwnerKip17TokensResponseItem)
    }
})(this, function(ApiClient, GetOwnerKip17TokensResponseItem) {
    /**
     * The GetOwnerKip17TokensResponse model module.
     * @class GetOwnerKip17TokensResponse
     * @version 1.0
     */

    /**
     * Constructs a new <code>GetOwnerKip17TokensResponse</code>.
     * @alias GetOwnerKip17TokensResponse
     * @class
     * @param cursor {String} Offset for the next batch
     * @param items {Array.<GetOwnerKip17TokensResponseItem>}
     */
    const GetOwnerKip17TokensResponse = function(cursor, items) {
        this.cursor = cursor
        this.items = items
    }

    /**
     * Constructs a <code>GetOwnerKip17TokensResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOwnerKip17TokensResponse} obj Optional instance to populate.
     * @return {GetOwnerKip17TokensResponse} The populated <code>GetOwnerKip17TokensResponse</code> instance.
     * @memberof GetOwnerKip17TokensResponse
     */
    GetOwnerKip17TokensResponse.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new GetOwnerKip17TokensResponse()
            if (data.hasOwnProperty('cursor')) obj.cursor = ApiClient.convertToType(data.cursor, 'String')
            if (data.hasOwnProperty('items')) obj.items = ApiClient.convertToType(data.items, [GetOwnerKip17TokensResponseItem])
        }
        return obj
    }

    /**
     * Offset for the next batch
     * @type {String}
     * @memberof GetOwnerKip17TokensResponse
     */
    GetOwnerKip17TokensResponse.prototype.cursor = undefined

    /**
     * @type {Array.<GetOwnerKip17TokensResponseItem>}
     * @memberof GetOwnerKip17TokensResponse
     */
    GetOwnerKip17TokensResponse.prototype.items = undefined

    return GetOwnerKip17TokensResponse
})
