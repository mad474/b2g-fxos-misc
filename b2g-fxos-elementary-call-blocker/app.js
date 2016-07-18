/*
20151109-mad474
*/


// Telephony object
var tel = navigator.mozTelephony;

// Receive a call
tel.onincoming = function (e) {
  var incomingCall = e.call;
  // Get id/number of the incoming call
  // alert(incomingCall.id);
  console.log(incomingCall.id);
  incomingCall.hangUp();
  alert(incomingCall.id.number)
};
