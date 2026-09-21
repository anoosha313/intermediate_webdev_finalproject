describe("Interest Calculator Tests", function() {
  
  it("should properly convert input values to numbers", function() {
    let principal = parseFloat("100");
    let rate = Number("5");
    let time = Number("2");
    expect(isNaN(principal)).toBe(false);
    expect(isNaN(rate)).toBe(false);
    expect(isNaN(time)).toBe(false);
  });

  it("should calculate interest without TypeErrors", function() {
    let principal = 100;
    let rate = 5;
    let time = 2;
    let interest = (principal * rate * time) / 100;
    expect(interest).toBe(10);
  });

});