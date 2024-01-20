import { ChangeEvent, useState } from "react";
import { generate } from "../Utils";

const minSize: number = 1;
const maxSize: number = 32;

function Display() {
	const [password, setPassword] = useState<string>("");
	const [size, setSize] = useState<number>(10);
	const [sizeError, setSizeError] = useState<null | string>(null);
	const [lowercase, setLowercase] = useState<boolean>(true);
	const [uppercase, setUppercase] = useState<boolean>(false);
	const [specialChar, setSpecialChar] = useState<boolean>(false);
	const [digits, setDigits] = useState<boolean>(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(password);
	};

	const handleGenerate = () => {
		if (!lowercase && !uppercase && !digits && !specialChar) setLowercase(true);
		setSizeError(null);
		if (isSizeValid() === false) return;
		setPassword(generate(size, digits, lowercase, uppercase, specialChar));
	};

	const changeSize = (event: ChangeEvent<HTMLInputElement>) => {
		setSize(Number(event.target.value));
	};

	const toggleLowercase = () => {
		setLowercase(!lowercase);
	};
	const toggleUppercase = () => {
		setUppercase(!uppercase);
	};
	const toggleDigits = () => {
		setDigits(!digits);
	};
	const toggleSpecialCharacters = () => {
		setSpecialChar(!specialChar);
	};

	const isSizeValid = (): boolean => {
		if (size < minSize || size > maxSize) {
			const message = `Password size should be between ${minSize} and ${maxSize}`;
			setSizeError(message);
			return false;
		}
		return true;
	};

	return (
		<div className="mt-5 sm:p-5 w-8/12 mx-auto">
			<div className="flex flex-col lg:flex-row gap-2">
				<label htmlFor="Search" className="sr-only">
					{" "}
					Generate Password{" "}
				</label>

				<input
					type="text"
					id="generated-password"
					placeholder="Generate Password..."
					className="w-full sm:w-2/3 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
					disabled
					value={password}
				/>

				<div className="flex flex-col sm:flex-row gap-2">
					<button
						onClick={handleGenerate}
						className="inline-block rounded border border-teal-600 bg-teal-600 hover:bg-teal-500 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-teal-400"
					>
						Generate
					</button>

					<button
						onClick={handleCopy}
						className="inline-block rounded border border-teal-600 px-12 py-3 text-sm font-medium text-teal-600 hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500 disabled:opacity-0"
						disabled={password === ""}
					>
						Copy
					</button>
				</div>
			</div>

			<form className="mt-5 flex flex-col gap-3 lg:flex-row lg:justify-between flex-wrap">
				<div className="flex flex-col gap-2 items-start w-full">
					<p className="text-red-600 text-xs">{sizeError}</p>
					<input
						type="number"
						id="size"
						className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
						placeholder="Enter password size"
						onChange={(event) => changeSize(event)}
						value={size}
					/>
				</div>

				<div className="flex gap-2 items-center">
					<input
						type="checkbox"
						id="lowercase"
						className="block"
						onChange={toggleLowercase}
						checked={lowercase}
					/>
					<label htmlFor="lowercase" className="text-white text-xs sm:text-lg">
						Contains lowercase alphabets
					</label>
				</div>

				<div className="flex gap-2 items-center">
					<input
						type="checkbox"
						id="uppercase"
						className="block"
						onChange={toggleUppercase}
						checked={uppercase}
					/>
					<label htmlFor="uppercase" className="text-white text-xs sm:text-lg">
						Contains uppercase alphabets
					</label>
				</div>

				<div className="flex gap-2 items-center">
					<input
						type="checkbox"
						id="digits"
						className="block"
						onChange={toggleDigits}
						checked={digits}
					/>
					<label htmlFor="digits" className="text-white text-xs sm:text-lg">
						Contains digits
					</label>
				</div>

				<div className="flex gap-2 items-center">
					<input
						type="checkbox"
						id="special"
						className="block"
						onChange={toggleSpecialCharacters}
						checked={specialChar}
					/>
					<label htmlFor="special" className="text-white text-xs sm:text-lg">
						Contains special characters
					</label>
				</div>
			</form>
		</div>
	);
}

export default Display;
