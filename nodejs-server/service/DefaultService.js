'use strict';


/**
 * API returns shipment with claims submitted
 *
 * no response value expected for this operation
 **/
exports.v12ColdchainInsuranceShipmentDataGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * API used to retrieve geotag data(Current location).
 *
 * returns Object
 **/
exports.v12ColdchainShipmentGraphInfoGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to gett shipment movement tracker information
 *
 * returns inline_response_200_2
 **/
exports.v12ColdchainShipmentProvenanceS_22GET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Childlegs" : [ {
    "Origin" : "Origin",
    "MasterShipmentId" : "MasterShipmentId",
    "destinationAddress" : "destinationAddress",
    "RetailShipmentId" : "RetailShipmentId",
    "destinationRole" : "destinationRole",
    "originAddress" : "originAddress",
    "destination" : "destination",
    "originRole" : "originRole",
    "RetailQuantity" : 0,
    "Logistics" : "Logistics"
  }, {
    "Origin" : "Origin",
    "MasterShipmentId" : "MasterShipmentId",
    "destinationAddress" : "destinationAddress",
    "RetailShipmentId" : "RetailShipmentId",
    "destinationRole" : "destinationRole",
    "originAddress" : "originAddress",
    "destination" : "destination",
    "originRole" : "originRole",
    "RetailQuantity" : 0,
    "Logistics" : "Logistics"
  } ],
  "OriginLeg" : {
    "ShipmentId" : "ShipmentId",
    "Origin" : "Origin",
    "destinationAddress" : "destinationAddress",
    "destinationRole" : "destinationRole",
    "DeviceId" : "DeviceId",
    "originAddress" : "originAddress",
    "BatchId" : "BatchId",
    "destination" : "destination",
    "originRole" : "originRole",
    "Logistics" : "Logistics"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to send alert to users
 *
 * returns inline_response_200_3
 **/
exports.v12ColdchainVaccineboxAlertSensorDataGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "txTime" : "txTime",
  "shipmentId" : "shipmentId",
  "temperature" : 0,
  "deviceId" : "deviceId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API returns the total number of claims submitted
 *
 * returns inline_response_200
 **/
exports.v12ColdchainVaccineboxClaimCountGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ClaimCount" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API for submitting claim request
 *
 * body Body  (optional)
 * returns inline_response_200_1
 **/
exports.v12ColdchainVaccineboxClaimRequestPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ShipmentId" : "ShipmentId",
  "ClaimId" : "ClaimId",
  "response" : "response"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API used to deliver shipment to consignee
 *
 * body Body_3  (optional)
 * returns inline_response_201
 **/
exports.v12ColdchainVaccineboxDeliverShipmentPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "shipmentId" : "shipmentId",
  "response" : "response",
  "currentRole" : "currentRole",
  "nextRole" : "nextRole"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API shows shipment movement data
 *
 * returns Object
 **/
exports.v12ColdchainVaccineboxEventsShipmentMovementsS_22GET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API returns a list of high risk shipments
 *
 * returns Object
 **/
exports.v12ColdchainVaccineboxHighRiskShipmentsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API used to notify high risk shipments
 *
 * returns inline_response_200_8
 **/
exports.v12ColdchainVaccineboxNotifyHighRiskShipmentsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "HighRisk" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API for receiving shipment by a consignee
 *
 * body Body_5  (optional)
 * returns inline_response_201
 **/
exports.v12ColdchainVaccineboxReceiveShipmentPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "shipmentId" : "shipmentId",
  "response" : "response",
  "currentRole" : "currentRole",
  "nextRole" : "nextRole"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API returns recent claims information
 *
 * returns Object
 **/
exports.v12ColdchainVaccineboxRecentClaimsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API returns recent shipment list
 *
 * returns Object
 **/
exports.v12ColdchainVaccineboxRecentShipmentsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API returns sensor data audit trail
 *
 * returns Object
 **/
exports.v12ColdchainVaccineboxReportSensorDataAuditTrailS_22GET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API to submit retail shipment (Wholesaler to Retailer)
 *
 * body Body_1  (optional)
 * returns inline_response_200_4
 **/
exports.v12ColdchainVaccineboxRetailShipmentPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "RetailShipmentId" : "RetailShipmentId",
  "shippingDate" : "shippingDate",
  "WayBill" : {
    "destinationAddress" : "destinationAddress",
    "destinationRole" : "destinationRole",
    "originAddress" : "originAddress",
    "origin" : "origin",
    "destination" : "destination",
    "logistics" : "logistics",
    "originRole" : "originRole"
  },
  "RetailQuantity" : 0,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API for creating new shipment
 *
 * body Body_2  (optional)
 * returns inline_response_200_5
 **/
exports.v12ColdchainVaccineboxShipmentPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccineName" : "vaccineName",
  "wayBill" : {
    "destinationAddress" : "destinationAddress",
    "destinationRole" : "destinationRole",
    "originAddress" : "originAddress",
    "origin" : "origin",
    "destination" : "destination",
    "logistics" : "logistics",
    "originRole" : "originRole"
  },
  "quantity" : "quantity",
  "insuredValue" : 0,
  "shipmentTrackerEvent" : [ {
    "eventDesc" : "eventDesc",
    "eventOwner" : "eventOwner",
    "sensorCondition" : "sensorCondition",
    "eventType" : "eventType",
    "eventRole" : "eventRole",
    "eventDate" : "eventDate"
  }, {
    "eventDesc" : "eventDesc",
    "eventOwner" : "eventOwner",
    "sensorCondition" : "sensorCondition",
    "eventType" : "eventType",
    "eventRole" : "eventRole",
    "eventDate" : "eventDate"
  } ],
  "batchId" : "batchId",
  "currentGeoLocation" : {
    "xaxis" : 6.027456183070403,
    "latitude" : "latitude",
    "location" : "location",
    "yaxis" : 1.4658129805029452,
    "longitude" : "longitude"
  },
  "manufacturer" : "manufacturer",
  "policyId" : "policyId",
  "shipmentId" : "shipmentId",
  "insurer" : "insurer",
  "currentOwner" : "currentOwner",
  "currentRole" : "currentRole",
  "temperatureExcursion" : 5,
  "status" : "status",
  "humidityRangeViolation" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API returns details of a specified shipment
 *
 * returns inline_response_200_7
 **/
exports.v12ColdchainVaccineboxShipmentS_22GET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccineName" : "vaccineName",
  "wayBill" : {
    "destinationAddress" : "destinationAddress",
    "destinationRole" : "destinationRole",
    "originAddress" : "originAddress",
    "origin" : "origin",
    "destination" : "destination",
    "logistics" : "logistics",
    "originRole" : "originRole"
  },
  "quantity" : "quantity",
  "shippingDate" : "shippingDate",
  "insuredValue" : 0,
  "shipmentTrackerEvents" : [ {
    "eventDesc" : "eventDesc",
    "eventOwner" : "eventOwner",
    "sensorCondition" : "sensorCondition",
    "eventType" : "eventType",
    "eventRole" : "eventRole",
    "eventDate" : "eventDate"
  }, {
    "eventDesc" : "eventDesc",
    "eventOwner" : "eventOwner",
    "sensorCondition" : "sensorCondition",
    "eventType" : "eventType",
    "eventRole" : "eventRole",
    "eventDate" : "eventDate"
  } ],
  "claimId" : "claimId",
  "batchId" : "batchId",
  "currentGeoLocation" : {
    "xaxis" : 6.027456183070403,
    "latitude" : "latitude",
    "location" : "location",
    "yaxis" : 1.4658129805029452,
    "longitude" : "longitude"
  },
  "manufacturer" : "manufacturer",
  "claimRequestDate" : "claimRequestDate",
  "policyId" : "policyId",
  "shipmentId" : "shipmentId",
  "insurer" : "insurer",
  "currentOwner" : "currentOwner",
  "currentRole" : "currentRole",
  "temperatureExcursion" : 5,
  "claimStatus" : "claimStatus",
  "humidityRangeViolation" : 5,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API used to send simulated sensor data
 *
 * body Body_4  (optional)
 * returns inline_response_200_6
 **/
exports.v12ColdchainVaccineboxSimulateSensorDataPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "shipmentId" : "shipmentId",
  "response" : 0,
  "deviceId" : "deviceId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

