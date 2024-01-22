import Display from "./components/Display";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<ToastContainer theme="colored" />
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Display />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/list" element={<List />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
