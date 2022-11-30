import "./Section.css";
import img from "../../assets/features1.png";
import img1 from "../../assets/features2.png";
import img2 from "../../assets/features3.png";

const Section = () => {
	return (
		<section className="section section-content-center">
			<p className="suptitle">why choose us</p>
			<h2 className="subtitle">For over 12 years in the tech area.</h2>
			<p className="article-content text-center">
				There are many variations of passages of Lorem Ipsum available but the
				majority have suffered alteration
			</p>
			<div className="section-3cols">
				<article className="section-col section-col-red">
					<img src={img} alt="" />
					<h3 className="section-col-title">Dedicated IT Solution</h3>
				</article>
				<article className="section-col section-col-green">
					<img src={img1} alt="" />
					<h3 className="section-col-title">Expertise & Leadership</h3>
				</article>
				<article className="section-col section-col-gold">
					<img src={img2} alt="" />
					<h3 className="section-col-title">IT Industry Expertise</h3>
				</article>
			</div>
		</section>
	);
};

export default Section;
