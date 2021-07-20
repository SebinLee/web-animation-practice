import "./staticStyle.css";
import "./animatedStyle.css";
import iPadChip from "./image/iPadChip.jpeg";

export default function IPadChip() {
	return <IPadChipAnimated />;
}

function IPadChipStatic() {
	return (
		<div className="container">
			<h1 className="heading">상식을 뛰어넘는 성능.</h1>
			<img src={iPadChip} className="image" />
		</div>
	);
}

function IPadChipAnimated() {
	return (
		<div className="in-animation-zoomIn">
			<div className="container">
				<img src={iPadChip} className="image" />
				<div className="overlay">
					<h1 className="heading">상식을 뛰어넘는 성능.</h1>
				</div>
			</div>
		</div>
	);
}
