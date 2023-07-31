import { expect, test } from "vitest";
import { getFloorNumber } from "./getFloorNumber";

test("Test get floor number function", () => {
	const cases = [2, 6, 13, 23, 32];

	const expectedResult = [1, 2, 3, 4, 6];

	for (let i = 0; i < cases.length; i++) {
		expect(getFloorNumber(cases[i])).toEqual(expectedResult[i]);
	}
});
