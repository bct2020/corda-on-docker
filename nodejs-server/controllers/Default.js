'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.v7ColdchainInsuranceClaimShipmentDataGET = function v7ColdchainInsuranceClaimShipmentDataGET (req, res, next) {
  Default.v7ColdchainInsuranceClaimShipmentDataGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxClaimRequestPOST = function v7ColdchainVaccineboxClaimRequestPOST (req, res, next, body) {
  Default.v7ColdchainVaccineboxClaimRequestPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxDeliverShipmentPUT = function v7ColdchainVaccineboxDeliverShipmentPUT (req, res, next, body) {
  Default.v7ColdchainVaccineboxDeliverShipmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxReceiveShipmentPUT = function v7ColdchainVaccineboxReceiveShipmentPUT (req, res, next, body) {
  Default.v7ColdchainVaccineboxReceiveShipmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxRecentShipmentsGET = function v7ColdchainVaccineboxRecentShipmentsGET (req, res, next) {
  Default.v7ColdchainVaccineboxRecentShipmentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxReportSensorDataAuditTrailPF_001_2020GET = function v7ColdchainVaccineboxReportSensorDataAuditTrailPF_001_2020GET (req, res, next) {
  Default.v7ColdchainVaccineboxReportSensorDataAuditTrailPF_001_2020GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxShipmentByPartyPfizerGET = function v7ColdchainVaccineboxShipmentByPartyPfizerGET (req, res, next) {
  Default.v7ColdchainVaccineboxShipmentByPartyPfizerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxShipmentPF_001_2020GET = function v7ColdchainVaccineboxShipmentPF_001_2020GET (req, res, next) {
  Default.v7ColdchainVaccineboxShipmentPF_001_2020GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxShipmentPOST = function v7ColdchainVaccineboxShipmentPOST (req, res, next, body) {
  Default.v7ColdchainVaccineboxShipmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v7ColdchainVaccineboxSimulateSensorDataPUT = function v7ColdchainVaccineboxSimulateSensorDataPUT (req, res, next, body) {
  Default.v7ColdchainVaccineboxSimulateSensorDataPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
