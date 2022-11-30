import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<p className="suptitle suptitle-light">managed it services</p>
			<h2
				className="suptitle suptitle-light suptitle-hero"
				style={{ fontWeight: "bold" }}
			>
				Global Managed <br /> IT Services
			</h2>
			<a href="" className="btn">
				Get Started
			</a>
		</div>
	);
};

export default Header;
