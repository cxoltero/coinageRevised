describe("sum", function() {
  it("adds two numbers", function() {
    expect(sum(2, 3)).toEqual(5);
  });
});
describe("check for £ and p", function(){
  it("checks the array for £ and p together", function(){
  	expect(checkforLandP('£234p')).toBe(23400);
  	expect(checkforLandP(234)).toBe(234);
  	expect(checkforLandP('asdfsdf')).toBe('asdfsdf');
  });
});
describe("checkforDot", function(){
	it("checks and array for a . in it", function(){
		expect(checkforDot(234342)).toBe('234342');
		expect(checkforDot(2.3)).toBe(230);
		expect(checkforDot("asdfsadf")).toBe("asdfsadf");
	})
})

describe("checkforNaN", function(){
	it("checks for a valid input", function(){
		expect(checkforNaN(23234)).not.toBeNaN();
		expect(checkforNaN("asasdf")).toBeUndefined();
	})
})