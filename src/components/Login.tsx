import { useForm } from "react-hook-form";
import { api } from "../axios";
import { useNavigate } from "react-router-dom";

function Login() {
	const form = useForm();
	const { handleSubmit, register, formState } = form;
	const { errors } = formState;
	const navigate = useNavigate();

	const onSubmit = async (formValues: any) => {
		try {
			const response = await api.post("/login?useCookies=false", {
				email: formValues.email,
				password: formValues.password,
			});
			console.log(response);
			localStorage.setItem(
				"auth",
				JSON.stringify({
					auth: response.data.accessToken,
					refresh: response.data.refreshToken,
				})
			);
			navigate("/list");
		} catch (err) {
			console.log(err?.response);
		}
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in to your account
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
							<button
								type="submit"
								className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
