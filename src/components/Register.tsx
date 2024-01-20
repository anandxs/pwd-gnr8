import { useForm } from "react-hook-form";

function Register() {
	const form = useForm();
	const { handleSubmit, register, formState, getValues } = form;
	const { errors } = formState;

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Register Account
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={handleSubmit(onSubmit)}
							noValidate
						>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<p className="text-red-600 text-xs mb-3">
									{errors?.email?.message?.toString()}
								</p>
								<input
									type="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Enter email"
									{...register("email", {
										required: "Email is a required field.",
										pattern: {
											value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
											message: "Enter a valid email address",
										},
									})}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<p className="text-red-600 text-xs mb-3">
									{errors?.password?.message?.toString()}
								</p>
								<input
									type="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									{...register("password", {
										required: "Password is a required field.",
									})}
								/>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<p className="text-red-600 text-xs mb-3">
									{errors?.confirmPassword?.message?.toString()}
								</p>
								<input
									type="password"
									id="confirm-password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									{...register("confirmPassword", {
										validate: (val): boolean | string => {
											return (
												val == getValues("password") ||
												"Password and confimation password should match"
											);
										},
									})}
								/>
							</div>

							<button
								type="submit"
								className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
							>
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Register;
