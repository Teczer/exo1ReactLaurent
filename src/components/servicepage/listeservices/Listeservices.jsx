import img1 from "/src/assets/service1.png";
import img2 from "/src/assets/service2.png";
import img3 from "/src/assets/service3.png";
import img4 from "/src/assets/service4.png";
import img5 from "/src/assets/service5.png";
import img6 from "/src/assets/service6.png";

const Listeservices = () => {
	const ListeServic = [
		{ src: img1, label: "Design" },
		{ src: img2, label: "Development" },
		{ src: img3, label: "Online Marketing" },
		{ src: img4, label: "Business" },
		{ src: img5, label: "Technology" },
		{ src: img6, label: "Content Strategy" },
	];

	return (
		<section class="section section-content-center">
			<p class="suptitle">our services</p>
			<h2 class="subtitle">We offer a wide variety of IT services</h2>
			<p class="article-content text-center">
				There are many variations of passages of Lorem Ipsum available but the
				majority have suffered alteration
			</p>
			<div class="grid-3cols">
				{ListeServic.map((value, index) => (
					<article class="article-service">
						<img src={value.src} alt="" />
						<h3 class="article-service-title">{value.label}</h3>
					</article>
				))}
			</div>
		</section>
	);
};

export default Listeservices;
