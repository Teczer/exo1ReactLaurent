import "./Footer.css";
import Socialcomponent from "./socialcomponent/Socialcomponent";

const Footer = () => {
	return (
		<footer className="footer">
			<h2 className="footer-logo">agency</h2>
			<Socialcomponent />
			<p className="footer-links">
				<a href="/">Privacy</a>
				<a href="/">Support</a>
				<a href="/">Helpdesk</a>
				<a href="/">Faq</a>
			</p>
		</footer>
	);
};

export default Footer;
