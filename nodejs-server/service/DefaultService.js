'use strict';


/**
 * Auto generated using Swagger Inspector
 *
 * returns Object
 **/
exports.v6ColdchainInsuranceClaimShipmentDataGET = function() {
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
 * Auto generated using Swagger Inspector
 *
 * body Body_2  (optional)
 * returns inline_response_200_3
 **/
exports.v6ColdchainVaccineboxClaimRequestPOST = function(body) {
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
 * Auto generated using Swagger Inspector
 *
 * body Body_3  (optional)
 * returns inline_response_201
 **/
exports.v6ColdchainVaccineboxDeliverShipmentPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "response",
  "currentRole" : "currentRole",
  "sku" : "sku",
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
 * Auto generated using Swagger Inspector
 *
 * returns Object
 **/
exports.v6ColdchainVaccineboxEventsShipmentMovements99GET = function() {
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
 * Auto generated using Swagger Inspector
 *
 * returns Object
 **/
exports.v6ColdchainVaccineboxHistorySensorData99GET = function() {
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
 * Auto generated using Swagger Inspector
 *
 * body Body_4  (optional)
 * returns inline_response_201
 **/
exports.v6ColdchainVaccineboxReceiveShipmentPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "response",
  "currentRole" : "currentRole",
  "sku" : "sku",
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
 * Auto generated using Swagger Inspector
 *
 * returns Object
 **/
exports.v6ColdchainVaccineboxReportAuditTrail99GET = function() {
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
 * Auto generated using Swagger Inspector
 *
 * body Body_1  (optional)
 * returns inline_response_200_2
 **/
exports.v6ColdchainVaccineboxSensorDataPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "response",
  "sku" : "sku",
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
 * Auto generated using Swagger Inspector
 *
 * returns inline_response_200_1
 **/
exports.v6ColdchainVaccineboxShipment99GET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccineName" : "vaccineName",
  "quantity" : "quantity",
  "destinationAddress" : "destinationAddress",
  "claimId" : "claimId",
  "riskRating" : 0,
  "manufacturer" : "manufacturer",
  "claimRequestDate" : "claimRequestDate",
  "policyId" : "policyId",
  "insurer" : "insurer",
  "currentOwner" : "currentOwner",
  "currentRole" : "currentRole",
  "sku" : "sku",
  "claimStatus" : "claimStatus",
  "events" : [ {
    "eventDesc" : "eventDesc",
    "eventOwner" : "eventOwner",
    "sensorCondition" : "sensorCondition",
    "eventType" : "eventType",
    "nextRole" : "nextRole",
    "eventRole" : "eventRole",
    "eventDate" : "eventDate"
  }, {
    "eventDesc" : "eventDesc",
    "eventOwner" : "eventOwner",
    "sensorCondition" : "sensorCondition",
    "eventType" : "eventType",
    "nextRole" : "nextRole",
    "eventRole" : "eventRole",
    "eventDate" : "eventDate"
  } ],
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
 * Auto generated using Swagger Inspector
 *
 * returns Object
 **/
exports.v6ColdchainVaccineboxShipmentByPartyPfizerGET = function() {
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
 * Auto generated using Swagger Inspector
 *
 * body Body  (optional)
 * returns inline_response_200
 **/
exports.v6ColdchainVaccineboxShipmentPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccineName" : "vaccineName",
  "quantity" : "quantity",
  "destinationAddress" : "destinationAddress",
  "policyId" : "policyId",
  "insurer" : "insurer",
  "currentRole" : "currentRole",
  "sku" : "sku",
  "event" : [ {
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
  "riskRating" : 0,
  "manufacturer" : "manufacturer",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

