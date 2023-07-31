export function getFloorNumber(locker_number: number): number {
	/** find floor section. each section = each 3 floor = 18 locker */
	let section = Math.ceil(locker_number / 18);

	/** find remainder from locker_number mod 18 */
	let remainder = locker_number % 18;

	/**
	 * find in which part the of the section the locker number is:
	 * part 1 = 0-5 locker = 1st floor of the section
	 * part 2 = 6-11 locker = 2nd floor of the section
	 * part 3 = 12-18 locker = 3rd floor of the section
	 */
	let part = 0;
	if (remainder <= 18) {
		part = 3;
		if (remainder <= 11) {
			part = 2;
			if (remainder <= 5) {
				part = 1;
			}
		}
	}

	/** because each section = 3 floor, floor_number is */
	let floor_number = (section - 1) * 3 + part;

	return floor_number;
}
