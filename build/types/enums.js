"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyCodesEnum = exports.LanguagesEnum = exports.RequestCodeMethodsEnum = exports.ReferralSourceTypesEnum = exports.SystemChangeTypesEnum = exports.WebhookTypesEnum = exports.AudioMediaTypesEnum = exports.DocumentMediaTypesEnum = exports.ImageMediaTypesEnum = exports.StickerMediaTypesEnum = exports.VideoMediaTypesEnum = exports.StatusEnum = exports.ConversationTypesEnum = exports.WARequiredConfigEnum = exports.WAConfigEnum = exports.ComponentTypesEnum = exports.ButtonPositionEnum = exports.ButtonTypesEnum = exports.InteractiveTypesEnum = exports.ParametersTypesEnum = exports.MessageTypesEnum = exports.HttpMethodsEnum = void 0;
var HttpMethodsEnum;
(function (HttpMethodsEnum) {
  HttpMethodsEnum["Get"] = "GET";
  HttpMethodsEnum["Post"] = "POST";
  HttpMethodsEnum["Put"] = "PUT";
  HttpMethodsEnum["Delete"] = "DELETE";
})(HttpMethodsEnum = exports.HttpMethodsEnum || (exports.HttpMethodsEnum = {}));
var MessageTypesEnum;
(function (MessageTypesEnum) {
  MessageTypesEnum["Audio"] = "audio";
  MessageTypesEnum["Contacts"] = "contacts";
  MessageTypesEnum["Document"] = "document";
  MessageTypesEnum["Image"] = "image";
  MessageTypesEnum["Interactive"] = "interactive";
  MessageTypesEnum["Location"] = "location";
  MessageTypesEnum["Reaction"] = "sticker";
  MessageTypesEnum["Sticker"] = "sticker";
  MessageTypesEnum["Template"] = "template";
  MessageTypesEnum["Text"] = "text";
  MessageTypesEnum["Video"] = "video";
})(MessageTypesEnum = exports.MessageTypesEnum || (exports.MessageTypesEnum = {}));
var ParametersTypesEnum;
(function (ParametersTypesEnum) {
  ParametersTypesEnum["Currency"] = "currency";
  ParametersTypesEnum["DateTime"] = "date_time";
  ParametersTypesEnum["Document"] = "document";
  ParametersTypesEnum["Image"] = "image";
  ParametersTypesEnum["Text"] = "text";
  ParametersTypesEnum["Video"] = "video";
  ParametersTypesEnum["Payload"] = "payload";
})(ParametersTypesEnum = exports.ParametersTypesEnum || (exports.ParametersTypesEnum = {}));
var InteractiveTypesEnum;
(function (InteractiveTypesEnum) {
  InteractiveTypesEnum["Button"] = "button";
  InteractiveTypesEnum["List"] = "list";
  InteractiveTypesEnum["Product"] = "product";
  InteractiveTypesEnum["ProductList"] = "product_list";
})(InteractiveTypesEnum = exports.InteractiveTypesEnum || (exports.InteractiveTypesEnum = {}));
var ButtonTypesEnum;
(function (ButtonTypesEnum) {
  ButtonTypesEnum["QuickReply"] = "quick_reply";
  ButtonTypesEnum["URL"] = "url";
})(ButtonTypesEnum = exports.ButtonTypesEnum || (exports.ButtonTypesEnum = {}));
var ButtonPositionEnum;
(function (ButtonPositionEnum) {
  ButtonPositionEnum[ButtonPositionEnum["First"] = 0] = "First";
  ButtonPositionEnum[ButtonPositionEnum["Second"] = 1] = "Second";
  ButtonPositionEnum[ButtonPositionEnum["Third"] = 2] = "Third";
})(ButtonPositionEnum = exports.ButtonPositionEnum || (exports.ButtonPositionEnum = {}));
var ComponentTypesEnum;
(function (ComponentTypesEnum) {
  ComponentTypesEnum["Header"] = "header";
  ComponentTypesEnum["Body"] = "body";
  ComponentTypesEnum["Button"] = "button";
})(ComponentTypesEnum = exports.ComponentTypesEnum || (exports.ComponentTypesEnum = {}));
var WAConfigEnum;
(function (WAConfigEnum) {
  WAConfigEnum["BaseURL"] = "WA_BASE_URL";
  WAConfigEnum["AppId"] = "M4D_APP_ID";
  WAConfigEnum["AppSecret"] = "M4D_APP_SECRET";
  WAConfigEnum["PhoneNumberId"] = "WA_PHONE_NUMBER_ID";
  WAConfigEnum["BusinessAcctId"] = "WA_BUSINESS_ACCOUNT_ID";
  WAConfigEnum["APIVersion"] = "CLOUD_API_VERSION";
  WAConfigEnum["AccessToken"] = "CLOUD_API_ACCESS_TOKEN";
  WAConfigEnum["WebhookEndpoint"] = "WEBHOOK_ENDPOINT";
  WAConfigEnum["WebhookVerificationToken"] = "WEBHOOK_VERIFICATION_TOKEN";
  WAConfigEnum["ListenerPort"] = "LISTENER_PORT";
  WAConfigEnum["MaxRetriesAfterWait"] = "MAX_RETRIES_AFTER_WAIT";
  WAConfigEnum["RequestTimeout"] = "REQUEST_TIMEOUT";
  WAConfigEnum["Debug"] = "DEBUG";
})(WAConfigEnum = exports.WAConfigEnum || (exports.WAConfigEnum = {}));
var WARequiredConfigEnum;
(function (WARequiredConfigEnum) {
  WARequiredConfigEnum["APIVersion"] = "CLOUD_API_VERSION";
  WARequiredConfigEnum["AccessToken"] = "CLOUD_API_ACCESS_TOKEN";
})(WARequiredConfigEnum = exports.WARequiredConfigEnum || (exports.WARequiredConfigEnum = {}));
var ConversationTypesEnum;
(function (ConversationTypesEnum) {
  ConversationTypesEnum["BusinessInitiated"] = "business_initiated";
  ConversationTypesEnum["CustomerInitiated"] = "customer_initiated";
  ConversationTypesEnum["ReferralConversion"] = "referral_conversion";
})(ConversationTypesEnum = exports.ConversationTypesEnum || (exports.ConversationTypesEnum = {}));
var StatusEnum;
(function (StatusEnum) {
  StatusEnum["Delivered"] = "delivered";
  StatusEnum["Read"] = "read";
  StatusEnum["Sent"] = "sent";
})(StatusEnum = exports.StatusEnum || (exports.StatusEnum = {}));
var VideoMediaTypesEnum;
(function (VideoMediaTypesEnum) {
  VideoMediaTypesEnum["Mp4"] = "video/mp4";
  VideoMediaTypesEnum["Threegp"] = "video/3gp";
})(VideoMediaTypesEnum = exports.VideoMediaTypesEnum || (exports.VideoMediaTypesEnum = {}));
var StickerMediaTypesEnum;
(function (StickerMediaTypesEnum) {
  StickerMediaTypesEnum["Webp"] = "image/webp";
})(StickerMediaTypesEnum = exports.StickerMediaTypesEnum || (exports.StickerMediaTypesEnum = {}));
var ImageMediaTypesEnum;
(function (ImageMediaTypesEnum) {
  ImageMediaTypesEnum["Jpeg"] = "image/jpeg";
  ImageMediaTypesEnum["Png"] = "image/png";
})(ImageMediaTypesEnum = exports.ImageMediaTypesEnum || (exports.ImageMediaTypesEnum = {}));
var DocumentMediaTypesEnum;
(function (DocumentMediaTypesEnum) {
  DocumentMediaTypesEnum["Text"] = "text/plain";
  DocumentMediaTypesEnum["Pdf"] = "application/pdf";
  DocumentMediaTypesEnum["Ppt"] = "application/vnd.ms-powerpoint";
  DocumentMediaTypesEnum["Word"] = "application/msword";
  DocumentMediaTypesEnum["Excel"] = "application/vnd.ms-excel";
  DocumentMediaTypesEnum["OpenDoc"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  DocumentMediaTypesEnum["OpenPres"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
  DocumentMediaTypesEnum["OpenSheet"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
})(DocumentMediaTypesEnum = exports.DocumentMediaTypesEnum || (exports.DocumentMediaTypesEnum = {}));
var AudioMediaTypesEnum;
(function (AudioMediaTypesEnum) {
  AudioMediaTypesEnum["Aac"] = "audio/aac";
  AudioMediaTypesEnum["Mp4"] = "audio/mp4";
  AudioMediaTypesEnum["Mpeg"] = "audio/mpeg";
  AudioMediaTypesEnum["Amr"] = "audio/amr";
  AudioMediaTypesEnum["Ogg"] = "audio/ogg";
})(AudioMediaTypesEnum = exports.AudioMediaTypesEnum || (exports.AudioMediaTypesEnum = {}));
var WebhookTypesEnum;
(function (WebhookTypesEnum) {
  WebhookTypesEnum["Audio"] = "audio";
  WebhookTypesEnum["Button"] = "button";
  WebhookTypesEnum["Document"] = "document";
  WebhookTypesEnum["Text"] = "text";
  WebhookTypesEnum["Image"] = "image";
  WebhookTypesEnum["Interactive"] = "interactive";
  WebhookTypesEnum["Order"] = "order";
  WebhookTypesEnum["Sticker"] = "sticker";
  WebhookTypesEnum["System"] = "system";
  WebhookTypesEnum["Unknown"] = "unknown";
  WebhookTypesEnum["Video"] = "video";
})(WebhookTypesEnum = exports.WebhookTypesEnum || (exports.WebhookTypesEnum = {}));
var SystemChangeTypesEnum;
(function (SystemChangeTypesEnum) {
  SystemChangeTypesEnum["CustomerChangedNumber"] = "customer_changed_number";
  SystemChangeTypesEnum["CustomerIdentityChanged"] = "customer_identity_changed";
})(SystemChangeTypesEnum = exports.SystemChangeTypesEnum || (exports.SystemChangeTypesEnum = {}));
var ReferralSourceTypesEnum;
(function (ReferralSourceTypesEnum) {
  ReferralSourceTypesEnum["Ad"] = "ad";
  ReferralSourceTypesEnum["Post"] = "post";
})(ReferralSourceTypesEnum = exports.ReferralSourceTypesEnum || (exports.ReferralSourceTypesEnum = {}));
var RequestCodeMethodsEnum;
(function (RequestCodeMethodsEnum) {
  RequestCodeMethodsEnum["Sms"] = "SMS";
  RequestCodeMethodsEnum["Voice"] = "VOICE";
})(RequestCodeMethodsEnum = exports.RequestCodeMethodsEnum || (exports.RequestCodeMethodsEnum = {}));
var LanguagesEnum;
(function (LanguagesEnum) {
  LanguagesEnum["Afrikaans"] = "af";
  LanguagesEnum["Albanian"] = "sq";
  LanguagesEnum["Arabic"] = "ar";
  LanguagesEnum["Azerbaijani"] = "az";
  LanguagesEnum["Bengali"] = "bn";
  LanguagesEnum["Bulgarian"] = "bg";
  LanguagesEnum["Catalan"] = "ca";
  LanguagesEnum["Chinese_CHN"] = "zh_CN";
  LanguagesEnum["Chinese_HKG"] = "zh_HK";
  LanguagesEnum["Chinese_TAI"] = "zh_TW";
  LanguagesEnum["Croatian"] = "hr";
  LanguagesEnum["Czech"] = "cs";
  LanguagesEnum["Danish"] = "da";
  LanguagesEnum["Dutch"] = "nl";
  LanguagesEnum["English"] = "en";
  LanguagesEnum["English_UK"] = "en_GB";
  LanguagesEnum["English_US"] = "en_US";
  LanguagesEnum["Estonian"] = "et";
  LanguagesEnum["Filipino"] = "fil";
  LanguagesEnum["Finnish"] = "fi";
  LanguagesEnum["French"] = "fr";
  LanguagesEnum["Georgian"] = "ka";
  LanguagesEnum["German"] = "de";
  LanguagesEnum["Greek"] = "el";
  LanguagesEnum["Gujarati"] = "gu";
  LanguagesEnum["Hausa"] = "ha";
  LanguagesEnum["Hebrew"] = "he";
  LanguagesEnum["Hindi"] = "hi";
  LanguagesEnum["Hungarian"] = "hu";
  LanguagesEnum["Indonesian"] = "id";
  LanguagesEnum["Irish"] = "ga";
  LanguagesEnum["Italian"] = "it";
  LanguagesEnum["Japanese"] = "ja";
  LanguagesEnum["Kannada"] = "kn";
  LanguagesEnum["Kazakh"] = "kk";
  LanguagesEnum["Kinyarwanda"] = "rw_RW";
  LanguagesEnum["Korean"] = "ko";
  LanguagesEnum["Kyrgyz_Kyrgyzstan"] = "ky_KG";
  LanguagesEnum["Lao"] = "lo";
  LanguagesEnum["Latvian"] = "lv";
  LanguagesEnum["Lithuanian"] = "lt";
  LanguagesEnum["Macedonian"] = "mk";
  LanguagesEnum["Malay"] = "ms";
  LanguagesEnum["Malayalam"] = "ml";
  LanguagesEnum["Marathi"] = "mr";
  LanguagesEnum["Norwegian"] = "nb";
  LanguagesEnum["Persian"] = "fa";
  LanguagesEnum["Polish"] = "pl";
  LanguagesEnum["Portuguese_BR"] = "pt_BR";
  LanguagesEnum["Portuguese_POR"] = "pt_PT";
  LanguagesEnum["Punjabi"] = "pa";
  LanguagesEnum["Romanian"] = "ro";
  LanguagesEnum["Russian"] = "ru";
  LanguagesEnum["Serbian"] = "sr";
  LanguagesEnum["Slovak"] = "sk";
  LanguagesEnum["Slovenian"] = "sl";
  LanguagesEnum["Spanish"] = "es";
  LanguagesEnum["Spanish_ARG"] = "es_AR";
  LanguagesEnum["Spanish_SPA"] = "es_ES";
  LanguagesEnum["Spanish_MEX"] = "es_MX";
  LanguagesEnum["Swahili"] = "sw";
  LanguagesEnum["Swedish"] = "sv";
  LanguagesEnum["Tamil"] = "ta";
  LanguagesEnum["Telugu"] = "te";
  LanguagesEnum["Thai"] = "th";
  LanguagesEnum["Turkish"] = "tr";
  LanguagesEnum["Ukrainian"] = "uk";
  LanguagesEnum["Urdu"] = "ur";
  LanguagesEnum["Uzbek"] = "uz";
  LanguagesEnum["Vietnamese"] = "vi";
  LanguagesEnum["Zulu"] = "zu";
})(LanguagesEnum = exports.LanguagesEnum || (exports.LanguagesEnum = {}));
var CurrencyCodesEnum;
(function (CurrencyCodesEnum) {
  CurrencyCodesEnum["AFN"] = "AFN";
  CurrencyCodesEnum["EUR"] = "EUR";
  CurrencyCodesEnum["ALL"] = "ALL";
  CurrencyCodesEnum["DZD"] = "DZD";
  CurrencyCodesEnum["USD"] = "USD";
  CurrencyCodesEnum["AOA"] = "AOA";
  CurrencyCodesEnum["XCD"] = "XCD";
  CurrencyCodesEnum["ARS"] = "ARS";
  CurrencyCodesEnum["AMD"] = "AMD";
  CurrencyCodesEnum["AWG"] = "AWG";
  CurrencyCodesEnum["AUD"] = "AUD";
  CurrencyCodesEnum["AZN"] = "AZN";
  CurrencyCodesEnum["BSD"] = "BSD";
  CurrencyCodesEnum["BHD"] = "BHD";
  CurrencyCodesEnum["BDT"] = "BDT";
  CurrencyCodesEnum["BBD"] = "BBD";
  CurrencyCodesEnum["BYN"] = "BYN";
  CurrencyCodesEnum["BZD"] = "BZD";
  CurrencyCodesEnum["XOF"] = "XOF";
  CurrencyCodesEnum["BMD"] = "BMD";
  CurrencyCodesEnum["INR"] = "INR";
  CurrencyCodesEnum["BTN"] = "BTN";
  CurrencyCodesEnum["BOB"] = "BOB";
  CurrencyCodesEnum["BOV"] = "BOV";
  CurrencyCodesEnum["BAM"] = "BAM";
  CurrencyCodesEnum["BWP"] = "BWP";
  CurrencyCodesEnum["NOK"] = "NOK";
  CurrencyCodesEnum["BRL"] = "BRL";
  CurrencyCodesEnum["BND"] = "BND";
  CurrencyCodesEnum["BGN"] = "BGN";
  CurrencyCodesEnum["BIF"] = "BIF";
  CurrencyCodesEnum["CVE"] = "CVE";
  CurrencyCodesEnum["KHR"] = "KHR";
  CurrencyCodesEnum["XAF"] = "XAF";
  CurrencyCodesEnum["CAD"] = "CAD";
  CurrencyCodesEnum["KYD"] = "KYD";
  CurrencyCodesEnum["CLP"] = "CLP";
  CurrencyCodesEnum["CLF"] = "CLF";
  CurrencyCodesEnum["CNY"] = "CNY";
  CurrencyCodesEnum["COP"] = "COP";
  CurrencyCodesEnum["COU"] = "COU";
  CurrencyCodesEnum["KMF"] = "KMF";
  CurrencyCodesEnum["CDF"] = "CDF";
  CurrencyCodesEnum["NZD"] = "NZD";
  CurrencyCodesEnum["CRC"] = "CRC";
  CurrencyCodesEnum["HRK"] = "HRK";
  CurrencyCodesEnum["CUP"] = "CUP";
  CurrencyCodesEnum["CUC"] = "CUC";
  CurrencyCodesEnum["ANG"] = "ANG";
  CurrencyCodesEnum["CZK"] = "CZK";
  CurrencyCodesEnum["DKK"] = "DKK";
  CurrencyCodesEnum["DJF"] = "DJF";
  CurrencyCodesEnum["DOP"] = "DOP";
  CurrencyCodesEnum["EGP"] = "EGP";
  CurrencyCodesEnum["SVC"] = "SVC";
  CurrencyCodesEnum["ERN"] = "ERN";
  CurrencyCodesEnum["SZL"] = "SZL";
  CurrencyCodesEnum["ETB"] = "ETB";
  CurrencyCodesEnum["FKP"] = "FKP";
  CurrencyCodesEnum["FJD"] = "FJD";
  CurrencyCodesEnum["XPF"] = "XPF";
  CurrencyCodesEnum["GMD"] = "GMD";
  CurrencyCodesEnum["GEL"] = "GEL";
  CurrencyCodesEnum["GHS"] = "GHS";
  CurrencyCodesEnum["GIP"] = "GIP";
  CurrencyCodesEnum["GTQ"] = "GTQ";
  CurrencyCodesEnum["GBP"] = "GBP";
  CurrencyCodesEnum["GNF"] = "GNF";
  CurrencyCodesEnum["GYD"] = "GYD";
  CurrencyCodesEnum["HTG"] = "HTG";
  CurrencyCodesEnum["HNL"] = "HNL";
  CurrencyCodesEnum["HKD"] = "HKD";
  CurrencyCodesEnum["HUF"] = "HUF";
  CurrencyCodesEnum["ISK"] = "ISK";
  CurrencyCodesEnum["IDR"] = "IDR";
  CurrencyCodesEnum["XDR"] = "XDR";
  CurrencyCodesEnum["IRR"] = "IRR";
  CurrencyCodesEnum["IQD"] = "IQD";
  CurrencyCodesEnum["ILS"] = "ILS";
  CurrencyCodesEnum["JMD"] = "JMD";
  CurrencyCodesEnum["JPY"] = "JPY";
  CurrencyCodesEnum["JOD"] = "JOD";
  CurrencyCodesEnum["KZT"] = "KZT";
  CurrencyCodesEnum["KES"] = "KES";
  CurrencyCodesEnum["KPW"] = "KPW";
  CurrencyCodesEnum["KRW"] = "KRW";
  CurrencyCodesEnum["KWD"] = "KWD";
  CurrencyCodesEnum["KGS"] = "KGS";
  CurrencyCodesEnum["LAK"] = "LAK";
  CurrencyCodesEnum["LBP"] = "LBP";
  CurrencyCodesEnum["LSL"] = "LSL";
  CurrencyCodesEnum["ZAR"] = "ZAR";
  CurrencyCodesEnum["LRD"] = "LRD";
  CurrencyCodesEnum["LYD"] = "LYD";
  CurrencyCodesEnum["CHF"] = "CHF";
  CurrencyCodesEnum["MOP"] = "MOP";
  CurrencyCodesEnum["MKD"] = "MKD";
  CurrencyCodesEnum["MGA"] = "MGA";
  CurrencyCodesEnum["MWK"] = "MWK";
  CurrencyCodesEnum["MYR"] = "MYR";
  CurrencyCodesEnum["MVR"] = "MVR";
  CurrencyCodesEnum["MRU"] = "MRU";
  CurrencyCodesEnum["MUR"] = "MUR";
  CurrencyCodesEnum["XUA"] = "XUA";
  CurrencyCodesEnum["MXN"] = "MXN";
  CurrencyCodesEnum["MXV"] = "MXV";
  CurrencyCodesEnum["MDL"] = "MDL";
  CurrencyCodesEnum["MNT"] = "MNT";
  CurrencyCodesEnum["MAD"] = "MAD";
  CurrencyCodesEnum["MZN"] = "MZN";
  CurrencyCodesEnum["MMK"] = "MMK";
  CurrencyCodesEnum["NAD"] = "NAD";
  CurrencyCodesEnum["NPR"] = "NPR";
  CurrencyCodesEnum["NIO"] = "NIO";
  CurrencyCodesEnum["NGN"] = "NGN";
  CurrencyCodesEnum["OMR"] = "OMR";
  CurrencyCodesEnum["PKR"] = "PKR";
  CurrencyCodesEnum["PAB"] = "PAB";
  CurrencyCodesEnum["PGK"] = "PGK";
  CurrencyCodesEnum["PYG"] = "PYG";
  CurrencyCodesEnum["PEN"] = "PEN";
  CurrencyCodesEnum["PHP"] = "PHP";
  CurrencyCodesEnum["PLN"] = "PLN";
  CurrencyCodesEnum["QAR"] = "QAR";
  CurrencyCodesEnum["RON"] = "RON";
  CurrencyCodesEnum["RUB"] = "RUB";
  CurrencyCodesEnum["RWF"] = "RWF";
  CurrencyCodesEnum["SHP"] = "SHP";
  CurrencyCodesEnum["WST"] = "WST";
  CurrencyCodesEnum["STN"] = "STN";
  CurrencyCodesEnum["SAR"] = "SAR";
  CurrencyCodesEnum["RSD"] = "RSD";
  CurrencyCodesEnum["SCR"] = "SCR";
  CurrencyCodesEnum["SLL"] = "SLL";
  CurrencyCodesEnum["SGD"] = "SGD";
  CurrencyCodesEnum["XSU"] = "XSU";
  CurrencyCodesEnum["SBD"] = "SBD";
  CurrencyCodesEnum["SOS"] = "SOS";
  CurrencyCodesEnum["SSP"] = "SSP";
  CurrencyCodesEnum["LKR"] = "LKR";
  CurrencyCodesEnum["SDG"] = "SDG";
  CurrencyCodesEnum["SRD"] = "SRD";
  CurrencyCodesEnum["SEK"] = "SEK";
  CurrencyCodesEnum["CHE"] = "CHE";
  CurrencyCodesEnum["CHW"] = "CHW";
  CurrencyCodesEnum["SYP"] = "SYP";
  CurrencyCodesEnum["TWD"] = "TWD";
  CurrencyCodesEnum["TJS"] = "TJS";
  CurrencyCodesEnum["TZS"] = "TZS";
  CurrencyCodesEnum["THB"] = "THB";
  CurrencyCodesEnum["TOP"] = "TOP";
  CurrencyCodesEnum["TTD"] = "TTD";
  CurrencyCodesEnum["TND"] = "TND";
  CurrencyCodesEnum["TRY"] = "TRY";
  CurrencyCodesEnum["TMT"] = "TMT";
  CurrencyCodesEnum["UGX"] = "UGX";
  CurrencyCodesEnum["UAH"] = "UAH";
  CurrencyCodesEnum["AED"] = "AED";
  CurrencyCodesEnum["USN"] = "USN";
  CurrencyCodesEnum["UYU"] = "UYU";
  CurrencyCodesEnum["UYI"] = "UYI";
  CurrencyCodesEnum["UYW"] = "UYW";
  CurrencyCodesEnum["UZS"] = "UZS";
  CurrencyCodesEnum["VUV"] = "VUV";
  CurrencyCodesEnum["VES"] = "VES";
  CurrencyCodesEnum["VND"] = "VND";
  CurrencyCodesEnum["YER"] = "YER";
  CurrencyCodesEnum["ZMW"] = "ZMW";
  CurrencyCodesEnum["ZWL"] = "ZWL";
  CurrencyCodesEnum["XBA"] = "XBA";
  CurrencyCodesEnum["XBB"] = "XBB";
  CurrencyCodesEnum["XBC"] = "XBC";
  CurrencyCodesEnum["XBD"] = "XBD";
  CurrencyCodesEnum["XTS"] = "XTS";
  CurrencyCodesEnum["XXX"] = "XXX";
  CurrencyCodesEnum["XAU"] = "XAU";
  CurrencyCodesEnum["XPD"] = "XPD";
  CurrencyCodesEnum["XPT"] = "XPT";
  CurrencyCodesEnum["XAG"] = "XAG";
  CurrencyCodesEnum["AFA"] = "AFA";
  CurrencyCodesEnum["FIM"] = "FIM";
  CurrencyCodesEnum["ALK"] = "ALK";
  CurrencyCodesEnum["ADP"] = "ADP";
  CurrencyCodesEnum["ESP"] = "ESP";
  CurrencyCodesEnum["FRF"] = "FRF";
  CurrencyCodesEnum["AOK"] = "AOK";
  CurrencyCodesEnum["AON"] = "AON";
  CurrencyCodesEnum["AOR"] = "AOR";
  CurrencyCodesEnum["ARA"] = "ARA";
  CurrencyCodesEnum["ARP"] = "ARP";
  CurrencyCodesEnum["ARY"] = "ARY";
  CurrencyCodesEnum["RUR"] = "RUR";
  CurrencyCodesEnum["ATS"] = "ATS";
  CurrencyCodesEnum["AYM"] = "AYM";
  CurrencyCodesEnum["AZM"] = "AZM";
  CurrencyCodesEnum["BYB"] = "BYB";
  CurrencyCodesEnum["BYR"] = "BYR";
  CurrencyCodesEnum["BEC"] = "BEC";
  CurrencyCodesEnum["BEF"] = "BEF";
  CurrencyCodesEnum["BEL"] = "BEL";
  CurrencyCodesEnum["BOP"] = "BOP";
  CurrencyCodesEnum["BAD"] = "BAD";
  CurrencyCodesEnum["BRB"] = "BRB";
  CurrencyCodesEnum["BRC"] = "BRC";
  CurrencyCodesEnum["BRE"] = "BRE";
  CurrencyCodesEnum["BRN"] = "BRN";
  CurrencyCodesEnum["BRR"] = "BRR";
  CurrencyCodesEnum["BGJ"] = "BGJ";
  CurrencyCodesEnum["BGK"] = "BGK";
  CurrencyCodesEnum["BGL"] = "BGL";
  CurrencyCodesEnum["BUK"] = "BUK";
  CurrencyCodesEnum["HRD"] = "HRD";
  CurrencyCodesEnum["CYP"] = "CYP";
  CurrencyCodesEnum["CSJ"] = "CSJ";
  CurrencyCodesEnum["CSK"] = "CSK";
  CurrencyCodesEnum["ECS"] = "ECS";
  CurrencyCodesEnum["ECV"] = "ECV";
  CurrencyCodesEnum["GQE"] = "GQE";
  CurrencyCodesEnum["EEK"] = "EEK";
  CurrencyCodesEnum["XEU"] = "XEU";
  CurrencyCodesEnum["GEK"] = "GEK";
  CurrencyCodesEnum["DDM"] = "DDM";
  CurrencyCodesEnum["DEM"] = "DEM";
  CurrencyCodesEnum["GHC"] = "GHC";
  CurrencyCodesEnum["GHP"] = "GHP";
  CurrencyCodesEnum["GRD"] = "GRD";
  CurrencyCodesEnum["GNE"] = "GNE";
  CurrencyCodesEnum["GNS"] = "GNS";
  CurrencyCodesEnum["GWE"] = "GWE";
  CurrencyCodesEnum["GWP"] = "GWP";
  CurrencyCodesEnum["ITL"] = "ITL";
  CurrencyCodesEnum["ISJ"] = "ISJ";
  CurrencyCodesEnum["IEP"] = "IEP";
  CurrencyCodesEnum["ILP"] = "ILP";
  CurrencyCodesEnum["ILR"] = "ILR";
  CurrencyCodesEnum["LAJ"] = "LAJ";
  CurrencyCodesEnum["LVL"] = "LVL";
  CurrencyCodesEnum["LVR"] = "LVR";
  CurrencyCodesEnum["LSM"] = "LSM";
  CurrencyCodesEnum["ZAL"] = "ZAL";
  CurrencyCodesEnum["LTL"] = "LTL";
  CurrencyCodesEnum["LTT"] = "LTT";
  CurrencyCodesEnum["LUC"] = "LUC";
  CurrencyCodesEnum["LUF"] = "LUF";
  CurrencyCodesEnum["LUL"] = "LUL";
  CurrencyCodesEnum["MGF"] = "MGF";
  CurrencyCodesEnum["MVQ"] = "MVQ";
  CurrencyCodesEnum["MLF"] = "MLF";
  CurrencyCodesEnum["MTL"] = "MTL";
  CurrencyCodesEnum["MTP"] = "MTP";
  CurrencyCodesEnum["MRO"] = "MRO";
  CurrencyCodesEnum["MXP"] = "MXP";
  CurrencyCodesEnum["MZE"] = "MZE";
  CurrencyCodesEnum["MZM"] = "MZM";
  CurrencyCodesEnum["NLG"] = "NLG";
  CurrencyCodesEnum["NIC"] = "NIC";
  CurrencyCodesEnum["PEH"] = "PEH";
  CurrencyCodesEnum["PEI"] = "PEI";
  CurrencyCodesEnum["PES"] = "PES";
  CurrencyCodesEnum["PLZ"] = "PLZ";
  CurrencyCodesEnum["PTE"] = "PTE";
  CurrencyCodesEnum["ROK"] = "ROK";
  CurrencyCodesEnum["ROL"] = "ROL";
  CurrencyCodesEnum["STD"] = "STD";
  CurrencyCodesEnum["CSD"] = "CSD";
  CurrencyCodesEnum["SKK"] = "SKK";
  CurrencyCodesEnum["SIT"] = "SIT";
  CurrencyCodesEnum["RHD"] = "RHD";
  CurrencyCodesEnum["ESA"] = "ESA";
  CurrencyCodesEnum["ESB"] = "ESB";
  CurrencyCodesEnum["SDD"] = "SDD";
  CurrencyCodesEnum["SDP"] = "SDP";
  CurrencyCodesEnum["SRG"] = "SRG";
  CurrencyCodesEnum["CHC"] = "CHC";
  CurrencyCodesEnum["TJR"] = "TJR";
  CurrencyCodesEnum["TPE"] = "TPE";
  CurrencyCodesEnum["TRL"] = "TRL";
  CurrencyCodesEnum["TMM"] = "TMM";
  CurrencyCodesEnum["UGS"] = "UGS";
  CurrencyCodesEnum["UGW"] = "UGW";
  CurrencyCodesEnum["UAK"] = "UAK";
  CurrencyCodesEnum["SUR"] = "SUR";
  CurrencyCodesEnum["USS"] = "USS";
  CurrencyCodesEnum["UYN"] = "UYN";
  CurrencyCodesEnum["UYP"] = "UYP";
  CurrencyCodesEnum["VEB"] = "VEB";
  CurrencyCodesEnum["VEF"] = "VEF";
  CurrencyCodesEnum["VNC"] = "VNC";
  CurrencyCodesEnum["YDD"] = "YDD";
  CurrencyCodesEnum["YUD"] = "YUD";
  CurrencyCodesEnum["YUM"] = "YUM";
  CurrencyCodesEnum["YUN"] = "YUN";
  CurrencyCodesEnum["ZRN"] = "ZRN";
  CurrencyCodesEnum["ZRZ"] = "ZRZ";
  CurrencyCodesEnum["ZMK"] = "ZMK";
  CurrencyCodesEnum["ZWC"] = "ZWC";
  CurrencyCodesEnum["ZWD"] = "ZWD";
  CurrencyCodesEnum["ZWN"] = "ZWN";
  CurrencyCodesEnum["ZWR"] = "ZWR";
  CurrencyCodesEnum["XFO"] = "XFO";
  CurrencyCodesEnum["XRE"] = "XRE";
  CurrencyCodesEnum["XFU"] = "XFU";
})(CurrencyCodesEnum = exports.CurrencyCodesEnum || (exports.CurrencyCodesEnum = {}));