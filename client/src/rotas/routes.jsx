import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home/index.jsx";
import Login from "../pages/log-in/index.jsx";
import Signup from "../pages/sign-up/index.jsx";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/signup" element={<Signup/>}/>
				<Route path="/home" element={<Home/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter