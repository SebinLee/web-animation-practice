import "./staticStyle.css";
import iPadXDR from "./image/iPadXDR.jpeg";

export default function IPadXDR() {
	return <IPadXDRAnimated />;
}

function IPadXDRStatic() {
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

function IPadXDRAnimated() {
	return (
		<div className="in-animation-zoomIn">
			<div className="container">
				<img src={iPadXDR} className="image" />
				<div className="overlay">
					<h1 className="heading">XDR. 궁극의 Liquid Display.</h1>
				</div>
			</div>
		</div>
	);
}
