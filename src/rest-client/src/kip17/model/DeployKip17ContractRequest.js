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
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.Kip17Api) {
            root.Kip17Api = {}
        }
        root.Kip17Api.DeployKip17ContractRequest = factory(root.Kip17Api.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The DeployKip17ContractRequest model module.
     * @class DeployKip17ContractRequest
     * @version 1.0
     */

    /**
     * Constructs a new <code>DeployKip17ContractRequest</code>.
     * @alias DeployKip17ContractRequest
     * @class
     * @param alias {String} Contract alias; KIP-17 APIs can be called with aliases instead of contract addresses
     * @param symbol {String} Token symbol
     * @param name {String} Contract name
     */
    const DeployKip17ContractRequest = function(alias, symbol, name) {
        this.alias = alias
        this.symbol = symbol
        this.name = name
    }

    /**
     * Constructs a <code>DeployKip17ContractRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeployKip17ContractRequest} obj Optional instance to populate.
     * @return {DeployKip17ContractRequest} The populated <code>DeployKip17ContractRequest</code> instance.
     * @memberof DeployKip17ContractRequest
     */
    DeployKip17ContractRequest.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new DeployKip17ContractRequest()
            if (data.hasOwnProperty('alias')) obj.alias = ApiClient.convertToType(data.alias, 'String')
            if (data.hasOwnProperty('symbol')) obj.symbol = ApiClient.convertToType(data.symbol, 'String')
            if (data.hasOwnProperty('name')) obj.name = ApiClient.convertToType(data.name, 'String')
        }
        return obj
    }

    /**
     * Contract alias; KIP-17 APIs can be called with aliases instead of contract addresses
     * @type {String}
     * @memberof DeployKip17ContractRequest
     */
    DeployKip17ContractRequest.prototype.alias = undefined

    /**
     * Token symbol
     * @type {String}
     * @memberof DeployKip17ContractRequest
     */
    DeployKip17ContractRequest.prototype.symbol = undefined

    /**
     * Contract name
     * @type {String}
     * @memberof DeployKip17ContractRequest
     */
    DeployKip17ContractRequest.prototype.name = undefined

    return DeployKip17ContractRequest
})
