import { getFloorNumber } from "./getFloorNumber";

export function main() {
	const arg = parseInt(process.argv[2]);

	if (isNaN(arg) || arg < 0) {
		console.error("Invalid locker number!");
		process.exit(0);
	}

	console.log(`locker ${arg} is in the floor number ${getFloorNumber(arg)}.`);
	process.exit(0);
}

main();
