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
const base_1 = __importDefault(require("./base"));
const enums_1 = require("../types/enums");
const logger_1 = __importDefault(require("../logger"));
const LIB_NAME = 'TWOSTEPVERIFICATION_API';
const LOG_LOCAL = false;
const LOGGER = new logger_1.default(LIB_NAME, process.env.DEBUG === 'true' || LOG_LOCAL);
class TwoStepVerificationAPI extends base_1.default {
  constructor() {
    super(...arguments);
    this.commonMethod = enums_1.HttpMethodsEnum.Post;
    this.commonEndpoint = '';
  }
  setPin(pin) {
    const body = {
      pin: pin.toString()
    };
    LOGGER.log(`Setting two-step verification pin for phone number Id ${this.config[enums_1.WAConfigEnum.PhoneNumberId]}`);
    return this.client.sendCAPIRequest(this.commonMethod, this.commonEndpoint, this.config[enums_1.WAConfigEnum.RequestTimeout], JSON.stringify(body));
  }
}
exports.default = TwoStepVerificationAPI;
module.exports = exports.default;