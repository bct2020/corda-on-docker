'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.v6ColdchainInsuranceClaimShipmentDataGET = function v6ColdchainInsuranceClaimShipmentDataGET (req, res, next) {
  Default.v6ColdchainInsuranceClaimShipmentDataGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxClaimRequestPOST = function v6ColdchainVaccineboxClaimRequestPOST (req, res, next, body) {
  Default.v6ColdchainVaccineboxClaimRequestPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxDeliverShipmentPUT = function v6ColdchainVaccineboxDeliverShipmentPUT (req, res, next, body) {
  Default.v6ColdchainVaccineboxDeliverShipmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxEventsShipmentMovements99GET = function v6ColdchainVaccineboxEventsShipmentMovements99GET (req, res, next) {
  Default.v6ColdchainVaccineboxEventsShipmentMovements99GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxHistorySensorData99GET = function v6ColdchainVaccineboxHistorySensorData99GET (req, res, next) {
  Default.v6ColdchainVaccineboxHistorySensorData99GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxReceiveShipmentPUT = function v6ColdchainVaccineboxReceiveShipmentPUT (req, res, next, body) {
  Default.v6ColdchainVaccineboxReceiveShipmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxReportAuditTrail99GET = function v6ColdchainVaccineboxReportAuditTrail99GET (req, res, next) {
  Default.v6ColdchainVaccineboxReportAuditTrail99GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxSensorDataPUT = function v6ColdchainVaccineboxSensorDataPUT (req, res, next, body) {
  Default.v6ColdchainVaccineboxSensorDataPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxShipment99GET = function v6ColdchainVaccineboxShipment99GET (req, res, next) {
  Default.v6ColdchainVaccineboxShipment99GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxShipmentByPartyPfizerGET = function v6ColdchainVaccineboxShipmentByPartyPfizerGET (req, res, next) {
  Default.v6ColdchainVaccineboxShipmentByPartyPfizerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v6ColdchainVaccineboxShipmentPOST = function v6ColdchainVaccineboxShipmentPOST (req, res, next, body) {
  Default.v6ColdchainVaccineboxShipmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
