const Listemarque = () => {
	const listMarq = [
		{ src: "/src/assets/client1.png" },
		{ src: "/src/assets/client2.png" },
		{ src: "/src/assets/client3.png" },
		{ src: "/src/assets/client4.png" },
	];

	return (
		<div class="clients">
			{listMarq.map((value, index) => (
				<a href="">
					<img src={value.src} alt="" />
				</a>
			))}
		</div>
	);
};

export default Listemarque;
