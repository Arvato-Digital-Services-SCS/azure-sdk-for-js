/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/deploymentOperationsMappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";

/** Class representing a DeploymentOperations. */
export class DeploymentOperations {
  private readonly client: ResourceManagementClientContext;

  /**
   * Create a DeploymentOperations.
   * @param {ResourceManagementClientContext} client Reference to the service client.
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a deployments operation.
   *
   * @param {string} deploymentName The name of the deployment.
   *
   * @param {string} operationId The ID of the operation to get.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getAtSubscriptionScope(deploymentName: string, operationId: string): Promise<Models.DeploymentOperationsGetAtSubscriptionScopeResponse>;
  getAtSubscriptionScope(deploymentName: string, operationId: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsGetAtSubscriptionScopeResponse>;
  getAtSubscriptionScope(deploymentName: string, operationId: string, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  getAtSubscriptionScope(deploymentName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  getAtSubscriptionScope(deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DeploymentOperation>): Promise<Models.DeploymentOperationsGetAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      {
        deploymentName,
        operationId,
        options
      },
      getAtSubscriptionScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsGetAtSubscriptionScopeResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   *
   * @param {string} deploymentName The name of the deployment with the operation to get.
   *
   * @param {DeploymentOperationsListAtSubscriptionScopeOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAtSubscriptionScope(deploymentName: string): Promise<Models.DeploymentOperationsListAtSubscriptionScopeResponse>;
  listAtSubscriptionScope(deploymentName: string, options: Models.DeploymentOperationsListAtSubscriptionScopeOptionalParams): Promise<Models.DeploymentOperationsListAtSubscriptionScopeResponse>;
  listAtSubscriptionScope(deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtSubscriptionScope(deploymentName: string, options: Models.DeploymentOperationsListAtSubscriptionScopeOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtSubscriptionScope(deploymentName: string, options?: Models.DeploymentOperationsListAtSubscriptionScopeOptionalParams, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      {
        deploymentName,
        options
      },
      listAtSubscriptionScopeOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtSubscriptionScopeResponse>;
  }

  /**
   * Gets a deployments operation.
   *
   * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
   *
   * @param {string} deploymentName The name of the deployment.
   *
   * @param {string} operationId The ID of the operation to get.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, deploymentName: string, operationId: string): Promise<Models.DeploymentOperationsGetResponse>;
  get(resourceGroupName: string, deploymentName: string, operationId: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsGetResponse>;
  get(resourceGroupName: string, deploymentName: string, operationId: string, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  get(resourceGroupName: string, deploymentName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
  get(resourceGroupName: string, deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DeploymentOperation>): Promise<Models.DeploymentOperationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        deploymentName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DeploymentOperationsGetResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   *
   * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
   *
   * @param {string} deploymentName The name of the deployment with the operation to get.
   *
   * @param {DeploymentOperationsListOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, deploymentName: string): Promise<Models.DeploymentOperationsListResponse>;
  list(resourceGroupName: string, deploymentName: string, options: Models.DeploymentOperationsListOptionalParams): Promise<Models.DeploymentOperationsListResponse>;
  list(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  list(resourceGroupName: string, deploymentName: string, options: Models.DeploymentOperationsListOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  list(resourceGroupName: string, deploymentName: string, options?: Models.DeploymentOperationsListOptionalParams, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        deploymentName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAtSubscriptionScopeNext(nextPageLink: string): Promise<Models.DeploymentOperationsListAtSubscriptionScopeNextResponse>;
  listAtSubscriptionScopeNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsListAtSubscriptionScopeNextResponse>;
  listAtSubscriptionScopeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtSubscriptionScopeNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listAtSubscriptionScopeNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListAtSubscriptionScopeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAtSubscriptionScopeNextOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListAtSubscriptionScopeNextResponse>;
  }

  /**
   * Gets all deployments operations for a deployment.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listNext(nextPageLink: string): Promise<Models.DeploymentOperationsListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): Promise<Models.DeploymentOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.DeploymentOperationsListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAtSubscriptionScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  urlParameters: [
    Parameters.deploymentName,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtSubscriptionScopeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  urlParameters: [
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations/{operationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.operationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAtSubscriptionScopeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
