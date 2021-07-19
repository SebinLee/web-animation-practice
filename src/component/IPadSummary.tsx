import iPadSumamry from "./image/iPadSummary.png";
import "./staticStyle.css";

export default function IPadSumamry() {
	return (
		<div className="container">
			<h2 className="headingNoMargin">M1</h2>
			<h2 className="headingNoMargin">XDR</h2>
			<h2 className="headingNoMargin">5G</h2>
			<h2 className="headingNoMargin">끝판왕</h2>
			<img src={iPadSumamry} className="image" />
		</div>
	);
}
