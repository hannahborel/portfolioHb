import React from "react";
import "./work.scss";
import { useState } from "react";

export default function Work() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const data = [
		{
			id: "1",
			circle: "bg-circle blue",
			titleFirst: "Fourth",
			titleSecond: "& Nomad",
			type: "Website",
			year: "2021",
			link: "#forth",
			img: "./assets/img/nomad-home.png",
		},
		{
			id: "1",
			circle: "bg-circle blue",
			titleFirst: "second",
			titleSecond: "slide",
			type: "Website",
			year: "2021",
			link: "#forth",
			img: "./assets/img/nomad-home.png",
		},
		{
			id: "1",
			circle: "bg-circle blue",
			titleFirst: "Fourth",
			titleSecond: "& Nomad",
			type: "Website",
			year: "2021",
			link: "#forth",
			img: "./assets/img/nomad-home.png",
		},
	];

	const handleClick = (way) => {
		way === "left"
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
			: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
	};

	return (
		<div className="work" id="work">
			<div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{data.map((d) => (
					<div className="container">
						<div className="item">
							<div className={d.circle}></div>
							<div className="left">
								<div className="title">
									<p class="first">{d.titleFirst}</p>
									<p class="second">{d.titleSecond}</p>
								</div>
								<div className="sub-title">
									<p className="type">{d.type}</p>
									<p className="year">{d.year}</p>
								</div>

								<a href={d.link} class="project-link">
									View Project
								</a>
							</div>
							<div className="right">
								<img src={d.img} alt="" className="project-img" />
							</div>
						</div>
					</div>
				))}
				;
			</div>
			<img
				className="arrow left"
				src="./assets/img/arrow-gray.png"
				alt=""
				onClick={() => handleClick("left")}
			/>
			<img
				className="arrow right"
				src="./assets/img/arrow-gray.png"
				alt=""
				onClick={() => handleClick()}
			/>
		</div>
	);
}
