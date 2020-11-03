'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.v12ColdchainInsuranceShipmentDataGET = function v12ColdchainInsuranceShipmentDataGET (req, res, next) {
  Default.v12ColdchainInsuranceShipmentDataGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainShipmentGraphInfoGET = function v12ColdchainShipmentGraphInfoGET (req, res, next) {
  Default.v12ColdchainShipmentGraphInfoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainShipmentProvenanceS_22GET = function v12ColdchainShipmentProvenanceS_22GET (req, res, next) {
  Default.v12ColdchainShipmentProvenanceS_22GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxAlertSensorDataGET = function v12ColdchainVaccineboxAlertSensorDataGET (req, res, next) {
  Default.v12ColdchainVaccineboxAlertSensorDataGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxClaimCountGET = function v12ColdchainVaccineboxClaimCountGET (req, res, next) {
  Default.v12ColdchainVaccineboxClaimCountGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxClaimRequestPOST = function v12ColdchainVaccineboxClaimRequestPOST (req, res, next, body) {
  Default.v12ColdchainVaccineboxClaimRequestPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxDeliverShipmentPUT = function v12ColdchainVaccineboxDeliverShipmentPUT (req, res, next, body) {
  Default.v12ColdchainVaccineboxDeliverShipmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxEventsShipmentMovementsS_22GET = function v12ColdchainVaccineboxEventsShipmentMovementsS_22GET (req, res, next) {
  Default.v12ColdchainVaccineboxEventsShipmentMovementsS_22GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxHighRiskShipmentsGET = function v12ColdchainVaccineboxHighRiskShipmentsGET (req, res, next) {
  Default.v12ColdchainVaccineboxHighRiskShipmentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxNotifyHighRiskShipmentsGET = function v12ColdchainVaccineboxNotifyHighRiskShipmentsGET (req, res, next) {
  Default.v12ColdchainVaccineboxNotifyHighRiskShipmentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxReceiveShipmentPUT = function v12ColdchainVaccineboxReceiveShipmentPUT (req, res, next, body) {
  Default.v12ColdchainVaccineboxReceiveShipmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxRecentClaimsGET = function v12ColdchainVaccineboxRecentClaimsGET (req, res, next) {
  Default.v12ColdchainVaccineboxRecentClaimsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxRecentShipmentsGET = function v12ColdchainVaccineboxRecentShipmentsGET (req, res, next) {
  Default.v12ColdchainVaccineboxRecentShipmentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxReportSensorDataAuditTrailS_22GET = function v12ColdchainVaccineboxReportSensorDataAuditTrailS_22GET (req, res, next) {
  Default.v12ColdchainVaccineboxReportSensorDataAuditTrailS_22GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxRetailShipmentPOST = function v12ColdchainVaccineboxRetailShipmentPOST (req, res, next, body) {
  Default.v12ColdchainVaccineboxRetailShipmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxShipmentPOST = function v12ColdchainVaccineboxShipmentPOST (req, res, next, body) {
  Default.v12ColdchainVaccineboxShipmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxShipmentS_22GET = function v12ColdchainVaccineboxShipmentS_22GET (req, res, next) {
  Default.v12ColdchainVaccineboxShipmentS_22GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v12ColdchainVaccineboxSimulateSensorDataPOST = function v12ColdchainVaccineboxSimulateSensorDataPOST (req, res, next, body) {
  Default.v12ColdchainVaccineboxSimulateSensorDataPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
