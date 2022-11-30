import Soustitre from "./Soustitre";
import "./Topbar.css";

const Topbar = ({ titre, color }) => {
	const sousTitre = [
		{ soustitre: "Home" },
		{ soustitre: "Services" },
		{ soustitre: "Projects" },
		{ soustitre: "Blog" },
		{ soustitre: "Contact" },
	];
	return (
		<div className="top">
			<h1>
				<a href="" style={{ color: color }}>
					{titre}
				</a>
			</h1>
			<nav>
				{sousTitre.map((value, index) => (
					<Soustitre label={value.soustitre} />
				))}
			</nav>
		</div>
	);
};

export default Topbar;
