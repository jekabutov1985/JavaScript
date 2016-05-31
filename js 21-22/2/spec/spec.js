describe("Testing gcd", function() {
  it("Test 1", function() {
    var result;

    var result = gcd(48,144);

    expect(result).toBe(48);

  });
  it("Test 2", function() {
    var result;

    var result = gcd(1,0);

    expect(result).toBe(1);

  });
  it("Test 3", function() {
    var result;

    var result = gcd(1000000007,50);

    expect(result).toBe(1);

  });
  it("Test 4", function() {
    var result;

    var result = gcd(89,-89);

    expect(result).toBe(-89);

  });
});
describe("Testing factorization", function() {
  it("Test 1", function() {
    var result;

    var result = factorization(20);

    expect(result[0]).toBe(1);

  });
  it("Test 2", function() {
    var result;

    var result = factorization(50);
    console.log(result);

    expect(result.length).toBeGreaterThan(1);

  });



});
describe("Testing sort", function() {
  it("Test 1", function() {
    var result;

    var arr = [1,6,9,7,0,5];
    var result = someSort(arr);

    expect(result[0]).toBeLessThan(result[1]);

  });
  it("Test 2", function() {
    var result;

    var arr = [1,6,9,7,0,5];
    arr.sort();

    var result = someSort(arr);

    expect(result[1]).toEqual(arr[1]);

  });

});
