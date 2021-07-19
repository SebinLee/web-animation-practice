import "./staticStyle.css";
import iPadXDR from "./image/iPadXDR.jpeg";

export default function IPadXDR() {
	return (
		<div className="container">
			<h1 className="heading">
				XDR. 궁극의
				<br />
				Liquid Display.
			</h1>
			<img src={iPadXDR} className="image" />
		</div>
	);
}
