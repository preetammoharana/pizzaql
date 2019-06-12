import React from 'react';
import {format, addHours} from 'date-fns';

// Add specific amount of hours to the current date and format it
const getTime = (number, isHalfPast) => {
	const formatted = addHours(new Date(), number);
	const date = format(formatted, 'HH');

	return isHalfPast ? `${date}:30` : `${date}:00`;
};

// Hours lock: Show available delivery time based on the current hour
const hoursSelect = () => {
	// Change to true to enable
	const hoursLock = false;

	const hours = new Date().getHours();

	if (hoursLock && hours === 14) {
		return (
			<>
				<option value="">Select</option>
				<option value="ASAP">As fast as possible</option>
				<option>{getTime(3)}</option>
				<option>{getTime(3, true)}</option>
				<option>{getTime(4)}</option>
				<option>{getTime(4, true)}</option>
				<option>{getTime(5)}</option>
			</>
		);
	}

	if (hoursLock && hours === 15) {
		return (
			<>
				<option value="">Select</option>
				<option value="ASAP">As fast as possible</option>
				<option>{getTime(3)}</option>
				<option>{getTime(3, true)}</option>
				<option>{getTime(4)}</option>
			</>
		);
	}

	if (hoursLock && hours === 16) {
		return (
			<>
				<option value="">Select</option>
				<option value="ASAP">As fast as possible</option>
				<option>{getTime(3)}</option>
			</>
		);
	}

	if (hoursLock && (hours === 18 || hours === 17)) {
		return (
			<>
				<option value="">Select</option>
				<option value="ASAP">As fast as possible</option>
			</>
		);
	}

	if (hoursLock && hours <= 19) {
		return <option disabled value="">Ordering disabled</option>;
	}

	return (
		<>
			<option value="">Select</option>
			<option value="ASAP">As fast as possible</option>
			<option>{getTime(3)}</option>
			<option>{getTime(3, true)}</option>
			<option>{getTime(4)}</option>
			<option>{getTime(4, true)}</option>
			<option>{getTime(5)}</option>
			<option>{getTime(5, true)}</option>
		</>
	);
};

export default hoursSelect;
