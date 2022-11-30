import Article from "../article/Article";
import Footer from "../footer/Footer";
import Topbar from "../topbar/Topbar";
import Listemarque from "./listemarque/Listemarque";
import Listeservices from "./listeservices/Listeservices";

const ServicePage = () => {
	return (
		<>
			<Topbar titre="agency" color="red" />
			<Article />
			<Listemarque />
			<Listeservices />
			<Footer />
		</>
	);
};

export default ServicePage;
