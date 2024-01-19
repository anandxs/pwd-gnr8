function Display() {
	return (
		<div className="mt-5 sm:p-5 flex flex-col sm:flex-row gap-2 w-8/12 mx-auto">
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
				<button className="inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-teal-500">
					Generate
				</button>

				<button className="inline-block rounded border border-teal-600 px-12 py-3 text-sm font-medium text-teal-600 hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500">
					Copy
				</button>
			</div>
		</div>
	);
}

export default Display;
