/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for gateway
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  AddRequest,
  AddResponse} from './sum_pb';

export class GatewayServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    AddResponse,
    (request: AddRequest) => {
      return request.serializeBinary();
    },
    AddResponse.deserializeBinary
  );

  add(
    request: AddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/gateway.GatewayService/Add',
      request,
      metadata || {},
      this.methodInfoAdd,
      callback);
  }

}

