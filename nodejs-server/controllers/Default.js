'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.v10ColdchainInsuranceShipmentDataGET = function v10ColdchainInsuranceShipmentDataGET (req, res, next) {
  Default.v10ColdchainInsuranceShipmentDataGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainShipmentGraphInfoGET = function v10ColdchainShipmentGraphInfoGET (req, res, next) {
  Default.v10ColdchainShipmentGraphInfoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxClaimCountGET = function v10ColdchainVaccineboxClaimCountGET (req, res, next) {
  Default.v10ColdchainVaccineboxClaimCountGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxClaimRequestPOST = function v10ColdchainVaccineboxClaimRequestPOST (req, res, next, body) {
  Default.v10ColdchainVaccineboxClaimRequestPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxDeliverShipmentPUT = function v10ColdchainVaccineboxDeliverShipmentPUT (req, res, next, body) {
  Default.v10ColdchainVaccineboxDeliverShipmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxEventsShipmentMovementsS_07GET = function v10ColdchainVaccineboxEventsShipmentMovementsS_07GET (req, res, next) {
  Default.v10ColdchainVaccineboxEventsShipmentMovementsS_07GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxHighRiskShipmentsGET = function v10ColdchainVaccineboxHighRiskShipmentsGET (req, res, next) {
  Default.v10ColdchainVaccineboxHighRiskShipmentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxNotifyHighRiskShipmentsGET = function v10ColdchainVaccineboxNotifyHighRiskShipmentsGET (req, res, next) {
  Default.v10ColdchainVaccineboxNotifyHighRiskShipmentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxReceiveShipmentPUT = function v10ColdchainVaccineboxReceiveShipmentPUT (req, res, next, body) {
  Default.v10ColdchainVaccineboxReceiveShipmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxRecentClaimsGET = function v10ColdchainVaccineboxRecentClaimsGET (req, res, next) {
  Default.v10ColdchainVaccineboxRecentClaimsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxRecentShipmentsGET = function v10ColdchainVaccineboxRecentShipmentsGET (req, res, next) {
  Default.v10ColdchainVaccineboxRecentShipmentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxReportSensorDataAuditTrailS_07GET = function v10ColdchainVaccineboxReportSensorDataAuditTrailS_07GET (req, res, next) {
  Default.v10ColdchainVaccineboxReportSensorDataAuditTrailS_07GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxShipmentByPartyPfizerGET = function v10ColdchainVaccineboxShipmentByPartyPfizerGET (req, res, next) {
  Default.v10ColdchainVaccineboxShipmentByPartyPfizerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxShipmentCountGET = function v10ColdchainVaccineboxShipmentCountGET (req, res, next) {
  Default.v10ColdchainVaccineboxShipmentCountGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxShipmentPOST = function v10ColdchainVaccineboxShipmentPOST (req, res, next, body) {
  Default.v10ColdchainVaccineboxShipmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxShipmentS_07GET = function v10ColdchainVaccineboxShipmentS_07GET (req, res, next) {
  Default.v10ColdchainVaccineboxShipmentS_07GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v10ColdchainVaccineboxSimulateSensorDataPOST = function v10ColdchainVaccineboxSimulateSensorDataPOST (req, res, next, body) {
  Default.v10ColdchainVaccineboxSimulateSensorDataPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
