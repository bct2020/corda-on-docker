'use strict';


/**
 * Auto generated using Swagger Inspector
 *
 * returns Object
 **/
exports.v7ColdchainInsuranceClaimShipmentDataGET = function() {
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
 * returns inline_response_200_3
 **/
exports.v7ColdchainVaccineboxClaimRequestPOST = function(body) {
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
 * body Body_2  (optional)
 * returns inline_response_201
 **/
exports.v7ColdchainVaccineboxDeliverShipmentPUT = function(body) {
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
 * Auto generated using Swagger Inspector
 *
 * body Body_3  (optional)
 * returns inline_response_201
 **/
exports.v7ColdchainVaccineboxReceiveShipmentPUT = function(body) {
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
 * Auto generated using Swagger Inspector
 *
 * returns Object
 **/
exports.v7ColdchainVaccineboxRecentShipmentsGET = function() {
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
exports.v7ColdchainVaccineboxReportSensorDataAuditTrailPF_001_2020GET = function() {
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
exports.v7ColdchainVaccineboxShipmentByPartyPfizerGET = function() {
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
 * returns inline_response_200
 **/
exports.v7ColdchainVaccineboxShipmentPF_001_2020GET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccineName" : "vaccineName",
  "wayBill" : {
    "shipper" : "shipper",
    "logistics" : "logistics",
    "wayBillNo" : "wayBillNo",
    "wholesaler" : "wholesaler"
  },
  "quantity" : "quantity",
  "destinationAddress" : "destinationAddress",
  "shippingDate" : "shippingDate",
  "insuredValue" : 0,
  "shipmentTrackerEvents" : [ {
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
  "claimId" : "claimId",
  "batchId" : "batchId",
  "deviceId" : "deviceId",
  "riskRating" : 6,
  "manufacturer" : "manufacturer",
  "claimRequestDate" : "claimRequestDate",
  "policyId" : "policyId",
  "shipmentId" : "shipmentId",
  "insurer" : "insurer",
  "currentOwner" : "currentOwner",
  "currentRole" : "currentRole",
  "claimStatus" : "claimStatus",
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
 * body Body_1  (optional)
 * returns inline_response_200_2
 **/
exports.v7ColdchainVaccineboxShipmentPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccineName" : "vaccineName",
  "wayBill" : {
    "shipper" : "shipper",
    "logistics" : "logistics",
    "wayBillNo" : "wayBillNo",
    "wholesaler" : "wholesaler"
  },
  "quantity" : "quantity",
  "destinationAddress" : "destinationAddress",
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
  "riskRating" : 0,
  "manufacturer" : "manufacturer",
  "policyId" : "policyId",
  "shipmentId" : "shipmentId",
  "insurer" : "insurer",
  "currentOwner" : "currentOwner",
  "currentRole" : "currentRole",
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
 * body Body  (optional)
 * returns inline_response_200_1
 **/
exports.v7ColdchainVaccineboxSimulateSensorDataPUT = function(body) {
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

