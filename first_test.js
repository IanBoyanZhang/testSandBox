describe("Vehicle", function() {
  describe("constructor", function() {
    it("should have a default type", function() {
      var car = new Vehicle();
      expect(car.type).to.equal("car");
    });
  });
});

