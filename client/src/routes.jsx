import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";

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