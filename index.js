(function(exports) {
  "use strict";
  exports.expect = chai.expect;

  function Vehicle(type) {
    this.type = type || "car";
  }
  
  Vehicle.prototype = {
    run: function run(speed) {
      if (!speed) {
        throw new Error("No speed provided!");
      }
      return this.type + "is running at" + speed + "mph";
    }
  };
  
  exports.Vehicle = Vehicle;
})(this);
