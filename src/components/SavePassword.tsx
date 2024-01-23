import { useForm } from "react-hook-form";
import { api } from "../axios";

type triggerType = {
	trigger: number;
	setTrigger: Function;
};

function SavePassword({ trigger, setTrigger }: triggerType) {
	const form = useForm();
	const { register, handleSubmit, formState, setValue } = form;
	const { errors } = formState;

	const onSubmit = async (formValues: any) => {
		try {
			await api.post(`/passwords?encryptedPassword=${formValues?.password}`);
			setValue("password", null);
			setTrigger(trigger + 1);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<h1 className="font-bold text-xl mb-5 text-teal-600">Save A Password</h1>
			<form
				className="flex flex-wrap gap-3"
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<div className="w-full">
					<p className="text-red-600 text-xs mb-2">
						{errors?.password?.message?.toString()}
					</p>
					<input
						type="text"
						id="password"
						placeholder="Password"
						className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
						{...register("password", {
							required: "Password is a required field.",
						})}
					/>
				</div>
				<button
					type="submit"
					className="w-full inline-block rounded border border-teal-600 bg-teal-600 hover:bg-teal-500 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-teal-400"
				>
					Save
				</button>
			</form>
		</>
	);
}

export default SavePassword;
