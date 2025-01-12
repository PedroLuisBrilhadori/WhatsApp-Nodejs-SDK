"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const logger_1 = __importDefault(require("./logger"));
const httpsClient_1 = __importDefault(require("./httpsClient"));
const LIB_NAME = 'REQUESTER';
const LOG_LOCAL = false;
const LOGGER = new logger_1.default(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);
class Requester {
  constructor(host, apiVersion, phoneNumberId, accessToken, businessAcctId, userAgent) {
    this.protocol = 'https:';
    this.port = 443;
    this.client = new httpsClient_1.default();
    this.host = host;
    this.apiVersion = apiVersion;
    this.phoneNumberId = phoneNumberId;
    this.accessToken = accessToken;
    this.businessAcctId = businessAcctId;
    this.userAgent = userAgent;
  }
  updateAccessToken(accessToken) {
    this.accessToken = accessToken;
  }
  updatePhoneNumberId(phoneNumberId) {
    this.phoneNumberId = phoneNumberId;
  }
  updateBusinessAcctId(businessAcctId) {
    this.businessAcctId = businessAcctId;
  }
  buildHeader(contentType) {
    const headers = {
      'Content-Type': contentType,
      'Authorization': `Bearer ${this.accessToken}`,
      'User-Agent': this.userAgent
    };
    return headers;
  }
  /** C API path with whatsapp phone number */
  buildCAPIPath(endpoint) {
    return `/${this.apiVersion}/${this.phoneNumberId}/${endpoint}`;
  }
  /** B API path with businessAcctId number */
  buildBAPIPath(endpoint) {
    return `/${this.apiVersion}/${this.businessAcctId}/${endpoint}`;
  }
  async sendCAPIRequest(method, endpoint, timeout, body) {
    const contentType = 'application/json';
    LOGGER.log(`${method} : ${this.protocol.toLowerCase()}//${this.host}:${this.port}/${this.buildCAPIPath(endpoint)}`);
    return await this.client.sendRequest(this.host, this.port, this.buildCAPIPath(endpoint), method, this.buildHeader(contentType), timeout, method == 'POST' || method == 'PUT' ? body : undefined);
  }
  async sendBAPIRequest(method, endpoint, timeout, body) {
    const contentType = 'application/json';
    LOGGER.log(`${method} : ${this.protocol.toLowerCase()}//${this.host}:${this.port}/${this.buildBAPIPath(endpoint)}`);
    return await this.client.sendRequest(this.host, this.port, this.buildBAPIPath(endpoint), method, this.buildHeader(contentType), timeout, method == 'POST' || method == 'PUT' ? body : undefined);
  }
}
exports.default = Requester;
module.exports = exports.default;