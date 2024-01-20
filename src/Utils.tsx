const generate = (
	size: number,
	digits: boolean,
	lowercase: boolean,
	uppercase: boolean,
	specialCharacters: boolean
) => {
	const charSets: string[] = [
		"abcdefghijklmnopqrstuvwxyz",
		"0123456789",
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		"!@#$%^&*()",
	];
	let chars: string = "";

	if (lowercase) chars += charSets[0];
	if (digits) chars += charSets[1];
	if (uppercase) chars += charSets[2];
	if (specialCharacters) chars += charSets[3];

	const passwordLength: number = size;
	let password: string = "";

	for (var i = 1; i <= passwordLength; i++) {
		const randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber + 1);
	}
	return password;
};

export { generate };
