const exec = require("cordova/exec");
const core = require("@aerogearservices/core");

const MOBILE_CORE_CLASS = "MobileCoreModule";

const MetricsService = {
  getMetrics: function (success, error) {
    exec(success, error, MOBILE_CORE_CLASS, "getMetrics");
  }
};

const MobileCore = {
  MetricsService,
  core
};

window.MobileCore = MobileCore;
