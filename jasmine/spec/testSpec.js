
describe("check for £ and p", function(){
  it("checks the array for £ and p together", function(){
  	expect(checkforLandP('£234p')).toBe(23400);
  	expect(checkforLandP(234)).toBe(234);
  	expect(checkforLandP('asdfsdf')).toBe('asdfsdf');
  	// expect(checkforLandP('£asdfsdfp')).toThrow("Please enter a valid number");
  });
});
describe("checkforDot", function(){
	it("checks and array for a . in it", function(){
		expect(checkforDot(234342)).toBe(234342);
		expect(checkforDot(2.3)).toBe(230);
		expect(checkforDot("asdfsadf")).toBeNaN();
	})
})

describe("checkforNaN", function(){
	it("checks for a valid input", function(){
		expect(checkforNaN(23234)).toBeFalsy();
		expect(checkforNaN("23234")).toBeFalsy();
		expect(checkforNaN("asasdf")).toBeTruthy();
	})
})

describe("checkUndefined", function(){
	it("checks for empty values", function(){
		// expect(checkUndefined()).toThrow();
		expect(checkUndefined(9)).toBe(9);
		expect(checkUndefined("hello")).toBe("hello");
	})
})
describe("check for £ and p", function(){
  it("checks the array for £ or p together", function(){
  	expect(checkforLorP('£234')).toBe(23400);
  	expect(checkforLorP('234p')).toBe(234);
  	expect(checkforLorP('asdfsdf')).toBe('asdfsdf');
  	// expect(checkforLorP('£asdfsdfp')).toBeUndefined();
  });
});
describe("makeChange", function(){
	it("break a quantity into coins", function(){
		expect(makeChange(2000)).toEqual(jasmine.objectContaining({
			TwoPound: 10
		}));
		expect(makeChange(234)).toEqual(jasmine.objectContaining({
			TwoPound: 1,
			twenty: 1, 
			twoPence: 7
		}));
		expect(makeChange(393)).toEqual(Object({
			TwoPound: 1,
			pound: 1,
			fiftyPence: 1,
			twenty: 2, 
			twoPence: 1,
			penny: 1
		}));
		expect(makeChange(393)).not.toEqual(Object({
			TwoPound: 1,
			pound: 1,
			fiftyPence: 1,
			twenty: 8, 
			twoPence: 1,
			penny: 1
		}));
	})
})