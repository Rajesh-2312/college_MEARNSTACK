import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Contents from "./components/Contents";
import Events from "./components/Events";
import Learn from "./components/Learn";
import Sac from "./components/Sac";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{user && <Route path="/Sac" exact element={<Sac />} />}
			{user && <Route path="/Contents" exact element={<Contents />} />}
			{user && <Route path="/Events" exact element={<Events />} />}
			{user &&<Route path="/Learn" exact element={<Learn />} />}
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
