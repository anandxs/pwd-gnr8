import { useEffect, useState } from "react";
import { api } from "../axios";
import SavePassword from "./SavePassword";

type response = {
	id: number;
	encrptedPassword: string;
};

function List() {
	const [data, setData] = useState([]);
	const [trigger, setTrigger] = useState(0);

	useEffect(() => {
		const controller = new AbortController();
		const p = api.get("/passwords", {
			signal: controller.signal,
		});

		p.then((response) => {
			setData(
				response?.data.map((p: response) => ({
					id: p.id,
					encrptedPassword: p.encrptedPassword,
				}))
			);
		}).catch((err) => {
			console.log(err);
		});

		return function () {
			controller.abort();
		};
	}, [trigger]);

	const handleDelete = async (passwordId: number) => {
		try {
			await api.delete(`/passwords?passwordId=${passwordId}`);
			setTrigger(trigger + 1);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="mt-5 sm:p-5 w-8/12 mx-auto">
			<div className="mb-5">
				<SavePassword trigger={trigger} setTrigger={setTrigger} />
			</div>
			<div>
				<h1 className="font-bold text-xl mb-5 text-teal-600">
					Saved Passwords
				</h1>

				<div className="overflow-x-auto">
					<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded">
						<thead className="bg-teal-600">
							<tr>
								<th className="whitespace-nowrap px-4 py-2 font-medium text-white">
									Password
								</th>
								<th className="whitespace-nowrap px-4 py-2 font-medium text-white"></th>
							</tr>
						</thead>

						<tbody className="text-center divide-y divide-gray-200">
							{data.map((p: response) => (
								<tr key={p.id}>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{p.encrptedPassword}
									</td>
									<td className="whitespace-nowrap px-4 py-2">
										<button
											onClick={() => handleDelete(p.id)}
											className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default List;
