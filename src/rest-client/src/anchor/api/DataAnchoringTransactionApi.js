/*
 * Anchor API
 * # Introduction This document discusses Klaytn API Service (KAS) Anchor API. Anchor API features functions for sending metadata to prove data reliability and ensuring the reliability of service chain data to the Klaytn main chain.     # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1071010 | data don't exist 1071615 | its value is out of range; size 1072100 | same payload ID or payload was already anchored 1072101 | all configured accounts have insufficient funds |   # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            '../../ApiClient',
            '../model/AnchorBlockRequest',
            '../model/AnchorBlockStatus',
            '../model/AnchorTransactionDetail',
            '../model/AnchorTransactions',
            '../model/ErrorResponse',
        ], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('../../ApiClient'),
            require('../model/AnchorBlockRequest'),
            require('../model/AnchorBlockStatus'),
            require('../model/AnchorTransactionDetail'),
            require('../model/AnchorTransactions'),
            require('../model/ErrorResponse')
        )
    } else {
        // Browser globals (root is window)
        if (!root.AnchorApi) {
            root.AnchorApi = {}
        }
        root.AnchorApi.DataAnchoringTransactionApi = factory(
            root.AnchorApi.ApiClient,
            root.AnchorApi.AnchorBlockRequest,
            root.AnchorApi.AnchorBlockStatus,
            root.AnchorApi.AnchorTransactionDetail,
            root.AnchorApi.AnchorTransactions,
            root.AnchorApi.ErrorResponse
        )
    }
})(this, function(ApiClient, AnchorBlockRequest, AnchorBlockStatus, AnchorTransactionDetail, AnchorTransactions, ErrorResponse) {
    /**
     * DataAnchoringTransaction service.
     * @class DataAnchoringTransactionApi
     * @version 1.0
     */

    /**
     * Constructs a new DataAnchoringTransactionApi.
     * @alias DataAnchoringTransactionApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    const DataAnchoringTransactionApi = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance

        /**
         * Callback function to receive the result of the anchorBlock operation.
         * @callback DataAnchoringTransactionApi~anchorBlockCallback
         * @param {String} error Error message, if any.
         * @param {AnchorBlockStatus} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * AnchorBlock
         * It is used to anchor blockchain data. A preconfigured operator is used to create and manage anchoring transactions.
         * @param {String} xChainId Klaytn chain network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {AnchorBlockRequest} opts.body
         * @param {DataAnchoringTransactionApi~anchorBlockCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link AnchorBlockStatus}
         */
        this.anchorBlock = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling anchorBlock")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = AnchorBlockStatus

            return this.apiClient.callApi(
                '/v1/anchor',
                'POST',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the getAnchorBlockByPayloadID operation.
         * @callback DataAnchoringTransactionApi~getAnchorBlockByPayloadIDCallback
         * @param {String} error Error message, if any.
         * @param {AnchorTransactionDetail} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * GetAnchorBlockByPayloadID
         * Specify a payload ID and operator ID to search for a list of transactions that were created by the operator. When creating a transaction, you may check the payload that is added to a transaction.
         * @param {String} xChainId Klaytn chain network ID (1001 or 8217)
         * @param {String} operatorId Operator account address
         * @param {String} payloadId Payload ID
         * @param {DataAnchoringTransactionApi~getAnchorBlockByPayloadIDCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link AnchorTransactionDetail}
         */
        this.getAnchorBlockByPayloadID = function(xChainId, operatorId, payloadId, callback) {
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getAnchorBlockByPayloadID")
            }

            // verify the required parameter 'operatorId' is set
            if (operatorId === undefined || operatorId === null) {
                throw new Error("Missing the required parameter 'operatorId' when calling getAnchorBlockByPayloadID")
            }

            // verify the required parameter 'payloadId' is set
            if (payloadId === undefined || payloadId === null) {
                throw new Error("Missing the required parameter 'payloadId' when calling getAnchorBlockByPayloadID")
            }

            const pathParams = {
                'operator-id': operatorId,
                'payload-id': payloadId,
            }
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = AnchorTransactionDetail

            return this.apiClient.callApi(
                '/v1/operator/{operator-id}/payload/{payload-id}',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the getAnchorBlockByTx operation.
         * @callback DataAnchoringTransactionApi~getAnchorBlockByTxCallback
         * @param {String} error Error message, if any.
         * @param {AnchorTransactionDetail} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * GetAnchorBlockByTx
         * Specify a transaction hash value and operator ID to search for a list of transactions that were created by the operator. When creating a transaction, you may check the payload that is added to a transaction.
         * @param {String} xChainId Klaytn chain network ID (1001 or 8217)
         * @param {String} operatorId Operator account address
         * @param {String} transactionHash Transaction hash
         * @param {DataAnchoringTransactionApi~getAnchorBlockByTxCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link AnchorTransactionDetail}
         */
        this.getAnchorBlockByTx = function(xChainId, operatorId, transactionHash, callback) {
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getAnchorBlockByTx")
            }

            // verify the required parameter 'operatorId' is set
            if (operatorId === undefined || operatorId === null) {
                throw new Error("Missing the required parameter 'operatorId' when calling getAnchorBlockByTx")
            }

            // verify the required parameter 'transactionHash' is set
            if (transactionHash === undefined || transactionHash === null) {
                throw new Error("Missing the required parameter 'transactionHash' when calling getAnchorBlockByTx")
            }

            const pathParams = {
                'operator-id': operatorId,
                'transaction-hash': transactionHash,
            }
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = AnchorTransactionDetail

            return this.apiClient.callApi(
                '/v1/operator/{operator-id}/tx/{transaction-hash}',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the retrieveAnchorBlock operation.
         * @callback DataAnchoringTransactionApi~retrieveAnchorBlockCallback
         * @param {String} error Error message, if any.
         * @param {AnchorTransactions} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * RetrieveAnchorBlock
         * Specify an operator ID to search for a list of transactions that were created by the operator.<p></p>  ## Size<p></p>  * The `size` query parameter is optional (minimum = 1, maximum = 1000, default = 100).<br> * Submitting negative values result in errors.<br> * Submitting zero results in a query with `size=100`, which is the default value.<br> * Submitting values greater than 1000 result in queries with `size=1000`, which is the maximum value.<br>
         * @param {String} xChainId Klaytn chain network ID (1001 or 8217)
         * @param {String} operatorId Operator account address
         * @param {Object} opts Optional parameters
         * @param {Number} opts.size Maximum size of account to search (default to 100)
         * @param {String} opts.cursor Information on last searched cursor
         * @param {Number} opts.fromTimestamp Timestamp of the start time to be searched (in seconds)
         * @param {Number} opts.toTimestamp Timestamp of the end time to be searched (in seconds)
         * @param {DataAnchoringTransactionApi~retrieveAnchorBlockCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link AnchorTransactions}
         */
        this.retrieveAnchorBlock = function(xChainId, operatorId, opts, callback) {
            opts = opts || {}
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling retrieveAnchorBlock")
            }

            // verify the required parameter 'operatorId' is set
            if (operatorId === undefined || operatorId === null) {
                throw new Error("Missing the required parameter 'operatorId' when calling retrieveAnchorBlock")
            }

            const pathParams = {
                'operator-id': operatorId,
            }
            const queryParams = {
                size: opts.size,
                cursor: opts.cursor,
                'from-timestamp': opts.fromTimestamp,
                'to-timestamp': opts.toTimestamp,
            }
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = AnchorTransactions

            return this.apiClient.callApi(
                '/v1/operator/{operator-id}/tx',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }
    }

    return DataAnchoringTransactionApi
})