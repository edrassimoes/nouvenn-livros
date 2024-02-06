import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />}/>
				<Route path="/home" element={<Home />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter