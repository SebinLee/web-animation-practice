import "./staticStyle.css";
import "./animatedStyle.css";
import iPadImage from "./image/iPadPro.jpeg";

export default function IPadIntroduction() {
	return <IPadIntroductionAnimated />;
}

function IPadIntroductionStatic() {
	return (
		<div className="container">
			<img src={iPadImage} className="image" />
			<div className="overlay">
				<h1 className="heading">iPad Pro</h1>
				<h2 className="text">
					막강한 성능의
					<br />
					Apple M1 칩 탑재.
				</h2>
			</div>
		</div>
	);
}

function IPadIntroductionAnimated() {
	return (
		<div className="container">
			<img src={iPadImage} className="image zoomOut" />
			<div className="overlay zoomIn">
				<h1 className="heading">iPad Pro</h1>
				<h2 className="text">
					막강한 성능의
					<br />
					Apple M1 칩 탑재.
				</h2>
			</div>
		</div>
	);
}
