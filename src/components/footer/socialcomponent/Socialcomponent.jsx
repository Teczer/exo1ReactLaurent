import img from "/src/assets/facebook.png";
import img1 from "/src/assets/pinterest.png";
import img2 from "/src/assets/instagram.png";
import img3 from "/src/assets/twitter.png";
import img4 from "/src/assets/youtube.png";
import img5 from "/src/assets/snapchat.png";

const Socialcomponent = () => {
	const ListIconRs = [
		{ src: img },
		{ src: img1 },
		{ src: img2 },
		{ src: img3 },
		{ src: img4 },
		{ src: img5 },
	];

	return (
		<>
			<p className="footer-socials">
				{ListIconRs.map((value, index) => (
					<a href="/" target="_blank" rel="noreferrer">
						<img src={value.src} alt="" />
					</a>
				))}
			</p>
		</>
	);
};

export default Socialcomponent;
