import "./Article.css";
import img from "../../assets/about-image-left.png";

const Article = () => {
	return (
		<article className="article article-2cols">
			<div className="article-col">
				<img src={img} alt="image" />
			</div>
			<div className="article-col article-col-center">
				<p className="suptitle">about our company</p>
				<h2 className="subtitle">We do design, code & develop.</h2>
				<p className="article-content">
					There are many variations of passages of Lorem Ipsum available but the
					majority have suffered
				</p>
				<a href="" className="btn">
					Read More
				</a>
			</div>
		</article>
	);
};

export default Article;
