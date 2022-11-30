import "./App.css";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import Section from "./components/section/Section";
import ServicePage from "./components/servicepage/ServicePage";
import Topbar from "./components/topbar/Topbar";

function App() {
	return (
		<div className="container">
			<ServicePage />
		</div>
	);
}

export default App;
