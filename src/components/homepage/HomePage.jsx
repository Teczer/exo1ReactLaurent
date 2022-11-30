import Article from "../article/Article";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../section/Section";
import Topbar from "../topbar/Topbar";

const HomePage = () => {
	const titre = "agency";
	return (
		<>
			<Topbar titre={titre} />
			<Header />
			<Article />
			<Section />
			<Footer />
		</>
	);
};

export default HomePage;
