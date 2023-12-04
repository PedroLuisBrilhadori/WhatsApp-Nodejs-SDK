/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import HttpsClient from './httpsClient';
import { HttpMethodsEnum } from './types/enums';
import { RequesterClass, GeneralHeaderInterface } from './types/requester';
export default class Requester implements RequesterClass {
    client: Readonly<HttpsClient>;
    accessToken: Readonly<string>;
    phoneNumberId: Readonly<number>;
    businessAcctId: Readonly<string>;
    apiVersion: Readonly<string>;
    userAgent: Readonly<string>;
    host: Readonly<string>;
    protocol: Readonly<string>;
    port: Readonly<number>;
    constructor(host: string, apiVersion: string, phoneNumberId: number, accessToken: string, businessAcctId: string, userAgent: string);
    updateAccessToken(accessToken: string): void;
    updatePhoneNumberId(phoneNumberId: number): void;
    updateBusinessAcctId(businessAcctId: string): void;
    buildHeader(contentType: string): GeneralHeaderInterface;
    /** C API path with whatsapp phone number */
    buildCAPIPath(endpoint: string): string;
    /** B API path with businessAcctId number */
    buildBAPIPath(endpoint: string): string;
    sendCAPIRequest(method: HttpMethodsEnum, endpoint: string, timeout: number, body?: any): Promise<import("./types/httpsClient").HttpsClientResponseClass>;
    sendBAPIRequest(method: HttpMethodsEnum, endpoint: string, timeout: number, body?: any): Promise<import("./types/httpsClient").HttpsClientResponseClass>;
}
