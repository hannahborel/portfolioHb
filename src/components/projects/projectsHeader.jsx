import "./projectsHeader.scss";

export default function projectHeader(props) {
	let d = props.headerData;
	console.log(d);
	return (
		<div className="header">
			<div className="header-content">
				<div className="sub-section left">
					<div className="row-first">
						<div className="item">
							<h2 className="title" id="year">
								Year
							</h2>
							<div className="text-content">{d.year}</div>
						</div>
						<div className="item" id="tools">
							<h2 className="title"> Tools</h2>
							<div className="icons">
								{d.icons.map((icon) => (
									<img src={icon} alt="" />
								))}
							</div>
						</div>
					</div>
					<div className="row-second">
						<div className="item" id="deliverables">
							<h2 className="title">Deliverables</h2>
							<div className="text-content">
								<ul>
									{d.deliverables.map((item) => (
										<li>{item}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="sub-section right" id="description">
					<h2 className="title">
						{d.title}
						<span>{d.tagline}</span>
					</h2>
					<p className="text-content">{d.description}</p>
					<div className="siteLink">
						<a href={d.link}> launch site</a>
						<img src="./assets/img/icons/arrow-gray.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
