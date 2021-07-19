import "./staticStyle.css";
import iPadChip from "./image/iPadChip.jpeg";

export default function IPadChip() {
	return (
		<div className="container">
			<h1 className="heading">상식을 뛰어넘는 성능.</h1>
			<img src={iPadChip} className="image" />
		</div>
	);
}
