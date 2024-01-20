function Display() {
	return (
		<div className="mt-5 sm:p-5 w-8/12 mx-auto">
			<div className="flex flex-col lg:flex-row gap-2">
				<label htmlFor="Search" className="sr-only">
					{" "}
					Generate Password{" "}
				</label>

				<input
					type="text"
					id="Search"
					placeholder="Generate Password..."
					className="w-full sm:w-2/3 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
				/>

				<div className="flex flex-col sm:flex-row gap-2">
					<button className="inline-block rounded border border-teal-600 bg-teal-600 hover:bg-teal-500 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-teal-400">
						Generate
					</button>

					<button className="inline-block rounded border border-teal-600 px-12 py-3 text-sm font-medium text-teal-600 hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500">
						Copy
					</button>
				</div>
			</div>

			<form className="mt-5 flex flex-col gap-3 lg:flex-row lg:justify-between flex-wrap">
				<div className="flex gap-2 items-center">
					<input type="checkbox" id="lowercase" className="block" />
					<label htmlFor="lowercase" className="text-white text-xs sm:text-lg">
						Contains lowercase alphabets
					</label>
				</div>

				<div className="flex gap-2 items-center">
					<input type="checkbox" id="uppercase" className="block" />
					<label htmlFor="uppercase" className="text-white text-xs sm:text-lg">
						Contains uppercase alphabets
					</label>
				</div>

				<div className="flex gap-2 items-center">
					<input type="checkbox" id="digits" className="block" />
					<label htmlFor="digits" className="text-white text-xs sm:text-lg">
						Contains digits
					</label>
				</div>

				<div className="flex gap-2 items-center">
					<input type="checkbox" id="special" className="block" />
					<label htmlFor="special" className="text-white text-xs sm:text-lg">
						Contains digits
					</label>
				</div>
			</form>
		</div>
	);
}

export default Display;
